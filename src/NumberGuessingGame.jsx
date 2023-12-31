import React, { useEffect, useState } from "react";

const NumberGuessingGame = (props) => {
  const [randomNumber, setRandomNumber] = useState();
  const [inputNumber, setInputNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Set random number
    const num = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
    setRandomNumber(num);
  }, []);

  const handleInputChange = (e) => {
    // Set input number
    setInputNumber(e.target.value);
  };

  useEffect(() => {
    // Check if input number matches the random number
    checkNumber();
  }, [inputNumber]);

  const checkNumber = () => {
    if (!inputNumber) {
      setMessage("Enter a number");
    } else if (parseInt(inputNumber) < randomNumber) {
      setMessage("Number is less");
    } else if (parseInt(inputNumber) > randomNumber) {
      setMessage("Number is more");
    } else {
      setMessage("You got it right!");
    }
  };

  return (
    <div>
      <h4>Guess a number between 1 to 20</h4>
      <input
        type="number"
        min={1}
        max={20}
        value={inputNumber}
        onChange={handleInputChange}
      />
      <br />
      {message && <p>{message}</p>}
    </div>
  );
};

export default NumberGuessingGame;
