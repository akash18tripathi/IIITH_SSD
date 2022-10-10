import React from 'react'

function Card(props) {

    return (

    <div>
        <label>Exam Name : {props.exam_name}</label>
        <label>Course Name : {props.course_name}</label>
        <label>Question Number: {props.qnum}</label>
        <label>TA roll number : {props.ta_roll}</label>
        <label>Your comment : {props.mycomm}</label>
        <label>TA comment : {props.tacomm}</label>

        
    </div>
    
    );
}

export default Card;