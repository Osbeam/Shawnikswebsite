import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track active tab index
    const [formData, setFormData] = useState({}); // State to hold form data

    const handleNext = () => {
        setActiveTab((prevTab) => prevTab + 1); // Increment active tab index
    };

    const handleSubmit = async () => {
        // Map formData to match the structure expected by the API
        const dataToSend = {
            MobileNo: formData.mobileNumber,
            LoanType: formData.loanType,
            LoanAmount: formData.loanAmount,
            IncomeType: formData.incomeType,
            Income: parseFloat(formData.income),
            CibilScore: formData.cibilScore,
            Source: formData.source,
            Date: formData.date,
        };

        try {
            // Make a POST request to the API endpoint with form data
            const response = await axios.post(
                "http://77.37.45.224:5000/api/form/eligibilityForm",
                dataToSend
            );
            console.log("Form submitted successfully!", response.data);
            // Optionally, you can handle success here (e.g., show a success message)
        } catch (error) {
            console.error("Error submitting form:", error);
            // Optionally, you can handle errors here (e.g., show an error message)
        }
    };

    const handleInputChange = (e) => {
        // Update form data state when input values change
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const tabs = [
        {
            title: "Your Loan Type",
            content: (
                <div>
                    <select
                        className="input-form"
                        name="loanType"
                        onChange={handleInputChange}
                        value={formData.loanType || ""}
                    >
                        <option value="">Select</option>
                        <option value="Personal loan">Personal loan</option>
                        <option value="Home loan">Home loan</option>
                    </select>
                </div>
            ),
        },
        {
            title: "Your Loan Amount",
            content: (
                <div>
                    <input
                        className="input-form"
                        type="text"
                        placeholder="Enter loan amount"
                        name="loanAmount"
                        onChange={handleInputChange}
                        value={formData.loanAmount || ""}
                    />
                </div>
            ),
        },
        {
            title: "Your Income Type",
            content: (
                <div>
                    <select
                        className="input-form"
                        name="incomeType"
                        onChange={handleInputChange}
                        value={formData.incomeType || ""}
                    >
                        <option value="">Select</option>
                        <option value="Salaried">Salaried</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
            ),
        },
        {
            title: "Your Income",
            content: (
                <div>
                    <input
                        className="input-form"
                        type="number"
                        placeholder="Enter Income"
                        name="income"
                        onChange={handleInputChange}
                        value={formData.income || ""}
                    />
                </div>
            ),
        },
        {
            title: "Your Mobile Number",
            content: (
                <div>
                    <input
                        className="input-form"
                        type="text"
                        placeholder="Enter mobile number"
                        name="mobileNumber"
                        onChange={handleInputChange}
                        value={formData.mobileNumber || ""}
                    />
                </div>
            ),
        },
        {
            title: "Check Eligibility",
            content: (
                <div>
                    <input
                        style={{ width: "25%", marginLeft: "15px" }}
                        className="input-form"
                        type="number"
                        placeholder="Enter cibil score"
                        name="cibilScore"
                        onChange={handleInputChange}
                        value={formData.cibilScore || ""}
                    />
                    <input
                        style={{ width: "25%", marginLeft: "15px" }}
                        className="input-form"
                        type="text"
                        placeholder="Enter source"
                        name="source"
                        onChange={handleInputChange}
                        value={formData.source || ""}
                    />
                    <input
                        style={{ width: "25%", marginLeft: "15px" }}
                        className="input-form"
                        type="date"
                        placeholder="Enter date"
                        name="date"
                        onChange={handleInputChange}
                        value={formData.date || ""}
                    />
                </div>
            ),
        },
        {
            title: "Thank you...",
            content: (
                <div>
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
                {activeTab !== tabs.length - 1 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
    );
};

export default Tabs;
