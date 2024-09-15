import "./download.css";
import dots from "../images/bg-dots.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import { motion } from "framer-motion";
export default function Downloads() {
  const pageVariants = {
    from: {
      y: "120px",
      opacity: 0.65,
    },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2 },
    },
  };
  return (
    <div className="downloads-wrapper">
      <div className="downloads-container">
        <h3>Download the extension</h3>
        <div className="downloads-container-inner">
          <h5>
            We`ve got more browsers in the pipeline. Please do let us know if
            you`ve got a favourite you`d like us to prioritize.
          </h5>
        </div>
        <div className="downloads-container-center">
          <motion.div
            className=" chrome page"
            variants={pageVariants}
            initial="from"
            animate="to"
            transition={{ delay: 0.5 }}
          >
            <img src={chrome} />
            <h4>Add to Chrome</h4>
            <h5>Minimum version 62</h5>
            <img src={dots} />
            <button>
              <h5>Add & install extension</h5>
            </button>
          </motion.div>
          <motion.div
            variants={pageVariants}
            initial="from"
            animate="to"
            transition={{ delay: 0.8 }}
            className=" firefox page"
          >
            <img src={firefox} />
            <h4>Add to Firefox</h4>
            <h5>Minimum version 55</h5>
            <img src={dots} />
            <button>
              <h5>Add & install extension</h5>
            </button>
          </motion.div>
          <motion.div
            variants={pageVariants}
            initial="from"
            animate="to"
            transition={{ delay: 1.1 }}
            className=" opera page"
          >
            <img src={opera} />
            <h4>Add to Opera</h4>
            <h5>Minimum version 46</h5>
            <img src={dots} />
            <button>
              <h5>Add & install extension</h5>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
