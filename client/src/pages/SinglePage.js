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
  <div>
    <h1 style={{ textAlign: "center" }}>{page.h1}</h1>
    <p>{page.paragraph1}</p>
    <p>{page.paragraph2}</p>
  </div>
  )
}