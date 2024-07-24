'use client';

import { useState } from 'react';
import Dropdzone from './Dropdzone';
import Loading from './Loading';

const Form = () => {
	const [zipFile, setZipFile] = useState(null);
	const [images, setImages] = useState([]);
	const [disableConvertButton, setDisableConvertButton] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitImages = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		images.forEach((image) => {
			formData.append('images', image);
		});

		try {
			setDisableConvertButton(true);
			setLoading(true);
			const response = await fetch('https://images-to-webp.vercel.app/upload', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				const blob = await response.blob();
				const downloadUrl = URL.createObjectURL(blob);
				setZipFile(downloadUrl);
				console.log('Images sent successfully');
			} else {
				console.error('Error creating the zip file');
			}
		} catch (error) {
			console.error('Error uploading images:', error.message);
		}

		setLoading(false);
		setDisableConvertButton(false);
	};

	return (
		<form className="max-w-xl w-full bg-white p-4 text-center rounded-md relative overflow-hidden">
			{loading && <Loading />}

			<h1 className="bg-fuchsia-500 text-aqua text-3xl font-bold p-1 pb-3 border-[3px] border-black rounded-sm">
				Convert your images to webp
			</h1>

			<Dropdzone
				submitImages={submitImages}
				images={images}
				setImages={setImages}
				zipFile={zipFile}
				setZipFile={setZipFile}
				disableConvertButton={disableConvertButton}
			/>
		</form>
	);
};

export default Form;
