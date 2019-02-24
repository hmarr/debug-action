# Debug GitHub Action

**Name:** `hmarr/debug-action`

Print the environment variables and the event payload. Useful for developing or
debugging GitHub Actions.

## Example output (in the Actions logs)

```
-- Environment variables ----------------------------------------------
HOSTNAME=cdca0460a2e8
SHLVL=1
HOME=/github/home
GITHUB_EVENT_PATH=/github/workflow/event.json
GITHUB_WORKFLOW=New workflow
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
GITHUB_ACTION=hmarr/debug-action
GITHUB_REPOSITORY=hmarr/some-repository
GITHUB_WORKSPACE=/github/workspace
GITHUB_SHA=2b337df5ad49034668adfa8f7d69120bb844eb96
GITHUB_ACTOR=hmarr
GITHUB_REF=refs/heads/some-branch
PWD=/github/workspace
GITHUB_EVENT_NAME=pull_request
-----------------------------------------------------------------------

-- Event JSON ---------------------------------------------------------
{
  "action": "opened",
  "number": 10,
  "pull_request": {
  ...
  }
}
-----------------------------------------------------------------------
```
