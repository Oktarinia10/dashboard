import React from "react";
import { Link } from 'react-router-dom';
// import NavbarDashboard from "../components/dashboard/navbar";
// import Sidebar from "./components/dashboard/sidebar";
import NavbarDashboard from "../../components/dashboard/navbar";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/dashboard/sidebar";


function TambahKatalog() {
  return (
<div>
    <NavbarDashboard/>
    {/* [ Main Content ] start */}
<div className="pcoded-main-container">
  <div className="pcoded-wrapper">
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        {/* [ breadcrumb ] start */}
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h5 className="m-b-10">Form Elements</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home" /></a></li>
                  <li className="breadcrumb-item"><a href="javascript:">Form Componants</a></li>
                  <li className="breadcrumb-item"><a href="javascript:">Form Elements</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* [ breadcrumb ] end */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* [ Main Content ] start */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Form Tambah Produk</h5>
                  </div>
                  <div className="card-body">
                    
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nama Produk</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Label</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Pemilik</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Deskripsi</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="form-group">
                            <label>Harga</label>
                            <input type="text" className="form-control" placeholder="Text" />
                          </div>
                          <div className="form-group">
                            <label>Lokasi</label>
                            <input type="text" className="form-control" placeholder="Text" />
                          </div>
                          <div className="form-group">
                            <label>Gambar Thumbnail</label>
                            <input type="file" className="form-control" placeholder="Text" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default TambahKatalog;
