import React from 'react';
import './Info.css';
import { Typography } from 'antd';
import { useState } from 'react';

import { RightOutlined } from '@ant-design/icons';
import { FaStar } from 'react-icons/fa';
import { Col, Row } from 'antd';
const { Text } = Typography;

const { Paragraph } = Typography;

const Info = () => {
	const [rating, setRating] = useState(2);

	return (
		<div>
			<Paragraph className="info-header">Monica Gamage shop</Paragraph>
			<Paragraph className="info-header-second">Wattala, Srilanka</Paragraph>
			<div className="star-icon">
				{[...Array(3)].map((star, i) => {
					const ratingValue = i + 1;

					return (
						<label key={i}>
							<input
								type="radio"
								name="rating"
								value={ratingValue}
								onClick={() => setRating(ratingValue)}
							/>
							<FaStar
								className="star"
								color={ratingValue <= rating ? '#FA5D5D' : '#C4C4C4'}
							/>
						</label>
					);
				})}
			</div>
			<Row>
				<Col span={20}>
					<Paragraph className="second-header">
						Check the reward in this resto
					</Paragraph>
					<Text className="second-header-text">16 Reward</Text>
				</Col>
				<Col span={4} className="right-div">
					<RightOutlined />
				</Col>
			</Row>
		</div>
	);
};

export default Info;
