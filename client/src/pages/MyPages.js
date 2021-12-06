// import { useAuth } from "../util/auth";
import { Stack } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { TEST_QUERY } from "../util/queries";
import PageList from "../components/PageList";
import "./home.css";

export default function  MyPages() {
  //   const {  user } = useAuth();
  const {loading,data} = useQuery(TEST_QUERY);
  const me = data?.me || {}

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      {/* TODO: display logged in user's username */}
      <img src="/images/abcode-logo.jpg" alt="ab-code-logo" />
      {/* <h1>Hi! {user.username}!</h1> */}
      <h2>
        Here is the page where you can see all the pages you have been created.
      </h2>

      <Stack gap={3} className="col-md-5 mx-auto">
          <PageList pages={me.pages}/>

        {/* <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title></Card.Title>
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
        </Card> */}
      </Stack>
    </div>
  );
}
