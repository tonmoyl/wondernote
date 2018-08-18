import { fetchNote } from '../../../actions/note_actions';

it('some stuff I want to test', async () => {
  expect.assertions(1);
  return fetchNote(22).then(data => {
    expect(data).toBe('something')
  });
});
