import './globals.css';

export const metadata = {
	title: 'Images to webp',
	description: 'Convert your images to webp easily!',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
