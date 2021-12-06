import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

function App() {
  const numberOfCards = 20;

  return (
    <div className="App">
         <Container>
            <Row xs={3}>
            {[...Array(numberOfCards)].map((e, i) => {
                return (
                  <Col>
                      <Card>
                          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap"/>
                          <CardBody>
                              <CardTitle tag="h5">Card title #{i+1}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                              <CardText>Some quick example text to build on the card title and make up the bulk of the
                                  card's
                                  content.</CardText>
                              <Button>Button</Button>
                          </CardBody>
                      </Card>
                  </Col>
                )
            })}
            </Row>
        </Container>
    </div>
  );
}

export default App;