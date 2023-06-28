import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  // initializing variables and their coresponding methods with React Hooks
  const [weight, setWeight] = useState("");
  const [feetHeight, setFeetHeight] = useState("");
  const [inchesHeight, setInchesHeight] = useState("");

  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("N/A");

  function calcBmi() {
    const re = /^\d+(\.\d+)?$/; // regex match pattern to verify integers, floats (ex. 432, 0.5, 3.14)

    // if any input box is left blank or does not contain a numerical string
    if (
      weight === "" ||
      feetHeight === "" ||
      inchesHeight === "" ||
      !re.test(weight) ||
      !re.test(feetHeight) ||
      !re.test(inchesHeight)
    )
    { alert("Please enter a valid weight and/or height."); }

    else
    {
      const totalHeight =
        parseFloat(feetHeight) * 12 + parseFloat(inchesHeight);
      const bmi = (703 * weight) / (totalHeight * totalHeight);

      //returns value to the hundredths place
      setBmi(bmi.toFixed(2));

      // logic for output based on user's height, weight

      if (bmi < 16.0)
      { setMessage("You are severely underweight."); }
      else if (bmi >= 16.0 && bmi < 17.0)
      { setMessage("You are moderately underweight."); }
      else if (bmi >= 17.0 && bmi < 18.5)
      { setMessage("You are mildly underweight."); }
      else if (bmi >= 18.5 && bmi < 25.0)
      { setMessage("You are at a healthy weight!"); }
      else if (bmi >= 25.0 && bmi < 30.0)
      { setMessage("You are overweight."); }
      else if (bmi >= 30.0 && bmi < 35.0)
      { setMessage("You are Class I Obese."); }
      else if (bmi >= 35.0 && bmi < 40.0)
      { setMessage("You are Class II Obese."); }
      else
      { setMessage("You are Class III Obese."); }
    }
  }

  return (
    <div className="app">
      <div className="body">

        {/*Title*/}
        <h1 className="mb-3">Body Mass Index Calculator</h1>

        {/*Display Weight for User Input*/}
        <h4>
          Weight <span>(lbs)</span>:
        </h4>
        <input
          value={weight}
          type="text"
          placeholder="e.g: 198 lbs"
          onChange={(e) => setWeight(e.target.value)}
        />

        {/*Display Height in Feet, Inches for User Input*/}
        <h4>
          Height <span>(ft, in)</span>:
        </h4>
        <input
          value={feetHeight}
          type="text"
          min = "1"
          max = "7"
          placeholder="e.g: 5 ft"
          onChange={(e) => setFeetHeight(e.target.value)}
        />
        
        <input
          value={inchesHeight}
          type="text"
          min = "1"
          max = "12"
          placeholder="e.g: 9 in"
          onChange={(e) => setInchesHeight(e.target.value)}
        />

        {/*Calculate BMI Button that runs formula using user inputs*/}
        <button onClick={calcBmi}>Compute</button>

        {/*Displays Output*/}
        <h2>BMI: {bmi}</h2>
        <h5>{message}</h5>

        {/*Footer*/}
        <footer className="mt-5">Dylan Ton-That © 2023</footer>
      </div>
    </div>
  );
}

export default App;
