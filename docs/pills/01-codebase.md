> One codebase tracked in revision control, many deploys

- Tracked in VCS (Git, Subversion, etc)
- One single repo or set of repos with the same root commit
    - Multiple codebases → distributed system, not an app
    - Multiple apps sharing same code → use libraries
- Many deploys of the same code base (production, staging/dev and local) although different versions may be active for each