import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarDashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
<div>
    <div>
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
  {/* [ Header ] start */}
  <header className="navbar pcoded-header navbar-expand-lg navbar-light">
  <div className="m-header" >
      
      <a className="b-brand">
      <div className="b-bg" onClick={handleShow}>
          <i className="feather icon-trending-up"/>
        </div>
        <span className="b-title">Terangnesia</span>
      </a>
    </div>
  
    <a className="mobile-menu" id="mobile-header" href="javascript:">
      <i className="feather icon-more-horizontal" />
    </a>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                
                  </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    
  </header>
  {/* [ Header ] end */}
  {/* [ Main Content ] start */}
  
</div>


  

  
</div>

  );
}

export default NavbarDashboard;