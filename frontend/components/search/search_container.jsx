import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    notes: state.entities.notes,
    notebooks: state.entities.notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return{
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
