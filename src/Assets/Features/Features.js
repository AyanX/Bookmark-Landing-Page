import { useState } from "react";
import "./features.css";
import "./Simple.css";
import illustration2 from "../images/illustration-features-tab-2.svg";
import illustration from "../images/illustration-features-tab-1.svg";
import illustration3 from "../images/illustration-features-tab-3.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const containerVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 ,
    transition: { duration: 0.5, type: "spring" }},
    exit:{y : "100vw" , opacity:0 , transition:{duration: 2}}
  };

  function Simple() {
    return (
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          exit="exit"
          initial="initial"
          animate="animate"
          className="simple-wrapper"
        >
          <div className="simple-container">
            <div className="simple-left">
              <div className="simple-img">
                <img src={illustration} alt="illustration page" />
                <div>
                  <div className="float"></div>
                </div>
              </div>
            </div>
            <div className="simple-right">
              <h3>Bookmark in one click</h3>
              <h5>
                Organize your bookmarks however you Like. Our simple
                drag-and-drop interfaces gives you complete control over how you
                manage your favorite sites.
              </h5>
              <div>
                <button>
                  <h5>More info</h5>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
  function Speedy() {
    return (
     <AnimatePresence>
      <motion.div variants={containerVariants}
          initial="initial"
          animate="animate" className="simple-wrapper">
        <div className="simple-container">
          <div className="simple-left">
            <div className="simple-img">
              <img src={illustration2} alt="illustration page" />
              <div>
                <div className="float"></div>
              </div>
            </div>
          </div>
          <div className="simple-right">
            <h3>Intelligent Search</h3>
            <h5>
              Our powerful feature will help you find saved sites in no time at
              all. No need to trawl through all of your bookmarks.
            </h5>
            <div>
              <button>
                <h5>More info</h5>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    );
  }

  function Easy() {
    return (
        <AnimatePresence>
      <motion.div variants={containerVariants}
          initial="initial"
          animate="animate" className="simple-wrapper">
        <div className="simple-container">
          <div className="simple-left">
            <div className="simple-img">
              <img src={illustration3} alt="illustration page" />
              <div>
                <div className="float"></div>
              </div>
            </div>
          </div>
          <div className="simple-right">
            <h3>Share your bookmarks</h3>
            <h5>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </h5>
            <div>
              <button>
                <h5>More info</h5>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    );
  }

  const [count, setCount] = useState(0);

  function Checker(e) {
    let target = e.target.closest("button").name;
    if (target == "Simple") {
      setCount(0);
    }
    if (target == "Speedy") {
      setCount(1);
    }
    if (target == "Easy") {
      setCount(2);
    }
    return null;
  }

  return (
    <div className="features-wrapper">
      <div className="features-container">
        <h3>Features</h3>
        <div className="pp">
          <h5>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </h5>
        </div>

        <div className="features-button">
          <button name="Simple" onClick={Checker}>
            <h5>Simple Bookmarking</h5>
          </button>
          <button name="Speedy" onClick={Checker}>
            <h5>Speedy search</h5>
          </button>
          <button name="Easy" onClick={Checker}>
            <h5>Easy Sharing</h5>
          </button>
        </div>
      </div>
      {count == 0 ? (
        <Simple />
      ) : count == 1 ? (
        <Speedy />
      ) : count == 2 ? (
        <Easy />
      ) : null}
    </div>
  );
}
