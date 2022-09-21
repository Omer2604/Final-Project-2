import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../../../css/NavBar.css";

const NavBar = ({ user }) => {
  return (
    <Nav className="Nav">
      <Nav.Item>
        <Nav.Link className="HomePage" href="/homepage">
          דף הבית
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="contact" href="/contact">
          צור קשר
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="gallery" href="/gallery">
          גלריה
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Item>
          <Nav.Link href="/FAQ" className="FAQ">
            שו"ת
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="login" href="/login">
            התחבר
          </Nav.Link>

          <Nav.Link className="SignUp" href="/signup">
            הירשם
          </Nav.Link>
          {user && (
            <NavLink className="SignUp" href="/logout">
              התנתק
            </NavLink>
          )}
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
