import React from "react";

import Avatar from "./Avatar";
import getData from "../API/api";
import "./MainDashboard.css";

const MainDashboard = () => {
  const data = getData();
  const users = data.map((u) => (
    <Avatar
      key={u.id}
      name={`${u.firstname} ${u.lastname}`}
      imageUrl={`${u.avatar}?u=${u.email}`}
      job={u.job}
    />
  ));

  return (
    <React.Fragment>
      <header className="header">
        <div>Fintek.co.il</div>
      </header>
      <div className="main">
        <div className="main-text">
          <div className="content-title">
            <p>Execution</p>
            <p>is</p>
            <p>everything</p>
          </div>
          <div className="content-paragraph">
            <h1>WHO ARE WE</h1>
            <p>We are a team of creatively divers,</p>
            <p>driven, and innovation individuals</p>
            <p>working to achieve the best we can</p>
          </div>
          <div className="content-paragraph">
            <h1>OUR MISSION</h1>
            <p>We want to give our clients the best</p>
            <p>and help their businesses succeed.</p>
            <p>Together we can make you inpire</p>
            <p>to growth to even more than where</p>
            <p>you are today</p>
          </div>
        </div>
        <div className="main-avatars">
          <div className="container">
            {users}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainDashboard;
