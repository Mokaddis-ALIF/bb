import React, { useState } from 'react';
import './Foods2.css';
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
		src: 'https://i.ibb.co/WzvJvCw/ice.png',
	},
	{
		id: 2,
		type: 'Icecream',
		name: 'Pink Ice',
		discountPrice: '12.99',
		price: '5.99',
		src: 'https://i.ibb.co/hWm1hFb/blue-ice.png',
	},
	{
		id: 3,
		type: 'Icecream',
		name: 'Blue ice',
		discountPrice: '',
		price: '5.99',
		src: 'https://i.ibb.co/QXqjvkF/pink-ice.png',
	},
	{
		id: 4,
		type: 'Snacks',
		name: 'Pink Ice',
		price: '10.99',
		discountPrice: '5.99',
		src: 'https://i.ibb.co/hWm1hFb/blue-ice.png',
	},
	{
		id: 5,
		type: 'Snacks',
		name: 'Blue ice',
		discountPrice: '12.99',
		price: '5.99',
		src: 'https://i.ibb.co/QXqjvkF/pink-ice.png',
	},
	{
		id: 6,
		type: 'Snacks',
		name: 'Icecream',
		discountPrice: '',
		price: '5.99',
		src: 'https://i.ibb.co/WzvJvCw/ice.png',
	},
	{
		id: 7,
		type: 'Coffee',
		name: 'Blue ice',
		discountPrice: '12.99',
		price: '5.99',
		src: 'https://i.ibb.co/QXqjvkF/pink-ice.png',
	},
	{
		id: 8,
		type: 'Coffee',
		name: 'Icecream',
		discountPrice: '',
		price: '5.99',
		src: 'https://i.ibb.co/WzvJvCw/ice.png',
	},
	{
		id: 9,
		type: 'Coffee',
		name: 'Pink Ice',
		price: '10.99',
		discountPrice: '5.99',
		src: 'https://i.ibb.co/hWm1hFb/blue-ice.png',
	},
	{
		id: 10,
		type: 'Sweet Cake',
		name: 'Pink Ice',
		price: '10.99',
		discountPrice: '5.99',
		src: 'https://i.ibb.co/hWm1hFb/blue-ice.png',
	},
	{
		id: 11,
		type: 'Sweet Cake',
		name: 'Icecream',
		discountPrice: '',
		price: '5.99',
		src: 'https://i.ibb.co/WzvJvCw/ice.png',
	},
	{
		id: 12,
		type: 'Sweet Cake',
		name: 'Blue ice',
		discountPrice: '12.99',
		price: '5.99',
		src: 'https://i.ibb.co/QXqjvkF/pink-ice.png',
	},
];

const names = ['Icecream', 'Snacks', 'Coffee', 'Sweet Cake'];

const Foods2 = () => {
	const [menuTab, setMenuTab] = useState(names[0]);
	const [fav, setFav] = useState(false);

	const handleMenuTabs = (type) => {
		setMenuTab(type);
	};

	const handleFav = () => {
		setFav((prev) => !prev);
	};

	return (
		<div className="foods">
			<div className="food2-btns">
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

			<Row className="food2-details">
				{foods
					.filter((item) => menuTab === item.type)
					.map((food, i) => (
						<Col key={i} className="food2-detail" span={20} offset={2}>
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
					))}
			</Row>
		</div>
	);
};

export default Foods2;
