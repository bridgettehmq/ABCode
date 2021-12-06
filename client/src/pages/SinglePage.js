import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PAGE } from "../util/queries";
import { useParams } from 'react-router-dom'

export default function SinglePage () {
  const { pageId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_PAGE, {
    variables: { pageId: pageId }
  });

  const page = data?.page || {};

  return (
  <div style={{ 
    textAlign: "center", 
    backgroundImage: "url(https://i.dlpng.com/static/png/5519556-modern-abstract-colorful-frame-and-border-background-colorful-abstract-border-png-640_640_preview.png)", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    padding: "5px",
    margin: "auto",
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