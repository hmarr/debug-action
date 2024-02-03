# Debug GitHub Action

**Name:** `hmarr/debug-action`

Print the environment variables and the event payload. Useful for developing or
debugging GitHub Actions.

Secrets are automatically filtered in the Actions logs.

**Important:** use v2.0.0 or later, as v1 was designed for the initial GitHub Actions beta, and may no longer work as expected.

## Usage instructions

Add a step with `- uses: hmarr/debug-action@v3` to a workflow file. Here's an example of a complete workflow file:

```yaml
name: Debug
on: pull_request_target

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: hmarr/debug-action@v3
```


## Example output (in the Actions logs)

```
▶ Environment variables
  ACTIONS_RUNTIME_TOKEN=***
  CI=true
  GITHUB_ACTION=hmarrdebug-action
  GITHUB_ACTIONS=true
  GITHUB_ACTION_REF=v2.0.0
  GITHUB_ACTION_REPOSITORY=hmarr/debug-action
  GITHUB_ACTOR=hmarr
  GITHUB_API_URL=https://api.github.com
  GITHUB_BASE_REF=main
  GITHUB_EVENT_NAME=pull_request_target
  GITHUB_EVENT_PATH=/home/runner/work/_temp/_github_workflow/event.json
  GITHUB_HEAD_REF=patch-1
  GITHUB_JOB=build
  GITHUB_REF=refs/heads/main
  GITHUB_REPOSITORY=hmarr/demo
  GITHUB_REPOSITORY_OWNER=hmarr
  GITHUB_RUN_ID=658297586
  GITHUB_RUN_NUMBER=15
  GITHUB_SERVER_URL=https://github.com
  GITHUB_SHA=a4171998f9bf51fc5b9d0283b7d5243ac28954d1
  GITHUB_WORKFLOW=approve
  GITHUB_WORKSPACE=/home/runner/work/demo/demo
  HOME=/home/runner
  INPUT_GITHUB-TOKEN=***
  INVOCATION_ID=44ad8f42f5244809971260b35b889a08
  LEIN_HOME=/usr/local/lib/lein
  LEIN_JAR=/usr/local/lib/lein/self-installs/leiningen-2.9.5-standalone.jar
  PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
  RUNNER_OS=Linux
  RUNNER_TOOL_CACHE=/opt/hostedtoolcache
  RUNNER_USER=runner
  RUNNER_WORKSPACE=/home/runner/work/demo
  USER=runner

▶ Event JSON
  {
    "action": "opened",
    "number": 20,
    "pull_request": {
      ...
    }
  }
```

That example is truncated a bit, but you get the idea.

## Development and release process

Each major version corresponds to a branch (e.g. `v1`, `v2`). The latest major
version (`v3` at the time of writing) is the repository's default branch.
Releases are tagged with semver-style version numbers (e.g. `v1.2.3`).
