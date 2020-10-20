import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

const Paginator = ({page}) => {

	console.log(page)
	return (
		<Pagination>
			{
				Array.from(Array(page).keys()).map((i) => 
					 <Pagination.Item key={i}>
					 	{i}
					  </Pagination.Item>,
				)
			}
		</Pagination>
	);
}

export default Paginator;