import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import NoteIndex from '../note_index';


describe('NoteIndex', () => {
  var wrapper;

  beforeEach( () => {
    let notes = {
      1: {id: 283, title: "another on", body: '{"quillText":{"ops":[{"insert":"\n"}]},"plainText":"\n"}', notebook_id: 115, author_id: 9},
      2: {id: 283, title: "another on", body: '{"quillText":{"ops":[{"insert":"\n"}]},"plainText":"\n"}', notebook_id: 115, author_id: 9}
    };

    const emptyFunction = () => {
      return 2+2
    };

    var props = {
      componentType: "note-index",
      componentTitle: "NOTES",
      notes: notes,
      noteIds: Object.keys(notes),
      notebooks: {},
      fetchNotes: emptyFunction,
      fetchFavNotes: emptyFunction
    };

    wrapper = Enzyme.shallow(<NoteIndex {...props}/>);
  });

  it("renders Note Index", () => {
    const noteIdx = wrapper.find('.note-index');
    expect(noteIdx.length).toEqual(1);
  });

  it('renders a list of all the notes', () => {
    const listElements = wrapper.find('li');
    expect(listElements.length).toEqual(2);
  })

  // let props;
  // let mountedNoteForm;
  // const noteForm = () => {
  //   if (!mountedNoteForm) {
  //     mountedNoteForm = Enzyme.mount(
  //       <NoteForm {...props} />
  //     );
  //   }
  //   return mountedNoteForm;
  // }
  //
  //
  // beforeEach( () => {
  //   props = {
  //     currentNote: undefined,
  //     formType: "Create",
  //     notebooks: {
  //       115: {id: 115, title: "Diary", author_id: 9, noteIds: [1]},
  //       125: {id: 125, title: "New notebook", author_id: 9, noteIds: [1]}
  //     },
  //     notes: {
  //       1: {id: 283, title: "aneother on", body: '{"quillText":{"ops":[{"insert":"\n"}]},"plainText":"\n"}', notebook_id: 115, author_id: 9}
  //     },
  //     currentNotebookId: undefined,
  //     history: [],
  //     errors: []
  //   };
  //   mountedNoteForm = undefined;
  // });
  //
  // it("always renders a div", () => {
  //   const divs = noteForm().find("div");
  //   expect(divs.length).toBeGreaterThan(0);
  // })

})
