import React from 'react';
import { Route } from 'react-router-dom';
import NotebookIndex from '../notebook/notebook_index';
import NoteIndex from './note_index_container';
import ToolbarContainer from '../toolbar/toolbar_container';
import NoteIndexContainer from './note_index_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import merge from 'lodash/merge';
import { isEmpty } from 'lodash';


export default class NoteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: "",
      title: "",
      body: "",
      notebook_id: null
    };
    if (this.props.formType === "Update") this.state.title = " ";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initializeQuill = this.initializeQuill.bind(this);
  };

  componentDidMount(){
    const noteId = this.props.match.params.noteId;
    let that = this;
    if (this.props.formType === "Update") {
      
      this.props.fetchNote(this.props.match.params.noteId).then( ({note}) => {
        this.setState({id: note.id, title: note.title, body: note.body, notebook_id: note.notebook_id});
      }).then( () => {
        let body = JSON.parse(this.state.body).quillText;
        this.quill.setContents(body);
      });;
    };
    this.initializeQuill();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.fetchNote(nextProps.match.params.noteId).then( ({note}) => {
        this.setState({id: note.id, title: note.title, body: note.body, notebook_id: note.notebook_id});
      }).then( () => {
        let body = JSON.parse(this.state.body).quillText;
        this.quill.setContents(body);
      });
    }

  }

  initializeQuill() {
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block', 'link'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

    ];

    var quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow',
      placeholder: "Just start typing..."
    });

    this.quill = quill;
    this.quill.on('text-change', () => {
      const getContents = this.quill.getContents();
      this.setState({body: getContents});
    })

  };

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    let body = {};
    body["quillText"] = this.quill.getContents();
    body["plainText"] = this.quill.getText();
    let parsedBody = JSON.stringify(body);

    if (this.state.notebook_id === null) {
      this.setState({body: parsedBody, notebook_id: Object.keys(this.props.notebooks)[0]});
      this.state.notebook_id = Object.keys(this.props.notebooks)[0];
    }

    this.state.body = parsedBody;
    const note = merge({}, this.state, {body: parsedBody});
    this.props.processForm(note).then( ()=> {
      let noteIdx = Object.keys(this.props.notes);
      let newIdx = noteIdx[noteIdx.length-1];
      this.props.history.push(`/main/${newIdx}`);
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map( (error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }



  render(){
    // let selectedOption = "";
    // if (this.props.currentNote){
    //   selectedOption = this.props.currentNote.notebook_id + "";
    // }

    const notebooks = Object.keys(this.props.notebooks).map( (id) => {
      if (this.props.currentNote && id == this.props.currentNote.notebook_id){
        return (
          <option
            className="select-items"
            key={id}
            value={id}
            selected="selected">{this.props.notebooks[id].title}
          </option>
        );
      } else {
        return (
          <option
            className="select-items"
            key={id}
            value={id}>{this.props.notebooks[id].title}
          </option>
        );
      }
    });
    //
    // const notebooks = Object.keys(this.props.notebooks).map( (id) => {
    //
    //   return (
    //     <option
    //       className="select-items"
    //       key={id}
    //       value={`${id}`}>{this.props.notebooks[id].title}
    //     </option>
    //   );
    // });



    let display;
    if (this.props.formType === "Create") { display = false }
    else { display = true };


    return (
      <div id="note-document" className='note-show'>

        <div className='new-note-header'>
          <div className='toolbar-container'>
            <ToolbarContainer itemType="note" display="true"/>
          </div>
        </div>

        <form className="note-form" onSubmit={this.handleSubmit}>
          <div className="note-selector">
            <select
              className="notebook-dropdown"
              onChange={this.update('notebook_id')}
              >
              {notebooks}
            </select>
          </div>

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
            <h5 className="errors">
              {this.renderErrors()}
            </h5>
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
