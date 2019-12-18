
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './FreeUserDashboard.css';
import { Scrollbars } from 'react-custom-scrollbars';


const FreeUserDashboard = (props) => {
    const [activeTab, setActiveTab] = useState('1')
    const [activeTab1modal, setActiveTab1modal] = useState('1modal')

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        if (activeTab1modal !== tab) setActiveTab1modal(tab);


    }

    return (

        <div className="container-fluid center-text">
            <div className="row">
                <div class="col-3 text-center">
                    <div className="wrapper">
                        <img className="img" src="https://static.change.org/profile-img/default-user-profile.svg" alt="Profile" width="100" />
                        <h3>Username</h3>

                        <h6 className="mt-2"> Bio</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nisi blanditiis atque provident, quos accusamus laboriosam at
                             quas officia iusto.
                         incidunt culpa distinctio.</p>
                        <h6>Github</h6>
                        <Link to="/">www.example.com</Link>
                        <button type="button" className="btn-Register mt-3" data-toggle="modal" data-target="#exampleModalCenter"> Edit Profile </button>
                        <Link to="/"> <button type="button" className="btn-change-plan" >Change Plan</button></Link>

                    </div>
                </div>

                {/* <!-- Button trigger modal --> */}


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="mt-3">Edit Profile</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>

                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active1modal: activeTab1modal === '1modal' })}
                                                onClick={() => { toggle('1modal'); }}
                                            >
                                                Account
          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active1modal: activeTab1modal === '2modal' })}
                                                onClick={() => { toggle('2modal'); }}
                                            >
                                                Privacy & Stetting
          </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab1modal}>
                                        <TabPane tabId="1modal">
                                            <Row>
                                                <Col sm={6}>

                                                </Col>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste debitis dicta ipsa fugit aspernatur nam saepe molestiae nemo doloribus porro magnam commodi dolor dolore, sequi necessitatibus quae, ut hic?</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2modal">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore facilis, eaque explicabo sapiente reiciendis ea est. At, obcaecati exercitationem ipsa dolor maiores illum quaerat eveniet, nemo adipisci nesciunt, reprehenderit numquam!</p>
                                        </TabPane>
                                    </TabContent>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn-Register-Close" data-dismiss="modal">Close</button>
                                <button type="button" class="btn-Register-Save-changes">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 profile-right">
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
                                            <Col sm="12 mt-3">
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste debitis dicta ipsa fugit aspernatur nam saepe molestiae nemo doloribus porro magnam commodi dolor dolore, sequi necessitatibus quae, ut hic?</p>

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

