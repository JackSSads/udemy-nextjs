/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const headers = async () => {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE' },
        { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token,X-Requested-With' },
      ]
    },
  ];
}

module.exports = nextConfig, headers
