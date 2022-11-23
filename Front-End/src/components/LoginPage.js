import facebookIcon from "../my-facebook.svg";
import React, {useState} from "react";
import axios from "axios";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function Login(e) {
        e.preventDefault()

        const userObject = {
            user_name: userName,
            password: password
        }

        axios.post("http://localhost:4000/login", userObject)
            .then(() => {
                console.log("Logged in!")
            })

    }

    return (
        <>
            <div className="Facebook-title">
                <div>
                    <img src={facebookIcon} alt=""/>
                </div>
                <div>
                    <h5>Facebook helps you connect and share with the people in your life.</h5>
                </div>
            </div>

            <div className="form-container">
                <form className="my-form">
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        className="input-email"
                        type="email"
                        placeholder="Email address or phone number"/>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-password"
                        type="password"
                        placeholder="Password"/>

                    <button
                        onClick={Login}
                        className="btn-login">
                        Log in
                    </button>
                    <div className="forgotten-password-container">
                        <a
                            href="https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten
                            password?
                        </a>
                    </div>
                    <hr/>
                    <div className="btn-create-container">
                        <button
                            className="btn-create">
                            Create New Account
                        </button>
                    </div>
                </form>
                <div className="create-page">
                    <a href="https://web.facebook.com/pages/create/?ref_type=registration_form">Create Page</a>
                    <span> for a celebrity, brand or business.</span>
                </div>
            </div>
        </>
    )
}