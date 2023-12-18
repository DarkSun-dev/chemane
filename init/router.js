module.exports = (app) => {
    app.use('/api', require("../routes/routes.js"));
    app.use('/activityProvider', require("../routes/main.routes.js"));
}