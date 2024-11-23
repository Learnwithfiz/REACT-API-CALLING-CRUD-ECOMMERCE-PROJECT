import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AddProduct()
{
    const [product,setProduct] = useState({});
    const [PrdImg,SetImg] = useState(null);
    const[display,SetDisplay] = useState([]);
    function ProductInfo(e)
    {
        if(e.target.name=='img')
        {
            SetImg(e.target.files[0]);
        }
        setProduct((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }
    function OnSubmitBnt()
    {
        const formData = new FormData();
        formData.append('product_name',product.product_name);
        formData.append('prod_title',product.prod_title);
        formData.append('prod_desc',product.prod_desc);
        formData.append('product_price',product.product_price);
        formData.append('prod_status',product.prod_status);
        formData.append('img',PrdImg);
       
        var url = 'http://localhost/batch-3/api/index.php';
        fetch(url,{
            method:"POST",
            body:formData
        }).then((res)=>{
            return res.json();
        }).then((response)=>{
           alert(response.msg)
        })
    }

//==============================fetch data from database Starts==================================>

    useEffect(()=>{
        var FetchUrl = 'http://localhost/batch-3/api/fetch.php';
        fetch(FetchUrl).then((res)=>{
            return res.json();
        }).then((data)=>{
            //console.log(data);
            SetDisplay(data.result);
        })
    },[])
 //==============================fetch data from database  Ends here==================================>


  return (
    <>
       <h1 className="bg-primary text-center p-2 text-white">Add Product </h1>
       <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="">Enter Product Name</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Name" className="form-control" name="product_name" />
                    <label htmlFor="">Enter Product product title</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product title" className="form-control" name="prod_title" />
                    <label htmlFor="">Enter Product Description</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Desc..." className="form-control" name="prod_desc" />
                    <label htmlFor="">Enter Product Price</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Price..." className="form-control" name="product_price" />
                    <label htmlFor="">Enter Product Status</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Status..." className="form-control" name="prod_status" />
                    <label htmlFor="">Enter Product Image</label>
                    <input onChange={ProductInfo} type="file"  className="form-control" name="img" />
                    <button onClick={OnSubmitBnt} className="bg-dark text-white p-2">Add Product</button>

                </div>
                <div className="col-lg-6">
                    <table className="table">
                        <thead>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Title</th>
                            <th>Product Price</th>
                            <th>Image</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {
                                display.length>0 ? display.map((row)=>(
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.product_name}</td>
                                        <td>{row.prod_title}</td>
                                        <td>{row.product_price}</td>
                                        <td><img height={50} width={50} src ={`http://localhost/batch-3/api/${row.img}`} alt="" /></td>
                                        <td><Link to={`/edit/${row.id}`}><button className="btn btn-primary " >Edit</button></Link></td>
                                        <td><Link to={`/delete/${row.id}`}><button className="btn btn-warning">Delete</button></Link></td>
                                    </tr>
                                )) : <h6>No Data Available</h6>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    </>
  )
} 
export default AddProduct;