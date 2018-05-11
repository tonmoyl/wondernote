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
        {this.note.id}
        {this.note.title}
        {this.note.body}
      </div>
    )
  }
}
