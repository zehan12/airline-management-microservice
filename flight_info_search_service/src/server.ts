import app from "./app";
import config from "./config";

const PORT = config.port;

export const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });

    process.on("uncaughtException", async (err) => {
        console.log(err);
        process.exit(1);
    });
};

startServer().then(() => {
    console.log("server is up");
});
