import React from "react";

function NavbarDashboard() {
  return (
<div>
<div id="preloader">
  <div className="loader">
    <svg className="circular" viewBox="25 25 50 50">
      <circle className="path" cx={50} cy={50} r={20} fill="none" strokeWidth={3} strokeMiterlimit={10} />
    </svg>
  </div>
</div>
<div id="main-wrapper">
  <div className="nav-header">
    <div className="brand-logo">
      <a href="index.html">
        <b className="logo-abbr"><img src="./assets/images/logo.png" alt="" /> </b>
        <span className="logo-compact"><img src="./assets/images/logo-compact.png" alt="" /></span>
        <span className="brand-title">
          <img src="images/logo-text.png" alt="" />
        </span>
      </a>
    </div>
  </div>
  <div className="header">    
    <div className="header-content clearfix">
      <div className="nav-control">
        <div className="hamburger">
          <span className="toggle-icon"><i className="icon-menu" /></span>
        </div>
      </div>
      <div className="header-left">
        <div className="input-group icons">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i className="mdi mdi-magnify" /></span>
          </div>
          <input type="search" className="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard" />
          <div className="drop-down animated flipInX d-md-none">
            <form action="#">
              <input type="text" className="form-control" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>
      <div className="header-right">
        <ul className="clearfix">
          <li className="icons dropdown"><a href="javascript:void(0)" data-toggle="dropdown">
              <i className="mdi mdi-email-outline" />
              <span className="badge badge-pill gradient-1">3</span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className>3 New Messages</span>  
                <a href="javascript:void()" className="d-inline-block">
                  <span className="badge badge-pill gradient-1">3</span>
                </a>
              </div>
              <div className="dropdown-content-body">
                <ul>
                  <li className="notification-unread">
                    <a href="javascript:void()">
                      <img className="float-left mr-3 avatar-img" src="images/avatar/1.jpg" alt="" />
                      <div className="notification-content">
                        <div className="notification-heading">Saiful Islam</div>
                        <div className="notification-timestamp">08 Hours ago</div>
                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-unread">
                    <a href="javascript:void()">
                      <img className="float-left mr-3 avatar-img" src="images/avatar/2.jpg" alt="" />
                      <div className="notification-content">
                        <div className="notification-heading">Adam Smith</div>
                        <div className="notification-timestamp">08 Hours ago</div>
                        <div className="notification-text">Can you do me a favour?</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <img className="float-left mr-3 avatar-img" src="images/avatar/3.jpg" alt="" />
                      <div className="notification-content">
                        <div className="notification-heading">Barak Obama</div>
                        <div className="notification-timestamp">08 Hours ago</div>
                        <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <img className="float-left mr-3 avatar-img" src="images/avatar/4.jpg" alt="" />
                      <div className="notification-content">
                        <div className="notification-heading">Hilari Clinton</div>
                        <div className="notification-timestamp">08 Hours ago</div>
                        <div className="notification-text">Hello</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown"><a href="javascript:void(0)" data-toggle="dropdown">
              <i className="mdi mdi-bell-outline" />
              <span className="badge badge-pill gradient-2">3</span>
            </a>
            <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
              <div className="dropdown-content-heading d-flex justify-content-between">
                <span className>2 New Notifications</span>  
                <a href="javascript:void()" className="d-inline-block">
                  <span className="badge badge-pill gradient-2">5</span>
                </a>
              </div>
              <div className="dropdown-content-body">
                <ul>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-success-lighten-2"><i className="icon-present" /></span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Events near you</h6>
                        <span className="notification-text">Within next 5 days</span> 
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-danger-lighten-2"><i className="icon-present" /></span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Event Started</h6>
                        <span className="notification-text">One hour ago</span> 
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-success-lighten-2"><i className="icon-present" /></span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Event Ended Successfully</h6>
                        <span className="notification-text">One hour ago</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <span className="mr-3 avatar-icon bg-danger-lighten-2"><i className="icon-present" /></span>
                      <div className="notification-content">
                        <h6 className="notification-heading">Events to Join</h6>
                        <span className="notification-text">After two days</span> 
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown d-none d-md-flex">
            <a href="javascript:void(0)" className="log-user" data-toggle="dropdown">
              <span>English</span>  <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
            </a>
            <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li><a href="javascript:void()">English</a></li>
                  <li><a href="javascript:void()">Dutch</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="icons dropdown">
            <div className="user-img c-pointer position-relative" data-toggle="dropdown">
              <span className="activity active" />
              <img src="images/user/1.png" height={40} width={40} alt="" />
            </div>
            <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
              <div className="dropdown-content-body">
                <ul>
                  <li>
                    <a href="app-profile.html"><i className="icon-user" /> <span>Profile</span></a>
                  </li>
                  <li>
                    <a href="javascript:void()">
                      <i className="icon-envelope-open" /> <span>Inbox</span> <div className="badge gradient-3 badge-pill gradient-1">3</div>
                    </a>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <a href="page-lock.html"><i className="icon-lock" /> <span>Lock Screen</span></a>
                  </li>
                  <li><a href="page-login.html"><i className="icon-key" /> <span>Logout</span></a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/***********************************
      Header end ti-comment-alt
  ************************************/}
  {/***********************************
      Sidebar start
  ************************************/}
  <div className="nk-sidebar">           
    <div className="nk-nav-scroll">
      <ul className="metismenu" id="menu">
        <li className="nav-label">Dashboard</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-speedometer menu-icon" /><span className="nav-text">Dashboard</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./index.html">Home 1</a></li>
            {/* <li><a href="./index-2.html">Home 2</a></li> */}
          </ul>
        </li>
        <li className="mega-menu mega-menu-sm">
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-globe-alt menu-icon" /><span className="nav-text">Layouts</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./layout-blank.html">Blank</a></li>
            <li><a href="./layout-one-column.html">One Column</a></li>
            <li><a href="./layout-two-column.html">Two column</a></li>
            <li><a href="./layout-compact-nav.html">Compact Nav</a></li>
            <li><a href="./layout-vertical.html">Vertical</a></li>
            <li><a href="./layout-horizontal.html">Horizontal</a></li>
            <li><a href="./layout-boxed.html">Boxed</a></li>
            <li><a href="./layout-wide.html">Wide</a></li>
            <li><a href="./layout-fixed-header.html">Fixed Header</a></li>
            <li><a href="layout-fixed-sidebar.html">Fixed Sidebar</a></li>
          </ul>
        </li>
        <li className="nav-label">Apps</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-envelope menu-icon" /> <span className="nav-text">Email</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./email-inbox.html">Inbox</a></li>
            <li><a href="./email-read.html">Read</a></li>
            <li><a href="./email-compose.html">Compose</a></li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-screen-tablet menu-icon" /><span className="nav-text">Apps</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./app-profile.html">Profile</a></li>
            <li><a href="./app-calender.html">Calender</a></li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-graph menu-icon" /> <span className="nav-text">Charts</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./chart-flot.html">Flot</a></li>
            <li><a href="./chart-morris.html">Morris</a></li>
            <li><a href="./chart-chartjs.html">Chartjs</a></li>
            <li><a href="./chart-chartist.html">Chartist</a></li>
            <li><a href="./chart-sparkline.html">Sparkline</a></li>
            <li><a href="./chart-peity.html">Peity</a></li>
          </ul>
        </li>
        <li className="nav-label">UI Components</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-grid menu-icon" /><span className="nav-text">UI Components</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./ui-accordion.html">Accordion</a></li>
            <li><a href="./ui-alert.html">Alert</a></li>
            <li><a href="./ui-badge.html">Badge</a></li>
            <li><a href="./ui-button.html">Button</a></li>
            <li><a href="./ui-button-group.html">Button Group</a></li>
            <li><a href="./ui-cards.html">Cards</a></li>
            <li><a href="./ui-carousel.html">Carousel</a></li>
            <li><a href="./ui-dropdown.html">Dropdown</a></li>
            <li><a href="./ui-list-group.html">List Group</a></li>
            <li><a href="./ui-media-object.html">Media Object</a></li>
            <li><a href="./ui-modal.html">Modal</a></li>
            <li><a href="./ui-pagination.html">Pagination</a></li>
            <li><a href="./ui-popover.html">Popover</a></li>
            <li><a href="./ui-progressbar.html">Progressbar</a></li>
            <li><a href="./ui-tab.html">Tab</a></li>
            <li><a href="./ui-typography.html">Typography</a></li>
            {/* </ul>
              </li>
              <li>
                  <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                      <i class="icon-layers menu-icon"></i><span class="nav-text">Components</span>
                  </a>
                  <ul aria-expanded="false"> */}
            <li><a href="./uc-nestedable.html">Nestedable</a></li>
            <li><a href="./uc-noui-slider.html">Noui Slider</a></li>
            <li><a href="./uc-sweetalert.html">Sweet Alert</a></li>
            <li><a href="./uc-toastr.html">Toastr</a></li>
          </ul>
        </li>
        <li>
          <a href="widgets.html" aria-expanded="false">
            <i className="icon-badge menu-icon" /><span className="nav-text">Widget</span>
          </a>
        </li>
        <li className="nav-label">Forms</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-note menu-icon" /><span className="nav-text">Forms</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./form-basic.html">Basic Form</a></li>
            <li><a href="./form-validation.html">Form Validation</a></li>
            <li><a href="./form-step.html">Step Form</a></li>
            <li><a href="./form-editor.html">Editor</a></li>
            <li><a href="./form-picker.html">Picker</a></li>
          </ul>
        </li>
        <li className="nav-label">Table</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-menu menu-icon" /><span className="nav-text">Table</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./table-basic.html" aria-expanded="false">Basic Table</a></li>
            <li><a href="./table-datatable.html" aria-expanded="false">Data Table</a></li>
          </ul>
        </li>
        <li className="nav-label">Pages</li>
        <li>
          <a className="has-arrow" href="javascript:void()" aria-expanded="false">
            <i className="icon-notebook menu-icon" /><span className="nav-text">Pages</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="./page-login.html">Login</a></li>
            <li><a href="./page-register.html">Register</a></li>
            <li><a href="./page-lock.html">Lock Screen</a></li>
            <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
              <ul aria-expanded="false">
                <li><a href="./page-error-404.html">Error 404</a></li>
                <li><a href="./page-error-403.html">Error 403</a></li>
                <li><a href="./page-error-400.html">Error 400</a></li>
                <li><a href="./page-error-500.html">Error 500</a></li>
                <li><a href="./page-error-503.html">Error 503</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  {/***********************************
      Sidebar end
  ************************************/}
  {/***********************************
      Content body start
  ************************************/}
  <div className="content-body">
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-1">
            <div className="card-body">
              <h3 className="card-title text-white">Products Sold</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5"><i className="fa fa-shopping-cart" /></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-2">
            <div className="card-body">
              <h3 className="card-title text-white">Net Profit</h3>
              <div className="d-inline-block">
                <h2 className="text-white">$ 8541</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5"><i className="fa fa-money" /></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-3">
            <div className="card-body">
              <h3 className="card-title text-white">New Customers</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5"><i className="fa fa-users" /></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-4">
            <div className="card-body">
              <h3 className="card-title text-white">Customer Satisfaction</h3>
              <div className="d-inline-block">
                <h2 className="text-white">99%</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5"><i className="fa fa-heart" /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <h4 className="mb-1">Product Sales</h4>
                    <p>Total Earnings of the Month</p>
                    <h3 className="m-0">$ 12,555</h3>
                  </div>
                  <div>
                    <ul>
                      <li className="d-inline-block mr-3"><a className="text-dark" href="#">Day</a></li>
                      <li className="d-inline-block mr-3"><a className="text-dark" href="#">Week</a></li>
                      <li className="d-inline-block"><a className="text-dark" href="#">Month</a></li>
                    </ul>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <canvas id="chart_widget_2" />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="w-100 mr-2">
                      <h6>Pixel 2</h6>
                      <div className="progress" style={{height: 6}}>
                        <div className="progress-bar bg-danger" style={{width: '40%'}} />
                      </div>
                    </div>
                    <div className="ml-2 w-100">
                      <h6>iPhone X</h6>
                      <div className="progress" style={{height: 6}}>
                        <div className="progress-bar bg-primary" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <div id="morris-bar-chart" />
            </div>
          </div>
        </div>    
        <div className="col-lg-3 col-md-6">
          <div className="card card-widget">
            <div className="card-body">
              <h5 className="text-muted">Order Overview </h5>
              <h2 className="mt-4">5680</h2>
              <span>Total Revenue</span>
              <div className="mt-4">
                <h4>30</h4>
                <h6>Online Order <span className="pull-right">30%</span></h6>
                <div className="progress mb-3" style={{height: 7}}>
                  <div className="progress-bar bg-primary" style={{width: '30%'}} role="progressbar"><span className="sr-only">30% Order</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4>50</h4>
                <h6 className="m-t-10 text-muted">Offline Order <span className="pull-right">50%</span></h6>
                <div className="progress mb-3" style={{height: 7}}>
                  <div className="progress-bar bg-success" style={{width: '50%'}} role="progressbar"><span className="sr-only">50% Order</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4>20</h4>
                <h6 className="m-t-10 text-muted">Cash On Develery <span className="pull-right">20%</span></h6>
                <div className="progress mb-3" style={{height: 7}}>
                  <div className="progress-bar bg-warning" style={{width: '20%'}} role="progressbar"><span className="sr-only">20% Order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body px-0">
              <h4 className="card-title px-4 mb-3">Todo</h4>
              <div className="todo-list">
                <div className="tdl-holder">
                  <div className="tdl-content">
                    <ul id="todo_list">
                      <li><label><input type="checkbox" /><i /><span>Get up</span><a href="#" className="ti-trash" /></label></li>
                      <li><label><input type="checkbox" defaultChecked /><i /><span>Stand up</span><a href="#" className="ti-trash" /></label></li>
                      <li><label><input type="checkbox" /><i /><span>Don't give up the fight.</span><a href="#" className="ti-trash" /></label></li>
                      <li><label><input type="checkbox" defaultChecked /><i /><span>Do something else</span><a href="#" className="ti-trash" /></label></li>
                    </ul>
                  </div>
                  <div className="px-4">
                    <input type="text" className="tdl-new form-control" placeholder="Write new item and hit 'Enter'..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src="./images/users/8.jpg" className="rounded-circle" alt="" />
                <h5 className="mt-3 mb-1">Ana Liem</h5>
                <p className="m-0">Senior Manager</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src="./images/users/5.jpg" className="rounded-circle" alt="" />
                <h5 className="mt-3 mb-1">John Abraham</h5>
                <p className="m-0">Store Manager</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src="./images/users/7.jpg" className="rounded-circle" alt="" />
                <h5 className="mt-3 mb-1">John Doe</h5>
                <p className="m-0">Sales Man</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src="./images/users/1.jpg" className="rounded-circle" alt="" />
                <h5 className="mt-3 mb-1">Mehedi Titas</h5>
                <p className="m-0">Online Marketer</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="active-member">
                <div className="table-responsive">
                  <table className="table table-xs mb-0">
                    <thead>
                      <tr>
                        <th>Customers</th>
                        <th>Product</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                        <th>Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src="./images/avatar/1.jpg" className=" rounded-circle mr-3" alt="" />Sarah Smith</td>
                        <td>iPhone X</td>
                        <td>
                          <span>United States</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-success" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-success  mr-2" /> Paid</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="./images/avatar/2.jpg" className=" rounded-circle mr-3" alt="" />Walter R.</td>
                        <td>Pixel 2</td>
                        <td><span>Canada</span></td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-success" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-success  mr-2" /> Paid</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">50 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="./images/avatar/3.jpg" className=" rounded-circle mr-3" alt="" />Andrew D.</td>
                        <td>OnePlus</td>
                        <td><span>Germany</span></td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-warning" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-warning  mr-2" /> Pending</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="./images/avatar/6.jpg" className=" rounded-circle mr-3" alt="" /> Megan S.</td>
                        <td>Galaxy</td>
                        <td><span>Japan</span></td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-success" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-success  mr-2" /> Paid</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="./images/avatar/4.jpg" className=" rounded-circle mr-3" alt="" /> Doris R.</td>
                        <td>Moto Z2</td>
                        <td><span>England</span></td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-success" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-success  mr-2" /> Paid</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td><img src="./images/avatar/5.jpg" className=" rounded-circle mr-3" alt="" />Elizabeth W.</td>
                        <td>Notebook Asus</td>
                        <td><span>China</span></td>
                        <td>
                          <div>
                            <div className="progress" style={{height: 6}}>
                              <div className="progress-bar bg-warning" style={{width: '50%'}} />
                            </div>
                          </div>
                        </td>
                        <td><i className="fa fa-circle-o text-warning  mr-2" /> Pending</td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6">
          <div className="card">
            <div className="chart-wrapper mb-4">
              <div className="px-4 pt-4 d-flex justify-content-between">
                <div>
                  <h4>Sales Activities</h4>
                  <p>Last 6 Month</p>
                </div>
                <div>
                  <span><i className="fa fa-caret-up text-success" /></span>
                  <h4 className="d-inline-block text-success">720</h4>
                  <p className=" text-danger">+120.5(5.0%)</p>
                </div>
              </div>
              <div>
                <canvas id="chart_widget_3" />
              </div>
            </div>
            <div className="card-body border-top pt-4">
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>5% Negative Feedback</li>
                    <li>95% Positive Feedback</li>
                  </ul>
                  <div>
                    <h5>Customer Feedback</h5>
                    <h3>385749</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="chart_widget_3_1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Activity</h4>
              <div id="activity">
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/1.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>Received New Order</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/2.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>iPhone develered</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/2.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>3 Order Pending</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/2.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>Join new Manager</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/2.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>Branch open 5 min Late</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img width={35} src="./images/avatar/2.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>New support ticket received</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media pt-3 pb-3">
                  <img width={35} src="./images/avatar/3.jpg" className="mr-3 rounded-circle" />
                  <div className="media-body">
                    <h5>Facebook Post 30 Comments</h5>
                    <p className="mb-0">I shared this on my fb wall a few months back,</p>
                  </div><span className="text-muted ">April 24, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-sm-12 col-xxl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-0">Store Location</h4>
              <div id="world-map" style={{height: 470}} />
            </div>        
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-facebook">
              <span className="s-icon"><i className="fa fa-facebook" /></span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-linkedin">
              <span className="s-icon"><i className="fa fa-linkedin" /></span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-googleplus">
              <span className="s-icon"><i className="fa fa-google-plus" /></span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-twitter">
              <span className="s-icon"><i className="fa fa-twitter" /></span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* #/ container */}
  </div>
  {/***********************************
      Content body end
  ************************************/}
  {/***********************************
      Footer start
  ************************************/}
  <div className="footer">
    <div className="copyright">
      <p>Copyright © Designed &amp; Developed by <a href="https://themeforest.net/user/quixlab">Quixlab</a> 2018</p>
    </div>
  </div>
  {/***********************************
      Footer end
  ************************************/}
</div>


  

  
</div>

  );
}

export default NavbarDashboard;