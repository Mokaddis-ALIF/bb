import React from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './Header.css';

const AppHeader = () => {
	return (
		<div className="header">
			<div>
				<Button type="text" className="left-btn">
					<LeftOutlined />
				</Button>
			</div>

			<div>
				<p className="right-p">Assignment</p>
			</div>
		</div>
	);
};

export default AppHeader;
