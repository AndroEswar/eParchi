import React, {Fragment, useState} from 'react';
import {Card} from 'antd';

import SideNav from './';



const TabsCard = () => {
	const [key, setKey] = useState('indRep');

  const onTabChange = (key) => {
		setKey(key);
  };

	return (
		<Fragment>
			{/* <Card
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
			</Card> */}
			<SideNav />
		</Fragment>
	);
}

export default TabsCard;