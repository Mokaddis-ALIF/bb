import React, { useState } from 'react';
import './Foods.css';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { HeartFilled } from '@ant-design/icons';
import { Image } from 'antd';
import ice from '../../assets/ice.png';
import { Space, Typography } from 'antd';
const { Text, Link } = Typography;

const foods = [
	{
		id: 1,
		type: 'Icecream',
		name: 'Ice cream yellow',
		price: '10.99',
		discountPrice: '5.99',
	},
	{
		id: 2,
		type: 'Icecream',
		name: 'Pink Ice',
		discountPrice: '12.99',
		price: '5.99',
	},
	{
		id: 3,
		type: 'Icecream',
		name: 'Blue ice',
		discountPrice: '',
		price: '5.99',
	},
	{
		id: 4,
		type: 'Snacks',
		name: 'Ice cream yellow',
		price: '10.99',
		discountPrice: '5.99',
	},
	{
		id: 5,
		type: 'Snacks',
		name: 'Pink Ice',
		discountPrice: '12.99',
		price: '5.99',
	},
	{
		id: 6,
		type: 'Snacks',
		name: 'Blue ice',
		discountPrice: '',
		price: '5.99',
	},
];

const names = ['Icecream', 'Snacks', 'Coffee', 'Sweet Cake'];

const Foods = () => {
	const [menuTab, setMenuTab] = useState(names[0]);
	const [fav, setFav] = useState(false);

	const handleMenuTabs = (type) => {
		setMenuTab(type);
	};
	return (
		<div className="foods">
			<div className="food-btns">
				{names.map((item, i) => (
					<button
						key={i}
						className={menuTab === `${item}` ? `food-btn-active` : 'food-btn'}
						onClick={() => handleMenuTabs(`${item}`)}
					>
						{item}
					</button>
				))}
			</div>

			<Row className="food-details" justify="center" align="middle">
				{foods
					.filter((item) => menuTab === item.type)
					.map((food, i) => (
						<Col className="food-detail" key={i}>
							<Col className="left" span={20}>
								<Col className="left-img">
									<Image width={52} src={ice} />
								</Col>
								<Col className="left-info">
									<Text> {food.name}</Text>
									<div>
										<Text delete>$ {food.discountPrice}</Text>
										<Text className="food-price">$ {food.price}</Text>
									</div>
								</Col>
							</Col>
							<Col span={4} justify="center" align="middle">
								<div onClick={() => setFav((prev) => !prev)}>
									{!fav && <HeartOutlined />}
								</div>
								<div
									onClick={() => setFav((prev) => !prev)}
									style={{ color: 'red' }}
								>
									{fav && <HeartFilled />}
								</div>
							</Col>
						</Col>
					))}
			</Row>
		</div>
	);
};

export default Foods;
