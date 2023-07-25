module.exports = {
  apps: [
    {
      name: 'IPX-H3 CDN',
      port: '3000',
      script: './app.mjs',
      max_memory_restart: '512M'
    }
  ]
}