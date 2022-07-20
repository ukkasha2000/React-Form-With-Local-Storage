import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import SubmitButton from '../submit-button/SubmitButton';

const RegistrationForm = () => {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('login');
    };
    const[input,setInput] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        gender: "M",
    });

    // const [inputFName, setInputFName] = useState("");
    // const [inputLName, setInputLName] = useState("");
    // const [inputPhone, setInputPhone] = useState("");
    // const [inputEmail, setInputEmail] = useState("");
    // const [inputPassword, setInputPassword] = useState("");
    // const [inputGender, setInputGender] = useState("Male");
    // const person = {
    //     firstName: inputFName,
    //     lastName: inputLName,
    //     phone: inputPhone,
    //     email: inputEmail,
    //     password: inputPassword,
    //     gender: inputGender
    // }
    let check=true;

    function handleSubmit(e) {
        e.preventDefault();

        let userArray = JSON.parse(localStorage.getItem("users")) || [];
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i].email.toLowerCase() == input.email.toLowerCase()) {
                check = false;
            }
        }
        if (check == false) {
            alert("User Already Exists");
        }
        else {
            userArray.push(input);
            localStorage.setItem("users", JSON.stringify(userArray));
            alert("Congratulations!!! You are now Registered");
            // setInputFName("");
            // setInputLName("");
            // setInputPhone("");
            // setInputEmail("");
            // setInputPassword("");
            // setInputGender("M");
            setInput({firstName:"",lastName:"",phone:"",email:"",password:"",gender:"M"});
            check=true;
            navigate('login');
        }
    }

    return (
        <div className="container">
            <h2 className='registrationFormHeading'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <label htmlFor="firstName" className="fl fontLabel"> First Name: </label>
                    <div className="new iconBox">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="fr">
                        <input type="text" value={input.firstName} onChange={(e) => setInput({...input,firstName:e.target.value})} name="firstName" placeholder="First Name" className="textBox" pattern='[A-Za-z ]{1,}' required />
                    </div>
                </div>




                <div className="box">
                    <label htmlFor="lastName" className="fl fontLabel"> Last Name: </label>
                    <div className="fl iconBox"><i className="fa fa-user" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="text" value={input.lastName} onChange={(e) => setInput({...input,lastName:e.target.value})} name="lastName" placeholder="Last Name" className="textBox" pattern='[A-Za-z ]{1,}' />
                    </div>
                </div>


                <div className="box">
                    <label htmlFor="phone" className="fl fontLabel"> Phone No.: </label>
                    <div className="fl iconBox"><i className="fa fa-phone-square" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="tel" value={input.phone} onChange={(e) => setInput({...input,phone:e.target.value})} name="phoneNo" maxLength='11' placeholder="Phone No." className="textBox" pattern='[0-9]{11}' required />
                    </div>
                </div>




                <div className="box">
                    <label htmlFor="email" className="fl fontLabel"> Email ID: </label>
                    <div className="fl iconBox"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="text" value={input.email} onChange={(e) => setInput({...input,email:e.target.value})} name="email" placeholder="Email Id" className="textBox" pattern='[A-Za-z0-9_.]{3,}[@][A-Za-z]{3,}[.][A-Za-z]{2,}' required />
                    </div>
                </div>




                <div className="box">
                    <label htmlFor="password" className="fl fontLabel"> Password </label>
                    <div className="fl iconBox"><i className="fa fa-key" aria-hidden="true"></i></div>
                    <div className="fr">
                        <input type="Password" value={input.password} onChange={(e) => setInput({...input,password:e.target.value})} minLength='8' name="password" placeholder="Password" className="textBox" required />
                    </div>
                </div>



                <div className="box radio">
                    <label htmlFor="gender" className="fl fontLabel"> Gender: </label>
                    <input type="radio" onChange={(e) => setInput({...input,gender:e.target.value})} name="Gender" defaultValue="Male" defaultChecked required /> Male &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" onChange={(e) => setInput({...input,gender:e.target.value})} name="Gender" defaultValue="Female" required /> Female
                </div>

                <div className="box submit-btn-box">
                    {<SubmitButton defaultValue={"Register"}/> }
                </div>
            </form>
            <p className='mt-2 login-para'>Already a member? &nbsp;<a onClick={goToLogin}>Login here</a></p>
            
        </div>
    );
}

export default RegistrationForm;