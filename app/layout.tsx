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

			<footer className='text-ghostWhite px-4 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-[auto_auto_auto] pb-8'>
				<div className='text-start text-sm'>&copy;2026 Ziyad A.</div>
				<div className='flex items-center justify-center gap-2'>
					<span className='size-3 block rounded-full bg-green-500 animate-pulse transition'></span>
					Available for a full-time position
				</div>
				<div className='text-end text-sm'>Made by Ziyad A.</div>
			</footer>
		</html>
	);
}
