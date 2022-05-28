import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';
import { Typography } from 'antd';
const { Text } = Typography;

const Food2Details = ({ food }) => {
	const [fav, setFav] = useState(false);

	const handleFav = () => {
		setFav((prev) => !prev);
	};
	return (
		<>
			<Col className="food2-detail" span={20} offset={2}>
				<Row>
					<Col span={20} className="left2">
						<Image src={food.src} />
						<div className="left2-info">
							<Text> {food.name}</Text>
							<div>
								<Text delete>$ {food.discountPrice}</Text>
								<Text className="food-price">$ {food.price}</Text>
							</div>
						</div>
					</Col>
					<Col span={4} justify="center" align="middle">
						{/* <div onClick={() => setFav((prev) => !prev)}>
										{!fav && <HeartOutlined />}
									</div>
									<div
										onClick={() => setFav((prev) => !prev)}
										style={{ color: 'red' }}
									>
										{fav && <HeartFilled />}
									</div> */}

						{!fav ? (
							<div onClick={handleFav}>
								<HeartOutlined />
							</div>
						) : (
							<div onClick={handleFav} style={{ color: 'red' }}>
								<HeartFilled />
							</div>
						)}
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Food2Details;
