import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RobotAuthentication(props) {
  const [usuario, setUsuario] = useState({
    username: '',
    password: ''
  });

  const [validationState, setValidationState] = useState(""); 

  const inputStyle = { borderRadius: "0", backgroundColor: "#dcdcdc" }
  const labelStyle = { textAlign: "left", display: "block", fontWeight: "bold" }
  const primaryButtonStyle = { borderRadius: "0", backgroundColor: "#003b93", color: "white", fontWeight: "bold" }
  const secondaryButtonStyle = { borderRadius: "0", backgroundColor: "#e65d5d", color: "black", fontWeight: "bold" }
  const validationTextStyle = { color: " #CD3232", fontWeight: "bold" }

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.username === 'admin' && usuario.password === 'pass') {
      setValidationState('');
      navigate('/robots');
    } else {
      setValidationState('Error de autenticación. Revise sus credenciales');
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      username: '',
      password: ''
    });
  };

  return (
    <Container>
        <Row className="mt-4 mb-4 justify-content-center">
            <Form className="col-8" onSubmit={handleSubmit}>
            <h2 style={props.titleStyle}>Inicio de sesión</h2>
            <Form.Group className="mt-2 mb-3">
                <Form.Label style={labelStyle}>
                  Nombre de usuario
                </Form.Label>
                <Form.Control
                type="username"
                placeholder=""
                name="username"
                value={usuario.username}
                onChange={handleInputChange}
                style={inputStyle}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>
                  Contraseña
                </Form.Label>
                <Form.Control
                type="password"
                placeholder=""
                name="password"
                value={usuario.password}
                onChange={handleInputChange}
                style={inputStyle}
                />
            </Form.Group>
            
            <Container className="d-flex justify-content-between">
              <Button variant="primary" type="submit" style={primaryButtonStyle} className="w-50 me-2">
                  Ingresar
              </Button>
              <Button variant="secondary" type="button" onClick={handleCancel} style={secondaryButtonStyle} className="w-50 ms-2">
                  Cancelar
              </Button>
            </Container>

            <p className="mt-3" style={validationTextStyle}>{validationState}</p>
            </Form>
        </Row>
    </Container>
  );
}

export default RobotAuthentication;