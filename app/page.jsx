export default function Home() {
    return (
        <div className="min-h-screen bg-base-100 text-base-content px-6 py-16 sm:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="avatar placeholder">
                        <div className="bg-base-200 text-base-content/40 w-24 rounded-full border border-base-300">
                            <span>Logo</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="mt-8 text-center text-5xl sm:text-6xl font-light tracking-tight">
                    Bienvenue
                </h1>
                <p className="mt-2 text-center text-lg sm:text-xl text-base-content/50 tracking-widest uppercase">
                    Coffee Shop
                </p>

                <div className="divider my-12" />

                {/* Photo Grid */}
                <section>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="aspect-square bg-base-200 border border-base-300 flex items-center justify-center text-base-content/40 text-sm rounded-lg"
                            >
                                Photo {i}
                            </div>
                        ))}
                    </div>
                </section>

                <div className="divider my-12" />

                {/* Menu */}
                <section>
                    <h2 className="text-center text-2xl font-light tracking-wide mb-8">
                        Menu
                    </h2>
                    <div className="space-y-4">
                        <MenuItem name="Espresso" price="3.50" />
                        <MenuItem name="Americano" price="4.00" />
                        <MenuItem name="Flat White" price="5.00" />
                        <MenuItem name="Cappuccino" price="5.00" />
                        <MenuItem name="Café Latte" price="5.50" />
                        <MenuItem name="Matcha Latte" price="6.00" />
                        <MenuItem name="Croissant" price="4.50" />
                        <MenuItem name="Pain au Chocolat" price="5.00" />
                    </div>
                </section>

                <div className="divider my-12" />

                {/* Links */}
                <section className="text-center space-y-3">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover text-base-content/60 block"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://europeancoffeetrip.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover text-base-content/60 block"
                    >
                        European Coffee Trip
                    </a>
                </section>

                <div className="divider my-12" />

                {/* Address */}
                <footer className="text-center text-base-content/50 text-sm pb-8">
                    <p>123 Rue de Example</p>
                    <p>Paris, France 75001</p>
                </footer>
            </div>
        </div>
    );
}

function MenuItem({ name, price }) {
    return (
        <div className="flex items-baseline gap-2">
            <span className="font-medium">{name}</span>
            <span className="flex-1 border-b border-dotted border-base-300" />
            <span className="text-base-content/60">${price}</span>
        </div>
    );
}
