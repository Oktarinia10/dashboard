import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProducts } from '../../api';
import NavbarDashboard from "../../components/dashboard/navbar";

function TambahKatalog() {
  const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [name_product, label_product, description, owner, price, location, file] = useState('');
  console.log(name_product);

  const handleInputChange = (e) => {
    name_product(e.target.value);
    label_product(e.target.value);
    description(e.target.value);
    owner(e.target.value);
    price(e.target.value);
    location(e.target.value);
    file(e.target.value);
};
  useEffect(() => {
    const addDataFromAPI = async () => {
        try {
            await addProducts(name_product, label_product, description, owner, price, location, file);
           
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };
    addDataFromAPI();
}, [name_product, label_product, description, owner, price, location, file]);
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
                        <form onSubmit={handleInputChange} >
                          <div className="form-group">
                            <label>Nama Produk</label>
                            <input type="text" value={name_product} className="form-control"  />
                          </div>
                          <div className="form-group"> 
                            <label>Label</label>
                            <input type="text" value={owner} className="form-control"  />
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Pemilik</label>
                            <input type="text" value={owner} className="form-control"  />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Deskripsi</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""}>
                            {description}
                            </textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form onSubmit={handleInputChange}>
                          <div className="form-group">
                            <label>Harga</label>
                            <input type="text" value={price} className="form-control"  />
                          </div>
                          <div className="form-group">
                            <label>Lokasi</label>
                            <input type="text" value={location} className="form-control"  />
                          </div>
                          <div className="form-group">
                            <label>Gambar Thumbnail</label>
                            <input type="file" value={file} className="form-control"  />
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
