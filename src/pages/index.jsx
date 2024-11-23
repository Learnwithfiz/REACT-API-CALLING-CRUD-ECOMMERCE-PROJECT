import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css'
function OnIndex()
{
    const[display,SetDisplay] = useState([]);
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
       <div className="container">
       <div className="row">
          {
            display.length>0 ? display.map((row)=>(
               
                    <div className="col-lg-4">
                       <Link to={`/product-view/${row.id}`}>
                       <div className="card">
                            <div className="img">
                                <img src ={`http://localhost/batch-3/api/${row.img}`} alt="" />
                            </div>
                            <div className="card-title">
                                <h2 className="mt-2 text-primary">{row.product_name}</h2>
                                <h3>{row.prod_title}</h3>
                                <h4>{row.product_price}</h4>
                            </div>
                        </div>
                       </Link>
                    </div>
                
            )) : <h6>No Data Available</h6>
          }
          </div>
       </div>
    </>
  )
} 
export default OnIndex;