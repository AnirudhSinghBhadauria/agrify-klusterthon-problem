import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Agrify - Making farming easy',
	description:
		'Your AI-powered agricultural ally, offering expert guidance for farmers. Gain real-time insights, precise crop management advice, and market intelligence.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ClerkProvider>
					<main>{children}</main>
				</ClerkProvider>
			</body>
		</html>
	);
}
