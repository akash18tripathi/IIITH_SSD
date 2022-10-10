import "../common.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3006/std/";

// functional component
function StudentQuery(props) {

    const [exam_name, setExamName] = useState("");
    const [course_name, setCourseName] = useState("");
    const [question_num, setQuestionNumber] = useState(0); 
    const [ta_roll, setTaRoll] = useState("2022201053");
    const [std_comment, setSTDComment] = useState("");
    

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/student/addQuery');
    }
    const navigateToLogin = () => {
      navigate('/');
  }

    useEffect(()=>{
      if(sessionStorage.getItem("curr_role")!="Student"){
        navigateToLogin();
      }
  },[]);
    

    return (
        <div className="container">
        <form action="">
        <div className="row">
          <div className="col-25">
            <label >Exam Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="examname" placeholder="Exam name.." value={exam_name}  onChange={(e) => setExamName(e.target.value)}required/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Course Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="coursename" placeholder="Your Course name.." value={course_name} onChange={(e) => setCourseName(e.target.value)} required/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Question Number</label>
          </div>
          <div className="col-75">
            <input type="number" id="questionnumber" placeholder="Question number.." value={question_num} onChange={(e) => setQuestionNumber(e.target.value)} required/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>TA roll number</label>
          </div>
          <div className="col-75">
            <select id="ta_roll" onChange={(e) => setTaRoll(e.target.value)}>
             <option value="none" disabled hidden>Select a TA</option>
              <option value="2022201053">2022201053</option>
              <option value="2022201049">2022201049</option>
              <option value="2022201045">2022201045</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Comments/Concerns</label>
          </div>
          <div className="col-75">
            <textarea id="comments" placeholder="Write something.." value={std_comment} onChange={(e) => setSTDComment(e.target.value)} style={{height:200+"px"}}></textarea>
          </div>
        </div>
        <br/>
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({
                        exam_name: exam_name,
                        course_name: course_name,
                        question_num: question_num,
                        ta_roll: ta_roll,
                        std_roll : sessionStorage.getItem("curr_email"),
                        ta_comment:"",
                        std_comment: std_comment,
                        isActive : true
                    })
                    //email : email, password : password , role: role
                };
                var res = await fetch(BACKEND_URI+"sendQuery", requestOptions);
                //console.log(res.body);
                alert("Query Sent succesfully!");
                setExamName("");
                setCourseName("");
                setQuestionNumber(0);
                setSTDComment("");

            }}>Submit</button>

      </div>
    );
}

export default StudentQuery;