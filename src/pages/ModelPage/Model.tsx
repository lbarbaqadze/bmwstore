'use client'

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Title,
  CarImage,
  Curve,
  Buttons,
  ButtonOne,
  ButtonTwo,
  ArrowsContainer,
  LeftArrow,
  RightArrow,
} from "./Model.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCar, faCarOn, faCarBurst } from "@fortawesome/free-solid-svg-icons";
import styles from "./Model.module.css"
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default function Model() {
  const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

  const cars = [
    { name: "BMW M8", image: `${path}/home-images/m8.png` },
    { name: "BMW M5", image: `${path}/home-images/m5.png` },
    { name: "BMW X6", image: `${path}/home-images/x6.png` },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % cars.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + cars.length) % cars.length);

  const car = cars[current];

  const data = [
    { icon: faCar, title: "Find a New Car", button: "Search now" },
    { icon: faCarOn, title: "Book a Test Drive", button: "Request a Test Drive" },
    { icon: faCarBurst, title: "Build Your Own", button: "Configure & Price" },
  ]

  return (
    <>
      <Header>
        <Title>{car.name}</Title>
        <CarImage src={car.image} alt={car.name} />
        <Curve />
        <Buttons>
          <ButtonOne to="/shop">Buy Now</ButtonOne>
          <ButtonTwo>View More</ButtonTwo>
        </Buttons>
        <ArrowsContainer>
          <LeftArrow onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.icon1}/>
          </LeftArrow>
          <RightArrow onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon1} />
          </RightArrow>
        </ArrowsContainer>
      </Header>

      <div className={styles.containerOne}>
        <h5>SHOPPING TOOLS</h5>
        <h2>FIND YOUR BMW.</h2>

        <div className={styles.cardsContainer}>
          {data.map((item) => (
            <div className={styles.card} key={item.title}>
              <FontAwesomeIcon className={styles.icon} icon={item.icon} />
              <p>{item.title}</p>
              <button style={{color: "black"}}>{item.button}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.containerTwo}
        style={{
          backgroundImage: `url(${path}/home-images/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1>THIS IS FORWARDISM <br/> THE 7.</h1>
        <Link to="/shop" className={styles.button}>Know More</Link>
      </div>

      <div className={styles.containerThree}>
        <Card ImgSrc={`${path}/home-images/img1.png`}
        Paragraph="BMW ELECTRIFIED"
        Title="THE JOY OF ELECTRIC DRIVING"
        MiniTitle="100 % electric. 100 % driving pleasure. 100 % BMW. Experience an 
        entirely new sensation of sheer driving pleasure."
        Button="Know More"
        />
        <Card ImgSrc={`${path}/home-images/img2.png`}
        Paragraph="BMW FINANCIAL SERVICES"
        Title="BMW Special offers"
        MiniTitle="100 % electric. 100 % driving pleasure. 100 % BMW. Experience an 
        entirely new sensation of sheer driving pleasure."
        Button="Know More"
        />
      </div>

      <Footer />

    </>
  );
}
