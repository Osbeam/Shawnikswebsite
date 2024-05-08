import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track active tab index
    const [loanType, setLoanType] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [incomeType, setIncomeType] = useState('');
    const [income, setIncome] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [cibilScore, setCibilScore] = useState('');
    const [source, setSource] = useState('');
    const [date, setDate] = useState('');
  
    const handleNext = () => {
      setActiveTab((prevTab) => prevTab + 1); // Increment active tab index
    };
  
    const handlePrev = () => {
      setActiveTab((prevTab) => prevTab - 1); // Decrement active tab index
    };
  
    const handleLoanTypeChange = (e) => {
      setLoanType(e.target.value);
    };
  
    const handleLoanAmountChange = (e) => {
      setLoanAmount(e.target.value);
    };
  
    const handleIncomeTypeChange = (e) => {
      setIncomeType(e.target.value);
    };
  
    const handleIncomeChange = (e) => {
      setIncome(e.target.value);
    };
  
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
  
    const handleCibilScoreChange = (e) => {
      setCibilScore(e.target.value);
    };
  
    const handleSourceChange = (e) => {
      setSource(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };

  const tabs = [
    {
      content: (
        <div>
          <h3>Your Loan Type</h3>
          <select className="input-form" value={loanType} onChange={handleLoanTypeChange}>
            <option value="">Select</option>
            <option value="Personal loan">Personal loan</option>
            <option value="Home loan">Home loan</option>
          </select>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Your Loan Amount</h3>
          <input
            className="input-form"
            type="number"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Your Income Type</h3>
          <select className="input-form" value={incomeType} onChange={handleIncomeTypeChange}>
            <option value="">Select</option>
            <option value="Salaried">Salaried</option>
            <option value="Business">Business</option>
          </select>
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Your Income</h3>
          <input
            className="input-form"
            type="number"
            placeholder="Enter Income"
            value={income}
            onChange={handleIncomeChange}
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Your Mobile Number</h3>
          <input
            className="input-form"
            type="number"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Check Eligibility</h3>
          <input
            style={{width:"25%", marginLeft:'15px'}}
            className="input-form"
            type="number"
            placeholder="Enter cibil score"
            value={cibilScore}
            onChange={handleCibilScoreChange}
          />
          <input
            style={{width:"25%", marginLeft:'15px'}}
            className="input-form"
            type="text"
            placeholder="Enter source"
            value={source}
            onChange={handleSourceChange}
          />
          <input
            style={{width:"25%", marginLeft:'15px'}}
            className="input-form"
            type="date"
            placeholder="Enter date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <h3>Thank you...</h3>
        </div>
      ),
    },
  ];

  return (
    <div className="tab-container">
      <div className="tab-content">
        {tabs[activeTab] && (
          <>
            <h3 style={{ marginTop: "15px", marginBottom: "10px" }}>
              {tabs[activeTab].title}
            </h3>
            <p>{tabs[activeTab].content}</p>
          </>
        )}
      </div>
      <div className="tab-navigation">
    
        {activeTab !== tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Tabs;
