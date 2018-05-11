import React from 'react';
import { Link } from 'react-router-dom';


export default class Note extends React.Component{
  constructor(props){
    super(props)
    this.note = this.props.note;
  }

  render(){
    return (
      <div>
        <Link to={`/main/${this.props.note.id}`} >
          <div className='note-item'>
            <h3>{this.note.title}</h3>
            <h4>{this.note.updated_at}</h4>
            <h5>{this.note.body}</h5>
          </div>
        </Link>
      </div>
    )
  }
}
