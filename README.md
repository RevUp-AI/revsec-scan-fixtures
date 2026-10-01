# RevSec scan fixtures

> [!CAUTION]
> **Deliberately insecure test code. Do not install, run, copy or depend on anything in this repository.**
> It exists only so the RevSec security scanner can be shown to catch it.

This repository holds four small examples of unsafe MCP server code. Each one plants exactly one pattern that a
security review should catch. RevSec downloads the repository, scans the source and must report each pattern on
the right file and line.

## Why it is safe to keep public

- It is not published to npm, PyPI or any other registry, and it has no package manifest, so nothing here can be
  installed by name.
- None of the examples is a working MCP server, and none runs anything when it is loaded.
- None contacts a real service. The one outside address uses the reserved `.invalid` domain, which never resolves.
- There are no credentials or secrets in the code.

## What each folder plants

| Folder | What it plants | What the scan reports |
|---|---|---|
| `oauth-overprivilege/` | a notes-reading tool that asks GitHub for full repository, organisation admin and repository delete rights | Over-privileged OAuth scopes |
| `credential-logging/` | an environment variable written into a log | A secret written to a log |
| `tool-poisoning/` | invisible zero-width and right-to-left characters hiding an instruction in a tool description | Hidden characters, prompt injection |
| `undeclared-shell/` | a tool described as read-only that runs a shell command | Dangerous command execution |

## Found this by accident?

It is a test artefact for the RevSec scanner, maintained by RevUp AI. There is nothing here worth using.
