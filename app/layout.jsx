import '../styles/globals.css';

export const metadata = {
    title: 'Bienvenue Coffee Shop',
    description: 'Bienvenue — a coffee shop',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <link rel="icon" href="/images/logos/favicon.png" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
