import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { email:'',password: '' }
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    validate = (e) => {
        const password = this.state.password
        if(e.target.value.length < 20){
        this.setState({
            error:"harap isi min 20 digit"
        })
        }
        else{
            this.setState({
                error:"password mu cukup"
            })
        }
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <div className="content">
                                <h1>Login Form</h1>
                                <p>start your registration</p>
                                <div className="LoginForm"> 
                                    <form onSubmit={this.handleSubmit}> 
                                        <input type="email" required autoComplete="off" name="email" onChange={this.changeHandle} className="login_input" placeholder="enter your email"/>
                                        <input type="password" required autoComplete="off" onKeyPress={this.validate} name="password" onChange={this.changeHandle} className="login_input" placeholder="enter your password"/>
                                        <button type="submit" className="login_button">Submit</button> 
                                    </form>
                                    {this.state.error && <span style={{color: "red"}}>{this.state.error}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <h2>Thanks For </h2>
                            <p>My self by me and we don't forget for Young people must not continue to be spectators, young people must be players who are able to open up vast jobs and be able to become the nation's economic powerhouse.</p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
