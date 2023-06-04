import React, { useState, useEffect } from 'react';

const Thumbnails = ({ image, handleThumbnailClick, index }) => {
	const [thumbnailSrc, setThumbnailSrc] = useState('');

	useEffect(() => {
		const convertBit64 = () => {
			const reader = new FileReader();

			reader.onload = () => {
				setThumbnailSrc(reader.result);
			};

			reader.readAsDataURL(image);
		};

		convertBit64();
	}, [image]);

	return (
		<div
			onClick={() => handleThumbnailClick(index)}
			className="cursor-pointer relative after:content-['x'] after:text-white after:-top-[5px] after:-right-[5px] after:absolute after:bg-red-600 after:rounded-full after:w-[15px] after:h-[15px] after:flex after:items-center after:justify-center after:text-[0.7rem] after:font-bold after:transition-all after:duration-300 after:opacity-0 hover:after:opacity-100"
		>
			<img
				className="w-16 h-16 object-fit hover:grayscale duration-500 transition-all"
				src={thumbnailSrc}
				alt={image.name}
			/>
		</div>
	);
};

export default Thumbnails;
