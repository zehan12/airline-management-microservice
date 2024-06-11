import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

const config: any = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3002,
};

export default config;
