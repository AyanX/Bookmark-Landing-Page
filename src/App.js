import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Assets/Header/Header";
import Section from "./Assets/Page1/section";
import Features from "./Assets/Features/Features";
import Simple from "./Assets/Simple/Simple";

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} >
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
