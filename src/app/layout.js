import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ClientToastContainer from './components/ClientToastContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Smart Blood Donation System',
    description: 'Platform connecting blood donors with recipients',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientToastContainer />
                {children}
            </body>
        </html>
    );
}