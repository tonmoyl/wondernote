import React from 'react';

export default class PhotoIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.photos){
      return (
        <div>
          <img className='embedded-photos' src={this.props.photos[0].photoUrl} />
        </div>
      )
    } else {
      return (
        <h1>No photos</h1>
      )
    }
  }
}
