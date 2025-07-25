"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger for small screens */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 rounded bg-gray-800 text-white"
                onClick={() => setOpen(!open)}
                aria-label="Open sidebar"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4 z-40
                    flex flex-col
                    transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:static md:flex
                `}
                style={{ minWidth: '16rem' }}
            >
                <h1 className="text-xl font-bold mb-6">ScaleMet</h1>
                <nav className="flex flex-1 flex-col justify-evenly space-y-0">
                    <Link href="/dashboard" className="py-2 text-center hover:bg-gray-700 rounded">Dashboard</Link>
                    <Link href="/budget" className="py-2 text-center hover:bg-gray-700 rounded">Budget</Link>
                    <Link href="/transactions" className="py-2 text-center hover:bg-gray-700 rounded">Transactions</Link>
                    <Link href="/forecast" className="py-2 text-center hover:bg-gray-700 rounded">Forecast</Link>
                    <Link href="/reports" className="py-2 text-center hover:bg-gray-700 rounded">Reports</Link>
                </nav>
                <button
                    className="mt-8 py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
                    onClick={() => {
                        window.location.href = '/';
                        alert('Signed out!');
                    }}
                >
                    Sign Out
                </button>
            </aside>
        </>
    );
}