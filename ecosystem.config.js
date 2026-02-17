module.exports = {
    apps: [
        {
            name: "truva-app",
            script: "server.js",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
}
