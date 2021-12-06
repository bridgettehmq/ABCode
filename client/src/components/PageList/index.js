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
          <div key={page.pageId} className="card mb-3">
            <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title>Page Title:{page.title}</Card.Title>
            <Button href="./info" variant="light" className='w-100'>
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
