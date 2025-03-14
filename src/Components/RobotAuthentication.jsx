import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RobotAuthentication() {
  const [usuario, setUsuario] = useState({
    username: '',
    password: ''
  });

  const [validationState, setValidationState] = useState(""); 

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
        <Row className="mt-3">
            <Form onSubmit={handleSubmit}>
            <h2>Inicio de sesión</h2>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                type="username"
                placeholder=""
                name="username"
                value={usuario.username}
                onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                type="password"
                placeholder=""
                name="password"
                value={usuario.password}
                onChange={handleInputChange}
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
            <Button variant="secondary" type="submit" onClick={handleCancel}>
                Cancelar
            </Button>
            <p>{validationState}</p>
            </Form>
        </Row>
    </Container>
  );
}

export default RobotAuthentication;