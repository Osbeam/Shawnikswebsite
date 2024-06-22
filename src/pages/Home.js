import React, { useState } from "react";
import axios from 'axios';
import { toast,ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import Tabs from "./Tabs";
import logo from "../Images/ShawniksLogo.png";
import PL from "../Images/Frame 20.png";
import BL from "../Images/BL.png";
import HL from "../Images/loan.png";
import LAP from "../Images/loan-to-value.png";
import LOC from "../Images/writing.png";
import CR from "../Images/credit-card (1).png";
import blogimg from "../Images/blogimg.png";
import aboutUs1 from "../Images/aboutus1.png";
import aboutUs2 from "../Images/aboutUs2.png";
import Carousel from "react-elastic-carousel";
import ToolEmi from "../Images/Tool-emi.png";
import ToolCebil from "../Images/Tool-cebil.png";
import ploan from "../Images/Group 77.png";
import bloan from "../Images/Group 78.png";
import hloan from "../Images/Group 79.png";
import laploan from "../Images/Group 80.png";
import gloan from "../Images/Group 81.png";
import vloan from "../Images/Group 82.png";
import eloan from "../Images/Group 83.png";
import lloan from "../Images/Group 84.png";
import cloan from "../Images/Group 85.png";
import aloan from "../Images/Group 86.png";
import mloan from "../Images/Group 87.png";
import carousel1 from "../Images/blogSlide.png";
import carousel2 from "../Images/blogSlide1.png";
import carousel3 from "../Images/blogSlide2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Item from "./Item";

export default function Home() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  

  const handleSubjectChange = (e) => {
    setFormData({ ...formData, subject: e.target.value });
  };

  //handle submit for contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Transforming field names to match backend expectations
      const transformedFormData = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        PhoneNumber: formData.phoneNumber,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message
      };
      
      const response = await axios.post('http://77.37.45.224:5000/api/form/contactForm', transformedFormData);
      console.log('Form submitted successfully:', response.data);
      // Show toast notification
      toast.success('Thank you! We will contact you soon.');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  


  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCalculateEmi = () => {
    if (!loanAmount || !loanPeriod || !interestRate) {
      alert("Please fill all the field");
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanPeriod);

    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const totalPaymentValue = emiValue * months;
    const totalInterestValue = totalPaymentValue - principal;

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
  };

  const handleReset = () => {
    setLoanAmount("");
    setLoanPeriod("");
    setInterestRate("");
    setEmi(0);
    setTotalInterest(0);
    setTotalPayment(0);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ height: "50px" }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto px-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TOOLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
          <form className="d-flex px-4">
            <button className="login-btn">LOGIN</button>
          </form>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-container-slides">
          <div className="hero-container-head">
            <h1>Check Your Free Experiance Credit Score</h1>
          </div>
          <Tabs />
        </div>
        <div className="container-cards">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon1" src={PL} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Personal Loan</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon1" src={CR} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Credit Card </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon2" src={BL} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Business Loan</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon2" src={HL} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Home Loan</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon2" src={LAP} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Loan Across Property</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-5 mt-4">
              <div className="card" style={{ backgroundColor: "#AAD9D1" }}>
                <div className="img-container">
                  <img className="card-icon2" src={LOC} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mt-4">Letter of Credit </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Blog-container">
        <Carousel breakPoints={breakPoints}>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel1} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel2} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel3} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel1} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel2} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
          <div className="caro-slide">
            <div>
              <img className="caro-img" src={carousel3} />
              <div className="caro-content">
                <h2>Jane Smith</h2>
                <p>Software Developer</p>
                <p className="caro-content-p">
                  A home loan is a type of loan used to purchase or refinance a
                  home, with repayment terms based on creditworthiness.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="emi-calculator-container">
        <div className="emi-text-container">
          <h1 className="credit-score-h1">
            Check Your Free Experiance Credit Score
          </h1>
          <p style={{ margin: "0 50px" }}>
            Whether you’re thinking about borrowing money for a Personal,
            Business, Home, Loan Across Property, Credit card it’s important to
            make sure you’re not stretching your finances too thin. EMI
            Calculator is the best tool to find out exactly how much you would
            be paying for EMIs. EMI Calculator is a convenient and user-friendly
            tool that can help calculate how much you can spend towards your EMI
            payments. You can also use our calculator to compare loan options
            and see how different interest rates can affect your EMI payments.
               EMI Calculator will do the math for you, showing your approximate
            monthly payment and helps you decide if that dream purchase is
            within reach.
          </p>
        </div>
        <div className="emi-calc-container">
          <form className="emi-calc-form">
            <div className="form-first-row">
              <div className="input-group">
                <label style={{ color: "white" }} for="loanAmount">
                  Loan Amount
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="loanAmount"
                  placeholder="Enter amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label style={{ color: "white" }} for="loanPeriod">
                  Loan Period
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="loanPeriod"
                  placeholder="Enter period in months"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label style={{ color: "white" }} for="interestRate">
                  Interest Rate
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="interestRate"
                  placeholder="Enter interest rate "
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-second-row"></div>

            <div className="form-third-row">
              <button
                className="button-emi"
                type="button"
                onClick={handleCalculateEmi}
              >
                Calculate EMI
              </button>
              <button
                className="button-emi"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className="form-fourth-row">
              <div className="input-group">
                <label style={{ color: "white" }} htmlFor="totalPayment">
                  Total Payment
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="totalPayment"
                  value={totalPayment}
                  readOnly
                />
              </div>
              <div className="input-group">
                <label style={{ color: "white" }} htmlFor="totalInterest">
                  Interest & Charges Payment
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="totalInterest"
                  value={totalInterest}
                  readOnly
                />
              </div>
              <div className="input-group">
                <label style={{ color: "white" }} htmlFor="emi">
                  EMI
                </label>
                <input
                  className="input-group-input"
                  type="text"
                  id="emi"
                  value={emi}
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="services">
        <h1>SERVICES</h1>
        <p>Get Services that are best matched to your profile.</p>
        <div className="services-container">
          <div className="services-card">
            <img className="services-img" src={ploan} />
            <h1>Personal Loan</h1>
            <p>
              A personal loan is a lump-sum, fixed-payment, unsecured loan used
              for personal expenses, with interest rates based on
              creditworthiness.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={bloan} />
            <h1>Business Loan</h1>
            <p>
              A business loan is a financial product designed to provide capital
              for business expenses, with terms based on creditworthiness.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={hloan} />
            <h1>Home Loan</h1>
            <p>
              A home loan is a type of loan used to purchase or refinance a
              home, with repayment terms based on creditworthiness.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={laploan} />
            <h1>Loan Across Property </h1>
            <p>
              A cross-collateralized loan is a secured loan that uses multiple
              properties as collateral, with repayment terms based on
              creditworthiness and borrower needs.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={gloan} />
            <h1>Gold Loan</h1>
            <p>
              A gold loan is a secured loan that uses gold jewelry or bullion as
              collateral, with loan amount and interest rate based on gold's
              market value.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={vloan} />
            <h1>Vehicle Loan</h1>
            <p>
              A vehicle loan is a secured loan used to purchase a car, truck, or
              other vehicle, with repayment terms based on creditworthiness and
              vehicle value.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={eloan} />
            <h1>Education Loan</h1>
            <p>
              An education loan is a financial aid option for students and
              parents to cover educational expenses, such as tuition, fees, and
              living expenses, with repayment terms varying based on the type of
              loan and borrower's creditworthiness.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={lloan} />
            <h1>Letter of Credit</h1>
            <p>
              A letter of credit is a financial instrument issued by a bank to
              guarantee payment to a seller upon meeting specified conditions.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={cloan} />
            <h1>Credit card</h1>
            <p>
              A credit card is a payment card that allows users to borrow funds
              for purchases, with interest charged on outstanding balances.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={aloan} />
            <h1>Agriculture Loan</h1>
            <p>
              Agriculture loans are financial products designed to support
              farmers and ranchers in purchasing or expanding land, constructing
              or improving buildings, paying closing costs, and financing
              climate-smart practices or equipment.
            </p>
          </div>
          <div className="services-card">
            <img className="services-img" src={mloan} />
            <h1>Machinery Loan</h1>
            <p>
              A machinery loan is a business loan that helps entrepreneurs
              purchase or upgrade equipment, enhancing operational efficiency
              and profitability.
            </p>
          </div>
        </div>
      </div>

      <div className="tools">
        <h1>TOOLS</h1>
        <p>One powerful number that puts you in control</p>
        <div className="tools-container">
          <div className="tools-card">
            <img className="tool-card-img" src={ToolEmi} />
            <h1>EMI Calculator</h1>
            <p>
              EMI calculators, like the one provided by ClearTax, simplify the
              calculation process and aid in financial planning. It's calculated
              based on the loan amount, interest rate, and loan tenure.
            </p>
          </div>

          <div className="tools-card">
            <img className="tool-card-img" src={ToolCebil} />
            <h1>Free Credit score</h1>
            <p>
              A free credit score is a numerical assessment of creditworthiness
              provided by various institutions at no cost.
            </p>
          </div>
        </div>
      </div>

      <div className="blogs">
        <div className="blogs-container">
          <h1 className="blog-container-h1-1">BLOG</h1>
          <p className="blog-container-P">
            One powerful number that puts you in control
          </p>
          <h1 className="blog-container-h1-2">
            Blog About Finances <br /> and Investments.
          </h1>
        </div>
        <div className="blog-inner-container">
          <div className="blog-inner-container-1">
            <img
              className="blog-inner-container-img"
              src={blogimg}
              alt="Blog Image"
            />
          </div>

          <div className="blog-inner-container-2">
            <p class="blog-inner-container-p">
              "Dive into the world of finance and investment with our latest
              blog. Discover insightful tips, trends, and strategies to grow
              your wealth and secure your financial future. From understanding
              the stock market to navigating cryptocurrency, we've got you
              covered. Stay informed, make informed decisions, and unlock the
              potential of your money with our expert guidance. Start your
              journey to financial success today! Explore the nuances of
              personal finance and investment in our comprehensive blog series.
              Learn how to budget effectively, optimize your savings, and make
              savvy investment choices. From retirement planning to managing
              debt, we provide practical advice tailored to your financial
              goals. Stay ahead of market developments and gain valuable
              insights from industry experts. Whether you're a novice investor
              or seasoned pro, our blog is your go-to resource for financial
              empowerment. Take control of your financial future and embark on
              the path to prosperity with us."
            </p>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="company-background">
          <h1>
            How Shawniks Became <br />
            Shawniks.
          </h1>
          <h3>
            A Vision 9+ years we provide
          </h3>
        </div>
        <div className="about-us-container1">
          <div className="about-us-container-1">
            <h1 className="about-us-container-1-heading">BACKGROUND</h1>
            <p>           
            
              "Our background encompasses extensive expertise in finance and
              taxation, spanning diverse industries and regulatory environments.
              With years of collective experience, our team possesses a deep
              understanding of complex financial systems and intricate tax laws.
              We have successfully navigated countless financial challenges and
              tax complexities, helping clients achieve their objectives with
              confidence and efficiency. Our commitment to continuous learning
              and staying abreast of industry trends ensures that we provide
              cutting-edge solutions tailored to our clients' needs. Trust in
              our background to deliver comprehensive financial and taxation
              services that drive success and safeguard your financial
              interests."
            </p>
          </div>
          <div className="about-us-container-2" >
            <img src={aboutUs1}/>
          </div>
        </div>
        <div className="about-us-container2">
          <div className="about-us-container-2">
            <img src={aboutUs2}/>
          </div>
          <div className="about-us-container-1">
          <h1 className="about-us-container-1-headingg">OUR VISION</h1>
            <p>
              "Our vision is to revolutionize the finance and taxation landscape
              by simplifying complexities and empowering individuals and
              businesses to thrive financially. We envision a future where
              navigating taxes and managing finances is effortless and
              accessible to all. Through innovative solutions and expert
              guidance, we aim to optimize financial strategies, minimize tax
              burdens, and maximize wealth creation. By fostering a culture of
              transparency, integrity, and efficiency, we strive to become the
              trusted partner for individuals and businesses alike. Join us in
              shaping a brighter financial future where everyone can achieve
              their goals with confidence and peace of mind."
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>CONTACT US</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <div className="contactUs">
        <div className="contactUs-inner1" >
          <div className="form-contact">
            <h1>
              Contact Information
            </h1>
            <h3>
              Say something to start to a live chat!
            </h3>
            <div class="contact-info">
              <ul class="custom-list">
                <li>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +91 86965 65986
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Office no B-18, 4th
                  Floor, Above PMS Office Destination Centre, Magarpatta City,
                  Pune - 411013
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} />{" "}
                  <a
                    href="http://www.shawnikssolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.shawnikssolutions.com
                  </a>
                </li>
              </ul>
              <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>
        <div className="contactUs-inner2">
        <form className="contactUs-inner-form" onSubmit={handleSubmit}>
            <div className="row">
            <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Eg. John"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Eg. Doe"
            />
          </div>
            </div>
            <div style={{ marginTop: "35px" }} className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Eg. johndoe@gmail.com"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Eg. 9000000001"
                />
              </div>
            </div>
            <div style={{ marginTop: "35px" }} className="row">
          <div className="form-group-radio col">
            <label htmlFor="inputEmail4">Select Subject?</label>
            <div style={{ marginTop: "10px" }} className="row">
              {/* Loans */}
              <div className="col-md-4">
                <input
                  style={{ marginRight: "10px" }}
                  type="radio"
                  id="subject"
                  name="subject"
                  value="Loans"
                  onChange={handleSubjectChange}
                  checked={formData.subject === 'Loans'}
                />
                <label>Loans</label>
              </div>
              {/* Investments */}
              <div className="col-md-4">
                <input
                  style={{ marginRight: "10px" }}
                  type="radio"
                  id="subject"
                  name="subject"
                  value="Investments"
                  onChange={handleSubjectChange}
                  checked={formData.subject === 'Investments'}
                />
                <label>Investments</label>
              </div>
              {/* Insurance */}
              <div className="col-md-4">
                <input
                  style={{ marginRight: "10px" }}
                  type="radio"
                  id="subject"
                  name="subject"
                  value="Insurance"
                  onChange={handleSubjectChange}
                  checked={formData.subject === 'Insurance'}
                />
                <label>Insurance</label>
              </div>
            </div>
          </div>
        </div>
            <div style={{ marginTop: "35px" }} className="row">
              <div className="form-group col">
                <label for="inputEmail4">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
              </div>
            </div>
            <div className="submit-btn">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="footer-column-1">
          <hr />
          <ul className="footer-ul">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>TOOLS</li>
          </ul>
        </div>
        <div className="footer-column-2">
          <h1>SHAWNIKS</h1>
          <p>SOLUTIONS</p>
          <div className="footer-social-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <div class="vertical-hr"></div>
          </div>
        </div>
        <div className="footer-column-3">
          <hr />
          <ul className="footer-ul">
            <li>BLOGS</li>
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
            <li> <NavLink style={{textDecoration:'none', color:'white'}}  to="/privacy-policy">PRIVACY POLICY</NavLink ></li>
          </ul>
        </div>
      </div>
      <div className="footer-newsletter">
        <h1>NEWSLETTER</h1>
        <div>
          <input className="newsletter-input" placeholder="News@email.com" />
          <button className="newsletter-btn">SUBSCRIBE</button>
        </div>
        <hr />
        <h6 className="newsletter-coopyright" >
          Copyright © 2024 Shawniks Solutions Pvt. Ltd. All Rights Reserved.
        </h6>
      </div>
      <ToastContainer />
    </>
  );
}
