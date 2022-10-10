import "../common.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TACard from "./TACard.js"

const BACKEND_URI = "http://localhost:3006/std/";

// functional component
function TAS(props) {
    
    const [queries,setQuery] = useState([]);
    const navigate = useNavigate();
    function getMongoData(){
        const requestOptions = {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({                
                ta_roll: sessionStorage.getItem('curr_email')
            })

        };
        var fetchRes = fetch(BACKEND_URI+"getMongoDataTA", requestOptions);
        fetchRes.then(res =>
        res.json()).then(d => { 
            setQuery(d.data)
        })

    }
    const navigateToLogin = () => {
        navigate('/');
    }

    useEffect(()=>{
        if(sessionStorage.getItem("curr_role")!="TA"){
            navigateToLogin();
        }
        getMongoData();
    },[]);
    

    return (
        <div>
    
    <div>
        {
            queries.map((element, i)=>{
                console.log(element.course_name);
                return <div>
                    <TACard id={element._id} exam_name={element.exam_name} course_name={element.course_name} qnum={element.question_num} ta_roll={element.ta_roll} mycomm={element.std_comment} tacomm={element.ta_comment} key={i}/>
                    </div>
            })
        }
    </div>
    </div>
    
    );
}

export default TAS;