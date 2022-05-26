import React from 'react';
import './Banner.css';
import { Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { QuestionOutlined } from '@ant-design/icons';

const Banner = () => {
	return (
		<Row className="banner" justify="center">
			<Col sm={24} className="banner-img">
				<div className="header__center">
					<div className="gps-icon">
						<QuestionOutlined />
					</div>
					<input type="text" />
					<ArrowRightOutlined />
				</div>
			</Col>
		</Row>
	);
};

export default Banner;
