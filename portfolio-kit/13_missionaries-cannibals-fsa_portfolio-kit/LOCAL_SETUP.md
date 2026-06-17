# Local Setup Guide

This guide explains how to run the original Pygame version of **FSA-Based Missionaries and Cannibals Puzzle Game** locally on Windows.

The main project focus is the **original Pygame runnable app** and the **Windows executable release**, not a browser-based web game.

## Prerequisites

Install the following:

- Windows 10 or Windows 11.
- Python 3.11 or Python 3.12 recommended.
- Git, if cloning from GitHub.
- PowerShell.
- Internet connection for installing Python packages.

## Windows PowerShell setup

Open PowerShell and go to the original Pygame folder:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
```

## Python version note

Recommended Python versions:

```text
Python 3.11.x
Python 3.12.x
```

Python 3.13 may work for some environments, but Pygame and PyInstaller compatibility can vary depending on package availability and system configuration. For the most stable setup, use Python 3.11 or 3.12.

Check Python version:

```powershell
python --version
```

## Virtual environment setup

Use a local virtual environment inside `original-pygame/`.

Required commands:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python main.py
```

Note: the `venv` folder should not be uploaded to GitHub or portfolio hosting because it is large and machine-specific.

## Install requirements

The project dependencies are listed in:

```text
original-pygame/requirements.txt
```

Install them with:

```powershell
pip install -r requirements.txt
```

Expected main dependencies:

```text
pygame
pyinstaller
```

## Run original Pygame app

After activating the virtual environment and installing dependencies, run:

```powershell
python main.py
```

Expected result:

- A Pygame window opens.
- The game title is displayed as Missionaries and Cannibals.
- Missionaries, cannibals, boat, buttons, state text, action text, and move counter appear.
- The player can select characters and move the boat.

## Troubleshooting Python 3.13

Symptoms may include:

- `pip install pygame` fails.
- PyInstaller fails during build.
- Pygame window or audio initialization behaves inconsistently.

Recommended fix:

1. Install Python 3.11 or 3.12.
2. Recreate the virtual environment.
3. Reinstall requirements.

Example:

```powershell
Remove-Item -Recurse -Force .\venv
py -3.12 -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python main.py
```

## Fallback Python 3.11/3.12

If multiple Python versions are installed, use the Python Launcher:

```powershell
py -3.11 --version
py -3.12 --version
```

Create the environment with a specific version:

```powershell
py -3.12 -m venv venv
```

Then activate and run normally:

```powershell
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py
```

## Troubleshooting PowerShell execution policy

If PowerShell blocks virtual environment activation, you may see an error similar to:

```text
running scripts is disabled on this system
```

Temporary fix for the current PowerShell session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\venv\Scripts\Activate.ps1
```

This does not permanently change the machine-wide policy.

## Troubleshooting asset path

If the app cannot find images or music, confirm this structure exists:

```text
original-pygame/
├── main.py
├── Person.py
├── Boat.py
├── images/
└── music/
```

Run the game from `original-pygame/`:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
python main.py
```

The code includes asset path handling for both development mode and PyInstaller mode, but missing or renamed asset folders will still cause errors.

## Test checklist

Before marking local setup as complete, verify:

- [ ] Virtual environment activates successfully.
- [ ] `pip install -r requirements.txt` completes.
- [ ] `python main.py` opens the Pygame window.
- [ ] Characters display correctly.
- [ ] Boat displays correctly.
- [ ] User can select one or two passengers.
- [ ] Go button moves the boat.
- [ ] State and action text update.
- [ ] Game-over screen appears for invalid states.
- [ ] Winner screen appears when the puzzle is solved.
- [ ] New game button restarts the game.
- [ ] Sound toggle does not crash the app.
