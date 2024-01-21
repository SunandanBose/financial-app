import TextField from '@mui/material/TextField';
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MyTable from './component/MyTable';

const App = () => {
  const [amountToInvest, setAmountToInvest] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [termPeriod, setTermPeriod] = useState(0);
  const [perYearIncrement, setPerYearIncrement] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [inflation, setInflation] = useState(0);

  

  const onSubmit = () => {
    if(amountToInvest === 0 || interestRate === 0 || termPeriod === 0)
      alert("Please Enter \n1. Amount to invest per month \n2. Rate Of Interest \n3. Term Period");
    
    let totalData = [];
    let previousIncrementAmount = 0;
    for(let i = 0; i < termPeriod; i++) {
        let monthlyIncrement = 0;
        let monthlyPrincipal = (previousIncrementAmount + Number(amountToInvest));
        if(Number(perYearIncrement) > 0 && i != 0)
          monthlyIncrement = monthlyPrincipal * (Number(perYearIncrement) / 100);

        let previousYearPrincipal = 0;
        if(totalData.length > 0)
          previousYearPrincipal += totalData[totalData.length - 1].Yearly_Final_Amount;
        
        let yearlyPrincipal = ((monthlyPrincipal + monthlyIncrement) * 12 ) + previousYearPrincipal;
        previousIncrementAmount = (monthlyPrincipal + monthlyIncrement) - Number(amountToInvest);
        console.log("Year 1 : Year principal : " + yearlyPrincipal + " monthly principal : " + (monthlyPrincipal + monthlyIncrement));
        let yearlyFinalAmount = yearlyPrincipal * Math.pow((1 + (Number(interestRate)/100)), 1);
        console.log("Year 1 : Year interest : " + (yearlyFinalAmount - yearlyPrincipal)  );
        
        let yearlyData = [];
        
        yearlyData["Year"] = (i + 1);
        yearlyData["Monthly_Principal"] = (monthlyPrincipal + monthlyIncrement);
        yearlyData["Yearly_Principal"] = yearlyPrincipal;
        yearlyData["Yearly_Final_Amount"] = yearlyFinalAmount;
        yearlyData["Yearly_Interest_Gained"] = (yearlyFinalAmount - yearlyPrincipal);
        yearlyData["Tax"] = ((Number(taxPercentage) / 100) * (yearlyFinalAmount - yearlyPrincipal));
      
        totalData.push(yearlyData);
    }
    setTableData(totalData);
  }

  return (
    <div className="App">
      <div className="App-body">
        <TextField
          label="Amount to invest per month"
          id="outlined-start-adornment-1"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
          }}
          value={amountToInvest}
          onChange={(e) => setAmountToInvest(e.target.value)}
        />
        <TextField
          label="Rate of Interest"
          id="outlined-start-adornment-2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">p.a</InputAdornment>,
          }}
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <TextField
          label="Term Period"
          id="outlined-start-adornment-2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">year</InputAdornment>,
          }}
          value={termPeriod}
          onChange={(e) => setTermPeriod(e.target.value)}
        />
        <TextField
          label="Per Year Investment Increment"
          id="outlined-start-adornment-2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          value={perYearIncrement}
          onChange={(e) => setPerYearIncrement(e.target.value)}
        />
        <TextField
          label="Tax Percentage"
          id="outlined-start-adornment-2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          value={taxPercentage}
          onChange={(e) => setTaxPercentage(e.target.value)}
        />
        {/* <TextField
          label="Inflation"
          id="outlined-start-adornment-2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          value={inflation}
          onChange={(e) => setInflation(e.target.value)}
        /> */}
        <Button variant="contained"
          sx={{ m: 1, width: '25ch' }}
          onClick={onSubmit}
        >Submit</Button>

        <MyTable data={tableData} />
          
      </div>
    </div>
  );
}

export default App;
