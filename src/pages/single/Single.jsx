import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from '../../components/table/Table'
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.come</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+254712345678</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">jElton St.  234 Garden Yd.  NewYork</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">Kenya</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
