import React from 'react';
import Context from './Context';
export default class GlobalState extends React.Component{
    
state = {
  issigned: false,
}
 
addNewstate = (issigneds) => {
  const list = issigneds;
  this.setState({issigned: list});
};
 
render(){
 return (
  <Context.Provider 
   value={{
    issigned: this.state.issigned,
    addNewstate: this.addNewstate,
   }}
  >
   
     </Context.Provider>
 );
 }
}