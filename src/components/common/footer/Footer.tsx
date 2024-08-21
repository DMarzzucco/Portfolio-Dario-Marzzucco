"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col bg-blackGray text-slate-300 p-2">
            <div className="flex flex-col md:flex-row justify-center items-center text-xs text-gray-400 mt-4">
                <p className="mr-1">&copy; 2024</p>
                <Link
                    href="https://github.com/DMarzzucco/SysteMarzz.git"
                    className="mx-1 font-bold text-white hover:underline"
                >
                    SysteMarzz
                </Link>
                <p className="ml-1">
                    All rights reserved. Made by Dario Marzzucco
                </p>
            </div>
        </footer>
    )
}