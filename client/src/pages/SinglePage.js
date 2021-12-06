import { useQuery } from "@apollo/client";
import { TEST_QUERY } from "../util/queries";
import { useParams } from 'react-router-dom'

export default function SinglePage () {
  const { pageId } = useParams();
  const { loading,data } = useQuery(TEST_QUERY);

  const pages = data?.me.pages || [];

  const page = pages?.filter(x=>x.pageId===pageId)[0]

  if(loading) {
    return <div>Loading...</div>;
  }

  if(pages.length===0){
    return <div>Add a page to see!</div>;
  }

  return (
  <div style={{ 
    textAlign: "center", 
    backgroundImage: "url(../images/user_card_background.png)", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    padding: "5px",
    margin: "10px auto",
    display: "block",
    width: "80%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25)"
  }}>
    <h1 style={{
      color: "rgb(0, 2, 128)",
      fonSize: "50px",
      textShadow: "2px 2px #6ba6ff"
      }}>{page.h1}</h1>
    <p style={{ 
      color: "rgb(136, 33, 33)", 
      fontSize: "20px", 
      fontWeight:" bold"
    }}>{page.paragraph1}</p>
    <p style={{ 
      color: "rgb(136, 33, 33)", 
      fontSize: "20px", 
      fontWeight:" bold"
    }}>{page.paragraph2}</p>
  </div>
  )
}