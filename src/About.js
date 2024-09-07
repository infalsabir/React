// import React from "react"
// import { useState } from "react";

// function About(){
//     const [name, setName] = useState("")
//     return(
//         <div className="App">
//           <input type="text" placeholder="Enter your name" 
//           onChange={(e)=> setName (e.target.value)}/>
//          <p>Hello{name}</p>
//         </div>
//         );
// }
// export default About;
import { useState } from "react";
import React from 'react'
function About() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(email === 'infal@gmail.com' && password === "password"){
            setTimeout(()=>{
                setSuccess(true);
                setTimeout(()=> setSuccess(false), 2000);
            }, 2000)
        }else{
            setTimeout(()=>{
                setError(true);
                setTimeout(()=> setError(false), 2000);
            }, 2000)
        }
    }
    return (
       
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <input type="password" placeholder="Enter your password"
                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">Login</button>
            </form>
            {success && <p style={{ color: "green" }}>Login Successfull</p>
            }
            {error && <p style={{ color: "red" }}>Are you a hacker or just forgetful? Try again😁</p>}
        </div>
    )
}

export default About