import React from 'react';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
import NoteForm from '../note_form';

describe('NoteForm', () => {

  it("is running a sample test", () => {

    expect(2+2).toEqual(4);
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
