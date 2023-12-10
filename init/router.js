module.exports = (app) => {
    app.use('/api', require("../routes/routes.js"));
    app.use('/activityProvider', require("../routes/params.routes.js"));
}