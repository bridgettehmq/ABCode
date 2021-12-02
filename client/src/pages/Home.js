import { useAuth } from "../util/auth";
import { Stack, Button } from 'react-bootstrap';
import "./home.css";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="container">
      {/* TODO: display logged in user's username */}
      <img src="/images/abcode-logo.jpg" alt="ab-code-logo" />
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <p>
        Invest in your child’s future with fun flash cards for the future coding
        language.
      </p>
      <p>
        {" "}
        To get started, click below to learn about HTML, CSS and JAVASCRIPT.
      </p>
      
      <Stack gap={2} className="col-md-5 mx-auto">
  <Button href="#" variant="light">Gets Started</Button>
  <Button href="./signup" variant="light">Sign Up</Button>
  <Button href="./login" variant="light">Login</Button>
</Stack>
</div>
   
  );
}
