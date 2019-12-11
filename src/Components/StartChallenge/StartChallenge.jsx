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
import StartQuiz from "./QuizChallenge/App"
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import "./StartChallenge.css";
import classnames from "classnames";
import Introduction from "./Introduction/Introduction";
import { useSelector } from "react-redux";

let started = false;
let demo = false;
let quiz = false;





export const StartChallenge = props => {
  const store = useSelector(state => state.start);
  
  //CHECK IF THE CHALLENGE IS STARTED, IF YES, GO TO THE NEXT TAB
  useEffect(() => {
    if (started === false) {
      if (store.tab === "2") {
        if (activeTab !== store.tab) setActiveTab("2");
        started = true;
      } else {
        if (activeTab !== store.tab) setActiveTab("1");
      }
    }
  });
  //CHECK IF THE DEMO OR QUIZ EXIST, IF YES, DISPLAY THEIR TAB
  useEffect(() => {
    
      quiz = store.challenge.content.some(
        content => content["resourceType"] === "quizId"
      );
      demo = store.challenge.content.some(
        content => content["resourceType"] === "demoId"
      );
    
  }, []);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (store.check) {
      if (activeTab !== tab) setActiveTab(tab);
    } else {
      alert("You need to start the challenge");
    }
  };

  //search into the content array of the challenge and give back the quiz Id can be reused for Demo
const getQuizId = ()=>{
  let quizId = store.challenge.content.find(el => el.resourceType === "quizId")
  if(quizId !== undefined){
    return quizId.value
  }
}

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
            <button className="tab-btn">Introduction</button>
          </NavLink>
        </NavItem>
        {quiz === true ? (
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <button className="tab-btn">Quiz</button>
            </NavLink>
          </NavItem>
        ) : (
          ""
        )}
        {demo === true && (
          <NavItem>
            <NavLink
              className={
                quiz === true
                  ? classnames({ active: activeTab === "3" })
                  : classnames({ active: activeTab === "2" })
              }
              onClick={() => {
                quiz === true ? toggle("3") : toggle("2");
              }}
            >
              <button className="tab-btn">Demo</button>
            </NavLink>
          </NavItem>
        )}
        {demo === true || quiz === true ? (
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              <button className="tab-btn">Submit</button>
            </NavLink>
          </NavItem>
        ) : (
          ""
        )}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Introduction />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={quiz === true ? "2" : "0"}>
          <Row>
            <Col sm="12">
            <StartQuiz quizId={getQuizId()}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={quiz === true ? "3" : "2"}>
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
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Submit</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};
