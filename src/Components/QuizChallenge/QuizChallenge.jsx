import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';



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
                        Demo
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12" md={{ size: 12, offset: 5 }}>
                            <br />
                            <h4>Where does it come from?</h4>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleCheckbox"></Label>
                                    <div>
                                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
                                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Select this custom radio" />
                                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Select this custom radio" />
                                        <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="Select this custom radio" />
                                    </div>
                                </FormGroup>
                                <Button color="primary">NEXT</Button>{' '}
                            </Form>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>

    );
}

export default Example;

