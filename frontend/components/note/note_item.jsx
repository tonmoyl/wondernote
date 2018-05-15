import React from 'react';
import { Link } from 'react-router-dom';


export default class Note extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <Link to={`/main/${this.props.note.id}`} >
          <div className='list-item'>
            <h3>{this.props.note.title}</h3>
            <div className='list-body-container'>
              <h5>{this.props.note.body}</h5>
            </div>
          </div>
        </Link>


      </div>
    )
  }
}
