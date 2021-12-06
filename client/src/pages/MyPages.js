// import { useAuth } from "../util/auth";
import { Stack, Card, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { TEST_QUERY } from "../util/queries";
import "./home.css";

export default function MyPages() {
  //   const {  user } = useAuth();
  const { data } = useQuery(TEST_QUERY);
  console.log(data);
  return (
    <div className="container">
      {/* TODO: display logged in user's username */}
      <img src="/images/abcode-logo.jpg" alt="ab-code-logo" />
      {/* <h1>Hi! {user.username}!</h1> */}
      <p>
        Here is the page where you can see all the pages you have been created.
      </p>

      <Stack gap={3} className="col-md-5 mx-auto">
        <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title>Card Title(will be the page title)</Card.Title>
            <Button href="./info" variant="light" className='w-100'>
              Go to the page
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title>Card Title(will be the page title)</Card.Title>
            <Button href="./info" variant="light" className='w-100'>
              Go to the page
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title>Card Title(will be the page title)</Card.Title>
            <Button href="./info" variant="light" className='w-100'>
              Go to the page
            </Button>
          </Card.Body>
        </Card>
        {/* <Button href="./info" variant="light">
          Gets Started
        </Button>
        <Button href="./signup" variant="light">
          Sign Up
        </Button>
        <Button href="./login" variant="light">
          Login
        </Button> */}
      </Stack>
    </div>
  );
}
