import {useHistory} from "react-router-dom"


function SignUp(){

    let history = useHistory();

    const register = (()=>{
        history.push("/home");
    })

    return(
        <div className="container">

            <h1>Sign Up</h1>
            <input type="email" placeholder="Enter your email"/><br></br>
            <input type="password" placeholder="Enter your password"/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>Sign SignUp</button>
        </div>
    )
}

export default SignUp