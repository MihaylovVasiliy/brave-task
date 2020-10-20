require('dotenv').config()

module.exports = {
  basePath: '',
  env: {
    API_URL: process.env.API_URL || ''
  }
}