import React, { useState } from "react";
import reviews from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    //console.log(Math.floor(Math.random() * reviews.length) ); //will return an integer between 0 and 4
    let randomNumber = Math.floor(Math.random() * reviews.length);
    //for repetition of random number
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="bg-white py-5 px-8 h-auto rounded flex flex-col items-center my-5 drop-shadow-xl">
      <div className="relative img-container">
        <img
          className="rounded-full bg-blue-500 pr-2 pt-1"
          src={image}
          alt={name}
        />
        <span className="absolute top-2 left-0 bg-blue-500 rounded-full p-2.5 z-10">
          <FaQuoteLeft color="white" />
        </span>
      </div>

      <div className="font-semibold mt-4">{name}</div>
      <div className="uppercase text-sm text-blue-500">{job}</div>
      <div className="text-center text-sm text-gray-500 mt-3">{text}</div>

      <div className="button-container flex space-x-8 my-4">
        <button className="prevBtn" onClick={prevReview}>
          <FaChevronLeft color="rgb(147 197 253)" fontSize="1.2em" />
        </button>
        <button className="nextBtn" onClick={nextReview}>
          <FaChevronRight color="rgb(147 197 253)" fontSize="1.2em" />
        </button>
      </div>
      <button
        onClick={randomReview}
        className="py-1 px-2 mb-2 bg-blue-300 rounded hover:bg-blue-500 hover:text-white"
      >
        Surprise Me
      </button>
    </section>
  );
};

export default Review;

//index is set a default value of 0, bcoz we want to show the first item of reviews array at the start.

// <button className='prev' onClick={()=> setIndex(index-1)}>Prev</button>
// <button className='next' onClick={()=> setIndex(index+1)}>Next</button>
