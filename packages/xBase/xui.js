const { exec } = require('child_process');

function build() {
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
    exec('npx  webpack --config .xui/webpack/webpack.prod.js --mode production', (error, stdout, stderr) => {
        console.log(error)
        console.log(stdout)
        console.log(stderr)
    })
}

function dev() {
    // webpack --config webpack.prod.js --mode production
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
    exec('npx webpack-dev-server --config .xui/webpack/webpack.dev.js --mode development', (error, stdout, stderr) => {
        console.log(error)
        console.log(stdout)
        console.log(stderr)
    })
}

if (process.argv[2] === 'build') {
    build()
}
if (process.argv[2] === 'dev') {
    dev()
}
    