import React from 'react'
import { useState } from 'react';


const BACKEND_URI = "http://localhost:3006/std/";


function TACard(props) {

    const [taResponse, setTAResponse] = useState("");

    
    function getFunc(){
        console.log(taResponse);
        const requestOptions = {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({                
                ta_response:taResponse,
                id: props.id
            })
            //email : email, password : password , role: role
        };
        var res = fetch(BACKEND_URI+"postResponse", requestOptions);
        //console.log(res.body);
        alert("Query Sent succesfully!");
        
    }
    return (

    <div>
        <label>Exam Name : {props.exam_name}</label>
        <label>Course Name : {props.course_name}</label>
        <label>Question Number: {props.qnum}</label>
        <label>TA roll number : {props.ta_roll}</label>
        <label>Students comment : {props.mycomm}</label>
        <label>Your Response : </label>
        <textarea id="taComm" onChange={(e) => setTAResponse(e.target.value)}>Enter text here...</textarea>
        <form>
        <button type="button" onClick={getFunc}> Post </button>
        </form>

        <br></br>
    </div>
    
    );
}

export default TACard;