/** @type {import("next").NextConfig} */
const config = {
    compiler: {
        styledComponents: true,
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
          },
        ],
      },
};

export default config;
