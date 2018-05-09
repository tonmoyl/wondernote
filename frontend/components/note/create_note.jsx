import React from 'react';


export default class Paper extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      body: ""
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  render(){
    return (
      <div className='create-note'>
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
          <input className="session-submit" type="submit" />
        </form>

      </div>



    )
  }
}
