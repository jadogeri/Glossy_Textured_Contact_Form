
import { useForm } from "react-hook-form";
import CopyRights from "./components/CopyRights";
import { Inputs } from "./types/Inputs";
import ContactForm from "./components/ContactForm";

const App = () => {

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
			<ContactForm 
				register={register} handleSubmit={handleSubmit} clearErrors={clearErrors}
				errors={errors} onSubmit={onSubmit}
			/>	
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
	<CopyRights />

      
    </>

  );
}

export default App;
