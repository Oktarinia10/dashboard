import React from "react";
import { Link } from 'react-router-dom';

function NavbarDashboard() {
  return (
    <div>
      {/* [ Pre-loader ] End */}
      {/* [ navigation menu ] start */}
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <Link to="/dashboard" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-sun" />
              </div>
              <span className="b-title">Terangnesia</span>
            </Link>
            <p className="mobile-menu" id="mobile-collapse" href="javascript:"><span /></p>
          </div>
          <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
              <li className="nav-item pcoded-menu-caption">
                <label>Navigation</label>
              </li>
              <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                <Link to="/dashboard" className="nav-link">
                  <span className="pcoded-micon"><i className="feather icon-home" /></span>
                  <span className="pcoded-mtext">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item pcoded-menu-caption">
                <label>Forms &amp; table</label>
              </li>
              <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                <Link to="/katalog" className="nav-link">
                  <span className="pcoded-micon"><i className="feather icon-file-text" /></span>
                  <span className="pcoded-mtext">Data Produk</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* [ navigation menu ] end */}
      {/* [ Header ] start */}

      {/* [ Header ] end */}
      <header className="navbar pcoded-header navbar-expand-lg navbar-light">
    <div className="m-header">
      <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span /></a>
      <a href="/" className="b-brand">
        <div className="b-bg">
          <i className="feather icon-trending-up" />
        </div>
        <span className="b-title">Datta Able</span>
      </a>
    </div>
    <a className="mobile-menu" id="mobile-header" href="javascript:">
      <i className="feather icon-more-horizontal" />
    </a>
    <div className="collapse navbar-collapse">

      <ul className="navbar-nav ml-auto">
        <li>
          <div className="dropdown drp-user">
            <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
              <i className="icon feather icon-settings" />
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-notification">
              <div className="pro-head">
                
              </div>
              <ul className="pro-body">
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
  
      {/* [ Main Content ] start */}
    </div>
  );
}

export default NavbarDashboard;
