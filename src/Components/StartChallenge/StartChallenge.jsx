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
  Col,
  Jumbotron
} from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import "./startchallenge.css";
import classnames from "classnames";
import Introduction from "./Introduction/Introduction";
import { useSelector } from "react-redux";

export const StartChallenge = props => {
  const store = useSelector(state => state.start);
  let started = false;
  useEffect(() => {
    if (started == false) {
      if (store.tab === "2") {
        if (activeTab !== store.tab) setActiveTab("2");
      } else {
        if (activeTab !== store.tab) setActiveTab("1");
      }
    }
    started = true;
  });

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (store.check) {
      if (activeTab !== tab) setActiveTab(tab);
    } else {
      alert("You need to start the challenge");
    }
  };

  return (
    <div className="start-challenge-container">
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
            Demo Project
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Introduction />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Quiz</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <div>
                <Jumbotron className="text-center">
                  <h1 className="display-3 text-center">Demo Project!</h1>
                  <p className="lead text-center">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <Button color="primary text-center">GET PDF</Button>
                  </p>
                </Jumbotron>
              </div>
            </Col>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <div>
                <Jumbotron className="text-center">
                  <h1 className="display-3">Github Link</h1>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button>Add Github link</Button>
                      </InputGroupAddon>
                      <Input />
                    </InputGroup>
                  </p>
                </Jumbotron>
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};
