import React from 'react';


export default class Note extends React.Component{
  constructor(props){
    super(props)
    this.note = this.props.note;
  }

  render(){
    console.log(this.props);
    return (
      <div className='note-item'>
        <h3>{this.note.title}</h3>
        <h4>{this.note.updated_at}</h4>
        <h5>{this.note.body}</h5>
      </div>
    )
  }
}
