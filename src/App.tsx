
import { useForm } from "react-hook-form";

const App = () => {
  type Inputs={
    fullname : string;
    email : string;
    username : string;
  }
  const { register, handleSubmit,clearErrors, watch, formState: { errors } } = useForm<Inputs>({
	defaultValues :{
		fullname: "",
		email: "",
		username: ""
	}
  });

  const onSubmit = () =>{
	
	if(!errors){
		alert("found errors")		
	}else{
		alert("no errors")
	}
    console.log("data")
  }

  return (
    <>
	{/* //onblur="if (this.value == '') {this.value = 'Your full name';}"  */}
      <h1>Glossy Textured Contact Form</h1>
	<div className="registration">
		<h2>Contact Form</h2>
		<div className="avtar"><img src="assets/images/color.jpg" /></div>			
		<div className="form-info">
			<form onSubmit={handleSubmit(onSubmit)}>
				<input /*defaultValue="Your full name" */ 
					{...register("fullname", {required : "fullname is required",minLength: { value: 10, message: "Value must be at least 10" }, maxLength: { value: 30, message: "Value must not exceed 30",
					
					 } })} onChange={()=>{clearErrors("fullname")}}
				type="text" className="text" placeholder="Your full name" 
          		/>
		  		{errors?.fullname && <p style={{color : "red",marginTop:0}}>{errors?.fullname?.message}</p>}
				<input {...register("email", {required : "email is required",minLength: { value: 10, message: "Value must be at least 10" }, maxLength: { value: 30, message: "Value must not exceed 30"}})} 
					type="text" className="text" placeholder="Email adress" onChange={()=>{clearErrors("email")}}
				/>
		  		{errors?.email && <p style={{color : "red",marginTop:0}}>{errors?.email?.message}</p>}

				<input {...register("username", {required : "username is required",minLength: { value: 10, message: "Value must be at least 8" }, maxLength: { value: 30, message: "Value must not exceed 30"}})} 
					type="text" className="text" placeholder="User name" onChange={()=>{clearErrors("username")}}
				/>
		  		{errors?.username && <p style={{color : "red",marginTop:0}}>{errors?.username?.message}</p>}

				<textarea  defaultValue="Message..." onFocus={()=>{}} onBlur={()=>{}}
          required={false} />
					<input type="submit" />
				</form>
			</div>			
			<ul className="bottom-sc-icons">
				<li><a href="#" className="facebook"><img src="assets/images/fb.png" />Facebook</a></li>
				<li><a href="#" className="twitter"><img src="assets/images/tw.png" />Twitter</a></li>
				<div className="sc-icons">
				<li><a href="#" className="google-p"><img src="assets/images/gp.png" />Google +</a></li>
				<li><a href="#" className="in"><img src="assets/images/in.png" />Linkedin</a></li>
				</div>
			</ul>
			<div className="clear"> </div>
	</div>
<div className="copy-rights">
	<p>Design by <a href="http://w3layouts.com" target="_blank">w3layouts</a> </p>
</div>

      
    </>

  );
}

export default App;
