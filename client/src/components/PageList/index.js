import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { REMOVE_PAGE } from "../../util/mutations";
import { useMutation } from "@apollo/client"

const PageList = ({
   pages
}) => {
  const [removePage, { error }] = useMutation(REMOVE_PAGE, {
    update(cache, { data: { removePage } }) {
      cache.modify({
        fields: {
          me(me) {
            return {...me, pages:[...removePage.pages]};
          }
        }
      });
    }
  });

  const handleClick = async (pageId) => {
    try {
      const { data } = await removePage({
        variables: { pageId }
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  if (!pages.length) {
    return <h3 style={{ textAlign: "center" }}>Oops! You haven't created any pages yet. Head over to New Pages to get started.</h3>;
  }

  return (
    <div>
      {pages &&
        pages.map((page) => (
          <div key={page.pageId} className="mb-3 ">
            <Card >
          <Card.Body>
            <Card.Title style={{fontWeight:"bolder",textAlign:"center"}}>{page.title}</Card.Title>
            <Link to={`/pages/${page.pageId}`} className='w-100 btn btn-primary'>
              Go to the page
            </Link>
            <Button onClick={()=>handleClick(page.pageId)} variant="light" className='w-100'>
              Delete Page
            </Button>
          </Card.Body>
        </Card>
          </div>
        ))}
    </div>
  );
};

export default PageList;
