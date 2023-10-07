import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../style.css';

function NavbarDashboard() {
  const expand = 'lg'; // Ganti 'lg' dengan nilai yang Anda inginkan

  return (
    <>
     {/* [ Pre-loader ] End */}
  {/* [ navigation menu ] start */}
  <nav className="pcoded-navbar">
    <div className="navbar-wrapper">
      <div className="navbar-brand header-logo">
        <a href="index.html" className="b-brand">
          <div className="b-bg">
            <i className="feather icon-sun" />
          </div>
          <span className="b-title">Terangnesia</span>
        </a>
        <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span /></a>
      </div>
      <div className="navbar-content scroll-div">
        <ul className="nav pcoded-inner-navbar">
          <li className="nav-item pcoded-menu-caption">
            <label>Navigation</label>
          </li>
          <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
            <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-home" /></span><span className="pcoded-mtext"><Link to="/dashboard">Dashboard</Link></span></a>
          </li>
          <li className="nav-item pcoded-menu-caption">
            <label>Forms &amp; table</label>
          </li>
          <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
            <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text" /></span><span className="pcoded-mtext"><Link to="/katalog">Data Produk</Link></span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* [ navigation menu ] end */}
      <Navbar id="desktop-navbar" expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
        <div className="button-m" style={{ position: "relative", display: "flex", justifyContent: "", alignItems: "flex-start" }}>
      <Navbar.Toggle />
 
    </div>

          <Navbar.Offcanvas >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
            <div className="m-header" >
                <a className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up"/>
            </div>
                <p className="b-title">Terangnesia</p>
                </a>
            </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/katalog" className="nav-link">Link</Link>
                <NavDropdown title="Dropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDashboard;
