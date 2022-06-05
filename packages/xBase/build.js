const { exec } = require('child_process');

exec('npx babel ./src/**/*.js --out-dir build')
exec('npx webpack --config .xui/webpack.config.js')