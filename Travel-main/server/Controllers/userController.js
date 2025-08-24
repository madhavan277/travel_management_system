const User = require("../Database/Models/userSchema");
const { saveToCookie } = require("../Utils/saveToCookie");
const { sendEmail } = require("../Utils/sendMail");
const crypto = require("crypto");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const { sendMessage } = require("../Utils/sendMessage");

exports.signup = catchAsyncErrors(async (req, res) => {
  const { name, email, password, phone } = req.body;
  let newUser;
  if (!password || !name) {
    return res.status(400).json({ error: "Enter name and password." });
  }
  if (!phone && !email) {
    return res.status(400).json({ error: "Enter Phone/email" });
  }
  if (email) {
    if (await User.findOne({ email })) {
      return res
        .status(400)
        .json({ error: "User with this email already exists." });
    }
    newUser = await User.create({
      name,
      email,
      password,
      profilePhoto: {
        public_id: "empty",
        url: "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg",
      },
    });
  }
  if (phone) {
    if (await User.findOne({ phone })) {
      return res
        .status(400)
        .json({ error: "User with this phone number already exists." });
    }
    newUser = await User.create({
      name,
      phone,
      password,
      profilePhoto: {
        public_id: "empty",
        url: "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg",
      },
    });
  }
  if (!newUser) {
    return res.status(400).json({ error: "Error in creating new user" });
  }

  saveToCookie(newUser, 201, res);

  if (email) {
    const MESSAGE = `Hello ${name}👋,
       Welcome to Voyage. We’re thrilled to see you here!.\n
       We're a global lifestyle brand with a mission to create simple, beautiful products that help the world relax. \n
       You're now on the list and will be the first to know about our latest styles, exclusive offers, and much more.\n
       Take care!\n
        Voyage Team
       `;

    const html = `
    <h1>Hello ${name}👤,</h1>
    <br>
    <h3>Welcome to Voyage. We’re thrilled to see you here! </h3>
    <br>
    <p>We're a global lifestyle brand with a mission to create simple, beautiful products that help the world relax.</p>
    <br>
    <p>You're now on the list and will be the first to know about our latest styles, exclusive offers, and much more.</p>
    <br>
    <b>
        Take care!
        <br>
        The Voyage Team
    </b>`;

    await sendEmail({
      email,
      subject: "Welcome to Shop Buddy",
      message: MESSAGE,
      html,
    });
  }
});

exports.login = catchAsyncErrors(async (req, res) => {
  const { email, password, phone } = req.body;
  if ((!email && !phone) || !password) {
    return res.status(400).json({ error: "Enter email/mobile and password." });
  }
  let UserFound;
  if (email) {
    UserFound = await User.findOne({ email });
    if (!UserFound) {
      return res
        .status(400)
        .json({ error: "Invalid email/phone or password." });
    }
  } else if (phone) {
    UserFound = await User.findOne({ phone });
    if (!UserFound) {
      return res
        .status(400)
        .json({ error: "Invalid email/phone or password." });
    }
  }
  const matchPassword = await UserFound.matchPassword(password);
  if (!matchPassword) {
    return res.status(400).json({ error: "Invalid email/phone or password." });
  }

  saveToCookie(UserFound, 200, res);
});

exports.logout = catchAsyncErrors(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  return res.status(200).json({ message: "Successfully logged out!" });
});

exports.forgotPassword = catchAsyncErrors(async (req, res) => {
  const { email, phone } = req.body;
  if (!email && !phone)
    return res.status(400).json({ error: "Please enter email/phone" });
  if (email) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    // Generating password reset token
    const resetToken = await user.ResetPassword();
    //Saving user deatils with password token and password-expire time
    await user.save({ validateBeforeSave: false });

    try {
      const URL = `${
        process.env.FRONTEND_URL || "http://localhost:3000"
      }/password/reset/${resetToken}`;

      //URL to reset password
      // const URL = `${req.protocol}://${req.get(
      //   "host"
      // )}/api/password/reset/${resetToken}`;
      const MESSAGE = `Your password reset token is \n\n${URL} \n\nPlease ignore if you have not requested this email.`;

      await sendEmail({
        email: user.email,
        subject: "Voyage password recovery",
        message: MESSAGE,
      });

      return res.status(200).json({ message: `Email sent to ${user.email}` });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.passwordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({ error: err.message });
    }
  }
  if (phone) {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    const OTP = await user.ResetPassword(phone);
    await user.save({ validateBeforeSave: false });
    const MESSAGE = `Voyage - Your OTP to reset password: ${OTP}`;
    const messageSent = await sendMessage(MESSAGE, phone);
    if (!messageSent) {
      return res.status(500).json({ error: "Error sending message!" });
    }
    return res
      .status(200)
      .json({
        success: true,
        phoneMessage: "OTP sent successfully",
        messageSent,
      });
  }
});

exports.verifyOTP = catchAsyncErrors(async (req, res) => {
  const { otp } = req.body;
  if (!otp) return res.status(400).json({ error: "Please enter OTP" });
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    passwordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ error: "OTP is invalid or expired" });
  }
  return res.status(200).json({ success: true, otp });
});

exports.resetPassword = catchAsyncErrors(async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    passwordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ error: "Token is invalid or expired" });
  }

  if (req.body.password != req.body.cpassword) {
    return res.status(400).json({ error: "Password doesn't match" });
  }

  if (req.body.password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password should be atleast 6 characters" });
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.passwordExpire = undefined;
  await user.save({ validateBeforeSave: false });
  saveToCookie(user, 200, res);
});

exports.getUserPhoto = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ success: true, photo: user.profilePhoto.url });
});

// USER FUNCTIONALITIES

//Get user details
exports.getUserDetails = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, user });
});

//Update user password
exports.updatePassword = catchAsyncErrors(async (req, res) => {
  const { oldPass, newPass, confirmPass } = req.body;
  if (!oldPass || !newPass || !confirmPass) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  const user = await User.findById(req.user.id);
  const isPasswordMatched = await user.matchPassword(oldPass);
  if (!isPasswordMatched) {
    return res.status(400).json({ error: "Old password is incorrect" });
  }
  if (newPass.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be atleast 6 characters" });
  }
  if (newPass !== confirmPass) {
    return res.status(400).json({ error: "Password doesn't match" });
  }
  user.password = newPass;
  await user.save({ validateBeforeSave: false });
  saveToCookie(user, 200, res);
});

//Update profile

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return next(new ErrorHandler(400, "Enter both email and name"));
  }
  let newData = { name, email };
  if (req.body.profilePhoto !== "") {
    const user = await User.findById(req.user.id);
    const image_id = user.profilePhoto.public_id;
    await cloudinary.v2.uploader.destroy(image_id);
    const myCloud = await cloudinary.v2.uploader.upload(req.body.profilePhoto, {
      folder: "E-commerce",
      width: 700,
      crop: "scale",
    });
    newData.profilePhoto = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { ...newData },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return res
    .status(200)
    .json({ message: "Profile updated successfully!", user: updatedUser });
});
