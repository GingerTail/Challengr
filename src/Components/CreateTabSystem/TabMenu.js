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
    <div className="create-tab-container" id="top">
      <div className="backUp-btn fixed-bottom m-4">
        <a href="#top" className="px-2">
          <FontAwesomeIcon icon={faAngleUp} size="3x" />
        </a>
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Introduction
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Quiz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Demo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            General Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Summary
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="challenge-nav p-3 mb-3">
            <h2>Introduction</h2>
          </div>
          <IntroductionTab />
        </TabPane>
        <TabPane tabId="2">
          <div className="challenge-nav p-3 mb-3">
            <h2>Quiz</h2>
          </div>
          <QuizTab />
        </TabPane>
        <TabPane tabId="3">
          <div className="challenge-nav p-3 mb-3">
            <h2>Demo</h2>
          </div>
          <DemoTab />
        </TabPane>
        <TabPane tabId="4">
          <div className="challenge-nav p-3 mb-3">
            <h2>General Settings</h2>
          </div>
          <GeneralSettingsTab />
        </TabPane>
        <TabPane tabId="5">
          <div className="challenge-nav p-3 mb-3">
            <h2>Summary</h2>
          </div>
          <SummaryTab />
        </TabPane>
      </TabContent>
    </div>
  );
};
