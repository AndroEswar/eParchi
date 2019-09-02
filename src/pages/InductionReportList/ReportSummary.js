import React, {Fragment} from 'react';
import InductionReportData from '../data/InductionReportData';

const ReportSummary = (props) => {
	let currentData = InductionReportData.find(it => it.parent_heat.heat_no === props.rSummary);
	return (<Fragment>
		<div style={{fontSize: '2rem', textAlign: 'center'}}>
			Report Summary
		</div>
		<div style={{margin: '1rem', border: '3px solid red', width: '96%', height: '250px'}}>
			<div>
				<span style={{fontWeight: 'bold'}}>Heat No: {currentData.parent_heat.heat_no}</span>
			</div>
			<div style={{padding: '1rem'}}>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>On Time: {new Date(currentData.on_time).getHours()} : {new Date(currentData.on_time).getMinutes()}</span>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Off Time: {(new Date(currentData.off_time) - new Date(currentData.on_time)) / 1000 / 60} mins</span>
			</div>
			<div style={{padding: '1rem'}}>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Total Time: {currentData.total_time}</span>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>PF Factor: {currentData.pl}</span>
			</div>
			<div style={{padding: '1rem'}}>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Aluminium: {currentData.aluminium}</span>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Scrap: {currentData.scrap}</span>
			</div>
			<div style={{padding: '1rem'}}>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Silicon: {currentData.silicon}</span>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Manganese: {currentData.mn}</span>
			</div>
			<div style={{padding: '1rem'}}>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Extra time reason: {currentData.reason}</span>
				<span style={{fontWeight: 'bold', padding: '1rem'}}>Extra Time: {currentData.total_time}</span>
			</div>
		</div>
	</Fragment>);
};

export default ReportSummary;
