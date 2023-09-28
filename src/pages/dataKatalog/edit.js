import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarDashboard from "../../components/dashboard/navbar";
import { getProductsByID } from '../../api';


function EditKatalog() {
  const {id_product} = useParams();
  const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [idProduct, setIdProducts] = useState([]);
  const [owner, setOwner] = useState([]);
  const [name, setName] = useState([]);
  const [label, setLabel] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [location, setLokasi] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
      const fetchDataFromAPI = async () => {
          try {
              const responseData = await getProductsByID(id_product);
              setIdProducts(responseData.data);
              setOwner(responseData.data.product.owner);
              setName(responseData.data.product.name);
              setLabel(responseData.data.product.label);
              setDescription(responseData.data.product.description);
              setPrice(responseData.data.product.price);
              setLokasi(responseData.data.product.location);
              setThumbnail(responseData.data.product.thumbnail);
              
          } catch (error) {
              console.error('Terjadi kesalahan:', error);
          }
      };

      fetchDataFromAPI();
  }, [id_product]);
  
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
                    <h5>Form Edit Produk</h5>
                  </div>
                  <div className="card-body">
                    
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nama Produk</label>
                            <input type="text" className="form-control" value={name}></input>
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Label</label>
                            <input type="text" className="form-control" value={label}></input>
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Pemilik</label>
                            <input type="text" className="form-control" value={owner}></input>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Deskripsi</label>
                            <textarea value={description} className="form-control" rows={3}></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="form-group">
                            <label>Harga</label>
                            <input type="text" className="form-control" value={price}></input>
                          </div>
                          <div className="form-group">
                            <label>Lokasi</label>
                            <input type="text" className="form-control" value={location}></input>
                          </div>
                          <div className="form-group">
                            <label>Gambar Thumbnail</label>
                            <img src={cdnLink + thumbnail} height="50"></img>
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

export default EditKatalog;
