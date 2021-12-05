import React, { useState } from "react";
import { useAuth } from "../util/auth";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { ADD_PAGE } from "../util/mutations";
import { useMutation } from "@apollo/client"

export default function NewPage() {
  const { user } = useAuth();
  const [pageTitle, setPageTitle] = useState("");
  const [pageHeader, setPageHeader] = useState("");
  const [paraOne, setParaOne] = useState("");
  const [paraTwo, setParaTwo] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.id === "pageTitle") {
      setPageTitle(e.target.value);
    } else if (e.target.id === "pageHeader") {
      setPageHeader(e.target.value);
    } else if (e.target.id === "paraOne") {
      setParaOne(e.target.value);
    } else {
      setParaTwo(e.target.value);
    }
  };

  const [addPage, { error }] = useMutation(ADD_PAGE);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addPage({
        variables: {
          input: {
            title: pageTitle,
            h1: pageHeader,
            paragraph1: paraOne,
            paragraph2: paraTwo
          },
        },
      });
    } catch (err) {
      console.error(err);
    }

    setPageTitle("");
    setPageHeader("");
    setParaOne("");
    setParaTwo("");
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <hr />
      <Container>
        <p style={{ textAlign: "left" }}>
          Now that you've learned a bit about the three basic programming
          languages of HTML, CSS, and JavaScript, let's put them to use!
        </p>
        <p style={{ textAlign: "left" }}>
          Think of a web page you would like to make. Do you have a favorite
          animal or show you'd like to write about? What about fun facts about
          you?
        </p>
        <p style={{ textAlign: "left" }}>
          When you're ready, enter in a Page Title, a Header, and two Paragraphs
          with text and watch the code on the bottom of the page to see just
          where this information belongs!
        </p>
      </Container>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="pageTitle">
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={pageTitle}
                type="text"
                placeholder="Page Title"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="pageHeader">
            <Form.Label column sm={2}>
              H1
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={pageHeader}
                type="text"
                placeholder="Page Header"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="paraOne">
            <Form.Label column sm={2}>
              P
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={paraOne}
                type="text"
                placeholder="Paragraph Text"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="paraTwo">
            <Form.Label column sm={2}>
              P
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                value={paraTwo}
                type="text"
                placeholder="Paragraph Text"
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <code style={{ color: "black" }}>
          <Row>
            <Col xs={1}>{`1`}</Col>
            <Col>{`<!DOCTYPE html>`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`2`}</Col>
            <Col>{`<html lang="en">`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`3`}</Col>
            <Col>{`<head>`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`4`}</Col>
            <Col>{`<meta charset="UTF-8">`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`5`}</Col>
            <Col>{`<meta http-equiv="X-UA-Compatible" content="IE=edge">`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`6`}</Col>
            <Col>
              {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </Col>
          </Row>
          <Row>
            <Col xs={2}>{`7`}</Col>
            <Col>{`<style>`}</Col>
          </Row>
          <Row>
            <Col xs={3}>{`8`}</Col>
            <Col>{`.myDiv {`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`9`}</Col>
            <Col>{`background-image: url(https://image.png);`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`10`}</Col>
            <Col>{`background-repeat: no-repeat;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`11`}</Col>
            <Col>{`background-size: 100%;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`12`}</Col>
            <Col>{`padding: 5px;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`13`}</Col>
            <Col>{`margin: auto;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`14`}</Col>
            <Col>{`text-align: center;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`15`}</Col>
            <Col>{`display: block;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`16`}</Col>
            <Col>{`width: 80%;`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`17`}</Col>
            <Col>{`box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);}`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`18`}</Col>
            <Col>{`</style>`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`19`}</Col>
            <Col>{`<title>${pageTitle}</title>`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`20`}</Col>
            <Col>{`</head>`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`21`}</Col>
            <Col>{`<body>`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`22`}</Col>
            <Col>{`<div class="myDiv">`}</Col>
          </Row>
          <Row>
            <Col xs={3}>{`23`}</Col>
            <Col>{`<h1 style="color: rgb(0, 2, 128); font-size: 50px;text-shadow: 2px 2px #6ba6ff;">`}</Col>
          </Row>
          <Row>
            <Col xs={4}>{`24`}</Col>
            <Col>{`${pageHeader}`}</Col>
          </Row>
          <Row>
            <Col xs={3}>{`25`}</Col>
            <Col>{`</h1>`}</Col>
          </Row>
          <Row>
            <Col xs={3}>{`26`}</Col>
            <Col>{`<p style="color: rgb(136, 33, 33); font-size: 20px; font-weight: bold;">${paraOne}</p>`}</Col>
          </Row>
          <Row>
            <Col xs={3}>{`27`}</Col>
            <Col>{`<p style="color: rgb(136, 33, 33); font-size: 20px">${paraTwo}</p>`}</Col>
          </Row>
          <Row>
            <Col xs={2}>{`28`}</Col>
            <Col>{`</div>`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`29`}</Col>
            <Col>{`</body>`}</Col>
          </Row>
          <Row>
            <Col xs={1}>{`30`}</Col>
            <Col>{`</html>`}</Col>
          </Row>
        </code>
      </Container>
    </div>
  );
}
