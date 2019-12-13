
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './FreeUserDashboard.css';
import { Scrollbars } from 'react-custom-scrollbars';


const FreeUserDashboard = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        // <div className="container-fluid" >
        <div className="container">
            <div className="row">
                <div class="col-4 register-left">
                    <div className="wrapper">
                        <img src="https://static.change.org/profile-img/default-user-profile.svg" alt="Profile" width="100" />
                        <h3>Username</h3>

                        <h6 className="mt-2"> Bio</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nisi blanditiis atque provident, quos accusamus laboriosam at
                             quas officia iusto.
                         incidunt culpa distinctio.</p>
                        <h6>Github</h6>
                        <Link to="">www.example.com</Link>
                        <button type="button" className="btn-Register mt-3" >Edit Profile</button>
                        <button type="button" className="btn-Register" >Change Plan</button>
                    </div>
                </div>
                <div class="col-md-8 register-right">


                    <Scrollbars style={{ weight: 300 }}>
                        <div className="wrapper-right">

                            <div>

                                <Nav tabs>

                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Completed
            </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Published
            </NavLink>
                                    </NavItem>

                                </Nav>

                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="12">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
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
                        </div>

                    </Scrollbars>
                </div>

            </div>

        </div>

    );
}

export default FreeUserDashboard;

