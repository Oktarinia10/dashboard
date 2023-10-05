const base_url = "https://terangnesia-api-y2vek.ondigitalocean.app/terangnesia/api/v1/";
const base_url_admin = "https://terangnesia-api-y2vek.ondigitalocean.app/terangnesia/admin/api/v1/";
const x_api_key = "12345678";

export async function fetchProducts(limit, offset) {
    try {
        const url = base_url + `products/?limit=${limit}&offset=${offset}`;
       
        const headers = new Headers();
        headers.set('X-Api-Key', x_api_key);

        const response = await fetch(url, {method: 'GET', headers});
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}
 // show data edit
export async function getProductsByID(id_product) {
    try {
        const url = base_url + `find-product` + `/` + id_product;
        // console.log(url);
        const headers = new Headers();
        headers.set('X-Api-Key', x_api_key);

        const response = await fetch(url, {method: 'GET', headers});
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        
        
        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}
 // proses edit data
// export async function putEditProduct(id_product, formData) {
//     try {
//         const url = base_url_admin + `edit-product` + `/` + id_product;
        
//         const headers = new Headers();
//         headers.set('X-Api-Key', x_api_key);
//         headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY0NTU4MTMsImlhdCI6MTY5NjE2NzgxMywiaXNzIjoiMTZkYmNlMzYtYWUzNi00ZGE3LWE0YTQtZTcxYWI4OWU3ZDhmIiwic3ViIjoiUmVuZHJhIFRyaSBLdXN1bWEifQ.jPn8-osqgjiBALcrSpFM2iQKFUk0JOgrDbQbvNx2gMY');

//         const body = new FormData();
//         body.append('id_product', formData.id_product);
//         body.append('name', formData.name);
//         body.append('label', formData.label);
//         body.append('description', formData.description);
//         body.append('owner', formData.owner);
//         body.append('price', formData.price);
//         body.append('location', formData.location);
//         body.append('thumbnail', formData.thumbnail);
//         console.log(formData);

//         const response = await fetch(url, {method: 'PUT', headers, body});
//         if (!response.ok) {
//             throw new Error('Gagal mengambil data dari API');
//         }
//         const responseData = await response.json();
//         console.log(responseData);

//         return responseData;
//     } catch (error) {
//         console.error('Terjadi kesalahan:', error);
//         throw error; // Melempar kembali error untuk penanganan lebih lanjut
//     }
// }

export async function putEditProduct(id_product, formData) {
    try {
        const url = `${base_url_admin}edit-product/`;
        
        const headers = new Headers({
            'X-Api-Key': x_api_key,
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY0NTU4MTMsImlhdCI6MTY5NjE2NzgxMywiaXNzIjoiMTZkYmNlMzYtYWUzNi00ZGE3LWE0YTQtZTcxYWI4OWU3ZDhmIiwic3ViIjoiUmVuZHJhIFRyaSBLdXN1bWEifQ.jPn8-osqgjiBALcrSpFM2iQKFUk0JOgrDbQbvNx2gMY',
        });

        const body = new FormData();
        body.append('id_product', formData.id_product);
        body.append('name', formData.name);
        body.append('label', formData.label);
        body.append('description', formData.description);
        body.append('owner', formData.owner);
        body.append('price', formData.price);
        body.append('location', formData.location);
        body.append('thumbnail', formData.thumbnail);

        console.log(formData);

        const response = await fetch(url, { method: 'PUT', headers, body });

        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }

        const responseData = await response.json();
        console.log(responseData);

        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}


export async function addProducts(name_product, label_product, description, owner, price, location, file) {
    try {
        const url = base_url_admin + `add-product`;
        const headers = new Headers();
        headers.set('X-Api-Key', x_api_key);
        headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTYxOTE3MjcsImlhdCI6MTY5NTkwMzcyNywiaXNzIjoiMTZkYmNlMzYtYWUzNi00ZGE3LWE0YTQtZTcxYWI4OWU3ZDhmIiwic3ViIjoiUmVuZHJhIFRyaSBLdXN1bWEifQ.IYFw3ty2JhijJisyDtxZ3yJsWoujS4cePipEDXz97lg');

        const body = new FormData();
        body.set('name_product', name_product);
        body.set('label_product', label_product);
        body.set('description', description);
        body.set('owner', owner);
        body.set('price', price);
        body.set('location', location);
        body.set('file', file);
        const response = await fetch(url, {method: 'POST', headers, body});
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}

export async function getProductsByLabel(label) {
    try {
        const url = base_url + `product-category?label=${label}`;
        const headers = new Headers();
        headers.set('X-Api-Key', x_api_key);

        const response = await fetch(url, {method: 'GET', headers});
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}