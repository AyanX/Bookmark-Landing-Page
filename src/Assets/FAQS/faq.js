import "./faq.css";
import arrow from "../images/icon-arrow.svg";
import { useState } from "react";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState("");
  function openAccordionHandler(e) {
    let name = e.target.closest("div").className;
    let splitted = name.split(" ");
    if (openAccordion == splitted[1]) {
      setOpenAccordion(" ");
    } else {
      setOpenAccordion(splitted[1]);
    }
  }
  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h4>Frequently Asked Questions</h4>
        <div className="faq-container-inner">
          <div>
            <h5>
              Here are some FAQs. If you have any other questions you`d like
              answered feel free to email us
            </h5>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-lie">
            <hr />
            <div
              className="accordion-holder accordion-holder-1"
              name="accordion-1"
              onClick={openAccordionHandler}
            >
              <h4>What is Bookmark?</h4>
              <img src={arrow} />
            </div>

            {openAccordion == "accordion-holder-1" && (
              <div className="accordion-text-data">
                <p>Some dummy data from the accordion ... </p>
              </div>
            )}
          </div>
          <div className="accordion-lie">
            <hr />
            <div
              className="accordion-holder accordion-holder-2"
              name="accordion-1"
              onClick={openAccordionHandler}
            >
              <h4>How can I request a new browser?</h4>
              <img src={arrow} />
            </div>

            {openAccordion == "accordion-holder-2" && (
              <div className="accordion-text-data">
                <p>Some dummy data from the accordion ... </p>
              </div>
            )}
          </div>
          <div className="accordion-lie">
            <hr />
            <div
              className="accordion-holder accordion-holder-3"
              name="accordion-1"
              onClick={openAccordionHandler}
            >
              <h4>Is there a mobile app?</h4>
              <img src={arrow} />
            </div>

            {openAccordion == "accordion-holder-3" && (
              <div className="accordion-text-data">
                <p>Some dummy data from the accordion ... </p>
              </div>
            )}
          </div>
          <div className="accordion-lie">
            <hr />
            <div
              className="accordion-holder accordion-holder-4"
              name="accordion-1"
              onClick={openAccordionHandler}
            >
              <h4>What about other Chromium browsers?</h4>
              <img src={arrow} />
            </div>

            {openAccordion == "accordion-holder-4" && (
              <div className="accordion-text-data">
                <p>Some dummy data from the accordion ... </p>
              </div>
            )}
            <hr />
          </div>
        </div>
        <button className="accordion-button">
          <h5>More info</h5>
        </button>
      </div>
    </div>
  );
}
