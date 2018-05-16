import React from 'react';
import { Route } from 'react-router-dom';
import NotebookIndex from '../notebook/notebook_index';
import NoteIndex from './note_index_container';
import ToolbarContainer from '../toolbar/toolbar_container';
import NoteIndexContainer from './note_index_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import merge from 'lodash/merge';


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
    this.initializeQuill = this.initializeQuill.bind(this);
  };

  componentDidMount(){
    const noteId = this.props.match.params.noteId;
    if (this.props.formType === "Update") {
      this.props.fetchNote(this.props.match.params.noteId).then( ({note}) => {
        this.setState({id: note.id, title: note.title, body: note.body, notebook_id: note.notebook_id});
      });
    };
    this.initializeQuill();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.fetchNote(nextProps.match.params.noteId).then( ({note}) => {
        this.setState({id: note.id, title: note.title, body: note.body, notebook_id: note.notebook_id});
      });
    }
  }

  initializeQuill() {
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block', 'link'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ];

    var quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });

    this.quill = quill;
  };

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify(this.quill.getContents());
    this.setState({body: body});
    const note = merge({}, this.state, {body: body});
    this.props.processForm(note);
  }

  render(){
    const notebooks = Object.keys(this.props.notebooks).map( (id) => {
      return (
        <option
          className="select-items"
          key={id}
          value={id}>{this.props.notebooks[id].title}
        </option>
      );
    });

    let display;
    if (this.props.formType === "Create") { display = false }
    else { display = true };

    if (this.state.body) {
      this.quill.setContents(JSON.parse(this.state.body))
    }

    return (
      <div id="note-document" className='new-note'>

        <div className='new-note-header'>
          <div className='toolbar-container'>
            <ToolbarContainer itemType="note" display={display}/>
          </div>
        </div>


        <form className="new-note-form" onSubmit={this.handleSubmit}>
          <select
            className="notebook-dropdown"
            onChange={this.update('notebook_id')}
            value={this.state.notebook_id}>
            {notebooks}
          </select>
          <br />
          <div className="form-group">
            <label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="note-title"
                placeholder="Title your note"
                />
            </label>

            <div id="editor">

            </div>

          </div>

          <input
            className="note-action-btn submit-btn"
            type="submit"
            value={this.props.formType} />
        </form>

      </div>
    )
  }
}
