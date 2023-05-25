import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <Navbar className="w-100 " bg="light" expand="lg">
      <Container className={styles.container}>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            Main
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.collapse} id="basic-navbar-nav">
          <Nav>
            <Link className="nav-link mr-2" to="/products">
              Products
            </Link>

            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
