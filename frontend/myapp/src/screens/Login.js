import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [credentials,setcredentials] = useState({email:"",password:""})

  const handeSubmit = async(e)=>{
    e.preventDefault();
    try {
      console.log(JSON.stringify({
        email:credentials.email,
        password:credentials.password,
      }))
      const response = await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:credentials.email,
        password:credentials.password,
      })
    })
    const json = await response.json();
    console.log(json)

    if(!json.success){
      alert("Enter valid credentials!")
    }
    } catch (error) {
      console.log("testsetestsetetse")
      console.log(error)
    }


    
  }

  const onChange = (event) =>{
    setcredentials({
      ...credentials,
      [event.target.name]:event.target.value
    })
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handeSubmit}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
               value={credentials.password}
               onChange={onChange}
            />
          </div>
          

          <button type="submit" className="btn btn-success">
            Submit
          </button>

          <Link to ="/createuser" className="m-3 btn btn-danger">I'm a new User</Link>
        </form>
      </div>
    </>
  )
}
