import React,{Component} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
class App extends Component{
  //Render - is a life-cycle method, 
  render(){
    return(
      //JSX
     <div className="App">
     <NavBar/>
     <Users />
     </div>
  
  
  );
}
}

export default App;
