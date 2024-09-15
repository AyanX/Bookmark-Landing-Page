import "./layover.css";
import bookmarklogo from "../images/logo-bookmark-footer.svg";
import close from "../images/icon-close.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ShowContext } from "../Header/Header";

export default function Layover() {
  const { showLayover, setShowLayover } = useContext(ShowContext);

  function handleHideNav() {
    setShowLayover(false);
  }

  
  return (
    <AnimatePresence>
      <motion.div
        className="layover-wrapper"
        id="layover-wrapper"
        initial={{ x: "120vw", y: "-30px", opacity: 0.5 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="layover-container">
          <div>
            <div className="layover-nav">
              <img src={bookmarklogo} />
              <div onClick={handleHideNav}>
                <img src={close} />
              </div>
            </div>
            <div className="layover-section">
              <hr />
              <div>
                <h4>FEATURES</h4>
              </div>
              <hr />
              <div>
                <h4>PRICING</h4>
              </div>
              <hr />
              <div>
                <h4>CONTACT</h4>
              </div>
              <hr />
              <button>
                <h4>LOGIN</h4>
              </button>
            </div>
          </div>

          <div className="layover-footer">
            <img src={facebook} className="layover-footer-fb" />
            <img src={twitter} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
