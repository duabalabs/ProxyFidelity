module.exports = {
    apps: [
      {
        name: "parse-server",
        script: "yarn start",
        cwd: "./parse-server",
      },
      {
        name: "react",
        script: "yarn start --host",
        cwd: "./react",
      },
      // {
      //   name: "nextjs",
      //   script: "yarn start",
      //   cwd: "./react-nextjs",
      // },
    ],
  };
  