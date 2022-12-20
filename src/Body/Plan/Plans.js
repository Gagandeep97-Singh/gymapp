import React from "react";
import { BsCheckAll } from "react-icons/bs";
import "./Plan.css";
const Plans = () => {
  return (
    <>
      <div className="plan_box">
        <div className="basic plan">
          <h3 className="plan_name">Basic Plan</h3>

          <div className="price">$15/m</div>
          <div className="plans">
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              24X7
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              Personal trainer
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              swimming
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              Group classes
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              Out Door activites
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Diet plan
            </h6>
          </div>
          <button className="subs">subscribe</button>
        </div>

        <div className="pro plan">
          <h3 className="plan_name">Pro Plan</h3>

          <div className="price pro_price">$39/m</div>

          <div className="plans">
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              24X7
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Personal trainer
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              swimming
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Group classes
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Out Door activites
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Diet plan
            </h6>
          </div>
          <button className="subs pro_subs">subscribe</button>
        </div>

        <div className="Premium plan">
        <h3 className="plan_name">Premium Plan</h3>

          <div className="price">$25/m</div>
        
          <div className="plans">
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              24X7
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              Personal trainer
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              swimming
            </h6>
            <h6>
              <span className="no">
                <BsCheckAll />
              </span>
              Group classes
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Out Door activites
            </h6>
            <h6>
              <span className="yes">
                <BsCheckAll />
              </span>
              Diet plan
            </h6>
          </div>
          <button className="subs">subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Plans;
