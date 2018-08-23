import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Search from '../search';


describe('Search', () => {
  var wrapper;
  var notes;

  beforeEach( () => {
    notes = {
      283: {id: 283, title: "another one", body: '{"quillText":{"ops":[{"insert":"\n"}]},"plainText":"\n"}', notebook_id: 115, author_id: 9},
      284: {id: 284, title: "Second message", body: '{"quillText":{"ops":[{"insert":"\n"}]},"plainText":"\n"}', notebook_id: 115, author_id: 9}
    };

    var props = {
      notes: notes,
    };

    wrapper = Enzyme.shallow(<Search {...props}/>);
    wrapper.setState(props)
  });

  it('renders the search function', () => {
    const item = wrapper.find('#search-form');
    expect(item.length).toEqual(1);
  });

  it('renders a list of Links for all the notes', () => {
    const listElements = wrapper.find('li');
    expect(wrapper.state('notes')).toEqual(notes);
    expect(wrapper.state('noteIds')).toEqual(["283", "284"]);
    wrapper.setState({notes: notes});
    expect(wrapper.text()).toEqual('<Link /><Link />');
  });

})
