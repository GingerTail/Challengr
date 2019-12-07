import React from './node_modules/react';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from './node_modules/mdbreact';

class login extends React.Component {

    render() {
        const smallStyle = { fontSize: '1rem' }
        const mediumStyle = { fontSize: '1.2rem' }
        return (
            <MDBRow>
                <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5" ><strong>LOG IN</strong></h3>
                            </div>
                            <div className="row my-3 d-flex justify-content-center">
                                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>
                                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="twitter" className="blue-text" /></MDBBtn>
                                <MDBBtn type="button" color="white" rounded className="z-depth-1a"><MDBIcon fab icon="google-plus-g" className="blue-text" /></MDBBtn>
                            </div>
                            <MDBInput label="Your email" group type="email" validate error="wrong" success="right" />
                            <MDBInput label="Your password" group type="password" validate containerClass="mb-0" />
                            <div className="text-center pt-3 mb-2">
                                <p className="dark-grey-text text-right d-flex justify-content-center mb-3" style={smallStyle}> <a href="#!"> Forgot Password?</a> </p>
                                <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a" style={mediumStyle}>Log in</MDBBtn>
                            </div>
                            <p className="dark-grey-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> <a href="#!"> Sign up</a> </p>

                        </MDBCardBody>
                        {/* <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="grey-text d-flex justify-content-end" style={smallStyle}>Already a member? <a href="#!" className="blue-text ml-1"> Sign In</a></p>
                        </MDBModalFooter> */}
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default login;