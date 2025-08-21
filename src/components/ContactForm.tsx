import React from 'react'
import { FieldErrors, FormState, SubmitHandler, UseFormClearErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Inputs } from '../types/Inputs'

type formState = FormState<Inputs>;
type ContactFormProps ={
    register: UseFormRegister<Inputs>;
    handleSubmit: UseFormHandleSubmit<Inputs, Inputs>;
    clearErrors: UseFormClearErrors<Inputs>;
    errors : FieldErrors<Inputs>
    onSubmit : SubmitHandler<Inputs>
}
const ContactForm : React.FC <ContactFormProps> = ({
    register,handleSubmit,clearErrors,errors, onSubmit
}) => {
  return (
		<form onSubmit={handleSubmit(onSubmit)}>
            <input /*defaultValue="Your full name" */ 
                {...register("fullname", 
                    {required : "fullname is required",
                    pattern: {
                        value: /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/,
                        message: 'Invalid Full name',
                    },
                    minLength: { 
                        value: 8, 
                        message: "Value must be at least 8" }, 
                    maxLength: { 
                        value: 35, 
                        message: "Value must not exceed 35",
                
                    }}
                )} 
                onChange={()=>{clearErrors("fullname")}} type="text" className="text" placeholder="Your full name" 
            />
            {errors?.fullname && <p style={{color : "red",marginTop:0}}>{errors?.fullname?.message}</p>}
            <input 
                {...register("email", 
                    {required : "email is required",
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                    minLength: { 
                        value: 10, 
                        message: "Value must be at least 10" 
                    }, 
                    maxLength: { 
                        value: 40, 
                        message: "Value must not exceed 40"
                    }}
                )} 
                type="text" className="text" placeholder="Email adress" onChange={()=>{clearErrors("email")}}
            />
		  	{errors?.email && <p style={{color : "red",marginTop:0}}>{errors?.email?.message}</p>}

            <input 
                {...register("username", 
                    {required : "username is required",
                    pattern: {
                        value: /^[a-zA-Z0-9]{8,20}$/,
                        message: 'Username must be alphanumeric and 3-20 characters long',
                    },
                    minLength: { 
                        value: 8, 
                        message: "Value must be at least 8" }, 
                    maxLength: { 
                        value: 30, 
                        message: "Value must not exceed 20"
                    }}
                )} 
                type="text" className="text" placeholder="User name" onChange={()=>{clearErrors("username")}}
            />
            {errors?.username && <p style={{color : "red",marginTop:0}}>{errors?.username?.message}</p>}
            <textarea  defaultValue="Message..." onFocus={()=>{}} onBlur={()=>{}} required={false} />
			<input type="submit" />
		</form>
  )
}

export default ContactForm