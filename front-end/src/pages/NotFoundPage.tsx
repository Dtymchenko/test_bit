import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const rowStyle = {
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: 600,
  marginBottom: "10px",
};

function NotFoundPage() {
  return (
    <Container fluid>
      <Row style={rowStyle}>
        <Link to={"/"}>NotFound</Link>
      </Row>
      <Row style={rowStyle}>
        <Link to={"/"}>Click to return to main page</Link>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
