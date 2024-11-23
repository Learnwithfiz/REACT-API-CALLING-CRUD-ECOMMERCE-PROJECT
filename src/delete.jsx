import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function OnDelete()
{
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        var FetchUrl = 'http://localhost/batch-3/api/delete_controller.php?id='+id;
        fetch(FetchUrl).then((res)=>{
            return res.json();
        }).then((data)=>{
         /// console.log(data.status_code)
          if(data.status_code==200)
          {
            navigate('/product');
            
          }
           
        })
    },[id])
    return (
        <>
          {id}
        </>
    )
}
export default OnDelete;