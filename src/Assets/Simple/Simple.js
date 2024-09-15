import "./Speedy.css";
import illustration3 from "../images/illustration-features-tab-3.svg";

export default function Easy () {
  return (
        <div className="simple-wrapper">
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
                Easily share your bookmarks and collections with
                others. Create a shareable link that you can send at the click of a button.
              </h5>
              <div>
                <button>
                  <h5>More info</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  
}
