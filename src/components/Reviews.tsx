"use client";
import React, { useState } from "react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TabView from "./views/tabView";

const Reviews: React.FC = () => {
  const reviewVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const reviews = [
    {
      image:
        "https://th.bing.com/th/id/OIP.IJmJDoQDn5ib3F7I83jqhAHaLG?w=683&h=1024&rs=1&pid=ImgDetMain",
      text: "“Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque at in in id donec ornare velit. Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis rhoncus. Volutpat lectus proin pellentesque platea.”",
      name: "Krish",
      role: "Customer",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.uXA5wSH1aIT_e3Blwtj1EgHaJc?rs=1&pid=ImgDetMain", // Replace with actual URL
      text: "“Another review text here. This is a sample review for demonstration purposes. Replace with actual review text.”",
      name: "Jane Doe",
      role: "Student",
    },
    {
      image:
        "https://i.pinimg.com/474x/80/8d/c2/808dc20d52fbd2871c78cf0c3a7f1bac.jpg", // Replace with actual URL
      text: "“Yet another review text here. This is another sample review for demonstration purposes. Replace with actual review text.”",
      name: "John Smith",
      role: "Teacher",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePreviousClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <>
      <MobileView>
        <div className="flex flex-col w-screen mt-24 justify-between gap-4">
          <div className="text-[#ff7433] text-center mb-4 font-mulish text-3xl font-extrabold capitalize">
            What people say about us?
          </div>
          <div className="flex flex-col justify-center items-center gap-12 mt-8">
            <div
              className="review w-[80vw] h-[60vh] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${currentReview.image})` }}
            ></div>

            <div className="flex flex-col-reverse gap-4">
              <div className="text-secondary min-h-[300px] max-h-[300px] min-w-[300px] max-w-[300px] text-justify text-lg leading-[1.1875rem]">
                {currentReview.text}
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-[#04536c] font-livvic text-2xl font-medium leading-7">
                    {currentReview.name}
                  </div>
                  <div className="text-[#04536c] text-base leading-[1.3125rem]">
                    {currentReview.role}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePreviousClick}>
                      <ChevronLeft />
                    </button>
                    <button onClick={handleNextClick}>
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex flex-col w-screen mt-24 justify-between gap-4">
          <div className="text-[#ff7433] text-center mb-4 font-mulish text-3xl font-extrabold capitalize">
            What people say about us?
          </div>
          <div className="flex justify-center items-center gap-32 mt-8">
            <motion.div
              className="review w-[470px] h-[470px] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${currentReview.image})` }}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />

            <motion.div
              className="gap-4"
              initial="hidden"
              animate="visible"
              variants={reviewVariants}
            >
              <div className="text-secondary min-h-[300px] max-h-[300px] min-w-[300px] max-w-[300px] text-justify text-lg leading-[1.1875rem]">
                {currentReview.text}
              </div>
              <div className="flex items-center justify-between mt-[48px]">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-[#04536c] font-livvic text-2xl font-medium leading-7">
                    {currentReview.name}
                  </div>
                  <div className="text-[#04536c] text-base leading-[1.3125rem]">
                    {currentReview.role}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePreviousClick}>
                      <ChevronLeft />
                    </button>
                    <button onClick={handleNextClick}>
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex flex-col w-screen mt-24 justify-between gap-4">
          <div className="text-[#ff7433] text-center mb-4 font-mulish text-3xl font-extrabold capitalize">
            What people say about us?
          </div>
          <div className="flex justify-center items-center gap-32 mt-8">
            <motion.div
              className="review w-[470px] h-[470px] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${currentReview.image})` }}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />

            <motion.div
              className="gap-4"
              initial="hidden"
              animate="visible"
              variants={reviewVariants}
            >
              <div className="text-secondary min-h-[300px] max-h-[300px] min-w-[300px] max-w-[300px] text-justify text-lg leading-[1.1875rem]">
                {currentReview.text}
              </div>
              <div className="flex items-center justify-between mt-[48px]">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-[#04536c] font-livvic text-2xl font-medium leading-7">
                    {currentReview.name}
                  </div>
                  <div className="text-[#04536c] text-base leading-[1.3125rem]">
                    {currentReview.role}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePreviousClick}>
                      <ChevronLeft />
                    </button>
                    <button onClick={handleNextClick}>
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default Reviews;
