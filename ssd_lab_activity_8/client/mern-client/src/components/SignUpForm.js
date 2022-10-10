import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../common.css"

const BACKEND_URI = "http://localhost:3006/api/";

// functional component
function SignUpForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [role, setRole] = useState("TA"); 


    return (
    <div className="center-div">
        <h1 className='text-center'>Sign Up</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Roll number : </label>
            <br/>
            <input className='m-2 form-control' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>    
            <label>Select Role:</label>
            <select id="role" name="role"  onChange={(e) => setRole(e.target.value) }>
            <option value="TA">TA</option>
            <option value="Student">Student</option>
            </select>     
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ email : email, password : password , role: role })
                };
                var res = await fetch(BACKEND_URI + "register", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
            }}>Sign Up</button>
            <br/>
            <p className='m-4'>Already Registered ? <Link to='/login'> Login Here</Link></p> 
    </div>);
}

export default SignUpForm;