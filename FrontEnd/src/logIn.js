import { useField, useFormik } from "formik"

function handleSubmit(username,password){
    fetch(`http://localhost:3001/${username}/${password}`)
    .then((response) => response.json())
    .then((user) => {
        localStorage.setItem('token', user.token)
    })
}

function LogIn(){

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        }
    })


    return(
        <div className="logIn">
            <form onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit(formik.values.username,formik.values.password)
            }}>
                <input
                type="text"
                placeholder="username" 
                name="username"
                required
                onChange={formik.handleChange}
                value={formik.values.username}
                />
                <input
                type="text"
                placeholder="password" 
                name="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default LogIn