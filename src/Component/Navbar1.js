import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <>
      <Navbar className="p-3 mb-0 bg-info " expand="lg">
        <Container fluid>
          <div className="bg-light">
            {/* <Navbar.Brand href="#"></Navbar.Brand> */}
            <Nav className="pad"><Link to="/WorkExperience">Salman scroll</Link></Nav>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-1 my-lg-0 bg-light "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              
                <Nav className="pad2"><Link to="/">Home</Link></Nav>
                <Nav className="pad2"><Link to="/News">News</Link></Nav>
                <Nav className="pad2"><Link to="/ContactUs">ContactUs</Link></Nav>
                <NavDropdown  title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
                
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                   <a href="https://www.google.com" > <Button variant="outline-success">Search</Button> </a>
                  </Form>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
