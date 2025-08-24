import React from "react";
import {
  BookNow,
  Contact,
  Gallery,
  Header,
  Packages,
  Reviews,
  Services,
} from "../components";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <BookNow />
        <Packages />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
