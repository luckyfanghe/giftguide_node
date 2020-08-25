require("dotenv").config();

const config = {
  AWS: {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || "AKIAJGVI4ATYEGKFCTKA",
    AWS_SECRET_ACCESS_KEY:
      process.env.AWS_SECRET_ACCESS_KEY ||
      "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",
    AWS_REGION: process.env.AWS_REGION || "us-east-1"
  }
};

module.exports = config;
