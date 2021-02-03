import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR__ERRORS
} from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		user: null,
		loading: true,
		error: null
	};
	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Load user

	// Register user

	// Login user

	// Logout User

	// Clear Errors

	return (
		<AuthContext.Provider value={
			{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loading: state.loading,
				error: state.error
			}
		}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState;