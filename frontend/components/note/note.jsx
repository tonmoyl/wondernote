import React from 'react';
import Sidebar from '../sidebar/sidebar';

export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='sidebar'>
        <h1>This is coming from noteacscsds jsx</h1>
        <Sidebar />
      </div>

    )
  }
}
