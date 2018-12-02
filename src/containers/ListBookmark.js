import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import { deleteBookmark } from '../actions';


function BookmarksList({ bookmarks, onDelete }) {
  return (
    <div>
			<section className="container-fluid">
				<div className="container">
					<h1 className="text-center">Bookmark Page</h1>
					<Link to="/"><h6 className="text-center">Back to Home</h6></Link>
					<hr/>
					<div className="row align-items-center">
						<div className="col-12">
						{
							bookmarks.map(bookmark => {
							return (
								<Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
							)})
						}
						</div>
					</div>
				</div>
			</section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookmarks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteBookmark(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList);