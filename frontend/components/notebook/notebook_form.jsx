import React from 'react';

export default class NotebookForm extends React.Component {
  constructor(props){
    super(props);
    this.closeForm = this.closeForm.bind(this.closeForm);
  }

  closeForm(e) {
    e.preventDefault();
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
              className="notebook-title"
              placeholder="Title your notebook"/>
          </label>

          <div className="adj-buttons">
            <button onClick={this.closeForm} className="cancel-btn">
              Cancel
            </button>
            <input
              className="create-notebook submit-btn"
              type="submit"
              value="Create notebook" />
          </div>
        </form>
      </div>
    );
  }
}
