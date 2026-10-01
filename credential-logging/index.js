// RevSec scan fixture: DELIBERATELY INSECURE, do not use. A secret written into the logs.
// The value is a placeholder; the DEFECT is that an env var reaches a log sink
// at all, where it will be collected, shipped and retained.
export function connect() {
  console.log("connecting with token", process.env.API_TOKEN);
  return { ok: true };
}
