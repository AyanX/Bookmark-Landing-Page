import "./section.css";

import picture from "../images/illustration-hero.svg";
import { Outlet } from "react-router-dom";
export default function Section() {
  return (
    <div className="section-container">
      <div className="section-container-content">
        <div className="section-container-content-left">
          <h3>A Simple Bokmark Manager</h3>
          <h5>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </h5>
          <div>
            <button className="btn-1">
              <h5>Get it on Chrome</h5>
            </button>
            <button className="btn-2">
              <h5>Get it on Firefox</h5>
            </button>
          </div>
        </div>
        <div className="section-container-right">
          <div>
            <div></div>
          </div>
          <img src={picture} alt="logo" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
