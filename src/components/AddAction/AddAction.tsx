import { Box, TextField, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../../store/slices/todoSlice';

export const AddAction: React.FC = () => {
    const [state, setState] = React.useState('');
    const dispatch = useDispatch();

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setState(e.target.value);
    };
    
    const onClick = () => {
        dispatch(addAction(state));
        setState('');
    }

	return (
		<Box>
			<TextField value={state} onChange={onChange} />
			<Button onClick={onClick}>+</Button>
		</Box>
	);
};
