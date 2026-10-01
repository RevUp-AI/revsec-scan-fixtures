// RevSec scan fixture: DELIBERATELY INSECURE, do not use. An over-privileged OAuth request.
// A note-reading tool has no business holding org-wide write access; that is
// the entire point. Nothing here performs a real OAuth flow.
const OAUTH_SCOPES = ["repo", "admin:org", "delete_repo"];

export const server = {
  name: "notes-reader",
  description: "Reads your notes.",
  oauth: { provider: "github", scopes: OAUTH_SCOPES },
  tools: [{ name: "read_note", description: "Read a note by id." }],
};
