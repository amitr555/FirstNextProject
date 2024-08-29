import React from "react";
import Image from "next/image";
const Container3 = () => {
  return (
    <div className="container">
      <div className="img">
        <img
          src="https://res.cloudinary.com/ditigxf2a/image/upload/v1724228852/project6/cymfidb32d1fbewmveyv.png"
          alt="mercedes-benz"
          width="90%"
          height="240px"
          style={{ backgroundSize: "cover", paddingRight: "50px" }} 
          />
      </div>
      <div className="content2">
        <h2 style={{fontSize: "60px"}}><b>Our Services</b></h2>
        <div className="parent">
          {/* <img
            src="https://res.cloudinary.com/ditigxf2a/image/upload/v1724228855/project6/o6y2sv3gk7yx5w3lcrnh.png"
            alt="vector-3"
            width="10%"
            // height="24"
            style={{
              backgroundSize: "cover",
              paddingRight: "50px",
              width: "82%",
              height: "76px",
              marginRight:"23px"
            }} */}
          {/* /> */}
        </div>
        {/* <div className="para mt-[-61px] ml-[80px]"> */}
        <div className="para">
          <h3><b>Car Hire</b></h3>
          <p>
          At our company, we believe in providing a superior car hire experience. We offer a wide range of vehicles to suit every need, whether you're looking for a compact car for city driving, a spacious SUV for a family trip, or a luxury car for a special occasion. Our commitment to customer satisfaction means we go the extra mile to ensure your journey is smooth and enjoyable. With flexible rental options, competitive rates, and 24/7 customer support, we make car hire easy and convenient.
          </p>
        </div>
      </div>
     
    <div className="parent">    
       {/* <img
          src="https://res.cloudinary.com/ditigxf2a/image/upload/v1724228855/project6/o6y2sv3gk7yx5w3lcrnh.png"
          alt="vector-3"
          width="10%"
          style={{
            backgroundSize: "cover",
            paddingRight: "50px",
            width: "23%",
            height: "68px",
            marginRight: "23px"
        //   }} */}
        {/* /> */}
        
        {/* <div className="para  mt-[-61px] ml-[80px]"> */}
           <div className="para">
          <h3><b>Car Sales</b></h3>
          <p>
          We specialize in offering the finest luxury cars from around the globe. Our collection features top brands known for their quality, performance, and elegance. Whether you're in the market for a sleek sports car, a sophisticated sedan, or a robust SUV, we have something to match your taste and lifestyle. Our expert team is dedicated to helping you find the perfect vehicle at the best possible price. We offer transparent pricing, financing options, and a seamless buying experience to ensure you drive away in your dream car.
          </p>
        </div>
      </div>
      <div className="parent">
        {/* <img
          src="https://res.cloudinary.com/ditigxf2a/image/upload/v1724228855/project6/o6y2sv3gk7yx5w3lcrnh.png"
          alt="vector-3"
          width="10%" */}
          {/* // height="{24}"
          style={{
            backgroundSize: "cover",
            paddingRight: "50px",
            width: "23%",
            height: "68px",
            
          }}
        /> */}
        <div className="para3 mt-[61px] ml-[80px]">
          <h3><b>Hire a driver</b></h3>
          <p>
          Traveling should be a relaxing and enjoyable experience, and our professional driver services are here to make that happen. Whether you need a driver for a few hours or for an extended trip, our team of experienced and courteous drivers is ready to assist. They are well-trained, knowledgeable about the local area, and committed to providing a safe and comfortable ride. Sit back, relax, and let us take care of the driving so you can focus on what truly matters.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Container3;
