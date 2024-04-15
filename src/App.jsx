import Header from "./components/header.jsx";
import Table from "./components/table.jsx";
import {calculateInvestmentResults} from "./util/investment.js";
import { useState } from "react";

function App() {
  const [userData , setUserData] = useState([]);
  
    function handleChange(event) {
        
        let initialInvestment;
        let annualInvestment;
        let expectedReturn; 
        let duration;
        
        

      // console.log(event.target.value);
        // setUserData(event.id.value);
      if (event.target.id == 'initial investment') {
        initialInvestment = event.target.value;
        setUserData(initialInvestment);
        console.log(userData);
      }
      else if (event.target.id == 'annual investment') {
        annualInvestment = event.target.value;
        setUserData(annualInvestment);
        console.log(userData);
      }
      else if (event.target.id == 'expected return'){
        expectedReturn = event.target.value;
        setUserData(expectedReturn);
        console.log(userData);
      }
      else if (event.target.id == 'duration'){
        duration = event.target.value;
        setUserData(duration);
        console.log(userData);
      }
      
    }
  return (
    <>
      <Header></Header>
      <div id="user-input">
            <div className="input-group" id="user-input">
                <label htmlFor="">Initial Investment</label>
                <input type="number" onChange={handleChange} id="initial investment"/>
                <label htmlFor="">Annual Investment</label>
                <input type="number" onChange={handleChange} id="annual investment"/>
            </div>
            <div className="input-group" id="user-input">
                <label htmlFor="" >Expected Return</label>
                <input type="text" id="expected return" onChange={handleChange}/>
                <label htmlFor="" >duration</label>
                <input type="text" id="duration" onChange={handleChange}/>
            </div>
        </div>
      <Table inputData = {userData}></Table>
    </>
  )
}

export default App
