import React from 'react';
import { Card,Button } from 'react-bootstrap';

const PageList = ({
   pages
}) => {
  if (!pages.length) {
    return <h3>No page Yet</h3>;
  }

  return (
    <div>
      {pages &&
        pages.map((page) => (
          <div key={page.pageId} className="mb-3 ">
            <Card >
          <Card.Body>
            <Card.Title style={{fontWeight:"bolder",textAlign:"center"}}>{page.title}</Card.Title>
            <Button onClick={()=>window.location=`/pages/${page.pageId}`} variant="light" className='w-100'>
              Go to the page
            </Button>
          </Card.Body>
        </Card>
          </div>
        ))}
    </div>
  );
};

export default PageList;
