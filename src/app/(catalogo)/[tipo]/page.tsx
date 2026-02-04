import React from 'react'

interface TipoProps {
    params: Promise<{ tipo: string }>
}

export default async function PaginaTipo(props: TipoProps) {
    const { tipo } = await props.params;

    const mapaIds: { [key: string]: number } = {
        "fantasma": 8,
        "fuego": 10,
        "agua": 11,
        "planta": 12,
        "electrico": 13
    };

    const idTipo = mapaIds[tipo];
    if (!idTipo) return <div className="p-10 text-red-400">Tipo no encontrado.</div>

    const response = await fetch(`https://pokeapi.co/api/v2/type/${idTipo}`);
    const data = await response.json();

    const pokemonPromises = data.pokemon.slice(0,10).map(async (p: any) => {
        const res = await fetch(p.pokemon.url);
        return res.json();
    });

    const listaDetallada = await Promise.all(pokemonPromises);

    return (
        <div className="w-full max-w-6xl px-4">
            <div className="text-2xl font-black text-blue-400 uppercase mb-8 border-l-4 border-blue-600 pl-4">
                Explorando Tipo {tipo}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listaDetallada.map((poke: any) => (
                    <div key={poke.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all group">
                        <div className="bg-slate-950 h-48 flex justify-center items-center p-4 relative">
                            <div className="absolute top-2 right-3 text-slate-700 font-mono text-xl font-bold">
                                #{poke.id}
                            </div>
                            <img
                                src={poke.sprites.other['official-artwork'].front_default}
                                alt={poke.name}
                                className="h-full object-contain group-hover:scale-110 transition-transform"
                            />
                        </div>

                        <div className="p-5">
                            <div className="text-xl font-bold capitalize text-slate-100 mb-4">
                                {poke.name}
                            </div>
                            
                            <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                                <div className="text-center">
                                    <div className="text-[10px] uppercase text-slate-500 font-bold">Altura</div>
                                    <div className="text-sm text-blue-300">{poke.height / 10} m</div>
                                </div>
                                <div className="w-[1px] h-8 bg-slate-700"></div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase text-slate-500 font-bold">Peso</div>
                                    <div className="text-sm text-blue-300">{poke.weight / 10} kg</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}