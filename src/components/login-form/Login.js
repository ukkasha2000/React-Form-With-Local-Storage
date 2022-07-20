import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import SubmitButton from '../submit-button/SubmitButton';

const Login = () => {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate('/');
    };
    const[input,setInput] = useState({
        email: "",
        password: "",
    });
    // const [inputEmail, setInputEmail] = useState("");
    // const [inputPassword, setInputPassword] = useState("");
    // const checkPerson = {
    //     email: inputEmail,
    //     password: inputPassword,
    // }
    let userCheck=false;
    function handleSubmit(e) {
        e.preventDefault();
        let userArray = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i].email.toLowerCase() == input.email.toLowerCase() && userArray[i].password == input.password) {
                userCheck = true;
            }
        }
        if (userCheck == true) {
            alert("Cograts You are now Logged In");
            setInput({email:"",password:""});
        }
        else{
            alert("Invalid Email Or Password");
        }
    }


    return (
        <div>
            <div className="container">
                <h2 className='registrationFormHeading'>Login Form</h2>
                <form onSubmit={handleSubmit}>

                    <div className="box">
                        <label htmlFor="email" className="fl fontLabel"> Email ID: </label>
                        <div className="fl iconBox"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="fr">
                            <input type="text"  value={input.email} onChange={(e) => setInput({...input,email:e.target.value})} name="email" placeholder="Email Id" className="textBox" pattern='[A-Za-z0-9_.]{3,}[@][A-Za-z]{3,}[.][A-Za-z]{2,}' required />
                        </div>
                    </div>


                    <div className="box mt-4">
                        <label htmlFor="password" className="fl fontLabel"> Password </label>
                        <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
                        <div className="fr">
                            <input type="Password" value={input.password} onChange={(e) => setInput({...input,password:e.target.value})} minLength='8' name="password" placeholder="Password" className="textBox" required />
                        </div>
                    </div>


                    {/* style="background: #2d3e3f" */}
                    <div className="box submit-btn-box mt-5">
                        {<SubmitButton defaultValue={"Login"}/> }
                    </div>
                </form>
                <p className='mt-2 login-para'>Already a member? &nbsp;<a onClick={goToRegister}>Signup here</a></p>
            </div>
        </div>
    );
}

export default Login;