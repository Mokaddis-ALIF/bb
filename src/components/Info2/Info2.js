import React from 'react';
import './Info2.css';
import { Typography } from 'antd';
import { useState } from 'react';

import { RightOutlined } from '@ant-design/icons';
import { FaStar } from 'react-icons/fa';
import { Col, Row } from 'antd';
const { Text } = Typography;

const { Paragraph } = Typography;

const Info2 = () => {
	const [rating, setRating] = useState(2);

	return (
		<div className="info2">
			<Row>
				<Col span={20} offset={2}>
					<div className="info2-header">Monica Gamage shop</div>

					<div className="info2-header-second">Wattala, Srilanka</div>
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
						<Col
							span={20}
							align="middle"
							className="second-info2"
							justify="middle"
						>
							<div className="second-header">
								Check the reward in this resto
							</div>
							<div className="second-header-text">16 Reward</div>
						</Col>
						<Col span={4} className="right-div" align="middle" justify="middle">
							<RightOutlined />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Info2;
