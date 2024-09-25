module.exports = {
    apps: [
      {
        name: "parse-server",
        script: "yarn start",
        cwd: "./parse-server",
      },
      {
        name: "nextjs",
        script: "yarn start",
        cwd: "./react-nextjs",
      },
    ],
  };
  