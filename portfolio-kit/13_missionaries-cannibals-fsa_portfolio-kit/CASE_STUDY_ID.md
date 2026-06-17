# Studi Kasus: FSA-Based Missionaries and Cannibals Puzzle Game

## Judul project

**FSA-Based Missionaries and Cannibals Puzzle Game**

## Ringkasan

Project ini adalah game puzzle desktop berbasis **Python** dan **Pygame** yang memvisualisasikan konsep **Finite State Automata (FSA)** melalui masalah klasik Missionaries and Cannibals. Fokus utama project adalah aplikasi Pygame original yang dapat dijalankan secara lokal, dikemas menjadi executable Windows, lalu dipresentasikan melalui demo video, GitHub, dan halaman portfolio.

## Latar belakang

Missionaries and Cannibals adalah puzzle logika klasik yang sering digunakan untuk menjelaskan konsep state, transisi, constraint, dan pencarian solusi. Dalam puzzle ini, tiga missionaries dan tiga cannibals harus menyeberangi sungai menggunakan perahu dengan kapasitas terbatas. Aturannya adalah missionaries tidak boleh kalah jumlah dari cannibals pada sisi sungai mana pun selama missionaries masih ada di sisi tersebut.

Project ini dibuat untuk mengubah konsep formal tersebut menjadi aplikasi visual yang lebih mudah dipahami oleh recruiter, dosen, reviewer, dan pengguna umum.

## Masalah

Konsep automata dan state transition sering terlihat abstrak jika hanya dijelaskan melalui teori, tabel, atau output terminal. Masalah yang ingin diselesaikan adalah bagaimana membuat konsep FSA terlihat nyata melalui interaksi visual, sehingga pengguna dapat melihat hubungan antara aksi, perubahan state, validasi aturan, game-over, dan kondisi menang.

## Pendekatan solusi

Solusi yang digunakan adalah membangun game desktop interaktif dengan Pygame. Pemain dapat memilih missionaries atau cannibals, memasukkan karakter ke perahu, menjalankan perahu, dan melihat perubahan state setelah setiap crossing.

Setiap crossing dianggap sebagai transisi dari satu state ke state berikutnya. Jika transisi menghasilkan kondisi tidak aman, game menampilkan game-over. Jika semua karakter berhasil berpindah ke sisi kanan dengan aman, game menampilkan winner screen.

## Implementasi Python/Pygame

Implementasi utama berada di folder:

```text
original-pygame/
```

File penting:

```text
main.py
Person.py
Boat.py
images/
music/
requirements.txt
build_exe.ps1
```

`main.py` menangani game loop, input mouse, rendering visual, state, action, validasi aturan, suara, restart, dan kondisi menang/kalah. `Person.py` merepresentasikan karakter missionary/cannibal, sedangkan `Boat.py` membantu menampilkan posisi karakter di perahu.

Aplikasi menggunakan Pygame event loop sehingga setiap klik diproses sebagai event, bukan polling berulang yang dapat menyebabkan satu klik terbaca berkali-kali.

## Konsep FSA/state transition

State direpresentasikan sebagai:

```text
state = [M_left, C_left, Boat]
```

Keterangan:

- `M_left`: jumlah missionaries di sisi kiri.
- `C_left`: jumlah cannibals di sisi kiri.
- `Boat = 1`: perahu berada di sisi kiri.
- `Boat = 0`: perahu berada di sisi kanan.

Action direpresentasikan sebagai:

```text
action = [missionaries_on_boat, cannibals_on_boat]
```

Setiap action yang dijalankan mengubah state berdasarkan arah perahu. Validasi dilakukan setelah state berubah untuk memastikan missionaries tidak kalah jumlah dari cannibals pada sisi yang masih memiliki missionaries.

## Packaging Windows executable

Agar aplikasi mudah dicoba oleh recruiter atau pengguna non-teknis, project dikemas menjadi executable Windows menggunakan PyInstaller.

Build dilakukan dalam folder mode agar lebih stabil untuk aplikasi Pygame yang memiliki aset gambar dan audio. Output build berada di:

```text
original-pygame/dist/MissionariesCannibalsFSA/
```

Release ZIP yang direkomendasikan:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

ZIP ini dapat diunggah ke GitHub Releases atau ditautkan dari halaman portfolio.

## Fitur utama

- Game puzzle Missionaries and Cannibals berbasis Pygame.
- Representasi state dan action terlihat langsung di layar.
- Seleksi karakter menggunakan mouse.
- Pergerakan perahu antar sisi sungai.
- Validasi aturan untuk kondisi aman dan tidak aman.
- Game-over screen untuk state ilegal.
- Winner screen ketika puzzle berhasil diselesaikan.
- Move counter.
- Tombol new game.
- Toggle sound.
- Asset path handling untuk mode development dan mode executable.
- Build executable Windows menggunakan PyInstaller.

## Tantangan teknis

Beberapa tantangan teknis dalam project ini:

- Mengubah puzzle logika menjadi interaksi visual yang mudah dipahami.
- Menjaga sinkronisasi posisi karakter, posisi perahu, action, dan state.
- Menghindari input klik terbaca berkali-kali dalam game loop.
- Menangani asset path agar bekerja di mode lokal dan executable.
- Membuat packaging PyInstaller yang menyertakan folder gambar dan musik.
- Menyiapkan dokumentasi portfolio yang jelas untuk recruiter.

## Hasil akhir

Hasil akhirnya adalah aplikasi Pygame yang dapat dijalankan secara lokal, executable Windows yang bisa didistribusikan, demo video, screenshot, repository GitHub, dan dokumentasi portfolio. Project ini siap dipresentasikan sebagai project portfolio berbasis Python, Pygame, dan Finite State Automata.

## Pembelajaran

Pembelajaran utama dari project ini:

- FSA dapat diterapkan secara praktis pada game puzzle.
- State representation membantu membuat logika permainan lebih terstruktur.
- Validasi aturan sangat penting dalam game berbasis constraint.
- Pygame membutuhkan manajemen event loop dan asset yang rapi.
- Packaging desktop app perlu memperhatikan dependency, asset, antivirus warning, dan ukuran file.
- Dokumentasi yang baik membantu recruiter memahami nilai teknis project lebih cepat.

## Link demo video

```text
demo-assets/video/missionaries-cannibals-fsa-demo.mp4
```

## Link download app

```text
release/MissionariesCannibalsFSA-Windows.zip
```

## Link GitHub

https://github.com/frnqpur/missionaries-cannibals-fsa

## Link portfolio

https://frengkipurba.com/projects/missionaries-cannibals-fsa

## Optional landing page

https://missionaries-cannibals-fsa.frengkipurba.com
