const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		savedBooks: [Books]
	}

	type Book {
		bookId: ID
		authors: String
		description: String
		image: String
		link: String
		title: String
	}

	input inputBook {
		bookId: Int
		authors: [String]
		description: String
		image: String
		link: String
		title: String
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		books(username: String): [Book]
		book(bookId: String!): Book
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveBook(book: inputBook): User
		deleteBook(bookId: Int): User
	}
`;

module.exports = typeDefs;