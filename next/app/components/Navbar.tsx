"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Product Range", href: '/product-range'},
    { name: "Accessories", href: '/accessories'},
    { name: "Special Offers", href: '/special-offers'},
    { name: "Sample Request", href: '/sample-request'},
    { name: "About Us", href: '/about-us'},
    { name: "Contact", href: '/contact'},
    { name: "Brochure Request", href: '/brochure-request'},
    { name: "Blog", href: '/blog'},
];

export default function Navbar() {
    const pathname  = usePathname();
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h2 className="text-2xl">Search</h2>
                </Link>
                <Link href="/">
                    <h1 className="text-2xl">Floors Of Stone</h1>
                </Link>
                <Link href="#">
                    <h2 className="text-2xl">Basket</h2>
                </Link>
            </div>
            <nav className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                {links.map((link, idx) => (
                    <div key={idx}>
                        {pathname === link.href ? (
                            <Link className="text-lg font-semibold text-primary" href={link.href}>
                                {link.name}
                            </Link>
                        ): (
                            <Link className="text-lg font-semibold text-grey-600 transition duration-100 hover:text-primary" href={link.href}>
                                {link.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
}