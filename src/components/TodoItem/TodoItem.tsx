import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAction } from '../../store/slices/todoSlice';

interface TodoItemProps {
	text: string;
	index: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, index }) => {
	const dispatch = useDispatch();

	return (
		<Box>
			{text}
			<Button onClick={() => dispatch(removeAction(index))}>
				Remove
			</Button>
		</Box>
	);
};
