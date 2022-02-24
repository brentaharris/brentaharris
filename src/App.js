import html5 from "./images/html5.png";
import VSCode from "./images/VSCode.png";
import reactlogo from "./images/reactlogo.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Brent Harris</h1>
        <p>
          I primarily work with HTML, CSS, and Javascript using VSCode editor
          and React Framework for JavaScript. I also have some experience with
          Python programming.
        </p>
        <img
          src={html5}
          alt="HTML"
          style={{ height: "50px", width: "auto" }}
        ></img>
        <img
          src={VSCode}
          alt="VS Code logo"
          style={{ height: "50px", width: "auto" }}
        ></img>
        <img
          src={reactlogo}
          alt="react logo"
          style={{ height: "50px", width: "auto" }}
        ></img>
        <p>
          Using my skills thus far, I've developed a food-ordering website
          "Omnifood", and programmed games that are HTML, CSS, and JavaScript
          based primarily using only front-end programming. I've also coded a
          calculator using JavaScript, a random-facts app, random cat & dog
          picture generator, a to-do list, and a web-app based banking system
          "Bankist."
        </p>
        <p>Working samples of my work can be viewed here:</p>
      </div>
    </Router>
  );
}

export default App;
