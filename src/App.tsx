import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const App: React.FC = ()  => {
	const data = useSelector((state: RootState) => state.todo.todos);

	return (
		
	);
}

export default App;
