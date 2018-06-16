import React from 'react';
import NotebookItem from './notebook_item';

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
