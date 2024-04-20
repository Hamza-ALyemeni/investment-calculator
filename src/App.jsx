import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import Table from "./components/table.jsx";
import {calculateInvestmentResults} from "./util/investment.js";
import { useState } from "react";

function App() {
  // const [userData , setUserData] = useState([]);
  
    // function handleChange(event) {
        
    //     let initialInvestment;
    //     let annualInvestment;
    //     let expectedReturn; 
    //     let duration;
        
        

    //   // console.log(event.target.value);
    //     // setUserData(event.id.value);
    //   if (event.target.id == 'initial investment') {
    //     initialInvestment = event.target.value;
    //     setUserData(initialInvestment);
    //     console.log(userData);
    //   }
    //   else if (event.target.id == 'annual investment') {
    //     annualInvestment = event.target.value;
    //     setUserData(annualInvestment);
    //     console.log(userData);
    //   }
    //   else if (event.target.id == 'expected return'){
    //     expectedReturn = event.target.value;
    //     setUserData(expectedReturn);
    //     console.log(userData);
    //   }
    //   else if (event.target.id == 'duration'){
    //     duration = event.target.value;
    //     setUserData(duration);
    //     console.log(userData);
    //   }
      
    // }

    const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });    

  const inputIsValid = userInput.duration >= 1 && userInput.duration <= 100;
  function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput)=>{
         return{
              ...prevUserInput,
              [inputIdentifier] : +newValue
          };
      });
  }

  return (
    <>
      <Header></Header>
      <Form onChange={handleChange} userInput={userInput}></Form>
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Table input={userInput}></Table>}
    </>
  )
}

export default App
