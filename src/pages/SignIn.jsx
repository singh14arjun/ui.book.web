import React, { useState } from 'react';
import '../assets/css/SignIn.css'

function SignIn() {
  const initialData = {
    userName: "",
    passWord: ""
  };

  const [loginFormData, setLoginFormData] = useState(initialData);

  const handleSignInFormData = (e) => {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    // Add your login logic here
  };

  return (
    <div className='  my-5 py-5'>
      <div className="signInForm">
        <h1>Sign-In Page For E-Book</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <label htmlFor="userName">UserName: </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={loginFormData.userName}
            onChange={handleSignInFormData}
            placeholder="Enter Username"
          />

          <label htmlFor="passWord">PassWord: </label>
          <input
            type="password"
            id="passWord"
            name="passWord"
            value={loginFormData.passWord}
            onChange={handleSignInFormData}
            placeholder="Enter Password"
          />

          <button type="submit" id='sbt' className='bg-amber-300 my-2 py-1.5' style={{borderRadius:"10px",color:"black", fontSize:"20px"}}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
