const envVars = {
  development: {
    API_HOST: 'http://api.local.com:3000'
  },
  production: {
    "API_HOST": "http://apipt.zezeping.com"
  }
}

module.exports = function(nodeEnv) {
  nodeEnv = nodeEnv || 'development'
  return Object.assign({}, envVars[nodeEnv])
}
