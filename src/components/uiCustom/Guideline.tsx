import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import IconButton from "./IconButton";

interface GenderGuide {
  dos: string[];
  donts: string[];
}

const BoysGuide: GenderGuide = {
  dos: [
    "Respect others' personal space.",
    "Listen actively when someone is speaking.",
    "Use polite language when communicating.",
    "Help others when needed.",
    "Maintain good hygiene.",
    "Be punctual.",
    "Follow school rules.",
    "Be honest and truthful.",
    "Participate in group activities.",
    "Show kindness and empathy.",
  ],
  donts: [
    "Do not engage in physical fights.",
    "Avoid using disrespectful language.",
    "Do not bully others.",
    "Avoid interrupting others.",
    "Do not litter.",
    "Avoid cheating.",
    "Do not spread rumors.",
    "Avoid exclusion of others.",
    "Do not skip classes.",
    "Avoid negative peer pressure.",
  ],
};

const GirlsGuide: GenderGuide = {
  dos: [
    "Support and encourage others.",
    "Communicate assertively and respectfully.",
    "Respect others' opinions and perspectives.",
    "Help classmates and friends.",
    "Maintain good personal hygiene.",
    "Be on time.",
    "Follow school guidelines.",
    "Be truthful and honest.",
    "Engage in group projects.",
    "Be compassionate and understanding.",
  ],
  donts: [
    "Avoid spreading rumors or gossip.",
    "Do not judge others based on appearance.",
    "Avoid excluding others from activities.",
    "Do not interrupt while others are talking.",
    "Do not litter or create a mess.",
    "Avoid dishonest behavior.",
    "Do not engage in negative talk.",
    "Avoid making fun of others.",
    "Do not skip responsibilities.",
    "Avoid negative influences.",
  ],
};

interface GuidelinesPageProps {
  selectedGender: any;
}

const GuidelinesPage: React.FC<GuidelinesPageProps> = ({ selectedGender }) => {
  const [showGuidelines, setShowGuidelines] = useState(true);
  const currentGuide = selectedGender === "female" ? GirlsGuide : BoysGuide;

  return (
    <>
      <div className="flex self-end">
        <IconButton
          icon={showGuidelines ? ChevronUp : ChevronDown}
          text={`Guidelines`}
          onClick={() => setShowGuidelines(!showGuidelines)}
          width="200px"
          height="60px"
        />
      </div>
      <div className="flex flex-col h-[80vh] items-center justify-center w-full  py-8">
        {showGuidelines && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "60vh", opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="flex flex-col items-center justify-center w-80vw h-40vh bg-white rounded-xl p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col items-center justify-center rounded-xl p-8"
            >
              <h1 className="text-2xl font-bold mb-4">
                {selectedGender === "female" ? "Girls" : "Boys"} Guidelines
              </h1>
              <div className="flex justify-between w-full">
                <div className="w-1/2 pr-4">
                  <h2 className="text-lg font-bold mb-2">Dos</h2>
                  <ul className="list-none">
                    {currentGuide.dos.map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-4">
                  <h2 className="text-lg font-bold mb-2">Donts</h2>
                  <ul className="list-none">
                    {currentGuide.donts.map((item, index) => (
                      <li key={index} className="mb-2 flex items-center">
                        <FaTimesCircle className="text-red-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default GuidelinesPage;
