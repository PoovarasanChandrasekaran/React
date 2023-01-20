import React, {useState}from "react";
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);

    }
    return (
        <form class="container" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <lable htmlfor="email" value="email">Email</lable>
            <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <lable htmlfor="password" value="password">Password</lable>
            <input type="password" onChange= {(e) => setPass(e.target.value)}></input>
            <button type="submit">Log in</button>
            <button class="blt-col" onClick={() =>props.onFormSwitch('Register')}>Don't have Account? Register here</button>

        </form>
    )
}