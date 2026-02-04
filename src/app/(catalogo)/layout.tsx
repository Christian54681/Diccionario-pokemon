import React from 'react';
import Link from 'next/link';

export default function LayoutPokemon({ children }: { children: React.ReactNode }) {
    const tipos = ["fuego", "agua", "planta", "electrico", "fantasma"];

    return (
        <div className="bg-slate-950 text-slate-200 min-h-screen flex flex-col overflow-x-hidden font-sans">
            <div className="max-w-7xl mx-auto w-full px-6 pt-10">
                <div className="flex flex-col items-start">
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 bg-clip-text text-transparent tracking-tighter uppercase">
                        Diccionario Pokémon
                    </div>
                    <div className="h-[1px] w-10 bg-slate-800 mt-1"></div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 pb-6 border-b border-slate-900">
                    {tipos.map((tipo) => (
                        <Link
                            key={tipo}
                            href={`/${tipo}`}
                            className="px-4 py-1.5 rounded-md border border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-700 transition-all text-[10px] font-medium uppercase tracking-widest text-slate-500 hover:text-blue-400"
                        >
                            {tipo}
                        </Link>
                    ))}
                    <Link
                        href="/"
                        className="ml-auto px-4 py-1.5 rounded-md border border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-700 transition-all text-[10px] font-medium uppercase tracking-widest text-slate-500 hover:text-blue-400"
                    >  Home
                    </Link>
                </div>
            </div>

            <div className="flex-grow flex justify-center items-center px-4 py-10">
                {children}
            </div>
        </div>
    );
}