import React from 'react';
import './Banner2.css';
import { Image } from 'antd';
import banner from '../../assets/banner.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import { HiLocationMarker } from 'react-icons/hi';

const Banner2 = () => {
	const submitHere = (e) => {
		console.log('Submitting....');
	};
	return (
		<div className="banner2">
			<Image className="banner2-img" src={banner} />
			<div className="header__center">
				<div className="gps-icon">
					<HiLocationMarker />
				</div>
				<input
					onClick={submitHere}
					type="text"
					placeholder="See location on the map"
				/>
				<ArrowRightOutlined />
			</div>
		</div>
	);
};

export default Banner2;
