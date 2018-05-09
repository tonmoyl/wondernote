import React from 'react';
import NoteList from '../note_list/note_list';
import NewNote from './new_note';


export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='workspace'>
        <NoteList />
      </div>

    )
  }
}
