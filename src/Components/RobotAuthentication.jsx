import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function RobotAuthentication(props) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [validationState, setValidationState] = useState(""); 

  const inputStyle = { borderRadius: "0", backgroundColor: "#dcdcdc", border: validationState ? "1px solid #CD3232" : "0px solid #CD3232" }
  const labelStyle = { textAlign: "left", display: "block", fontWeight: "bold" }
  const primaryButtonStyle = { borderRadius: "0", backgroundColor: "#003b93", color: "white", fontWeight: "bold" }
  const secondaryButtonStyle = { borderRadius: "0", backgroundColor: "#e65d5d", color: "black", fontWeight: "bold" }
  const validationTextStyle = { color: " #CD3232", fontWeight: "bold" }
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        login: user.username,
        password: user.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          setValidationState('');
          navigate('/robots');
          console.log(json.message);
        } else {
          setValidationState(<FormattedMessage id="authErrorMessage"/>);
        }
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      username: '',
      password: ''
    });
  };

  return (
    <Container>
        <Row className="mt-4 mb-4 justify-content-center">
            <Form className="col-8" onSubmit={handleSubmit}>
            <h2 style={props.titleStyle}>
                <FormattedMessage id="loginTitle"/>
            </h2>
            <Form.Group className="mt-2 mb-3">
                <Form.Label style={labelStyle}>
                  <FormattedMessage id="usernameLabel"/>
                </Form.Label>
                <Form.Control
                type="username"
                placeholder=""
                name="username"
                value={user.username}
                onChange={handleInputChange}
                style={inputStyle}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>
                  <FormattedMessage id="passwordLabel"/>
                </Form.Label>
                <Form.Control
                type="password"
                placeholder=""
                name="password"
                value={user.password}
                onChange={handleInputChange}
                style={inputStyle}
                />
            </Form.Group>
            
            <Container className="d-flex justify-content-between">
              <Button variant="primary" type="submit" style={primaryButtonStyle} className="w-50 me-2">
                <FormattedMessage id="loginButton"/>
              </Button>
              <Button variant="secondary" type="button" onClick={handleCancel} style={secondaryButtonStyle} className="w-50 ms-2">
                <FormattedMessage id="cancelButton"/>
              </Button>
            </Container>

            <p className="mt-3" style={validationTextStyle}>{validationState}</p>
            </Form>
        </Row>
    </Container>
  );
}

export default RobotAuthentication;