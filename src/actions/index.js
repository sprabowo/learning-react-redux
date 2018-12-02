import uuidv4 from 'uuid/v4';

export const addBookmark = ({ title, url }) => ({
	type: 'ADD_BOOKMARK',
	payload: {
		id: uuidv4(),
		title: title,
		url: url
	}
})

export const deleteBookmark = id => ({
	type: 'DELETE_BOOKMARK',
	payload: {
		id
	}
});