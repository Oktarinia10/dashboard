import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProducts } from '../../api';
import NavbarDashboard from "../../components/dashboard/navbar";



function TambahKatalog() {
  const [isLoading, setLoading] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [name, label, description, owner, price, location, file] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    label: "",
    description: "",
    owner: "",
    price: "",
    location: "",
    file: null, // Untuk mengunggah file gambar
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Memanggil fungsi addProducts untuk mengirim data ke API
    try {
      const response = await addProducts(
          formData.name,
          formData.label,
          formData.description,
          formData.owner,
          formData.price,
          formData.location,
          formData.file
      );
      setAlertVisible(true);
      // Respons dari API akan bisa digunakan di sini jika diperlukan
      console.log("Respons dari API:", response);

      // Setelah pengiriman data, Anda bisa mengosongkan form jika diperlukan
      setFormData({
        name: "",
        label: "",
        description: "",
        owner: "",
        price: "",
        location: "",
        file: null,
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
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
                    {isAlertVisible && (
                        <div className="alert alert-success">
                          Formulir berhasil dikirim!
                        </div>
                    )}
                      <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="d-flex flex-wrap">
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="name">Nama Produk</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="label">Label</label>
                            <input
                                type="text"
                                className="form-control"
                                id="label"
                                name="label"
                                value={formData.label}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="description">Deskripsi</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="owner">Pemilik</label>
                            <input
                                type="text"
                                className="form-control"
                                id="owner"
                                name="owner"
                                value={formData.owner}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="price">Harga</label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="location">Lokasi</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group flex-grow-1 p-2">
                            <label htmlFor="file">Gambar Thumbnail</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                name="file"
                                onChange={handleInputChange}
                            />
                          </div>
                          <button
                              type="submit"
                              className={`btn btn-primary ${isLoading ? 'disabled' : ''}`}
                              disabled={isLoading}
                          >
                            {isLoading ? 'Loading...' : 'Kirim'}
                          </button>
                        </form>
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
