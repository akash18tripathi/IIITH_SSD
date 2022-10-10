import "../common.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from "./Card.js"

const BACKEND_URI = "http://localhost:3006/std/";

function Student(props) {
    const [queries,setQuery] = useState([]);
    const navigate = useNavigate();
    function getMongoData(){
        const requestOptions = {
            method : 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        var fetchRes = fetch(BACKEND_URI+"getMongoData", requestOptions);
        fetchRes.then(res =>
            res.json()).then(d => { 
                setQuery(d.data)
            })

    }
    const navigateToLogin = () => {
        navigate('/');
    }

    useEffect(()=>{
        if(sessionStorage.getItem("curr_role")!="Student"){
            navigateToLogin();
          }
        getMongoData();
    },[]);
    
    
    const navigateToProfile = () => {
        navigate('/student/addQuery');
        
    }

    return (
        <div>
    <form>
        <button type="button" onClick={navigateToProfile}> Add Query </button>
        
    </form>
    <div>
        {
            queries.map((element, i)=>{
                console.log(element);
                return <div>
                    <Card exam_name={element.exam_name} course_name={element.course_name} qnum={element.question_num} ta_roll={element.ta_roll} mycomm={element.std_comment} tacomm={element.ta_comment} key={i}/>
            
                    </div>
            })
        }
    </div>
    </div>
    
    );
}

export default Student;