const path = require('path');

const nextConfig = {
  output: 'export',
  distDir: 'out',
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
