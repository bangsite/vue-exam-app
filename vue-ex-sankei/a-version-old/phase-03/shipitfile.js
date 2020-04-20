module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      workspace: './dist',
      keepWorkspace: false,
      repositoryUrl: '', // Skip fetching repo
      ignores: ['.git', 'node_modules', 'deploy'],
      deleteOnRollback: true,
      keepReleases: 5,
      shallowClone: false,
    },
    develop: {
      // username to access server
      servers: 'ec2-user@18.180.131.227',

      // key to access on server
      key: './deploy/docs/sankei.pem',

      // path on Server for App
      deployTo: '/var/www/sankei-app',
      stage: 'gumi-dev',
      build: 'npm run build',
      outputDir: './dist',
    },
  })

  shipit.blTask('vue:build', async () => {
    await shipit.local(shipit.config.build)
    await shipit.local(`cp deploy/app/.htaccess ${shipit.config.outputDir}`);
  })

  shipit.on('deploy', async () => {
    await shipit.start(['vue:build'])
  })

  shipit.on('deployed', async () => {
    await shipit.local(`rm -rf ${ shipit.config.outputDir }`)
  })
}