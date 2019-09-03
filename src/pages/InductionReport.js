import React, {Fragment} from 'react';
import InductionReportData from './data/InductionReportData';
import InductionReportList from './InductionReportList';

import {Tabs} from 'antd';
const {TabPane} = Tabs;

const callback = (key) => {
  console.log(key);
};

const InductionReport = () => {
	let furnaceNo = [];
	InductionReportData.forEach(it => {
		if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no)
	});
	furnaceNo = [...new Set([...furnaceNo])]

	return (<Fragment>
		<Tabs defaultActiveKey='1' onChange={callback}>
			{furnaceNo.map((it, i) => {
				return <TabPane tab={`FURNACE ${it}`} key={it}>
					<InductionReportList furnaceNo={it}/>
				</TabPane>;
			})}
		</Tabs>
	</Fragment>);
};

export default InductionReport