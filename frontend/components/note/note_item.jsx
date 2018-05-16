import React from 'react';
import { Link } from 'react-router-dom';


export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let linkURL
    if (this.props.notebookId) {
      linkURL = `/main/${this.props.note.id}/${this.props.notebookId}`;
    } else {
      linkURL = `/main/${this.props.note.id}`;
    };

    const renderBody = JSON.parse(this.props.note.body).plainText;
  

    return (
      <div>
        <Link to={`${linkURL}`} >
          <div className='list-item'>
            <h3>{this.props.note.title}</h3>
            <div className='list-body-container'>
              <h5>{renderBody}</h5>
            </div>
          </div>
        </Link>


      </div>
    )
  }
}
