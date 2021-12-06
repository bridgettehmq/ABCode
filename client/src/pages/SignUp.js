import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Button, Alert } from "react-bootstrap";


const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Oh no, it's look like this E-mail is already have an account please chose a different Email!  .
          </p>
        </Alert>
     )
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <Form className="container">
        <Form.Group className="mb-3" controlId="floatingInput">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            autoFocus
            disabled={loading}
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
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
    </div>
  );
}
