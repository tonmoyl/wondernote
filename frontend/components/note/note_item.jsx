import React from 'react';
import { Link } from 'react-router-dom';


export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const renderBody = JSON.parse(this.props.note.body).plainText;
    let followLink
    if (this.props.parentComponent === "noteIndex") {
      followLink = `/main/${this.props.note.id}`;
    } else {
      followLink = `/main/${this.props.note.id}/${this.props.notebookId}`;
    }

    return (
      <div>
        <Link to={followLink} >
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
