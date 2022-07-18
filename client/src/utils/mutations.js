import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const SAVE_BOOK = gql`
	mutation saveBook($input: inputBook) {
		saveBook(input: $input) {
			username
			_id
			bookCount
			savedBooks {
				bookId
				authors
				description
				image
				link
				title
			}
		}
	}
`;

export const DELETE_BOOK = gql`
	mutation deleteBook($bookId: Int!) {
		deleteBook(bookId: $bookId) {
			_id
			username
			bookCount
			savedBooks {
				bookId
				authors
				description
				image
				link
				title
			}
		}
	}
`;
