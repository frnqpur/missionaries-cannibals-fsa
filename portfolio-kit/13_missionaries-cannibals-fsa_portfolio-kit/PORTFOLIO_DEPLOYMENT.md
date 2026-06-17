# Portfolio Deployment Guide

This guide explains how to publish portfolio materials for **FSA-Based Missionaries and Cannibals Puzzle Game**.

The portfolio should present the project as an **original Pygame runnable desktop app with a Windows executable**, supported by demo video, screenshots, GitHub, and a download link. Do not position the main project as a web game.

## Portfolio page target

Primary portfolio page:

```text
https://frengkipurba.com/projects/missionaries-cannibals-fsa
```

## Optional landing page

Optional standalone landing page:

```text
https://missionaries-cannibals-fsa.frengkipurba.com
```

This landing page can be used as a lightweight showcase page that links back to GitHub, the demo video, and the Windows download.

## What to upload to cPanel

Upload only files needed for the public portfolio experience.

Recommended upload items:

```text
portfolio-page-template/
demo-assets/screenshots/
demo-assets/video/missionaries-cannibals-fsa-demo.mp4  # if size acceptable
release/MissionariesCannibalsFSA-Windows.zip           # if size acceptable
```

Also include any CSS, JavaScript, images, or static assets required by the portfolio page template.

## What not to upload

Do not upload unnecessary development or private files to public hosting.

Avoid uploading:

```text
original-pygame/ source if not needed on the public page
original-pygame/venv/
original-pygame/build/
original-pygame/dist/ unless intentionally downloadable
original-pygame/dist/MissionariesCannibalsFSA/_internal/ unless included inside intended release ZIP
.git/
.env
private keys
hosting credentials
database dumps
large temporary files
cache folders
```

The user intentionally did not upload `original-pygame/venv` and the large PyInstaller `_internal` folder here because they are large and not needed for documentation generation.

## cPanel folder structure

Suggested structure for the main portfolio page:

```text
public_html/
└── projects/
    └── missionaries-cannibals-fsa/
        ├── index.html
        ├── style.css
        ├── screenshots/
        │   ├── 01_pygame_start_screen.PNG
        │   ├── 02_pygame_initial_state.PNG
        │   ├── 03_pygame_character_selection.PNG
        │   ├── 04_pygame_boat_loading.PNG
        │   ├── 05_pygame_boat_moving.PNG
        │   ├── 06_pygame_state_action_display.PNG
        │   ├── 07_pygame_game_over.PNG
        │   └── 08_pygame_winner.PNG
        ├── video/
        │   └── missionaries-cannibals-fsa-demo.mp4
        └── downloads/
            └── MissionariesCannibalsFSA-Windows.zip
```

Suggested structure for optional subdomain landing page:

```text
public_html/
└── missionaries-cannibals-fsa/
    ├── index.html
    ├── style.css
    ├── screenshots/
    ├── video/
    └── downloads/
```

Actual cPanel folder paths may vary depending on hosting configuration and subdomain settings.

## Recommended portfolio page sections

- Project title.
- Short summary.
- Demo video embed or video link.
- Download Windows app button.
- GitHub button.
- Screenshot gallery.
- Tech stack.
- Key features.
- FSA/state transition explanation.
- Local setup link.
- Executable build notes.
- Security/distribution note for unsigned Windows executable.

## Testing after upload

After uploading, test these items:

- [ ] Portfolio page loads at `https://frengkipurba.com/projects/missionaries-cannibals-fsa`.
- [ ] CSS loads correctly.
- [ ] Screenshot images display.
- [ ] Demo video plays or download link works.
- [ ] Windows app ZIP downloads successfully.
- [ ] GitHub link opens the correct repository.
- [ ] Optional landing page loads if used.
- [ ] Mobile view is readable.
- [ ] Browser console does not show broken asset paths.
- [ ] File names are case-sensitive safe for hosting.

## Rollback notes

Before replacing a live portfolio page:

1. Download or copy the current live version as backup.
2. Upload the new version to a temporary folder when possible.
3. Test all links and assets.
4. Replace the live page only after testing.
5. Keep a backup ZIP of the previous version.

Suggested backup naming:

```text
missionaries-cannibals-fsa_portfolio_backup_YYYY-MM-DD.zip
```

If a deployment issue occurs, restore the previous `index.html`, CSS, screenshots, video, and download files from the backup.
