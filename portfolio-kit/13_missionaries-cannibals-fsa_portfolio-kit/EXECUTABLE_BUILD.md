# Executable Build Guide

This guide explains how to build the Windows executable for **FSA-Based Missionaries and Cannibals Puzzle Game**.

The main delivery focus is the **original Pygame runnable app** and a **Windows executable**, not a web game.

## Why executable is needed

A Windows executable is useful because recruiters, reviewers, and non-technical users may not want to install Python, create a virtual environment, or run commands manually. A downloadable ZIP containing the executable folder makes the project easier to test from a portfolio page or GitHub Release.

## PyInstaller overview

The project uses **PyInstaller** to package the Python/Pygame app into a Windows desktop executable.

PyInstaller collects:

- Python runtime components.
- Pygame dependencies.
- Game source files.
- Image assets.
- Music and sound assets.
- Required DLLs and internal support files.

## Requirements

Recommended environment:

- Windows 10 or Windows 11.
- Python 3.11 or 3.12.
- PowerShell.
- Project dependencies from `requirements.txt`.
- PyInstaller.

From the original Pygame folder:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
pip install --upgrade pyinstaller
```

## Build command

Manual PyInstaller command:

```powershell
pyinstaller --noconfirm --windowed --name MissionariesCannibalsFSA --add-data "images;images" --add-data "music;music" main.py
```

Explanation:

- `--noconfirm` overwrites previous output without prompting.
- `--windowed` prevents a console window from opening for the GUI app.
- `--name MissionariesCannibalsFSA` sets the executable folder and app name.
- `--add-data "images;images"` bundles image assets.
- `--add-data "music;music"` bundles audio assets.
- `main.py` is the application entry point.

## `build_exe.ps1` usage

The project includes a helper script:

```text
original-pygame/build_exe.ps1
```

Run it from PowerShell:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
.\build_exe.ps1
```

If PowerShell blocks script execution, run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build_exe.ps1
```

The script validates required files, creates a virtual environment when needed, installs dependencies, cleans old build output, runs PyInstaller, and prints the output path.

## Folder mode vs onefile

This project uses **folder mode** instead of `--onefile`.

Folder mode benefits:

- More stable for Pygame apps with images and audio.
- Easier to debug missing assets.
- Faster startup compared with onefile extraction.
- Easier to inspect bundled files.

Onefile can be added later, but it may increase startup time and asset-loading complexity.

## Asset bundling

The build must include:

```text
images/
music/
```

The source code uses `resource_path()` so assets can be loaded from:

- The development folder beside `main.py`.
- The PyInstaller bundled runtime path.

Do not rename asset folders without updating the build command and code.

## Output `dist` folder

After a successful folder-mode build, PyInstaller creates:

```text
original-pygame/dist/MissionariesCannibalsFSA/
```

Expected executable:

```text
original-pygame/dist/MissionariesCannibalsFSA/MissionariesCannibalsFSA.exe
```

The full folder is required for distribution. Do not distribute only the `.exe` file if dependencies and assets are stored beside it.

## Creating `MissionariesCannibalsFSA-Windows.zip`

Recommended release ZIP path:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

PowerShell command:

```powershell
$DistPath = "E:\laragon\www\missionaries-cannibals-fsa\original-pygame\dist\MissionariesCannibalsFSA"
$ReleaseZip = "E:\laragon\www\missionaries-cannibals-fsa\release\MissionariesCannibalsFSA-Windows.zip"
Compress-Archive -Path $DistPath -DestinationPath $ReleaseZip -Force
```

The existing `build_exe.ps1` also prints a recommended `Compress-Archive` command after a successful build.

## Testing executable

Before publishing the ZIP:

- [ ] Open `original-pygame/dist/MissionariesCannibalsFSA/`.
- [ ] Double-click `MissionariesCannibalsFSA.exe`.
- [ ] Confirm the Pygame window opens.
- [ ] Confirm images load correctly.
- [ ] Confirm music/sound does not crash the app.
- [ ] Test character selection.
- [ ] Test boat movement.
- [ ] Trigger game-over state.
- [ ] Complete the puzzle and confirm winner screen.
- [ ] Test the release ZIP on another Windows machine when possible.

## Windows SmartScreen warning note

Windows SmartScreen may warn users when opening an unsigned executable downloaded from the internet. This is common for small independent projects and does not automatically mean the app is unsafe.

Recommended note for users:

```text
Windows may show a SmartScreen warning because this is an unsigned student/portfolio app. Download only from the official GitHub Release or portfolio link.
```

## Antivirus false-positive note

Some antivirus tools may flag PyInstaller apps because many unrelated programs use PyInstaller packaging. This can happen even when the source code is safe.

Recommended mitigations:

- Keep source code public on GitHub.
- Use GitHub Releases for distribution.
- Avoid bundling unnecessary files.
- Scan the ZIP before publishing.
- Do not include credentials, private keys, or unrelated binaries.

## Recommended distribution method

Use one of these:

1. **GitHub Release** with `MissionariesCannibalsFSA-Windows.zip` as an attached release asset.
2. **Portfolio download link** that points to the same ZIP or a trusted hosted copy.

Recommended links:

- GitHub: https://github.com/frnqpur/missionaries-cannibals-fsa
- Portfolio page: https://frengkipurba.com/projects/missionaries-cannibals-fsa
- Optional landing page: https://missionaries-cannibals-fsa.frengkipurba.com
