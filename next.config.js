require('dotenv').config()

module.exports = {
  basePath: '"https://brave-task.vercel.app"',
  env: {
    API_URL: process.env.API_URL || "https://brave-task.vercel.app"
  }
}