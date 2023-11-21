const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextEnv = require("next-env");

const withEnv = nextEnv();

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("dev mode")
  }
  return withEnv(defaultConfig)
}