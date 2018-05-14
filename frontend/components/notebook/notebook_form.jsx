import React from 'react';

export default class NotebookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    };
    this.closeForm = this.closeForm.bind(this.closeForm);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  closeForm(e) {
    e.preventDefault();
    document.getElementById("create-notebook").style.display = "none";
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = Object.assign({}, this.state);
    this.props.processForm(notebook);
    document.getElementById("create-notebook").style.display = "none";
  }

  render() {
    return(
      <div id="create-notebook" onSubmit={this.handleSubmit}>
        <form className="notebook-form">
          <h6>CREATE NOTEBOOK</h6>
          <br />
          <label>
            <input
              type="text"
              className="notebook-title notebook-title-create"
              placeholder="Title your notebook"
              onChange={this.update('title')}/>
          </label>
          <button onClick={this.closeForm} className="cancel-btn">
            Cancel
          </button>

          <input
            className="create-notebook submit-btn"
            type="submit"
            value="Create notebook" />
        </form>
      </div>
    );
  }
}
