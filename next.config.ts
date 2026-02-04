import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // Dominio común de las fotos de PokeAPI
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'laroussecocina.mx',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-ilddihb.nitrocdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://pokeapi.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;