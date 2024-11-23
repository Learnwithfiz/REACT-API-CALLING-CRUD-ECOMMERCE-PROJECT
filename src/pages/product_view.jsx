import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

function ProdView()
{
     const {id} = useParams();
     const [display,SetDisplay] = useState([]);
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
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src ={`http://localhost/batch-3/api/${display.img}`} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <table className="table">
                            <tr>
                            <th>  <h2>{display.product_name}</h2> </th>
                            </tr>
                            <tr>
                            <th>  <h2>{display.prod_title}</h2> </th>
                            </tr>
                            <tr>
                            <th>  <h2>{display.prod_desc}</h2> </th>
                            </tr>
                            <tr>
                            <th>  <h2>{display.product_price}</h2> </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProdView;