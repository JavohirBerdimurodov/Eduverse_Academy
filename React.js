// src/pages/Home.js
import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
// src/components/Hero.js
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Unlock Your Potential with Eduverse</h1>
        <p>The world's leading online learning platform.</p>
        <a href="/courses" className="btn">Explore Courses</a>
      </div>
    </section>
  );
};

export default Hero;

// src/components/CourseCard.js
import React from "react";
import "./CourseCard.css";

const CourseCard = ({ image, title, description, price }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn">${price} - Enroll Now</button>
    </div>
  );
};

export default CourseCard;
