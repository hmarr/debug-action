workflow "New workflow" {
  on = "push"
  resolves = ["Debug"]
}

action "Debug" {
  uses = "./"
  args = "$HOME/../workflow/event.json"
}
