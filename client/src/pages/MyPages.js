import { Stack } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { TEST_QUERY } from "../util/queries";
import PageList from "../components/PageList";
import "./home.css";

export default function  MyPages() {
  const {loading,data} = useQuery(TEST_QUERY);
  const me = data?.me || {}

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">

      <img src="/images/abcode-logo.jpg" alt="ab-code-logo" />
      
      <h2>
        Click on the buttons below to see the pages you have created!
      </h2>

      <Stack gap={3} className="col-md-5 mx-auto">
          <PageList pages={me.pages}/>
      </Stack>
    </div>
  );
}
