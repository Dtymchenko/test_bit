import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Link to="/products">Products</Link>
      </Row>
      <Row className="mt-4">
        <Link to="/reviews">Reviews</Link>
      </Row>
    </Container>
  );
};

export default MainPage;
