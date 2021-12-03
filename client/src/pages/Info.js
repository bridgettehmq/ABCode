import React from "react";
import { Modal, Carousel, Card, Button } from "react-bootstrap";
import "./home.css";

function HTMLModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">HTML</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel indicators={false} >
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/images/HTML1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="/images/HTML2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100 h-100"
              src="/images/HTML3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CSSModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">CSS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel indicators={false} >
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="/images/CSS1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="/images/CSS2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 h-100"
                src="/images/CSS3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function JSModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">JavaScript</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel indicators={false} >
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="/images/JS1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="/images/JS2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 h-100"
                src="/images/JS3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default function Info() {
  const [htmlShow, setHTMLShow] = React.useState(false);
  const handleHTMLClose = () => setHTMLShow(false);
  const handleHTMLShow = () => setHTMLShow(true);
  const [cssShow, setcssShow] = React.useState(false);
  const handlecssClose = () => setcssShow(false);
  const handlecssShow = () => setcssShow(true);
  const [jsShow, setjsShow] = React.useState(false);
  const handlejsClose = () => setjsShow(false);
  const handlejsShow = () => setjsShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title>HTML Flashcard</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handleHTMLShow()}>
            Go learn
          </Button>
          <HTMLModal
            show={htmlShow}
            onHide={() => handleHTMLClose()}
          />
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title>CSS Flashcard</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handlecssShow()}>
            Go learn
          </Button>
          <CSSModal
            show={cssShow}
            onHide={() => handlecssClose()}
          />
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title>JavaScript Flashcard</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handlejsShow()}>
            Go learn
          </Button>
          <CSSModal
            show={jsShow}
            onHide={() => handlejsClose()}
          />
        </Card.Body>
      </Card>
    </>
  );
}
