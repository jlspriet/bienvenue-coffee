import '../styles/globals.css';

export const metadata = {
    title: 'Bienvenue Coffee Shop',
    description: 'Bienvenue — a coffee shop',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
