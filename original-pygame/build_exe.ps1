# Build Windows executable for:
# FSA-Based Missionaries and Cannibals Puzzle Game
#
# Run from PowerShell:
#   cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
#   .\build_exe.ps1

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================"
Write-Host " MissionariesCannibalsFSA - EXE Build"
Write-Host "============================================"
Write-Host ""

# Always run from this script's folder: original-pygame
Set-Location $PSScriptRoot

$AppName = "MissionariesCannibalsFSA"
$RootProject = Resolve-Path (Join-Path $PSScriptRoot "..")
$ReleaseDir = Join-Path $RootProject "release"

Write-Host "Project folder : $PSScriptRoot"
Write-Host "Release folder : $ReleaseDir"
Write-Host ""

# Validate required files/folders before building.
$RequiredPaths = @(
    "main.py",
    "Person.py",
    "Boat.py",
    "images",
    "music",
    "requirements.txt"
)

foreach ($PathItem in $RequiredPaths) {
    if (!(Test-Path (Join-Path $PSScriptRoot $PathItem))) {
        throw "Required file/folder not found: $PathItem"
    }
}

# Create release folder in the root project if it does not exist.
if (!(Test-Path $ReleaseDir)) {
    New-Item -ItemType Directory -Path $ReleaseDir | Out-Null
}

# Create venv if it does not exist. This keeps build dependencies isolated.
if (!(Test-Path ".\venv\Scripts\Activate.ps1")) {
    Write-Host "Virtual environment not found. Creating venv..."
    python -m venv venv
}

# Activate venv.
Write-Host "Activating virtual environment..."
try {
    . .\venv\Scripts\Activate.ps1
}
catch {
    Write-Host ""
    Write-Host "PowerShell blocked venv activation."
    Write-Host "Run this command, then run build_exe.ps1 again:"
    Write-Host "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass"
    throw
}

# Install dependencies.
Write-Host ""
Write-Host "Installing/updating dependencies..."
python -m pip install --upgrade pip
pip install -r requirements.txt
pip install --upgrade pyinstaller

# Clean previous PyInstaller output.
Write-Host ""
Write-Host "Cleaning old build output..."
if (Test-Path ".\build") {
    Remove-Item -Recurse -Force ".\build"
}
if (Test-Path ".\dist") {
    Remove-Item -Recurse -Force ".\dist"
}
Get-ChildItem -Path "." -Filter "*.spec" -File | Remove-Item -Force

# Build in folder mode, not onefile.
# Folder mode is more stable for Pygame and easier to debug when assets are missing.
Write-Host ""
Write-Host "Running PyInstaller..."
pyinstaller --noconfirm --windowed --name $AppName --add-data "images;images" --add-data "music;music" main.py

$DistPath = Join-Path $PSScriptRoot "dist\$AppName"
$ExePath = Join-Path $DistPath "$AppName.exe"

if (!(Test-Path $ExePath)) {
    throw "Build finished but EXE was not found: $ExePath"
}

Write-Host ""
Write-Host "============================================"
Write-Host " BUILD COMPLETE"
Write-Host "============================================"
Write-Host "Output folder:"
Write-Host $DistPath
Write-Host ""
Write-Host "Executable:"
Write-Host $ExePath
Write-Host ""
Write-Host "To create a release ZIP, run:"
Write-Host "Compress-Archive -Path `"$DistPath`" -DestinationPath `"$ReleaseDir\$AppName-Windows.zip`" -Force"
Write-Host ""
Write-Host "Recommended: upload the ZIP to GitHub Releases, not directly to the repository."
