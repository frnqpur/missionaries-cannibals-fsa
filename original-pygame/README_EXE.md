# Windows Executable Build

Project: **FSA-Based Missionaries and Cannibals Puzzle Game**  
Application name: **MissionariesCannibalsFSA**

This document explains how to build and share the original Python/Pygame game as a Windows executable using PyInstaller.

This is still the original Python/Pygame project. It is not a web app and it has not been rewritten to HTML/CSS/JavaScript.

---

## Purpose

The executable version lets recruiters run the game without manually installing Python, Pygame, or project dependencies.

The recommended release format is a ZIP file containing the full PyInstaller folder-mode output:

```text
MissionariesCannibalsFSA/
├── MissionariesCannibalsFSA.exe
├── _internal/
└── bundled runtime/dependency files
```

Depending on the PyInstaller version, bundled assets and dependencies may appear inside `_internal/` or directly inside the app folder.

---

## Before Building

First confirm the original Pygame app runs normally:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame

python -m venv venv
.\venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
pip install -r requirements.txt

python main.py
```

Expected result: a Pygame window opens and the original Missionaries and Cannibals game is playable.

---

## PowerShell Execution Policy

If PowerShell blocks virtual environment activation, run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then activate again:

```powershell
.\venv\Scripts\Activate.ps1
```

This changes execution policy only for the current PowerShell session.

---

## Build Executable

Run:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
.\build_exe.ps1
```

The script will:

- create `venv` if needed,
- activate the virtual environment,
- upgrade `pip`,
- install dependencies from `requirements.txt`,
- install or upgrade `pyinstaller`,
- remove old `build/`, `dist/`, and `.spec` files,
- run PyInstaller in folder mode,
- include the `images/` folder,
- include the `music/` folder,
- create the root `release/` folder if missing,
- print the final output path.

---

## PyInstaller Command

The build script uses this command:

```powershell
pyinstaller --noconfirm --windowed --name MissionariesCannibalsFSA --add-data "images;images" --add-data "music;music" main.py
```

Folder mode is used intentionally instead of `--onefile`.

Reasons:

- more stable for Pygame projects,
- easier to debug missing assets,
- usually fewer antivirus false-positive issues than onefile builds,
- easier to ZIP and share as a Windows app folder.

---

## Output Folder

After a successful build:

```text
original-pygame/
└── dist/
    └── MissionariesCannibalsFSA/
        ├── MissionariesCannibalsFSA.exe
        ├── _internal/
        └── dependency/internal files from PyInstaller
```

The `images/` and `music/` assets are included through PyInstaller `--add-data`.

---

## Run the Executable

Open:

```text
original-pygame/dist/MissionariesCannibalsFSA/MissionariesCannibalsFSA.exe
```

Do not move only the `.exe` by itself. The `.exe` depends on the other files in the `MissionariesCannibalsFSA/` folder.

---

## Create Release ZIP

Recommended ZIP name:

```text
MissionariesCannibalsFSA-Windows.zip
```

PowerShell command:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame

Compress-Archive `
  -Path ".\dist\MissionariesCannibalsFSA" `
  -DestinationPath "..\release\MissionariesCannibalsFSA-Windows.zip" `
  -Force
```

The ZIP should contain the folder:

```text
MissionariesCannibalsFSA/
├── MissionariesCannibalsFSA.exe
└── dependency/internal files from PyInstaller
```

---

## Files/Folders Safe to Share

For recruiters, share:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

Inside the ZIP, keep the full folder:

```text
MissionariesCannibalsFSA/
```

Do not share only:

```text
MissionariesCannibalsFSA.exe
```

because the folder-mode executable needs the bundled internal files.

---

## Windows SmartScreen Warning

Windows may show a SmartScreen warning because the executable is not code-signed.

Common message:

```text
Windows protected your PC
```

This is expected for unsigned personal portfolio apps.

To continue:

```text
More info → Run anyway
```

For public distribution, code signing is the professional solution, but it is optional for a portfolio demo.

---

## Antivirus False-Positive Note

PyInstaller executables can occasionally trigger false-positive antivirus warnings, especially for unsigned executables.

To reduce the risk:

- use folder mode instead of onefile,
- do not obfuscate or pack the executable,
- upload the ZIP as a GitHub Release,
- include source code in the repository so recruiters can inspect it.

---

## Troubleshooting

### Missing Images

Symptoms:

- blank sprites,
- background missing,
- crash mentioning `images/...`.

Fix:

1. Confirm `images/` exists in the original project.
2. Rebuild using `build_exe.ps1`.
3. Confirm the PyInstaller command includes:

```powershell
--add-data "images;images"
```

The project uses `resource_path()` in `main.py`, so assets should work in both development and executable mode.

---

### Missing Music or Sound

Symptoms:

- no background music,
- no win/game-over sound,
- audio warning in terminal.

Fix:

1. Confirm `music/` exists.
2. Rebuild using `build_exe.ps1`.
3. Confirm the PyInstaller command includes:

```powershell
--add-data "music;music"
```

The game is designed to keep running even if audio fails to load.

---

### App Immediately Closes

Because the app is built with `--windowed`, errors may disappear without a terminal.

Debug by temporarily building without `--windowed`:

```powershell
pyinstaller --noconfirm --name MissionariesCannibalsFSA --add-data "images;images" --add-data "music;music" main.py
```

Then run the executable from PowerShell to see the error output.

---

### Pygame Error

Try reinstalling dependencies inside the virtual environment:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame

.\venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
pip install --upgrade pygame pyinstaller
```

Then rebuild:

```powershell
.\build_exe.ps1
```

---

### Python 3.13 Issues

If Python 3.13 has trouble installing or running Pygame, use Python 3.11 or 3.12.

Python 3.12 example:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame

py -3.12 -m venv venv
.\venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
pip install -r requirements.txt

python main.py
.\build_exe.ps1
```

Python 3.11 example:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame

py -3.11 -m venv venv
.\venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
pip install -r requirements.txt

python main.py
.\build_exe.ps1
```

---

## Executable Test Checklist

Use this checklist before sharing the ZIP:

```text
[ ] MissionariesCannibalsFSA.exe opens
[ ] Background appears
[ ] Missionary sprites appear
[ ] Cannibal sprites appear
[ ] Boat appears
[ ] Sound/music works if audio device allows it
[ ] Game does not crash if sound is unavailable
[ ] Character can board the boat
[ ] Character can leave the boat
[ ] Boat can move
[ ] State display changes after boat movement
[ ] Move counter changes
[ ] Game over screen appears for invalid state
[ ] Winner screen appears for final state
[ ] New Game/reset works
[ ] Sound ON/OFF works
[ ] Window can be closed without error
```

---

## GitHub Release Recommendation

Do not commit the executable ZIP directly into the repository.

Recommended approach:

1. Commit source code, build script, and documentation.
2. Build the executable locally on Windows.
3. Create a GitHub Release, for example `v1.0.0`.
4. Upload:

```text
MissionariesCannibalsFSA-Windows.zip
```

This keeps the repository clean while still giving recruiters an easy download option.
