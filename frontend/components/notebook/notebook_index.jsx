import React from 'react';
import NotebookItem from './notebook_item';
import ToolbarContainer from '../toolbar/toolbar_container';

export default class NoteBookIndex extends React.Component{
  constructor(props) {
    super(props);
  }

//componentWillMount
  componentDidMount(){
    this.props.fetchNotebooks();
  }


  render(){
    const allNotebooks = this.props.notebooks || []
    const notebooks = Object.keys(allNotebooks).map( (id) => {
      const num = parseInt(id);

      return (
        <li key={num}>
          <NotebookItem notebook={allNotebooks[num]} noteId={this.props.noteId}/>
          <ToolbarContainer itemType="notebook-item" notebookId={num}/>
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
