'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Thumbnails from './Thumbnails';

const Dropdzone = ({
	images,
	setImages,
	zipFile,
	setZipFile,
	disableConvertButton,
	submitImages,
}) => {
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		acceptedFiles.forEach((file) => {
			setImages((prevState) => [...prevState, file]);
		});
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			'image/jpeg': [],
			'image/png': [],
		},
		onDrop,
	});

	const handleDownload = (e) => {
		e.preventDefault();
		if (zipFile) {
			const link = document.createElement('a');
			link.href = zipFile;
			link.download = 'webp_images.zip';
			link.click();
		}
	};

	const removeDownloadbutton = () => {
		setZipFile(false);
	};

	const handleThumbnailClick = (index) => {
		const updatedImages = [...images]; // Create a copy of the images state
		updatedImages.splice(index, 1); // Remove the image at the specified index
		setImages(updatedImages); // Update the images state with the modified array

		if (images.length - 1 === 0) {
			removeDownloadbutton();
		}
	};

	return (
		<>
			<div
				className="mt-4 border-[2px] border-dashed border-black bg-salmonBerry h-40 rounded-md flex justify-center items-center cursor-pointer"
				{...getRootProps()}
			>
				<input {...getInputProps()} name="images" />
				{isDragActive
					? 'Drop them here!'
					: 'Drop your images here or click to browse :)'}
			</div>

			{images.length > 0 && (
				<>
					<div className="flex flex-wrap gap-2 mt-4">
						{images.map((image, index) => (
							<Thumbnails
								image={image}
								key={index}
								index={index}
								handleThumbnailClick={handleThumbnailClick}
							/>
						))}
					</div>
					<div className="flex justify-center flex-wrap gap-5 mt-8">
						<div className="btn-container">
							<button
								className="btn"
								disabled={disableConvertButton}
								onClick={(e) => submitImages(e)}
							>
								convert
							</button>
						</div>
						{zipFile && (
							<div className="btn-container">
								<button className="btn" onClick={(e) => handleDownload(e)}>
									download
								</button>
							</div>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default Dropdzone;
