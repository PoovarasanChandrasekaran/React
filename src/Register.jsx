import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('email');

    }
    return (
        <form class="container" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <lable htmlfor="name" value ="name" >Name</lable>
            <input type="text"  name="name" id="name"  required pattern="hello"/>
            <lable htmlfor="email" value="email">Email</lable>
            <input type="email" onChange= {(e) => setEmail(e.target.value)} required/>
            <lable htmlfor="date" value="date">Dob</lable>
            <input type="date"required/>
            <lable htmlfor="password" value="password">Password</lable>
            <input type="password"  onChange= {(e) => setPass(e.target.value)} name="password" id="password"required/>
            <button type="submit">Log in</button>
            <button class="blt-col" onClick={() =>props.onFormSwitch('Login')}>Already have Account? Login here</button>

        </form>
    )

}