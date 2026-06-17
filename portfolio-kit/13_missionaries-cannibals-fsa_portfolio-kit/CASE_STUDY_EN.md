# Case Study: FSA-Based Missionaries and Cannibals Puzzle Game

## Project title

**FSA-Based Missionaries and Cannibals Puzzle Game**

## Summary

This project is a desktop puzzle game built with **Python** and **Pygame** to visualize **Finite State Automata (FSA)** concepts through the classic Missionaries and Cannibals problem. The main focus is the original runnable Pygame application, packaged as a Windows executable, and presented through a demo video, GitHub repository, and portfolio page.

## Background

The Missionaries and Cannibals puzzle is a classic logic problem often used to explain states, transitions, constraints, and search-based reasoning. Three missionaries and three cannibals must cross a river using a boat with limited capacity. The key rule is that missionaries must never be outnumbered by cannibals on either river bank when missionaries are present.

This project turns that formal problem into an interactive visual application so viewers can understand the state-transition logic through gameplay.

## Problem

Automata and state-transition concepts can feel abstract when presented only through formulas, tables, diagrams, or console output. The challenge was to make the concept easier to understand by showing how player actions cause state transitions, how rules are validated, and how invalid states lead to failure.

## Solution approach

The solution was to build a Pygame desktop application where users select passengers, place them on the boat, move the boat across the river, and observe the updated state and action values.

Each successful crossing is treated as a transition from one state to another. If the transition produces an unsafe state, the game displays a game-over screen. If all characters reach the right side safely, the game displays a winner screen.

## Python/Pygame implementation

The main implementation is located in:

```text
original-pygame/
```

Important files:

```text
main.py
Person.py
Boat.py
images/
music/
requirements.txt
build_exe.ps1
```

`main.py` handles the game loop, mouse input, rendering, state updates, action tracking, rule validation, sound control, restart flow, and win/loss conditions. `Person.py` represents the missionary and cannibal objects, while `Boat.py` supports displaying selected passengers on the boat.

The application uses event-based mouse handling so a physical click is processed once, which improves gameplay consistency.

## FSA/state transition concept

The state is represented as:

```text
state = [M_left, C_left, Boat]
```

Where:

- `M_left` is the number of missionaries on the left bank.
- `C_left` is the number of cannibals on the left bank.
- `Boat = 1` means the boat is on the left bank.
- `Boat = 0` means the boat is on the right bank.

The action is represented as:

```text
action = [missionaries_on_boat, cannibals_on_boat]
```

A crossing updates the state based on the selected action and direction. Rule validation checks whether missionaries are outnumbered by cannibals on either bank.

## Windows executable packaging

To make the project easier for recruiters and non-technical users to test, the Pygame app is packaged as a Windows executable using PyInstaller.

The build uses folder mode because it is more reliable for Pygame apps with image and audio assets. The generated output is located at:

```text
original-pygame/dist/MissionariesCannibalsFSA/
```

Recommended release ZIP:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

The ZIP can be uploaded to GitHub Releases or linked from the portfolio page.

## Key features

- Interactive Missionaries and Cannibals puzzle gameplay.
- State and action display in the game window.
- Mouse-based character selection.
- Boat movement between river banks.
- Rule validation for safe and unsafe states.
- Game-over screen for invalid states.
- Winner screen for successful completion.
- Move counter.
- New game button.
- Sound toggle.
- Asset path handling for development and executable mode.
- Windows executable build with PyInstaller.

## Technical challenges

Key technical challenges included:

- Translating a logic puzzle into an interactive visual experience.
- Keeping character positions, boat position, selected action, and state synchronized.
- Preventing repeated click processing inside the game loop.
- Loading assets correctly in both local Python mode and PyInstaller mode.
- Bundling images and music into the executable distribution.
- Preparing recruiter-ready documentation and portfolio materials.

## Final outcome

The final outcome is a runnable Pygame desktop application, a Windows executable release ZIP, demo video, screenshots, GitHub repository, and portfolio documentation. The project is ready to be presented as a Python, Pygame, and Finite State Automata portfolio project.

## Lessons learned

- FSA concepts can be made more understandable through interactive gameplay.
- Clear state representation simplifies game logic and debugging.
- Rule validation is essential in constraint-based games.
- Pygame projects require careful event handling and asset management.
- Desktop packaging requires attention to dependencies, bundled assets, antivirus warnings, and file size.
- Strong documentation helps recruiters understand the technical value quickly.

## Demo video link

```text
demo-assets/video/missionaries-cannibals-fsa-demo.mp4
```

## Download app link

```text
release/MissionariesCannibalsFSA-Windows.zip
```

## GitHub link

https://github.com/frnqpur/missionaries-cannibals-fsa

## Portfolio link

https://frengkipurba.com/projects/missionaries-cannibals-fsa

## Optional landing page

https://missionaries-cannibals-fsa.frengkipurba.com
