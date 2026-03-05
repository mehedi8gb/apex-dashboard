module.exports = {
    apps: [
        {
            name: "staging-apex-dashboard",
            script: ".output/server/index.mjs",
            exec_mode: "fork",
            instances: 1,

            env: {
                NODE_ENV: "production",
                PORT: 4000,
                HOST: "127.0.0.1"
            },

            max_memory_restart: "400M",
            autorestart: true,
            watch: false,
            time: true
        }
    ]
};