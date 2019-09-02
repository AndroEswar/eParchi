import React, {useState, useEffect} from "react";
import QualityReportData from '../data/QualityReportData'
import Column from './Column';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = (props) => {
	// const [data, setData] = useState([]);

	let data = QualityReportData.filter(it => it.parent_heat.furnace_no === props.furnaceNo);
	// console.log(furnace, 'furnacefurnace')
	// setData(furnace);

	useEffect(() => {
	}, [data]);
	console.log(data, 'datadatadata')

	return (
		<div>
			<ReactTable
				columns={Column}
				data={data}
				defaultPageSize={data.length >= 10 ? 10 : data.length}
				showPaginationBottom={false}
			/>
		</div>
	);
}

export default Table;
