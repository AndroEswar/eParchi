import React, {useState, Fragment} from 'react';
import InductionReportData from '../data/InductionReportData';
import {Card, Col, Row} from 'antd';
import {Modal} from '../Modal';
import ReportSummary from './ReportSummary';

const InductionReportList = (props) => {
	const [showModal, setShowModal] = useState(false)
	const [rSummary, setRSummary] = useState('');

	let list = [];
	InductionReportData.forEach(it => {
		if (it.parent_heat.heat_no && it.parent_heat.furnace_no === props.furnaceNo) list.push(it.parent_heat.heat_no)
	});
	list = [...new Set([...list])];

	const toggleModal = (it) => {
		setShowModal(true);
		setRSummary(it);
	};

	return (<Fragment>
		<Row>
			{list.map((it, ind) => {
				return <Col span={8} key={ind}>
					<Card hoverable title={`${ind + 1} ) Report Heat No - ${it}`} bordered={true} style={{margin: '1rem'}} onClick={(e) => toggleModal(it)}>
						<p>Click To View More</p>
					</Card>
				</Col>;
			})}
		</Row>
		<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
			<ReportSummary {...{rSummary}}/>
		</Modal>
	</Fragment>);
};

export default InductionReportList;
