module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)
  require('shipit-shared')(shipit);

  shipit.initConfig({
    default: {
      deployTo: '/mnt/www/zezeping/potch/potch-frontend',
      repositoryUrl: 'git@github.com:mypotch/potch-frontend.git',
      keepReleases: 8,
      ignores: ['.git', 'node_modules', 'logs'],
      shared: {
        overwrite: true,
        dirs: ['logs', 'node_modules'],
        files: [
          'pm2.config.json'
        ],
      }
    },
    staging: {
      servers: 'deploy@staging.super-project.com',
      branch: 'develop',
    },
    production: {
      servers: [{
        host: '47.93.21.147',
        user: 'mars',
      }],
      branch: 'master'
    }
  })

  // 监听部署事件，在部署中不同生命周期中插入任务 shipit production deploy
  shipit.on('deploy', function () {
    shipit.on('published', async function () {
      await shipit.remote('npm install --production && npm run build', { cwd: `${shipit.config.deployTo}/current`})
      // await shipit.start('pm2:start');
    })
  })

  // shipit staging pm2:start
  shipit.task('pm2:start', function() {
    console.log('======= - pm2:start - =======')
    shipit.remote('pm2 list');
    shipit.remote('pm2 startOrGracefulReload pm2.config.json', {cwd: `${shipit.config.deployTo}/current`})
    setTimeout(() => {
      shipit.remote('pm2 list');
    }, 5000)
  })
}
