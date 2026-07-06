export function getHealth(req, res) {
  res.status(200).json({
    status: "ok",
  });
}

export function getVersion(req, res) {
  res.status(200).json({
    name: "NERV Quote API",
    version: process.env.APP_VERSION || "development",
    commit: process.env.GIT_SHA || "development",
    builtAt: process.env.BUILD_DATE || "development",
    environment: process.env.NODE_ENV || "development",
  });
}