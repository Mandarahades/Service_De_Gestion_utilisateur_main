const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    domains: ['drive.google.com'],
  },
});

module.exports = withNextra();