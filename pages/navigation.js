import { Link } from "next/link";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Intro-Next</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link as={NavLink} href="/" to="/">
              Home
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link as={NavLink} href="/latihan" to="/latihan">
              Latihan
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link as={NavLink} href="/post" to="/post">
              Post
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link as={NavLink} href="/webmovie" to="/webmovie">
              Web Movie
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
