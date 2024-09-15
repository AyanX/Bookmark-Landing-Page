import { Outlet } from "react-router-dom";
import bookmark from "../images/logo-bookmark.svg";
import "./Header.css";
import Section from "../Page1/section";
import Features from "../Features/Features";
import Downloads from "../Download/download";
import Faq from "../FAQS/faq";
import Footer from "../Footer/footer";
import hamburger from "../images/icon-hamburger.svg";

import { useState, createContext } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Layover from "../LayOver/layover";

export const ShowContext = createContext();

export default function Header() {
  const myVariants = {
    exit: {
      opacity: 0,
      y: "100vw",
      transition: {
        duration: 6,
      },
    },
  };

  const [showLayover, setShowLayover] = useState(false);

  function toggleShow() {
    return setShowLayover(true);
  }
  return (
    <ShowContext.Provider value={{ showLayover, setShowLayover }}>
      <motion.div>
        {showLayover && <Layover />}
        <motion.div className="header-container">
          <div className="header-container-left">
            <img src={bookmark} />
          </div>

          <div className="header-container-right">
            <ul className="header-container-right-list">
              <li>
                <h5>FEATURES</h5>
              </li>
              <li>
                <h5>PRICING</h5>
              </li>
              <li>
                <h5>CONTACT</h5>
              </li>
            </ul>
            <img src={hamburger} id="hamburger" onClick={toggleShow} />
            <button>
              <h5 id="hire"><a href="mailto:xhadyayam@gmail.com">HIRE ME</a></h5>
            </button>
          </div>
        </motion.div>
        <Section />
        <Features />
        <Downloads />
        <Faq />
        <Footer />
      </motion.div>
    </ShowContext.Provider>
  );
}
