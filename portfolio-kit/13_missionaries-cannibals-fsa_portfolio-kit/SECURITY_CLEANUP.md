# Security Cleanup Checklist

Use this checklist before publishing **FSA-Based Missionaries and Cannibals Puzzle Game** to GitHub, a portfolio page, GitHub Releases, or cPanel hosting.

The main project release should focus on the original Pygame runnable app, Windows executable ZIP, demo video, GitHub repository, and portfolio page.

## Credential check

Confirm the repository and public hosting do not contain:

- [ ] API keys.
- [ ] Access tokens.
- [ ] Hosting credentials.
- [ ] cPanel username/password.
- [ ] FTP/SFTP credentials.
- [ ] Email/password combinations.
- [ ] Private notes with login information.
- [ ] Hardcoded secrets in source code.

## `.env` check

Do not upload:

```text
.env
.env.local
.env.production
*.env
```

If environment files are ever needed later, commit only safe examples such as:

```text
.env.example
```

## Database dump check

Do not upload:

```text
*.sql
*.sqlite
*.db
database dumps
backup exports
```

This project should not need database files.

## Private key check

Do not upload:

```text
id_rsa
id_rsa.pub
*.pem
*.key
*.p12
*.pfx
SSH keys
SSL private keys
```

## Hosting credential check

Do not upload:

- cPanel login details.
- FTP account details.
- Hosting screenshots showing private paths or usernames.
- Deployment notes containing passwords.
- Server configuration files with secrets.

## Email/password check

Search the repository for accidental credentials:

```powershell
Select-String -Path .\* -Pattern "password","passwd","email","token","secret","api_key" -Recurse
```

Review matches manually. Some words may appear in normal documentation, but real credentials must be removed.

## Do not upload virtual environment

Do not upload:

```text
original-pygame/venv/
venv/
.venv/
```

Reason:

- Large folder.
- Machine-specific.
- Can contain many generated dependencies.
- Not needed because dependencies are listed in `requirements.txt`.

The `venv` folder was intentionally not uploaded here because it is large and unnecessary for portfolio documentation.

## Do not upload build/cache folders

Do not upload generated build/cache folders unless intentionally needed for a release process:

```text
original-pygame/build/
__pycache__/
.pytest_cache/
.mypy_cache/
.cache/
*.pyc
```

## Do not upload `dist` unless intended release

Do not upload:

```text
original-pygame/dist/
```

unless it is intentionally being used as a downloadable packaged app.

For public distribution, prefer:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

Then upload that ZIP to GitHub Releases or a portfolio download location.

## Do not upload large release ZIP directly to repo if not needed

Large release files can make the repository heavy.

Recommended approach:

- Keep source code and documentation in the repository.
- Upload `MissionariesCannibalsFSA-Windows.zip` to GitHub Releases.
- Link the release asset from the portfolio page.

## PyInstaller `_internal` folder note

PyInstaller folder-mode builds may generate a large internal dependency folder such as:

```text
original-pygame/dist/MissionariesCannibalsFSA/_internal/
```

This folder is required only when distributing the executable folder. It does not need to be committed directly to the repository. If distributing the app as ZIP, include the full executable folder inside the ZIP.

The large `_internal` folder was intentionally not uploaded here because it is large and only needed as part of a final executable distribution.

## Asset license check

Before publishing, review the license or origin of:

```text
original-pygame/images/
original-pygame/music/
```

Checklist:

- [ ] Confirm assets are original, licensed, or allowed for portfolio use.
- [ ] Add attribution if required.
- [ ] Remove assets that cannot be redistributed.
- [ ] Document asset credits in README if needed.

## GitHub public checklist

Before making the repository public, confirm:

- [ ] No credentials are committed.
- [ ] No `.env` files are committed.
- [ ] No database dumps are committed.
- [ ] No private keys are committed.
- [ ] No hosting credentials are committed.
- [ ] No email/password information is committed.
- [ ] `venv/` is excluded.
- [ ] `build/` is excluded.
- [ ] cache folders are excluded.
- [ ] `dist/` is excluded unless intentionally released.
- [ ] Large ZIP files are uploaded to GitHub Releases when possible.
- [ ] Asset licenses are checked.
- [ ] README explains Windows SmartScreen and antivirus false-positive possibility.
- [ ] Download links point to trusted official sources.

## Suggested `.gitignore` entries

```gitignore
# Python
__pycache__/
*.py[cod]
.pytest_cache/
.mypy_cache/

# Virtual environments
venv/
.venv/

# Environment / secrets
.env
.env.*
*.pem
*.key
*.p12
*.pfx

# Build output
build/
dist/
*.spec

# OS/editor
.DS_Store
Thumbs.db
.vscode/
.idea/

# Optional large release artifacts
release/*.zip
```

If a `.spec` file is intentionally maintained for PyInstaller, remove `*.spec` from `.gitignore` and review the file before committing.
