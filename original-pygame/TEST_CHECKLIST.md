# Manual Test Checklist - Original Pygame App

Use this checklist after running:

```powershell
python main.py
```

## Launch

- [ ] Window game terbuka
- [ ] Window title tampil
- [ ] Background tampil
- [ ] Missionary tampil
- [ ] Cannibal tampil
- [ ] Boat tampil
- [ ] Go button tampil
- [ ] New Game button tampil
- [ ] Sound ON/OFF button tampil

## Audio

- [ ] Musik/sound berjalan jika audio device mendukung
- [ ] Game tetap berjalan jika audio gagal dimuat
- [ ] Sound ON/OFF berjalan tanpa error

## Gameplay

- [ ] Character bisa naik boat
- [ ] Character bisa turun dari boat
- [ ] Boat tidak bergerak jika kosong
- [ ] Boat bisa bergerak setelah ada passenger
- [ ] Boat membawa maksimal 2 passenger
- [ ] State berubah setelah boat sampai sisi seberang
- [ ] Move counter berubah setelah boat sampai sisi seberang

## Rules

- [ ] Game over tampil ketika cannibal lebih banyak daripada missionary di sisi yang masih memiliki missionary
- [ ] Winner tampil ketika state mencapai `[0, 0, 0]` dan boat kosong

## Reset and Quit

- [ ] New game/reset berjalan
- [ ] Reset tidak membuka nested game loop baru
- [ ] Window bisa ditutup tanpa error
- [ ] Tombol ESC bisa menutup game tanpa error
