const { exec } = require('child_process');

console.log(process.cwd())
exec('tsc', (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
})
exec('npx babel ./src/**/*.js --out-dir .xui/output/build', (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
})
exec('npx webpack -c .xui/webpack.config.js --mode development', (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)
})