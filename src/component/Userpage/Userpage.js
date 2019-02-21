import React,{Component} from 'react';
import Navlist from '../Navlist/Navlist';
import {Route} from 'react-router-dom';







export default class Userpage extends Component {
  render() {
    return (
    <div className="container my-4">
    <Navlist userout={this.props.userout} />
    <div className="jumbotron">
    <Route exact path="/user" render={()=>   <h2>hallo  {this.props.userName}</h2> }/>
    <Route path="/user/dashboard" render={()=> <h2>dashboar {this.props.userName}</h2> }/>
    <Route path="/user/friends" render={()=>   <h2>hallo3 {this.props.userName}</h2> }/>
    </div>



   </div>
 )
  }
}
