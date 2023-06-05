import Form from './components/Form';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<meta property="og:image" content="/images/og-image.png" />
			</Head>
			<main className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
				<Form />
			</main>
		</>
	);
}
