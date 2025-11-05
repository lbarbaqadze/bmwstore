import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: white;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 500px;    
  }
`;

export const Title = styled.h1`
  font-size: 15vw;
  font-weight: 900;
  letter-spacing: -8px;
  background: linear-gradient(90deg, #282828ff, #eeeef4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  background-clip: text; 
  position: absolute;
  top: 5%;
  user-select: none;
  pointer-events: none;
  font-style: italic;
  z-index: 1;
  text-align: center;
  width: 100%;

  @media (max-width: 1024px) {
    top: 15%;
    font-size: 18vw;
  }

  @media (max-width: 768px) {
    top: 6%;
    font-size: 20vw;
  }

  @media (max-width: 480px) {
    top: 3%;
    font-size: 22vw;
  }
`;

export const CarImage = styled.img`
  width: 50%;
  height: auto;
  position: relative;
  z-index: 2;
  transform: translateY(50px);

  @media (max-width: 1024px) {
    width: 65%;
    transform: translateY(40px);
  }

  @media (max-width: 768px) {
    width: 70%;
    transform: translateY(30px);
  }

  @media (max-width: 480px) {
    width: 90%;
    transform: translateY(-40px);
  }
  @media (max-width: 430px){
    transform: translateY(-60px)
  }
`;

export const Curve = styled.div`
  position: absolute;
  bottom: 15%;
  width: 65%;
  height: 160px;
  border-bottom: 2px solid #363434ff;
  border-radius: 50%;
  transform: scaleX(1.4);
  z-index: 1;

  @media (max-width: 1024px) {
    width: 75%;
    height: 130px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 100px;
    bottom: 16%;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 80px;
    bottom: 30%;
  }
  @media (max-width: 430px){
    bottom: 38%
  }
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  gap: 10px;
  z-index: 3;

  @media (max-width: 768px) {
    bottom: 0%;
  }

  @media (max-width: 480px) {
    bottom: 5%;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 430px){
    bottom: 11%
  }
`;

export const ButtonOne = styled(Link)`
  color: white;
  background-color: black;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ButtonTwo = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  bottom: 22%;  
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  transform: scaleX(1.4);

  @media (max-width: 1024px) {
    width: 75%;
    bottom: 15%;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    width: 90%;
    bottom: 16%;
  }

  @media (max-width: 480px) {
    width: 95%;
    bottom: 30%;
  }
  @media (max-width: 430px){
    bottom: 38%
  }
`;

const baseArrow = `
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  z-index: 4;
  color: black;
  
`;

export const LeftArrow = styled.button`
  ${baseArrow}
 transform: translateY(18px) rotate(20deg);
`;

export const RightArrow = styled.button`
  ${baseArrow}
  transform: translateY(18px) rotate(-20deg);
`;
