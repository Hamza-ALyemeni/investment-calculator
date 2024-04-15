export default function Table({inputData}) {
    return (
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
                <tr>
                    <td>{inputData[0]}</td>
                    <td>{inputData[1]}</td>
                    <td>{inputData[2]}</td>
                    <td>{inputData[3]}</td>
                    <td>{inputData[4]}</td>
                </tr>
            </tbody>
            {console.log(inputData)}
      </table> 

    );

}