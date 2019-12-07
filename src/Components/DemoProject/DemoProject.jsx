import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
import {
    InputGroup,
    InputGroupAddon,
    Input,
} from 'reactstrap';


import classnames from 'classnames';

const Example = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Quiz
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Demo Project
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>QUIZ</h4>

                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} >
                            <div>
                                <Jumbotron className="text-center">
                                    <h1 className="display-3 text-center">Demo Project!</h1>
                                    <p className="lead text-center">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <hr className="my-2" />
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
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
                                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <hr className="my-2" />
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <p className="lead">
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend"><Button>Add Github link</Button></InputGroupAddon>
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
}

export default Example;