import React from 'react';

const column = [
	{
		Header: () => <header>Heat</header>,
		accessor: 'heat_no',
		Cell({original: o}) {
			return <div>
				{o.parent_heat.heat_no}
			</div>;
		},
	},
	{
		Header: '% P',
		id: "lastName",
		accessor: "per_c"
	},
	{
		Header: '% C',
		accessor: "per_c"
	},
	{
		Header: 'Bath %C',
		accessor: "batch_per_c"
	},
	{
		Header: '% SI',
		accessor: "per_si"
	},
	{
		Header: '% MN',
		accessor: "per_mn"
	},
	{
		Header: '% S',
		accessor: "per_s"
	}
];

export default column;