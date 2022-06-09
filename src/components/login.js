import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

function Login(){

    let history = useHistory();

    const login = (()=>{
        history.push("/home");
    })
    return(
        <div className="container">

            <h1>Login</h1>
            <input type="email" placeholder="Enter your email"/><br></br>
            <input type="password" placeholder="Enter your password"/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={login}>Login</button>

            <span>Don't have an account?</span> <span>
                <Link to="/sign-up">Create an account here</Link>
                
            </span>
        </div>
    )
}

export default Login