import React from 'react';
import Route from 'react-router-dom';
import NotebookIndex from '../notebook/notebook_index';


export default class NoteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: "",
      title: "",
      body: "",
      notebook_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  componentWillMount() {
    const noteId = this.props.match.params.noteId;
    if (this.props.formType === "Update") {
      this.props.fetchNote(this.props.match.params.noteId).then( ({note}) => {
        this.setState({id: note.id, title: note.title, body: note.body});
      });
    };

  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.fetchNote(nextProps.match.params.noteId).then( ({note}) => {
        this.setState({title: note.title, body: note.body});
      });
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    this.props.processForm(note);
  }

  render(){
    console.log(this.state)
    return (
      <div className='new-note' onSubmit={this.handleSubmit}>
        <div className='new-note-header'>{this.state.title}</div>
        <div className='font-toolbar'>Font format toolbar</div>
        <div className='note-document'>
          <form className="new-note-form">

            <label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="note-title"
                placeholder="Title your note"
                />
            </label>
            <br/>
            <label>
              <textarea
                rows="100" cols="1200"
                value={this.state.body}
                onChange={this.update('body')}
                className="note-body"
                >
                {this.state.body}
              </textarea>
            </label>

            <input
              className="create-note submit-btn"
              type="submit"
              value={this.props.formType} />
          </form>
        </div>


      </div>
    )
  }
}
