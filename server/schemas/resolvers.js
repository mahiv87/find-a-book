const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return User.find().populate('savedBooks');
		},
		user: async (parent, { username }) => {
			return User.findOne({ username }).populate('savedBooks');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate(
					'savedBooks'
				);
			}
			throw new AuthenticationError('You need to be logged in!');
		},
		books: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Book.find(params).sort({ createdAt: -1 });
		},
		book: async (parent, { bookId }) => {
			return Book.findOne({ _id: bookId });
		}
	}
};
