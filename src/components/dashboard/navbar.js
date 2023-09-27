import React from "react";
import { Link } from 'react-router-dom';

function NavbarDashboard() {
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
          <li data-username="Table bootstrap datatable footable" className="nav-item">
            <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-server" /></span><span className="pcoded-mtext">Table</span></a>
          </li>
          <li data-username="Sample Page" className="nav-item"><a href="sample-page.html" className="nav-link"><span className="pcoded-micon"><i className="feather icon-sidebar" /></span><span className="pcoded-mtext">Sample page</span></a></li>
          <li data-username="Disabled Menu" className="nav-item disabled"><a href="javascript:" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power" /></span><span className="pcoded-mtext">Disabled menu</span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* [ navigation menu ] end */}
  {/* [ Header ] start */}
  <header className="navbar pcoded-header navbar-expand-lg navbar-light">
    <div className="m-header">
      <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span /></a>
      <a href="index.html" className="b-brand">
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
      <ul className="navbar-nav mr-auto">
        <li><a href="javascript:" className="full-screen" onClick="javascript:toggleFullScreen()"><i className="feather icon-maximize" /></a></li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown">Dropdown</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="javascript:">Action</a></li>
            <li><a className="dropdown-item" href="javascript:">Another action</a></li>
            <li><a className="dropdown-item" href="javascript:">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="main-search">
            <div className="input-group">
              <input type="text" id="m-search" className="form-control" placeholder="Search . . ." />
              <a href="javascript:" className="input-group-append search-close">
                <i className="feather icon-x input-group-text" />
              </a>
              <span className="input-group-append search-btn btn btn-primary">
                <i className="feather icon-search input-group-text" />
              </span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li>
          <div className="dropdown">
            <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i className="icon feather icon-bell" /></a>
            <div className="dropdown-menu dropdown-menu-right notification">
              <div className="noti-head">
                <h6 className="d-inline-block m-b-0">Notifications</h6>
                <div className="float-right">
                  <a href="javascript:" className="m-r-10">mark as read</a>
                  <a href="javascript:">clear all</a>
                </div>
              </div>
              <ul className="noti-body">
                <li className="n-title">
                  <p className="m-b-0">NEW</p>
                </li>
                <li className="notification">
                  <div className="media">
                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10" />30 min</span></p>
                      <p>New ticket Added</p>
                    </div>
                  </div>
                </li>
                <li className="n-title">
                  <p className="m-b-0">EARLIER</p>
                </li>
                <li className="notification">
                  <div className="media">
                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10" />30 min</span></p>
                      <p>Prchace New Theme and make payment</p>
                    </div>
                  </div>
                </li>
                <li className="notification">
                  <div className="media">
                    <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10" />30 min</span></p>
                      <p>currently login</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="noti-footer">
                <a href="javascript:">show all</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown drp-user">
            <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
              <i className="icon feather icon-settings" />
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-notification">
              <div className="pro-head">
                <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                <span>John Doe</span>
                <a href="auth-signin.html" className="dud-logout" title="Logout">
                  <i className="feather icon-log-out" />
                </a>
              </div>
              <ul className="pro-body">
                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings" /> Settings</a></li>
                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-user" /> Profile</a></li>
                <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail" /> My Messages</a></li>
                <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock" /> Lock Screen</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
  {/* [ Header ] end */}
  {/* [ Main Content ] start */}
  
</div>


  

  
</div>

  );
}

export default NavbarDashboard;