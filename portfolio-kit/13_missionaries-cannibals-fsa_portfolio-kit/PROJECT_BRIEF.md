# Project Brief: FSA-Based Missionaries and Cannibals Puzzle Game

## Project title

**FSA-Based Missionaries and Cannibals Puzzle Game**

## Short summary

This project is an interactive desktop puzzle game built with **Python** and **Pygame** to demonstrate the classic Missionaries and Cannibals problem using **Finite State Automata (FSA)** concepts. The current project focus is the **original runnable Pygame application**, packaged as a **Windows executable**, supported by a demo video, GitHub repository, and portfolio page.

## Background

The Missionaries and Cannibals puzzle is a well-known logic problem where three missionaries and three cannibals must cross a river using a boat with limited capacity. The challenge is to move everyone safely without ever leaving missionaries outnumbered by cannibals on either river bank.

This project turns the puzzle into an interactive visual application. Instead of presenting the solution only as a text-based algorithm, the player can select characters, move the boat, see the current state, and observe how valid and invalid transitions affect the game.

## Problem statement

Many algorithm and automata projects are difficult for non-technical viewers to understand because they are presented only as formulas, console output, or static diagrams. This project addresses that by converting the state-transition problem into a visual game interface where the player can directly interact with states, actions, constraints, and outcomes.

## Objective

The objective is to build a recruiter-ready portfolio project that demonstrates:

- Python programming fundamentals.
- Pygame-based desktop application development.
- Finite State Automata concepts through state representation and transition rules.
- Rule validation for puzzle constraints.
- Event-driven interaction through mouse input and game loop updates.
- Packaging a Python desktop app into a distributable Windows executable.

## Scope

In scope:

- Original Pygame desktop game.
- Click-based character selection.
- Boat movement between river banks.
- State and action display during gameplay.
- Win and game-over conditions.
- Sound toggle and background music handling.
- Windows executable packaging using PyInstaller.
- Portfolio documentation, screenshots, demo video, and deployment notes.

Out of scope for the main project focus:

- Rebuilding the game as a browser-first web game.
- Hosting the full Python source as a live web app.
- Uploading heavy development folders such as `venv`, `build`, or full PyInstaller `_internal` folders unless intentionally distributing an executable release.

## Tech stack

- **Language:** Python
- **Game framework:** Pygame
- **Packaging:** PyInstaller
- **Runtime target:** Windows desktop
- **Documentation:** Markdown
- **Portfolio delivery:** GitHub repository, portfolio page, optional landing page, demo assets, downloadable Windows ZIP

## Main features

- Interactive Missionaries and Cannibals puzzle gameplay.
- Visual river, boat, missionaries, and cannibals.
- Mouse-based passenger selection and deselection.
- Boat movement animation between left and right banks.
- Display of current `State`, `Action`, and move count.
- Game-over validation when missionaries are outnumbered.
- Winning state detection when all characters safely reach the right bank.
- New game button for restarting the game.
- Sound toggle with safe fallback when audio is unavailable.
- Asset loading that works both in development mode and PyInstaller executable mode.

## State representation

The game represents the puzzle state as:

```text
state = [M_left, C_left, Boat]
```

Where:

- `M_left` = number of missionaries on the left bank.
- `C_left` = number of cannibals on the left bank.
- `Boat = 1` means the boat is on the left bank.
- `Boat = 0` means the boat is on the right bank.

The action is represented as:

```text
action = [missionaries_on_boat, cannibals_on_boat]
```

The boat may carry one or two passengers. A successful boat crossing updates the state based on the selected action and the direction of travel.

## Original Pygame implementation

The original application is located in:

```text
original-pygame/
```

Important files:

```text
original-pygame/main.py
original-pygame/Person.py
original-pygame/Boat.py
original-pygame/images/
original-pygame/music/
original-pygame/requirements.txt
original-pygame/build_exe.ps1
```

The project uses a Pygame event loop to process quit events, keyboard events, and mouse clicks. The game draws the background, characters, boat, state text, action text, move counter, buttons, and result screens on each frame.

Asset paths are handled through a `resource_path()` helper so the same code can load files correctly in normal Python mode and in a PyInstaller-bundled executable.

## Windows executable packaging

The Windows executable is built with PyInstaller in folder mode. Folder mode is preferred because it is more stable for Pygame applications with images and music assets.

Recommended release artifact:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

The ZIP should contain the generated executable folder, including the `.exe` and bundled dependencies/assets. This can be uploaded to GitHub Releases or linked from the portfolio page.

## Limitations

- The primary target is Windows desktop.
- The executable may trigger Windows SmartScreen or antivirus warnings because it is an unsigned app from an independent developer.
- The game focuses on manual interaction rather than automatic BFS/DFS solving.
- The UI is fixed-size and not currently responsive.
- The web demo folder may exist for reference, but it is not the main project direction.

## Future improvements

- Add an automatic solver visualization using BFS or DFS.
- Display legal next actions based on the current state.
- Add a state graph or transition table view.
- Improve UI scaling for different screen sizes.
- Add unit tests for state transition validation.
- Create signed Windows releases to reduce SmartScreen warnings.
- Add a concise downloadable user manual.
