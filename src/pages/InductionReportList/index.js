import React, {useState, Fragment} from 'react';
import InductionReportData from '../data/InductionReportData';
import {Card, Col, Row} from 'antd';
import {Modal} from '../Modal';

const InductionReportList = () => {
	const [showModal, setShowModal] = useState(false)
	let list = [];
	InductionReportData.forEach(it => {
		if (it.parent_heat.heat_no) list.push(it.parent_heat.heat_no)
	});
	list = [...new Set([...list])];

	const toggleModal = (it) => {
		console.log(it)
		setShowModal(true)
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
			<div style={{width: '200px', height: '400px'}}>HelloWorld</div>
		</Modal>
	</Fragment>);
};

export default InductionReportList;
