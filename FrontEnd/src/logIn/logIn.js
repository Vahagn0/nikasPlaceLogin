import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LogIn({setToken}){

const navigate = useNavigate()
const [incorrect,setIncorrect] = useState(false)

function handleSubmit(username,password){
    fetch("http://localhost:8080/",
    {
        headers: {
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then((response) => response.json())
    .then((user) => {
        if(user.status == true){
            setToken(user.token)
            navigate(`/users`)
            localStorage.setItem('token', user.token)
        }else{
            setIncorrect(true)
        } 
    })
}

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        }
    })


    return(
        <div className="loginDIv" >
            <form className="loginForm"
                onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit(formik.values.username,formik.values.password)
            }}>
                <input
                className="loginInput"
                type="text"
                placeholder="username" 
                name="username"
                required
                onChange={formik.handleChange}
                value={formik.values.username}
                />
                <input
                className="loginInput"
                type="password"
                placeholder="password" 
                name="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                {incorrect &&
                    <p className="incorrectText">username or password is incorrect</p>
                }
                <button className="loginButton">submit</button>
            </form>
        </div>
    )
}

export default LogIn