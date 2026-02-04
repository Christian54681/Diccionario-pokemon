import React from 'react';
import Link from 'next/link';

export default function LayoutPokemon({ children }: { children: React.ReactNode }) {
    const categorias = [
        { nombre: "fuego", pokeId: 6, color: "hover:border-orange-500 hover:shadow-orange-900/20" },
        { nombre: "agua", pokeId: 9, color: "hover:border-blue-500 hover:shadow-blue-900/20" },
        { nombre: "planta", pokeId: 3, color: "hover:border-green-500 hover:shadow-green-900/20" },
        { nombre: "electrico", pokeId: 25, color: "hover:border-yellow-500 hover:shadow-yellow-900/20" },
        { nombre: "fantasma", pokeId: 94, color: "hover:border-purple-500 hover:shadow-purple-900/20" },
    ];

    return (
        <div className="bg-slate-950 text-slate-200 min-h-screen flex flex-col font-sans overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full px-6 pt-12">
                <div className="flex flex-col items-start mb-10">
                    <div className="text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter uppercase">
                        Diccionario Pokémon
                    </div>
                    <div className="h-[2px] w-12 bg-blue-600 mt-2"></div>
                </div>

                {/* Navegación*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pb-12 border-b border-slate-900">
                    {categorias.map((tipo) => (
                        <Link key={tipo.nombre} href={`/${tipo.nombre}`} className="group">
                            <div className={`relative flex flex-col items-center p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-500 shadow-xl ${tipo.color} hover:bg-slate-900/80 hover:-translate-y-2`}>

                                <div className="w-32 h-32 mb-4 brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500 ease-out">
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${tipo.pokeId}.png`}
                                        alt={tipo.nombre}
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                </div>

                                <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors">
                                    {tipo.nombre}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex-grow flex justify-center items-start px-4 py-16">
                <div className="w-full max-w-7xl">
                    {children}
                </div>
            </div>
        </div>
    );
}