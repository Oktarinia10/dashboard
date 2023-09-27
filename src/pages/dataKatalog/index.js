import React from "react";
import { Link } from 'react-router-dom';
import NavbarDashboard from "../../components/dashboard/navbar";

function IndexDataKatalog() {
  return (
    <div>
      <NavbarDashboard/>
      <section className="pcoded-main-container">
  <div className="pcoded-wrapper">
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        {/* [ breadcrumb ] start */}
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h5 className="m-b-10">Data Katalog Produk</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home" /></a></li>
                  <li className="breadcrumb-item"><a href="#!">Tables</a></li>
                  <li className="breadcrumb-item"><a href="javascript:">Basic Tables</a></li>
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
              {/* [ stiped-table ] start */}
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Striped Table</h5>
                    <span className="d-block m-t-5">use class <code>table-striped</code> inside table element</span>
                    <Link to="/tambah" type="button" class="btn btn-primary" data-toggle="tooltip">Tambah</Link>
                  </div>
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nama Produk</th>
                            <th>Label</th>
                            <th>Deskripsi</th>
                            <th>Pemilik</th>
                            <th>Harga</th>
                            <th>Lokasi</th>
                            <th>Gambar</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                            <Link to="/edit" className="feather icon-edit text-warning" ></Link>
                            <Link to="/hapus" className="feather icon-trash mx-4 text-danger"></Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* [ stiped-table ] end */}
            </div>
            {/* [ Main Content ] end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            
    </div>
  );
}

export default IndexDataKatalog;
