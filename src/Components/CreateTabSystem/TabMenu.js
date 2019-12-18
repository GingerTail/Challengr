import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "./tabmenu.css";
import IntroductionTab from "./IntroductionTab";
import DemoTab from "./Demo/DemoTab";
import SummaryTab from "./Summary/SummaryTab";
import QuizTab from "./Quiz/QuizTab";
import GeneralSettingsTab from "./GeneralSettings/GeneralSettingsTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const TabMenu = props => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.currentTab);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    if (activeTab !== store) {
      toggle(store);
    } else {
      console.log("the tab is" + activeTab);
    }
  }, [store]);

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      dispatch({ type: "SET_CURRENT_TAB", payload: tab });
    }
  };

  return (
    <>
      <a href="#top" className="px-2 backUp-btn">
        <FontAwesomeIcon icon={faAngleUp} size="3x" />
      </a>
      <div className="create-tab-container" id="top">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              <h5>Introduction </h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <h5> Quiz </h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              <h5>Demo</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              <h5>General Settings</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              <h5>Summary</h5>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="challenge-nav p-3 mb-3">

            </div>
            <IntroductionTab />
          </TabPane>
          <TabPane tabId="2">
            <div className="challenge-nav p-3 mb-3">

            </div>
            <QuizTab />
          </TabPane>
          <TabPane tabId="3">
            <div className="challenge-nav p-3 mb-3">

            </div>
            <DemoTab />
          </TabPane>
          <TabPane tabId="4">
            <div className="challenge-nav p-3 mb-3">

            </div>
            <GeneralSettingsTab />
          </TabPane>
          <TabPane tabId="5">
            <div className="challenge-nav p-3 mb-3">

            </div>
            <SummaryTab />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};
