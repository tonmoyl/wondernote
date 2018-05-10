import React from 'react';


export default class NewNote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      body: "",
      notebook_id: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
      console.log(this.state);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    this.props.processForm(note);
  }

  render(){
    return (
      <div className='create-note' onSubmit={this.handleSubmit}>
        <p>This is coming from create note jsx</p>

        <form className="create-note">

          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="note-title"
              placeholder="Title your note"
            />
          </label>
          <br/>
          <label>Body
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
              className="note-body"
            >
              {this.state.body}
            </textarea>
          </label>
          <input className="create-note-btn" type="submit" value="Create Note" />

        </form>

      </div>
    )
  }
}
