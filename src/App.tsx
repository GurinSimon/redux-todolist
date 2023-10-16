import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Paper } from '@mui/material';
import { AddAction } from './components/AddAction/AddAction';
import { TodoItem } from './components/TodoItem/TodoItem';

const App: React.FC = () => {
	const data = useSelector((state: RootState) => state.todo.todos);

	return (
		<Paper>
			<AddAction />
			{data.map((text, i) => {
				return <TodoItem text={text} index={i} key={i} />;
			})}
		</Paper>
	);
};

export default App;
