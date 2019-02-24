FROM alpine

LABEL "repository"="http://github.com/hmarr/debug-action"
LABEL "homepage"="http://github.com/hmarr/debug-action"
LABEL "maintainer"="Harry Marr <harry@hmarr.com>"

LABEL "com.github.actions.name"="Debug Action"
LABEL "com.github.actions.description"="Log the action's environment variables and event payload"
LABEL "com.github.actions.icon"="code"
LABEL "com.github.actions.color"="yellow"

RUN apk --no-cache add jq

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
