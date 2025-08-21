import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Glossy Textured Contact Form</h1>
	<div className="registration">
		<h2>Contact Form</h2>
		<div className="avtar"><img src="assets/images/color.jpg" /></div>			
		<div className="form-info">
				<form>
					<input type="text" className="text" value="Your full name" onFocus={()=>{}} //onblur="if (this.value == '') {this.value = 'Your full name';}" 
          />
					<input type="text" className="text" value="Email adress" onFocus={()=>{}} //onblur="if (this.value == '') {this.value = 'Email adress';}" 
          />
					<input type="text" className="text" value="User name" onFocus={()=>{}} //onblur="if (this.value == '') {this.value = 'User name';}" 
          />
					<textarea  onFocus={()=>{}} //onblur="if (this.value == '') {this.value = 'Message...';}" 
          required={false}>Message...</textarea>
					<input type="submit" value="SUBMIT"/>
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
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
