
---

## 🧠 Key Git Concepts Practiced

### ✅ Installation & Configuration
- Installed Git using Homebrew
- Configured global Git username and email

### ✅ GitHub Setup
- Created a GitHub repo `BugTracker` (private/public)
- Cloned via HTTPS using personal access token (PAT)

### ✅ Core Git Commands
- `git clone`, `git add`, `git commit`, `git push`, `git pull`
- Used **conventional commits**:  
  - `feat: initial layout for BugTracker`  
  - `fix: resolved heading conflict`  
  - `chore: add .gitignore file`

### ✅ Conflict Resolution
- Triggered and resolved merge conflict in `index.html`

### ✅ Branching Workflow
- Created branches `frontend` and `backend`
- Implemented features separately in each
- Merged to `main` via Pull Requests (PRs)
- Renamed branch `main` ➝ `dev-main`

### ✅ Git Utilities
- Used `git stash`, `git reset`, `git restore`
- Verified `.git` folder
- Tracked commits using `git log`

---

## 🌳 Branch Structure

| Branch     | Purpose                    |
|------------|----------------------------|
| `dev-main` | Renamed main branch        |
| `frontend` | Frontend files & layout    |
| `backend`  | Backend logic              |

---

## 🔀 Pull Request Summary

- Merged changes from `frontend` and `backend` to `main`
- Resolved merge conflict in `index.html`
- Pull requests followed a clean review workflow

---

## 📦 .gitignore Contents

```gitignore
node_modules/
*.log
.env
