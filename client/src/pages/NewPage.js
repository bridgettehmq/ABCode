import React from "react";
import { useAuth } from "../util/auth";
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

export default function NewPage() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Welcome!</h1>
      <hr />
      <Container>
        <p style={{textAlign: "left"}}>Now that you've learned a bit about the three basic programming languages of HTML, CSS, and JavaScript, let's put them to use!</p>
        <p style={{textAlign: "left"}}>Think of a web page you would like to make. Do you have a favorite animal or show you'd like to write about? What about fun facts about you?</p>
        <p style={{textAlign: "left"}}>When you're ready, enter in a Page Title, a Header, and two Paragraphs with text and watch the code on the bottom of the page to see just where this information belongs!</p>
      </Container>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="title" placeholder="Page Title" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              H1
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="h1" placeholder="Page Heading" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              P
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="h1" placeholder="Paragraph Text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              P
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="h1" placeholder="Paragraph Text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <code style={{color: "black"}}>
          <Row>
            <Col xs={1}>{`1`}</Col>
            <Col>
              {`<!DOCTYPE html>`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`2`}</Col>
            <Col>
              {`<html lang="en">`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`3`}</Col>
            <Col>
              {`<head>`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`4`}</Col>
            <Col>
              {`<meta charset="UTF-8">`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`5`}</Col>
            <Col>
              {`<meta http-equiv="X-UA-Compatible" content="IE=edge">`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`6`}</Col>
            <Col>
              {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`7`}</Col>
            <Col>
              {`<title>My Page</title>`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`8`}</Col>
            <Col>
              {`</head>`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`9`}</Col>
            <Col>
              {`<body>`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`10`}</Col>
            <Col>
              {`<div>`}
            </Col>
          </Row>
          <Row>
            <Col xs={3}>{`11`}</Col>
            <Col>
              {`<h1 style="text-align: center;">My Page Title</h1>`}
            </Col>
          </Row>
          <Row>
            <Col xs={3}>{`12`}</Col>
            <Col>
              {`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>`}
            </Col>
          </Row>
          <Row>
            <Col xs={3}>{`13`}</Col>
            <Col>
              {`<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sit, voluptatem beatae eum quisquam suscipit natus.</p>`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`14`}</Col>
            <Col>
              {`</div>`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`15`}</Col>
            <Col>
              {`</body>`}
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{`16`}</Col>
            <Col>
              {`</html>`}
            </Col>
          </Row>
        </code>
      </Container>
    </div>
  );
}
