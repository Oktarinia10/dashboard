import React from "react";
// import NavbarDashboard from "../components/dashboard/navbar";
// import Sidebar from "./components/dashboard/sidebar";
import NavbarDashboard from "../../components/dashboard/navbar";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/dashboard/sidebar";


function Home() {
  return (
    <div>
      <NavbarDashboard/>
      <div className="pcoded-main-container">
    <div className="pcoded-wrapper">
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          {/* [ breadcrumb ] start */}
          {/* [ breadcrumb ] end */}
          <div className="main-body">
            <div className="page-wrapper">
              {/* [ Main Content ] start */}
              <div className="row">
                {/*[ daily sales section ] start*/}
                <div className="col-md-6 col-xl-4">
                  <div className="card daily-sales">
                    <div className="card-block">
                      <h6 className="mb-4">Daily Sales</h6>
                      <div className="row d-flex align-items-center">
                        <div className="col-9">
                          <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10" />$ 249.95</h3>
                        </div>
                        <div className="col-3 text-right">
                          <p className="m-b-0">67%</p>
                        </div>
                      </div>
                      <div className="progress m-t-30" style={{height: 7}}>
                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
                {/*[ daily sales section ] end*/}
                
                {/*[ Monthly  sales section ] end*/}
                
                {/*[ year  sales section ] end*/}
                
                {/* [ statistics year chart ] start */}
                
                {/* [ statistics year chart ] end */}
                {/*[social-media section] start*/}
                
                
                
                {/*[social-media section] end*/}
                {/* [ rating list ] starts*/}
                
                {/* [ rating list ] end*/}
                
                  
                
                {/* [ddd ] end */}
              </div>
              {/* [ Main Content ] end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            
    </div>
  );
}

export default Home;
