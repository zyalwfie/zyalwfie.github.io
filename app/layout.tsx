import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const saira = localFont({
	src: '../public/fonts/Saira-VariableFont.ttf',
	variable: '--font-saira',
	weight: '100 900',
	display: 'swap',
});

const bricolageGrotesque = localFont({
	src: '../public/fonts/BricolageGrotesque-VariableFont.ttf',
	variable: '--font-bricolage',
	weight: '200 800',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Ziyad Alwafie • Fullstack Web Developer',
	description: 'Personal portfolio website of Ziyad Alwafie',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${saira.variable} ${bricolageGrotesque.variable}`}
		>
			<body className='antialiased bg-onyx'>{children}</body>
		</html>
	);
}
