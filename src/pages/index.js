import React , {Fragment, useState, useEffect} from 'react';
import {Layout, Menu} from 'antd';


import InductionSummary from './InductionSummary';
import InductionReport from './InductionReport';
import CcmSummary from './CcmSummary';
import QualityReport from './QualityReport';

const {Sider, Content} = Layout;




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

const SideNav = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [content, setContent] = useState('indRep');

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
	};

	useEffect(() => {}, [content]);

	return (<Fragment>
		<Layout style={{ minHeight: '100vh'}}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{background: '#fff'}}>
				<Menu theme='light' defaultSelectedKeys={['0']} mode='inline'>
					{tabList.map((it, ind) => {
						return <Menu.Item key={ind} onClick={() => setContent(it.key)}>
							<span>{it.tab}</span>
						</Menu.Item>;
					})}
				</Menu>
			</Sider>
			<Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
				<div style={{fontSize: '2rem', textAlign: 'center'}}>
					Welcome To Dashboard
				</div>
				{contentList[content]}
			</Content>
		</Layout>
	</Fragment>);
};

export default SideNav;