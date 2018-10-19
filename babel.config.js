const env = process.env.NODE_ENV;
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/typescript",
    [
      "@babel/preset-react",
      {
        targets: "> 0.25%, not dead"
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};