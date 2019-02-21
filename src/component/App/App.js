import React, { Component } from 'react';
import Form from '../Form/Form';
import { BrowserRouter, Route, Link ,Redirect,Switch} from 'react-router-dom';
import Userpage from '../Userpage/Userpage';
import Logout from '../logout/logout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: '', hasFailed: false,isAuth:false}
    this.changeFormField = this.changeFormField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userout=this.userout.bind(this);
    this.restfiled=this.restfiled.bind(this);
  }

  changeFormField(event) {
    switch(event.target.getAttribute('ident')) {
      case 'usr':
        this.setState({userName: event.target.value});
        break;
      case 'pwd':
        this.setState({password: event.target.value});
        break;
    }
  }
  restfiled(ev) {
    this.setState({userName:'',password:''})
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userName === 'Jake' && this.state.password === '123'
        || this.state.userName === 'Mohamad' && this.state.password === '123') {
      console.log('You are logged in!');
      this.setState({hasFailed:false,isAuth:true})


    } else {
      this.setState({hasFailed: true});
    }
  }

  userout(ev){
    this.setState({isAuth:false});
  }

  render() {
    const formProps = {
      userName: this.state.userName,
      password: this.state.password,
      handleChange: this.changeFormField,
      handleSubmit:this.handleSubmit,
      hasFailed: this.state.hasFailed
    }

    return (
      <BrowserRouter>
      <>


    <Route path="/" exact render={()=> <Form formProps={ formProps }/>}/>

      <Switch> //we putet here because wenn we put it beforw fitst route we will have problem no login//
       <Route path="/logout" render ={ () =>< Logout restfiled={this.restfiled} />}/>
   <Route path ="/user" render={() => <Userpage userout={this.userout}  userName={this.state.userName}/>}/>
      {this.state.isAuth && <Redirect to ="/user"/>}
  </Switch>
     </>
      </BrowserRouter>
    )
  }
}
