import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from '../auth'
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setEedirectToRef] = useState(false)
    
    const { user } = isAuthenticated()
    const onSubmit  = (data) => {
        setLoading(true)
        signIn(data)
        .then(dataUser => {
            if(dataUser.error){
              setError(dataUser.error)
              setLoading(false)
            } else {
                authenticate(dataUser, () => {
                    setTimeout(() =>{
                        setEedirectToRef(true)
                        // history.push("/")
                     }, 2000);
                    
                })
         
            }
        })
    }
    const redirectUser = () => {
        if(redirectToRef) {
            if(user.role == 1){
                return history.push("/admin/dashboard")
            } else {
                return history.push("/")
            }
        }
    }
    const showError = () => {
       return <div className="alert alert-danger"  style={{display: error ? "block" : "none"}}>
           {error}
       </div>
    }
    const showLoading = () => {
     return loading &&  <div class="loading">
     <div className="spiner"></div>
     <div className="bar">
       <span className="dot1"></span>
       <span className="dot2"></span>
       <span className="dot3"></span>
     </div>
   </div>
    }

    const SignInForm = () => {
        return (
            <>
                 <div className="collection_text">Sign In</div>
               
               
                <div style={{padding: "0 30rem 10rem 30rem"}} className="collectipn_section_3 layout_padding">
                     <div className="container">
                    <div className="row">     
                    {showError()}
                    {showLoading()}   
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <br/><label>Email</label>
                                <input {...register("email",{ required: true})} type="email" placeholder="Email" className="w-100 form-control" type="text" />
                                {errors.email && errors.email.type === "required" && <span className="text-danger">This is required</span>}
                                <br/><label>Password</label>
                                <input {...register("password",{ required: true})} type="password" placeholder="Password" className="w-100 form-control" type="text" />
                                {errors.password && errors.password.type === "required" && <span className="text-danger">This is required</span>}
                                <br/>
                                <center><button className="btn-primary">Login</button></center>
                            </form>                   
                    </div>
                </div>
                </div>            
            </>
        )
    }
    return (
        <div>
            {redirectUser()}       
            {SignInForm()}
        </div>
    )
}

export default Signin
