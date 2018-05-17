import React from 'react';
import NotebookItem from './notebook_item';

export default class NoteBookIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  componentWillMount(){
    this.props.fetchNotebooks();
  }


  render(){
    const notebooks = Object.keys(this.props.notebooks).map( (id) => {
      return (
        <li key={id}>
          <NotebookItem notebook={this.props.notebooks[id]} noteId={this.props.noteId}/>
        </li>
      )
    });

    return(
      <div className="notebook-index">
        <div id="modal" className="modal"></div>
        <ul>
          {notebooks}
        </ul>
      </div>
    );
  };

};
