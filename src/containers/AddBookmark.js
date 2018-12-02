import { connect } from 'react-redux';
import { addBookmark } from '../actions';
import Home from '../components/Home';

const mapDispatchToProps = dispatch => {
  return {
    onAddBookmark: bookmark => {
      dispatch(addBookmark(bookmark));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);