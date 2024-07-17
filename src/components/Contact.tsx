"use client";
import React from "react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import TabView from "./views/tabView";

const Contact: React.FC = () => (
  <>
    <MobileView>
      <div className="w-screen ">
        <div className="header w- flex flex-col flex-shrink-0  h-auto bg-gradient-to-b from-[#FF844A]/[.85] to-[#99461F]/[.85] justify-center py-6 px-1 md:h-[555px]">
          <div className="relative flex flex-col md:flex-row justify-start mx-4 mt-0">
            <div className="flex flex-col mb-6 md:mb-0">
              <div className="title___description flex flex-col flex-shrink-0 items-start w-full md:w-[15.3125rem] h-auto">
                <div className="title flex flex-col items-start">
                  <div className="Gothic text-white century] text-xs md:text-[7.603px] mb-2 leading-4 md:leading-[11.405px] uppercase">
                    Contact Now
                  </div>
                  <div className="text-white Livvic] text-lg md:text-[1.1875rem] mb-4 font-bold leading-normal">
                    GET IN TOUCH NOW
                  </div>
                </div>
                <div className="Gothic text-white century] text-xs md:text-[6.843px] leading-4 md:leading-[10.264px]">
                  Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
                  platea dictumst. Duis porta, quam ut finibus ultrices.
                </div>
              </div>
              <div className="flex justify-start gap-3 py-2 mt-4">
                <FaWhatsapp size={40} />
                <FaTwitter size={40} />
                <FaInstagram size={40} />
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 items-start gap-5 w-full md:w-[12.9375rem] h-auto">
              <div className="frame_203 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-xs md:text-[7.034px] leading-4 md:leading-[15.072px] uppercase">
                  Phone
                </div>
                <div className="frame_234 flex flex-col justify-center items-start">
                  <div className="text-white Livvic] text-sm md:text-[10.048px] font-medium leading-4 md:leading-[13.565px]">
                    +880123456789
                  </div>
                  <div className="text-white Livvic] text-sm md:text-[10.048px] font-medium leading-4 md:leading-[13.565px]">
                    +880987654321
                  </div>
                </div>
              </div>
              <div className="frame_233 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-xs md:text-[7.034px] leading-4 md:leading-[15.072px] uppercase">
                  Email
                </div>
                <div className="frame_235 flex flex-col justify-center items-start text-white Livvic] text-sm md:text-[10.048px] font-medium leading-4 md:leading-[13.565px]">
                  needhelp@company.com
                </div>
              </div>
              <div className="frame_234-1 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-xs md:text-[7.034px] leading-4 md:leading-[15.072px] uppercase">
                  Address
                </div>
                <div className="frame_235-1 flex flex-col justify-center items-start text-white Livvic] text-sm md:text-[10.048px] font-medium leading-4 md:leading-[13.565px]">
                  Road No. 8, Niketan, Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
          <div className="map-container flex justify-center mx-4 mt-6 md:mt-0">
            <iframe
              className="w-full md:w-auto h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292856649765!2d-122.41941508468168!3d37.774929279758606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c79e8f67f%3A0x3b8a0a4d096b2d84!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1597698233580!5m2!1sen!2sus"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </MobileView>
    <TabView>
      <div className="px-12 w-screen mt-[80px]">
        <div className="header flex flex-col flex-shrink-0 shadow-2xl  h-[70vh] bg-primary rounded-[15px] py-6 justify-center">
          <div className="flex justify-between mr-[48px] mt-[0px]">
            <div className="flex flex-col ml-[48px]">
              <div className="title___description flex flex-col flex-shrink-0 items-start w-[15.3125rem] h-[5.5rem]">
                <div className="title flex flex-col items-start">
                  <div className="Gothic text-white century] text-[14px] mb-[8px] leading-[11.405px] uppercase">
                    Contact Now
                  </div>
                  <div className="text-white Livvic] text-[20px] mb-[17px] font-bold leading-[normal]">
                    GET IN TOUCH NOW
                  </div>
                </div>
                <div className="Gothic text-white  text-[14px] ">
                  Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
                  platea dictumst. Duis porta, quam ut finibus ultrices.
                </div>
              </div>
              <div className="flex justify-start text-white mt-20 gap-3 py-2 ">
                <FaWhatsapp size={32} />
                <FaTwitter size={32} />
                <FaInstagram size={32} />
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 items-start gap-5 w-[12.9375rem] h-[11.375rem]">
              <div className="frame_203 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Phone
                </div>
                <div className="frame_234 flex flex-col justify-center items-start">
                  <div className="text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                    +880123456789
                  </div>
                  <div className="text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                    +880987654321
                  </div>
                </div>
              </div>
              <div className="frame_233 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Email
                </div>
                <div className="frame_235 flex flex-col justify-center items-start text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                  needhelp@company.com
                </div>
              </div>
              <div className="frame_234-1 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Address
                </div>
                <div className="frame_235-1 flex flex-col justify-center items-start text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                  Road No. 8, Niketan, Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
          <div className="map-container flex justify-center ml-[48px] mr-[48px]">
            <iframe
              className="w-full h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292856649765!2d-122.41941508468168!3d37.774929279758606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c79e8f67f%3A0x3b8a0a4d096b2d84!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1597698233580!5m2!1sen!2sus"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </TabView>
    <DesktopView>
      <div className="px-12 w-screen mt-[80px]">
        <div className="header flex flex-col flex-shrink-0 shadow-2xl  h-[80vh] bg-primary rounded-[15px] py-6 justify-center">
          <div className="flex justify-between mr-[48px] mt-[0px]">
            <div className="flex flex-col ml-[48px]">
              <div className="title___description flex flex-col flex-shrink-0 items-start w-[15.3125rem] h-[5.5rem]">
                <div className="title flex flex-col items-start">
                  <div className="Gothic text-white century] text-[14px] mb-[8px] leading-[11.405px] uppercase">
                    Contact Now
                  </div>
                  <div className="text-white Livvic] text-[20px] mb-[17px] font-bold leading-[normal]">
                    GET IN TOUCH NOW
                  </div>
                </div>
                <div className="Gothic text-white  text-[14px] ">
                  Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
                  platea dictumst. Duis porta, quam ut finibus ultrices.
                </div>
              </div>
              <div className="flex justify-start text-white mt-20 gap-3 py-2 ">
                <FaWhatsapp size={32} />
                <FaTwitter size={32} />
                <FaInstagram size={32} />
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0 items-start gap-5 w-[12.9375rem] h-[11.375rem]">
              <div className="frame_203 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Phone
                </div>
                <div className="frame_234 flex flex-col justify-center items-start">
                  <div className="text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                    +880123456789
                  </div>
                  <div className="text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                    +880987654321
                  </div>
                </div>
              </div>
              <div className="frame_233 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Email
                </div>
                <div className="frame_235 flex flex-col justify-center items-start text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                  needhelp@company.com
                </div>
              </div>
              <div className="frame_234-1 flex flex-col justify-center items-start">
                <div className="Gothic text-white century] text-[14px] leading-[15.072px] uppercase">
                  Address
                </div>
                <div className="frame_235-1 flex flex-col justify-center items-start text-white Livvic] text-[14px] font-medium leading-[13.565px]">
                  Road No. 8, Niketan, Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
          <div className="map-container flex justify-center ml-[48px] mr-[48px]">
            <iframe
              className="w-full h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292856649765!2d-122.41941508468168!3d37.774929279758606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c79e8f67f%3A0x3b8a0a4d096b2d84!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1597698233580!5m2!1sen!2sus"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </DesktopView>
  </>
);

export default Contact;
