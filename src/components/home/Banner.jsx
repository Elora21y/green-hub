import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typewriter } from "react-simple-typewriter";
// import { motion } from "motion/react"

const slideImages = [
  {
    url: "/banner1.jpg",
    caption: "Urban Gardening Workshop",
    description:
      "Learn how to grow vegetables and herbs in small spaces like rooftops and balconies. Ideal for beginners and city dwellers.",
    button: "Join Workshop",
    location: "Dhaka Botanic Center, Banani",
    date: "June 15, 2025 – 10:00 AM to 1:00 PM",
  },
  {
    url: "/banner2.jpg",
    caption: "Composting Made Easy",
    description:
      "Discover how to turn kitchen waste into rich compost. Includes live demo, Q&A, and free compost starter kit for all participants.",
    button: "Register Now",
    location: "GreenHub Community Space, Dhanmondi",
    date: "July 2, 2025 – 4:00 PM to 6:00 PM",
  },
  {
    url: "banner3.jpg",
    caption: "Hydroponics at Home",
    description:
      "A hands-on guide to starting your own soil-less garden using hydroponics. Perfect for tech-lovers and space-savers!",
    button: "Reserve Seat",
    location: " Online Zoom Webinar",
    date: "August 5, 2025 – 3:00 PM to 5:30 PM",
  },
];
const Banner = () => {
  return (
    <div className="slide-container rounded-2xl shadow shadow-primary/50 overflow-hidden transition-shadow duration-500 hover:shadow-lg z-1">
      <Slide
        arrows={true}
        duration={5000}
        transitionDuration={600}
        infinite={true}
        prevArrow={
          <button className="btn btn-circle btn-xs md:btn-sm bg-[#4C585B50] text-white ml-1 ">
            ❮
          </button>
        }
        nextArrow={
          <button className="btn btn-circle btn-xs md:btn-sm bg-[#4C585B50] text-white mr-1 ">
            ❯
          </button>
        }
      >
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className={`flex justify-start items-center min-h-[400px] lg:min-h-[480px]  bg-center bg-cover bg-no-repeat `}
            style={{
              backgroundImage: ` linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.10)) ,url(${slideImage.url})`,
            }}
          >
            <div initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{once : true}}
            className=" px-6 sm:px-10 md:px-16 lg:px-24 space-y-2 lg:space-y-4 text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-2xl">
                 <Typewriter
                  words={[slideImage.caption]}
                  loop={3}
                  cursor
                  cursorStyle={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-2xl font-medium">
                {slideImage.description}
              </p>
              <div className="text-sm md:text-base">
                <p className="font-semibold">
                  Location : {slideImage.location}{" "}
                </p>
                <p>at- {slideImage.date}</p>
              </div>
              <button className="btn bg-primary hover:bg-[#70d66c] text-white border-0">
                {slideImage.button}
              </button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
