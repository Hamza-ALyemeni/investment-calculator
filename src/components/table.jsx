import {calculateInvestmentResults , formatter} from '../util/investment.js';

export default function Table({input}) {
   const result = calculateInvestmentResults(input);
   const initialInvestment = result[0].valueEndOfYear - result[0].interest * result[0].annualInvestment;
   
    
    return(

        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest</td>
                    <td>Total Interest</td>
                    <td>Ivestment Capital</td>
                </tr>
            </thead>
            <tbody>
               {result.map((yearData) => {
                    const totalInterst = 
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;

                    const totalAmountInvested = yearData.valueEndOfYear + totalInterst;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterst)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
               })}
            </tbody>
      </table> 

    );

}