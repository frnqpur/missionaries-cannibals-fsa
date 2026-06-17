# FSA-Based Missionaries and Cannibals Puzzle Game - Original Pygame App

This folder contains the original Python/Pygame version of the Missionaries and Cannibals puzzle game. The project represents the puzzle state as `[M_left, C_left, Boat]`, where the player moves missionaries and cannibals across the river using a boat with a maximum capacity of two passengers.

The goal is to keep the original game feel while making the project easier to run locally and easier to review as a portfolio project.

## Run on Windows PowerShell

Open PowerShell and go to this folder:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
```

Create a virtual environment:

```powershell
python -m venv venv
```

Activate the virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

Upgrade pip:

```powershell
python -m pip install --upgrade pip
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

Run the game:

```powershell
python main.py
```

## Expected Result

After running `python main.py`, a Pygame window should open and display:

- background image,
- missionaries,
- cannibals,
- boat,
- Go button,
- New Game button,
- Sound ON/OFF button,
- state, action, and move counter text.

## Troubleshooting: PowerShell Execution Policy

If PowerShell blocks virtual environment activation, run this command in the same PowerShell window:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then activate the virtual environment again:

```powershell
.\venv\Scripts\Activate.ps1
```

This setting only applies to the current PowerShell process.

## Troubleshooting: Python 3.13

If `pygame` fails to install or run with Python 3.13, use Python 3.11 or Python 3.12 instead.

Example with Python 3.12:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
py -3.12 -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python main.py
```

Example with Python 3.11:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
py -3.11 -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python main.py
```

## Troubleshooting: pygame

If you see an error like `ModuleNotFoundError: No module named 'pygame'`, make sure the virtual environment is active and reinstall the dependency:

```powershell
pip install -r requirements.txt
```

You can also check the installed package:

```powershell
python -m pip show pygame
```

## Troubleshooting: Asset Not Found

The game uses local files from:

```text
images/
music/
```

The updated `main.py` loads assets using `BASE_DIR`, so it should work even when launched from another working directory. If an asset is missing, the error message will show the exact missing file path.

Make sure these files exist:

```text
images/boat.png
images/bg1.png
images/missionary.png
images/cannibal.png
images/newgame.png
images/winner.png
images/gameover.png
music/bgmusic.mp3
music/gameover.wav
music/won.wav
```

## Troubleshooting: Audio

If a music or sound file cannot be loaded, the game will print an audio warning but should continue running. This is intentional so the original game remains playable even on devices where audio initialization fails.
