import React, { useState,useEffect } from "react";
import "./dashboard.css";
import {
  AiFillPieChart,
  AiFillSetting,
  AiFillTags,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCalendarDateFill,BsFillTagsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiBell ,FiUsers} from "react-icons/fi";

import Linechart from "../components/linechart";


const Dashbord = () => {

  const [userimage,setuserimage]=useState()


  

  const chartdata1 = {
    labels: ["January", "February", "March", "april", "may", "june", "july"],
    datasets: [
      {
        label: "Activities data 1",
        labels: "sales of the week",
        data: [1, 3, 2, 3, 5, 5, 6],
      },
    ],
  };

  const chartdata2 = {
    labels: ["January", "February", "March", "april", "may", "june", "july"],
    datasets: [
      {
        label: "Activities data 2",
        labels: "sales of the week",
        data: [4, 5, 6, 2, 4, 5, 2],
      },
    ],
  };

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
            <FaUserCircle /> Users
          </button>
          <button>
            {" "}
            <BsFillCalendarDateFill />
            Schedules
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
          <div style={{ backgroundColor: "rgb(195, 222, 199)" }}>
            <AiFillPieChart className="icon" />
            <p>Total revenues</p>
            <h3>$7000</h3>
          </div>

          <div style={{ backgroundColor: "rgb(223, 210, 186" }}>
            <BsFillTagsFill className="icon" />
            <p>Total Transactions</p>
            <h3>53660</h3>
          </div>

          <div style={{ backgroundColor: "rgb(239,218,218" }}>
            <AiFillPieChart className="icon" />
            <p>Total Tax </p>
            <h3>$920</h3>
          </div>

          <div style={{ backgroundColor: "rgb(229,210,290)" }}>
            <FiUsers className="icon" />
            <p>Total User</p>
            <h3>650</h3>
          </div>
        </div>

        <div className="third-column">
          <div className="line-chart">
            <Linechart chartdata={chartdata1} className="chart" />
            <Linechart chartdata={chartdata2} className="chart" />
          </div>
        </div>

        <div className="fourth-column">
          <div>
            <div className="first-line">
              <p
                style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
              >
                Top Products
              </p>{" "}
              <p>May-june 2021</p>
            </div>
            <div className="second-line">
              <h6>
                <span
                  style={{
                    color: "red",
                    fontSize: "40px",
                    fontWeight: "bolder",
                  }}
                >
                  .
                </span>
                Basic tees
              </h6>
              <h6>
                <span
                  style={{
                    color: "green",
                    fontSize: "40px",
                    fontWeight: "bolder",
                  }}
                >
                  .
                </span>
                Custom short pants
              </h6>
              <h6>
                <span
                  style={{
                    color: "blue",
                    fontSize: "40px",
                    fontWeight: "bolder",
                  }}
                >
                  .
                </span>
                Super Hoodies
              </h6>
            </div>
          </div>
          <div className="second-box">
            <div className="first-line">
              <p
                style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
              >
                Today's Schedule{" "}
              </p>{" "}
              <p>May-june 2021</p>
            </div>
          

         <div className="sec-box">
         <div className="second-line-box">
            <p className="head">Meeting with Instructor</p>
            <p>2:00 Pm. - 3:00 Pm. </p>
            <p>at Morning on Zoom</p>
          </div>

          <div style={{borderLeft:"blue solid 5px"}} className="second-line-box">
            <p className="head">call with father</p>
            <p>4:00 Pm. - 6:00 Pm. </p>
            <p>at Google Meet</p>
          </div>

         </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashbord;
