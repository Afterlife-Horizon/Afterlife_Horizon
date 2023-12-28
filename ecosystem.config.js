module.exports = {
  apps : [{
    name: 'Backend',
    script: 'afho_backend/dist/index.js',
    watch: 'afho_backend/.'
  }, {
      name: 'Frontend',
      script: 'afho_frontend/node_modules/next/dist/bin/next',
      args: 'start',
      watch: 'afho_front'
  }]
};
