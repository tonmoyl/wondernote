import React from 'react';
import Sidebar from '../sidebar/sidebar';
import NoteList from '../note_list/note_list';
import CreateNote from './create_note';


export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='workspace'>
        <Sidebar />
        <NoteList />
      </div>

    )
  }
}
