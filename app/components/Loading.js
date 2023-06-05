import Image from 'next/image';
import React from 'react';

const Loading = () => {
	return (
		<div className="absolute w-full h-full bg-black/90 top-0 left-0 z-50">
			<Image
				src="/loading.svg"
				width={100}
				height={100}
				alt="pacman eating - loading"
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
	);
};

export default Loading;
