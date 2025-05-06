
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {

    const initialStateData = {
        userName: "",
        email: "",
        passWord: "",
        firstName: "",
        lastName: ""
    }
    const [formData, setFormData] = useState(initialStateData);
    


    // console.log(formData.userName)
    const handleFormData = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const showFormData= (event)=>{
        event.preventDefault();
         console.log(formData)
    }
    return (
        <div>
            <div className="singUpPage" >
                <h1 className='font-extrabold text-4xl text-fuchsia-600' style={{textAlign:"center" , margin:"20px"}}>SingUP Page For E-Book</h1>
                <form action="" className='text-cyan-400' autoComplete='off' onSubmit={showFormData} >
                    <label htmlFor="userName" >UserName</label>
                    <input type="text"
                        name='userName'
                        id='userName'
                        value={formData.userName}
                        onChange={handleFormData}
                        placeholder='Enter UserName'
                        required
                    />
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleFormData}
                        placeholder='Enter Email'
                        required
                    />
                    <label htmlFor="passWord">Password</label>
                    <input type="password" 
                    name='passWord'
                    id='passWord'
                    value={formData.passWord}
                    onChange={handleFormData}
                    placeholder='Enter Password'
                    autoComplete='off'
                    required
                    />
                    <label htmlFor="firstName">FirstName :</label>
                    <input type="text"
                    name='firstName'
                    id='firstName'
                    value={formData.firstName}
                    onChange={handleFormData}
                    placeholder='Enter FirstName'
                    required
                    />
                    <label htmlFor="lastName">LastName :</label>
                    <input type="text"
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleFormData}
                    placeholder='Enter LastName'
                    required
                    />

                    <button type='submit'>Submit</button>
                    {/* <h3><Link to={"signIn"}>Already Have Account</Link></h3> */}
                </form>
            </div>


        </div>
    )
}

export default SignUp