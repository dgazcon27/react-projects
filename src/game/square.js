import React from 'react';

const Square = ({value, onClick, winner}) => {

	return (
		<button className={`square ${winner}`} onClick={onClick}>
		{value}
	    </button>
	);
}

export default Square;