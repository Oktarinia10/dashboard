import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarDashboard from "../../components/dashboard/navbar";
import { getProductsByID } from '../../api';
import { putEditProduct } from '../../api';


function EditKatalog() {
  const {id_product} = useParams();
  const cdnLink = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [idProduct, setIdProducts] = useState([]);
  const [owner, setOwner] = useState([]);
  const [name, setName] = useState([]);
  const [label, setLabel] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [location, setLokasi] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [formData, setFormData] = useState({
    id_product: id_product,
    name: "",
    label: "",
    description: "",
    owner: "",
    price: "",
    location: "",
    // file: "", // Untuk mengunggah file gambar
    thumbnail: "", // Untuk mengunggah file gambar
  });

  useEffect(() => {
      const fetchDataFromAPI = async () => {
          try {
              const responseData = await getProductsByID(id_product);
              
              // setIdProducts(responseData.data);
              // setOwner(responseData.data.product.owner);
              // setName(responseData.data.product.name);
              // setLabel(responseData.data.product.label);
              // setDescription(responseData.data.product.description);
              // setPrice(responseData.data.product.price);
              // setLokasi(responseData.data.product.location);
              // setThumbnail(responseData.data.product.thumbnail);
              setFormData({ 
                id_product: responseData.data.product.id_product,
                name: responseData.data.product.name,
                label: responseData.data.product.label,
                description: responseData.data.product.description,
                owner: responseData.data.product.owner,
                price: responseData.data.product.price,
                location: responseData.data.product.location,
                // file: responseData.data.product.file,
                thumbnail: responseData.data.product.thumbnail,
                })
              
          } catch (error) {
              console.error('Terjadi kesalahan:', error);
          }
      };

      fetchDataFromAPI();
  }, [id_product]);

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
  
  // proses update
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Memanggil fungsi putEditProduct untuk mengirim data ke API
    try {
      const response = await putEditProduct(id_product, formData);
      
     
      setAlertVisible(true);
      // Respons dari API akan bisa digunakan di sini jika diperlukan
      console.log("Respons dari API:", response);

      // Setelah pengiriman data, Anda bisa mengosongkan form jika diperlukan
      setFormData({
        id_product: id_product,
        name: "",
        label: "",
        description: "",
        owner: "",
        price: "",
        location: "",
        // file: "",
        thumbnail: "",
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
                    <h5>Form Edit Produk</h5>
                  </div>
                  <div className="card-body">
                    
                    <div className="row">
                      <div className="col-md-6">
                        <form onSubmit={handleUpdate} >
                        <input type="text" hidden id="id_product" name="id_product" value={formData.id_product} onChange={handleInputChange}>
                            </input>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nama Produk</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="name"
                                name="name" value={formData.name} 
                                onChange={handleInputChange}>
                            </input>
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Label</label>
                            <input type="text"  className="form-control"
                                id="label"
                                name="label" value={formData.label} onChange={handleInputChange}></input>
                          </div>
                          <div className="form-group"> 
                            <label htmlFor="exampleInputPassword1">Pemilik</label>
                            <input type="text"  className="form-control"
                                id="owner"
                                name="owner" value={formData.owner} onChange={handleInputChange}></input>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Deskripsi</label>
                            <textarea value={formData.description}  className="form-control"
                                id="description"
                                name="description" rows={3} onChange={handleInputChange}></textarea>
                          </div>
                          <div className="form-group">
                            <label>Harga</label>
                            <input type="text"
                                className="form-control"
                                id="price"
                                name="price" value={formData.price} onChange={handleInputChange}></input>
                          </div>
                          <div className="form-group">
                            <label>Lokasi</label>
                            <input type="text"
                                className="form-control"
                                id="location"
                                name="location" value={formData.location} onChange={handleInputChange}></input>
                          </div>
                          <div className="form-group">
                            <label>Gambar Thumbnail</label>
                            <input
                                type="file"
                                className="form-control"
                                id="thumbnail"
                                name="thumbnail"
                                onChange={handleInputChange}
                            />
                            <img src={cdnLink + formData.thumbnail} 
                                 height="50" onChange={handleInputChange}></img>
                          </div>
                          <button onClick={handleUpdate} className="btn btn-primary">Submit</button>
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
