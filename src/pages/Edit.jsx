import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function OnEdit()
{ 
    const [display,SetDisplay] = useState({
        product_name:"",
        prod_title:"",
        prod_desc:"",
        product_price:"",
        prod_status:"",
        img:""
    });
    const [PrdImg,SetImg] = useState(null);
    const {id} = useParams();
    //==============================fetch data from database Starts==================================>

        useEffect(()=>{
            var FetchUrl = 'http://localhost/batch-3/api/product_wise_view_controller.php?id='+id;
            fetch(FetchUrl).then((res)=>{
                return res.json();
            }).then((data)=>{
              //  console.log(data);
                SetDisplay(data.result[0]);
            })
        },[id]);
     //==============================fetch data from database  Ends here==================================>
    
    function ProductInfo(e)
    {
        if(e.target.name=='img')
            {
                SetImg(e.target.files[0]);
            }
            SetDisplay((prevData)=>({
                ...prevData,
                [e.target.name]:e.target.value
            }))
    }
    function OnSubmitBnt()
    {
        const formData = new FormData();
        formData.append('product_name',display.product_name);
        formData.append('prod_title',display.prod_title);
        formData.append('prod_desc',display.prod_desc);
        formData.append('product_price',display.product_price);
        formData.append('prod_status',display.prod_status);
        formData.append('img',PrdImg);
        formData.append('id',display.id);
       
        var url = 'http://localhost/batch-3/api/update_controller.php';
        fetch(url,{
            method:"POST",
            body:formData
        }).then((res)=>{
            return res.json();
        }).then((response)=>{
           alert(response.msg)
        })
    }
    return (
        <>
           <h1 className="bg-success text-white text-center p-3 ">Product Update Page </h1>

           <div className="container">
            <div className="row">
                {
                    display ?  <div className="col-lg-6">
                    <label htmlFor="">Enter Product Name</label>
                    <input value={display.product_name} onChange={ProductInfo} type="text" placeholder="Enter product Name" className="form-control" name="product_name" />
                    <label htmlFor="">Enter Product product title</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product title" className="form-control" name="prod_title"  value={display.prod_title} />
                    <label htmlFor="">Enter Product Description</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Desc..." className="form-control" name="prod_desc" value={display.prod_desc} />
                    <label htmlFor="">Enter Product Price</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Price..." className="form-control" name="product_price" value={display.product_price} />
                    <label htmlFor="">Enter Product Status</label>
                    <input onChange={ProductInfo} type="text" placeholder="Enter product Status..." className="form-control" name="prod_status" value={display.prod_status} />
                    <label htmlFor="">Enter Product Image</label>
                    <input type="hidden"onChange={ProductInfo} name="id"  value={id} />
                    <input onChange={ProductInfo} type="file"  className="form-control" name="img" />
                    <button onClick={OnSubmitBnt} className="bg-dark text-white p-2">Update Product</button>

                </div> : <p>No Data Available</p>
                }
               
              
            </div>
       </div>

        </>
    )
}
export default OnEdit;