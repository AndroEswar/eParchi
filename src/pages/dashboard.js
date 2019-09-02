import React, {Fragment, useState} from 'react';
import {Card} from 'antd';

import InductionSummary from './InductionSummary';
import InductionReport from './InductionReport';
import CcmSummary from './CcmSummary';
import QualityReport from './QualityReport';

const tabList = [{key: 'indRep', tab: 'Induction Reports'},
	{key: 'indSum', tab: 'Induction Summary'},
	{key: 'cSum', tab: 'CCM Summary'},
	{key: 'qRep', tab: 'Quality Report'},
];

const contentList = {
  indRep: <InductionReport/>,
	indSum: <InductionSummary/>,
	cSum: <CcmSummary/>,
	qRep: <QualityReport/>,
};

const TabsCard = () => {
	const [key, setKey] = useState('indRep');

  const onTabChange = (key) => {
		setKey(key);
  };

	return (
		<Fragment>
			<Card
				bordered={false}
				style={{ width: '100%', height: '100vh', textAlign: 'center' }}
				title='WELCOME TO DASHBOARD'
				tabList={tabList}
				activeTabKey={key}
				onTabChange={key => {
					onTabChange(key);
				}}
			>
				{contentList[key]}
			</Card>
		</Fragment>
	);
}

export default TabsCard;