import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUp } from '../auth';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    const onSubmit  = (data, e) => {
        signUp(data)
        .then(dataInput => {
            if(dataInput.error){
              setError(dataInput.error)
            } else {
                e.target.reset()
              setError("");
              setSuccess(true)
            }
        })
    }
    const showError = () => {
       return <div className="alert alert-danger"  style={{display: error ? "block" : "none"}}>
           {error}
       </div>
    }
    const showSuccess = () => {
        return <div className="alert alert-info" style={{display: success ? "block" : "none"}}>
        Ban da tao tai khoan thanh cong. Click de <Link to="/signin">Signin</Link>
    </div>
    }
    const SignUpForm = () => {
        return (
            <>
                 <div className="collection_text">Sign Up</div>
                <div className="collection_section layout_padding">
                    <div className="container">
                        <h1 className="new_text"><strong>Sign Up</strong></h1>
                        <p className="consectetur_text">Register now to receive more attractive offers</p>
                    </div>
                </div>
               
               
                <div style={{padding: "0 30rem 10rem 30rem"}} className="collectipn_section_3 layout_padding">
                     <div className="container">
                    <div className="row">     
                    {showError()}
                {showSuccess()}     
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Full Name</label>
                                <input {...register("name",{ required: true})} type="text" placeholder="Full Name" className="w-100 form-control" type="text" />
                                {errors.name && errors.name.type === "required" && <span className="text-danger">This is required</span>}
                                <br/><label>Email</label>
                                <input {...register("email",{ required: true})} type="email" placeholder="Email" className="w-100 form-control" type="text" />
                                {errors.email && errors.email.type === "required" && <span className="text-danger">This is required</span>}
                                <br/><label>Password</label>
                                <input {...register("password",{ required: true})} type="password" placeholder="Password" className="w-100 form-control" type="text" />
                                {errors.password && errors.password.type === "required" && <span className="text-danger">This is required</span>}
                                <br/>
                                <center><button className="btn-primary">Register</button></center>
                            </form>                   
                    </div>
                </div>
                </div>            
            </>
        )
    }
    return (
        <div>
            
            {SignUpForm()}
        </div>
    )
}

export default Signup
