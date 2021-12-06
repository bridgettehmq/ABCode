import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Button, Alert } from "react-bootstrap";

const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

 
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <Form onSubmit={handleSubmit} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter email</Form.Label>
          <Form.Control
            disabled={loading}
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div>
          <Button
            variant="primary"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </Form>
      <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
          {error}
          </p>
        </Alert>
    </div>
  );
}
