import React from "react";
import "./dashboard.css";
import {
  AiFillPieChart,
  AiFillSetting,
  AiFillTags,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const Dashbord = () => {
  return (
    <div className="main-dashboard-container">
      <section className="menu-bar">
        <p>Board.</p>

        <div className="menu-options">
          <button>
            {" "}
            <AiFillPieChart /> Dashboard
          </button>
          <button>
            {" "}
            <AiFillTags /> Transactions
          </button>
          <button>
            {" "}
            <BsFillCalendarDateFill />
            Schedules
          </button>
          <button>
            <FaUserCircle /> Users
          </button>
          <button>
            {" "}
            <AiFillSetting />
            Settings
          </button>
        </div>

        <div className="menu-contacts">
          <button>Help</button>
          <button>Contact Us</button>
        </div>
      </section>

      <section className="dashboard">
        <div className="first-column">
          <p>Dashboard</p>
          <div>
            <div className="input-div">
              {" "}
              <AiOutlineSearch className="input-icon" />{" "}
              <input type="search" placeholder="search..." />
            </div>
            <FiBell />
            <img
              src="https://lh3.googleusercontent.com/a/AAcHTte349Grq8hGhXcxEquDOlLWJb-8H6LKgalHuVS7sIKepLtR=s192-c-rg-br100"
              alt=""
            />
          </div>
        </div>

        <div className="second-column">
          <div style={{backgroundColor:"rgb(195, 222, 199)"}}>
            <AiFillPieChart className="icon" />
            <p>Total revune</p>
            <h3>$77000</h3>
          </div>

          <div style={{backgroundColor:"rgb(223, 210, 186"}}>
            <AiFillPieChart className="icon" />
            <p>Total revune</p>
            <h3>$77000</h3>
          </div>

          <div style={{backgroundColor:"rgb(239,218,218"}} >
            <AiFillPieChart className="icon" />
            <p>Total revune</p>
            <h3>$77000</h3>
          </div>

          <div style={{backgroundColor:"rgb(229,210,290)"}}>
            <AiFillPieChart className="icon" />
            <p>Total revune</p>
            <h3>$77000</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashbord;
