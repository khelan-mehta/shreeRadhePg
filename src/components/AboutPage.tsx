"use client";
import React, { useState } from "react";
import { Book, BookCopy, PauseCircle, PlayCircle } from "lucide-react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import IconButton from "./uiCustom/IconButton";
import { Icons } from "./Icons";
import TabView from "./views/tabView";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = document.getElementById("about-video") as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <MobileView>
        <div className="flex flex-col w-screen items-center justify-around gap-10 relative px-3 mt-[-70px]">
          <div className="flex items-center justify-center relative h-[155px]">
            <video
              id="about-video"
              className="h-[155px] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[48px] h-[35px] bg-primary z-[1]"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[12px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[12px] z-20" />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-justify px-7">
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua
              <br />
              dolor do amet sint. Velit officia consequat duis enimt
              <br />
              veli mollit. Exercitation Amet minim mollit non deserunt
              <br />
              Deserunt ullamco est sit Velit officia consequat duis enim
            </p>
            <div className="py-3 px-8 rounded-2xl bg-primary text-white font-Mulish text-[.8125rem] leading-normal uppercase mb-4">
              Read more
            </div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex w-screen items-center justify-around gap-10 relative mb-[100px]">
          <div className="flex items-center justify-center relative h-[455px]">
            <video
              id="about-video"
              className="h-[455px] z-[0] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[88px] h-[65px] bg-primary z-10"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[24px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[24px] z-20" />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua
              <br />
              dolor do amet sint. Velit officia consequat duis enimt
              <br />
              veli mollit. Exercitation Amet minim mollit non deserunt
              <br />
              Deserunt ullamco est sit Velit officia consequat duis enim
            </p>
            <IconButton
              icon={BookCopy}
              text="ReadMore"
              variant="primary"
              width="150px"
              height="50px"
            />
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex w-screen items-center justify-around gap-10 relative mb-[100px]">
          <div className="flex items-center justify-center relative h-[455px]">
            <video
              id="about-video"
              className="h-[455px] z-[0] rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <button
              className="absolute bottom-0 right-0 flex justify-center items-center rounded-lg ml-[-75px] w-[88px] h-[65px] bg-primary z-10"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <PauseCircle className="self-center text-[24px] z-20" />
              ) : (
                <PlayCircle className="self-center text-[24px] z-20" />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-primary text-[30px] font-black leading-normal capitalize mb-4">
              Our Story
            </div>
            <p className="text-[#04536c] text-[16px] mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua
              <br />
              dolor do amet sint. Velit officia consequat duis enimt
              <br />
              veli mollit. Exercitation Amet minim mollit non deserunt
              <br />
              Deserunt ullamco est sit Velit officia consequat duis enim
            </p>
            <IconButton
              icon={BookCopy}
              text="ReadMore"
              variant="primary"
              width="150px"
              height="50px"
            />
          </div>
        </div>
      </DesktopView>
    </>
  );
};

export default AboutPage;
