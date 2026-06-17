(() => {
  'use strict';

  const TOTAL_MISSIONARIES = 3;
  const TOTAL_CANNIBALS = 3;
  const BOAT_LEFT = 1;
  const BOAT_RIGHT = 0;
  const IMAGE_PATHS = {
    missionary: 'assets/images/missionary.png',
    cannibal: 'assets/images/cannibal.png',
    boat: 'assets/images/boat.png'
  };

  const translations = {
    en: {
      eyebrow: 'Interactive Web Demo',
      title: 'FSA-Based Missionaries and Cannibals Puzzle Game',
      subtitle: 'A browser-based visual demo adapted from the original Python/Pygame project, highlighting state representation and transitions inspired by Finite State Automata.',
      githubLink: 'GitHub Repository',
      portfolioLink: 'Portfolio Case Study',
      gameEyebrow: 'Puzzle Board',
      gameTitle: 'Move everyone safely to the right bank',
      leftBank: 'Left Bank',
      rightBank: 'Right Bank',
      river: 'River',
      moveBoat: 'Move Boat',
      resetGame: 'Reset Game',
      showSolution: 'Show Solution',
      hideSolution: 'Hide Solution',
      viewStateLog: 'View State Log',
      hideStateLog: 'Hide State Log',
      soundOn: 'Sound ON',
      soundOff: 'Sound OFF',
      clickHint: 'Click a character on the same side as the boat to board. Click a boat passenger to unload.',
      stateEyebrow: 'FSA State',
      stateTitle: 'Current State',
      currentState: 'Current State',
      boatPosition: 'Boat Position',
      selectedPassengers: 'Selected Passengers',
      moveCount: 'Move Count',
      gameStatus: 'Game Status',
      lastAction: 'Last Action',
      fsaEyebrow: 'How the FSA Works',
      fsaTitle: 'State, action, transition, and validation',
      stateDefinitionTitle: 'State',
      stateDefinition: 'The game uses [M_left, C_left, Boat], where Boat is 1 on the left bank and 0 on the right bank.',
      actionsTitle: 'Legal Actions',
      actionsDefinition: 'The boat can carry 1 or 2 passengers: 1M, 1C, 1M+1C, 2M, or 2C.',
      validationTitle: 'Validation',
      validationDefinition: 'A bank is safe when missionaries are not outnumbered by cannibals, unless there are no missionaries on that bank.',
      logEyebrow: 'Transition History',
      logTitle: 'State Log',
      step: 'Step',
      previousState: 'Previous State',
      action: 'Action',
      newState: 'New State',
      status: 'Status',
      solutionEyebrow: 'Reference Path',
      solutionTitle: 'One Valid Solution',
      ready: 'Ready',
      playing: 'Playing',
      invalidMove: 'Invalid move',
      gameOver: 'Game Over',
      winner: 'Winner',
      left: 'Left',
      right: 'Right',
      none: 'None',
      noAction: 'No action yet',
      boatNeedsPassenger: 'Boat must carry at least one passenger.',
      boatCapacityReached: 'Boat can only carry up to two passengers.',
      notBoatSide: 'You can only board from the same side as the boat.',
      unsafeBank: 'Unsafe state: cannibals outnumber missionaries on one bank.',
      winMessage: 'Goal reached: [0, 0, 0]. Everyone crossed safely.',
      moved: 'Moved',
      returned: 'Returned',
      missionary: 'Missionary',
      missionaries: 'Missionaries',
      cannibal: 'Cannibal',
      cannibals: 'Cannibals',
      and: 'and',
      noLog: 'No transitions yet. Move the boat to create a state log.',
      solutionStart: 'Start [3, 3, 1]',
      solutionSteps: [
        '2 Cannibals go right → [3, 1, 0]',
        '1 Cannibal returns → [3, 2, 1]',
        '2 Cannibals go right → [3, 0, 0]',
        '1 Cannibal returns → [3, 1, 1]',
        '2 Missionaries go right → [1, 1, 0]',
        '1 Missionary + 1 Cannibal return → [2, 2, 1]',
        '2 Missionaries go right → [0, 2, 0]',
        '1 Cannibal returns → [0, 3, 1]',
        '2 Cannibals go right → [0, 1, 0]',
        '1 Cannibal returns → [0, 2, 1]',
        '2 Cannibals go right → [0, 0, 0]'
      ]
    },
    id: {
      eyebrow: 'Demo Web Interaktif',
      title: 'FSA-Based Missionaries and Cannibals Puzzle Game',
      subtitle: 'Demo visual berbasis browser yang diadaptasi dari project Python/Pygame original, dengan fokus pada representasi state dan transition yang terinspirasi Finite State Automata.',
      githubLink: 'Repository GitHub',
      portfolioLink: 'Studi Kasus Portfolio',
      gameEyebrow: 'Papan Puzzle',
      gameTitle: 'Pindahkan semua karakter dengan aman ke sisi kanan',
      leftBank: 'Tepi Kiri',
      rightBank: 'Tepi Kanan',
      river: 'Sungai',
      moveBoat: 'Gerakkan Perahu',
      resetGame: 'Reset Game',
      showSolution: 'Tampilkan Solusi',
      hideSolution: 'Sembunyikan Solusi',
      viewStateLog: 'Lihat Log State',
      hideStateLog: 'Sembunyikan Log State',
      soundOn: 'Suara ON',
      soundOff: 'Suara OFF',
      clickHint: 'Klik karakter di sisi yang sama dengan perahu untuk naik. Klik penumpang di perahu untuk turun.',
      stateEyebrow: 'State FSA',
      stateTitle: 'State Saat Ini',
      currentState: 'State Saat Ini',
      boatPosition: 'Posisi Perahu',
      selectedPassengers: 'Penumpang Terpilih',
      moveCount: 'Jumlah Gerakan',
      gameStatus: 'Status Game',
      lastAction: 'Aksi Terakhir',
      fsaEyebrow: 'Cara Kerja FSA',
      fsaTitle: 'State, aksi, transition, dan validasi',
      stateDefinitionTitle: 'State',
      stateDefinition: 'Game menggunakan [M_left, C_left, Boat], dengan Boat bernilai 1 di sisi kiri dan 0 di sisi kanan.',
      actionsTitle: 'Aksi Legal',
      actionsDefinition: 'Perahu dapat membawa 1 atau 2 penumpang: 1M, 1C, 1M+1C, 2M, atau 2C.',
      validationTitle: 'Validasi',
      validationDefinition: 'Sebuah sisi aman jika missionary tidak lebih sedikit daripada cannibal, kecuali tidak ada missionary di sisi tersebut.',
      logEyebrow: 'Riwayat Transition',
      logTitle: 'Log State',
      step: 'Langkah',
      previousState: 'State Sebelumnya',
      action: 'Aksi',
      newState: 'State Baru',
      status: 'Status',
      solutionEyebrow: 'Jalur Referensi',
      solutionTitle: 'Salah Satu Solusi Valid',
      ready: 'Siap',
      playing: 'Berjalan',
      invalidMove: 'Gerakan tidak valid',
      gameOver: 'Game Over',
      winner: 'Menang',
      left: 'Kiri',
      right: 'Kanan',
      none: 'Tidak ada',
      noAction: 'Belum ada aksi',
      boatNeedsPassenger: 'Perahu harus membawa minimal satu penumpang.',
      boatCapacityReached: 'Perahu hanya dapat membawa maksimal dua penumpang.',
      notBoatSide: 'Karakter hanya bisa naik dari sisi yang sama dengan perahu.',
      unsafeBank: 'State tidak aman: cannibal lebih banyak daripada missionary di salah satu sisi.',
      winMessage: 'Goal tercapai: [0, 0, 0]. Semua berhasil menyeberang dengan aman.',
      moved: 'Berangkat',
      returned: 'Kembali',
      missionary: 'Missionary',
      missionaries: 'Missionaries',
      cannibal: 'Cannibal',
      cannibals: 'Cannibals',
      and: 'dan',
      noLog: 'Belum ada transition. Gerakkan perahu untuk membuat log state.',
      solutionStart: 'Mulai [3, 3, 1]',
      solutionSteps: [
        '2 Cannibals ke kanan → [3, 1, 0]',
        '1 Cannibal kembali → [3, 2, 1]',
        '2 Cannibals ke kanan → [3, 0, 0]',
        '1 Cannibal kembali → [3, 1, 1]',
        '2 Missionaries ke kanan → [1, 1, 0]',
        '1 Missionary + 1 Cannibal kembali → [2, 2, 1]',
        '2 Missionaries ke kanan → [0, 2, 0]',
        '1 Cannibal kembali → [0, 3, 1]',
        '2 Cannibals ke kanan → [0, 1, 0]',
        '1 Cannibal kembali → [0, 2, 1]',
        '2 Cannibals ke kanan → [0, 0, 0]'
      ]
    }
  };

  const elements = {
    leftPeople: document.getElementById('leftPeople'),
    rightPeople: document.getElementById('rightPeople'),
    boat: document.getElementById('boat'),
    boatVisual: document.getElementById('boatVisual'),
    boatPassengers: document.getElementById('boatPassengers'),
    moveButton: document.getElementById('moveButton'),
    resetButton: document.getElementById('resetButton'),
    solutionButton: document.getElementById('solutionButton'),
    logButton: document.getElementById('logButton'),
    languageButton: document.getElementById('languageButton'),
    soundButton: document.getElementById('soundButton'),
    currentState: document.getElementById('currentState'),
    boatPosition: document.getElementById('boatPosition'),
    selectedPassengers: document.getElementById('selectedPassengers'),
    moveCount: document.getElementById('moveCount'),
    gameStatus: document.getElementById('gameStatus'),
    lastAction: document.getElementById('lastAction'),
    statusPill: document.getElementById('statusPill'),
    logPanel: document.getElementById('logPanel'),
    stateLogBody: document.getElementById('stateLogBody'),
    solutionPanel: document.getElementById('solutionPanel'),
    solutionList: document.getElementById('solutionList'),
    bgMusic: document.getElementById('bgMusic'),
    winSound: document.getElementById('winSound'),
    gameOverSound: document.getElementById('gameOverSound')
  };

  const initialGame = () => ({
    state: { missionariesLeft: 3, cannibalsLeft: 3, boat: BOAT_LEFT },
    selected: { missionaries: 0, cannibals: 0 },
    moveCount: 0,
    status: 'ready',
    lastAction: 'noAction',
    stateLog: [],
    language: 'en',
    soundEnabled: false,
    solutionVisible: false,
    logVisible: true
  });

  let game = initialGame();

  function t(key) {
    return translations[game.language][key] || translations.en[key] || key;
  }

  function getStateArray(state = game.state) {
    return [state.missionariesLeft, state.cannibalsLeft, state.boat];
  }

  function formatState(state = game.state) {
    return `[${getStateArray(state).join(', ')}]`;
  }

  function isSafeBank(missionaries, cannibals) {
    return missionaries === 0 || missionaries >= cannibals;
  }

  function isValidState(state) {
    const leftM = state.missionariesLeft;
    const leftC = state.cannibalsLeft;
    const rightM = TOTAL_MISSIONARIES - leftM;
    const rightC = TOTAL_CANNIBALS - leftC;

    const withinBounds = [leftM, leftC, rightM, rightC].every((value) => value >= 0 && value <= 3);
    return withinBounds && isSafeBank(leftM, leftC) && isSafeBank(rightM, rightC);
  }

  function isGoalState(state) {
    return state.missionariesLeft === 0 && state.cannibalsLeft === 0 && state.boat === BOAT_RIGHT;
  }

  function passengerCount() {
    return game.selected.missionaries + game.selected.cannibals;
  }

  function availableOnSide(type, side) {
    const selectedOnBoatSide = side === game.state.boat;
    if (side === BOAT_LEFT) {
      const base = type === 'missionary' ? game.state.missionariesLeft : game.state.cannibalsLeft;
      const selected = type === 'missionary' ? game.selected.missionaries : game.selected.cannibals;
      return selectedOnBoatSide ? base - selected : base;
    }

    const base = type === 'missionary'
      ? TOTAL_MISSIONARIES - game.state.missionariesLeft
      : TOTAL_CANNIBALS - game.state.cannibalsLeft;
    const selected = type === 'missionary' ? game.selected.missionaries : game.selected.cannibals;
    return selectedOnBoatSide ? base - selected : base;
  }

  function boardPassenger(type, side) {
    if (game.status === 'winner' || game.status === 'gameOver') return;

    if (side !== game.state.boat) {
      setStatus('invalidMove', 'notBoatSide');
      renderGame();
      return;
    }

    if (passengerCount() >= 2) {
      setStatus('invalidMove', 'boatCapacityReached');
      renderGame();
      return;
    }

    if (availableOnSide(type, side) <= 0) return;

    if (type === 'missionary') {
      game.selected.missionaries += 1;
    } else {
      game.selected.cannibals += 1;
    }

    if (game.status === 'ready' || game.status === 'invalidMove') {
      setStatus('playing');
    }

    renderGame();
  }

  function unloadPassenger(type) {
    if (game.status === 'winner' || game.status === 'gameOver') return;

    if (type === 'missionary' && game.selected.missionaries > 0) {
      game.selected.missionaries -= 1;
    }

    if (type === 'cannibal' && game.selected.cannibals > 0) {
      game.selected.cannibals -= 1;
    }

    renderGame();
  }

  function describeAction(selected, direction) {
    const parts = [];
    if (selected.missionaries > 0) {
      parts.push(`${selected.missionaries} ${selected.missionaries === 1 ? t('missionary') : t('missionaries')}`);
    }
    if (selected.cannibals > 0) {
      parts.push(`${selected.cannibals} ${selected.cannibals === 1 ? t('cannibal') : t('cannibals')}`);
    }

    const passengerText = parts.join(` ${t('and')} `);
    const directionText = direction === 'right' ? t('right') : t('left');
    const verb = direction === 'right' ? t('moved') : t('returned');
    return `${verb} ${passengerText} → ${directionText}`;
  }

  function moveBoat() {
    if (game.status === 'winner' || game.status === 'gameOver') return;

    if (passengerCount() === 0) {
      setStatus('invalidMove', 'boatNeedsPassenger');
      renderGame();
      return;
    }

    const previousState = { ...game.state };
    const selected = { ...game.selected };
    const movingRight = game.state.boat === BOAT_LEFT;
    const newState = { ...game.state };

    // Boat movement triggers a transition from the current state to the next state.
    if (movingRight) {
      newState.missionariesLeft -= selected.missionaries;
      newState.cannibalsLeft -= selected.cannibals;
      newState.boat = BOAT_RIGHT;
    } else {
      newState.missionariesLeft += selected.missionaries;
      newState.cannibalsLeft += selected.cannibals;
      newState.boat = BOAT_LEFT;
    }

    const direction = movingRight ? 'right' : 'left';
    const actionText = describeAction(selected, direction);
    let transitionStatus = t('playing');

    if (!isValidState(newState)) {
      game.state = newState;
      game.moveCount += 1;
      game.selected = { missionaries: 0, cannibals: 0 };
      setStatus('gameOver', 'unsafeBank');
      transitionStatus = t('gameOver');
      playSound('gameOver');
    } else if (isGoalState(newState)) {
      game.state = newState;
      game.moveCount += 1;
      game.selected = { missionaries: 0, cannibals: 0 };
      setStatus('winner', 'winMessage');
      transitionStatus = t('winner');
      playSound('win');
    } else {
      game.state = newState;
      game.moveCount += 1;
      game.selected = { missionaries: 0, cannibals: 0 };
      setStatus('playing', actionText);
    }

    game.stateLog.push({
      step: game.moveCount,
      previous: formatState(previousState),
      action: actionText,
      next: formatState(game.state),
      status: transitionStatus
    });

    renderGame();
  }

  function resetGame() {
    const previousLanguage = game.language;
    const previousSoundEnabled = game.soundEnabled;
    game = initialGame();
    game.language = previousLanguage;
    game.soundEnabled = previousSoundEnabled;
    if (!game.soundEnabled) pauseBackgroundMusic();
    renderGame();
  }

  function setStatus(status, lastActionKeyOrText) {
    game.status = status;
    if (lastActionKeyOrText) {
      game.lastAction = translations[game.language][lastActionKeyOrText]
        ? lastActionKeyOrText
        : lastActionKeyOrText;
    }
  }

  function renderPerson(type, side, index, disabled = false) {
    const button = document.createElement('button');
    button.className = `person person--${type}`;
    button.type = 'button';
    button.disabled = disabled;
    button.setAttribute('aria-label', `${type} ${index + 1}`);
    button.addEventListener('click', () => boardPassenger(type, side));

    const icon = document.createElement('span');
    icon.className = 'person__icon';
    icon.innerHTML = getVisual(type);

    const label = document.createElement('span');
    label.className = 'person__label';
    label.textContent = type === 'missionary' ? 'M' : 'C';

    button.append(icon, label);
    return button;
  }

  function renderBoatPassenger(type, index) {
    const button = document.createElement('button');
    button.className = `person person--${type}`;
    button.type = 'button';
    button.setAttribute('aria-label', `Unload ${type} ${index + 1}`);
    button.addEventListener('click', () => unloadPassenger(type));

    const icon = document.createElement('span');
    icon.className = 'person__icon';
    icon.innerHTML = getVisual(type);

    const label = document.createElement('span');
    label.className = 'person__label';
    label.textContent = type === 'missionary' ? 'M' : 'C';

    button.append(icon, label);
    return button;
  }

  function getVisual(type) {
    if (type === 'boat') {
      return `<img src="${IMAGE_PATHS.boat}" alt="" onerror="this.replaceWith(document.createTextNode('🚤'))">`;
    }

    const emoji = type === 'missionary' ? '🧑‍🏫' : '🧟';
    const path = type === 'missionary' ? IMAGE_PATHS.missionary : IMAGE_PATHS.cannibal;
    return `<img src="${path}" alt="" onerror="this.replaceWith(document.createTextNode('${emoji}'))">`;
  }

  function renderBank(container, side) {
    container.innerHTML = '';
    const disabled = side !== game.state.boat || game.status === 'winner' || game.status === 'gameOver';
    const missionaryCount = availableOnSide('missionary', side);
    const cannibalCount = availableOnSide('cannibal', side);

    for (let i = 0; i < missionaryCount; i += 1) {
      container.appendChild(renderPerson('missionary', side, i, disabled));
    }

    for (let i = 0; i < cannibalCount; i += 1) {
      container.appendChild(renderPerson('cannibal', side, i, disabled));
    }
  }

  function renderBoat() {
    elements.boat.classList.toggle('is-left', game.state.boat === BOAT_LEFT);
    elements.boat.classList.toggle('is-right', game.state.boat === BOAT_RIGHT);
    elements.boatVisual.innerHTML = getVisual('boat');
    elements.boatPassengers.innerHTML = '';

    for (let i = 0; i < game.selected.missionaries; i += 1) {
      elements.boatPassengers.appendChild(renderBoatPassenger('missionary', i));
    }
    for (let i = 0; i < game.selected.cannibals; i += 1) {
      elements.boatPassengers.appendChild(renderBoatPassenger('cannibal', i));
    }
  }

  function selectedPassengerText() {
    const parts = [];
    if (game.selected.missionaries > 0) {
      parts.push(`${game.selected.missionaries}M`);
    }
    if (game.selected.cannibals > 0) {
      parts.push(`${game.selected.cannibals}C`);
    }
    return parts.length ? parts.join(' + ') : t('none');
  }

  function readableStatus() {
    const statusMap = {
      ready: 'ready',
      playing: 'playing',
      invalidMove: 'invalidMove',
      gameOver: 'gameOver',
      winner: 'winner'
    };
    return t(statusMap[game.status] || 'ready');
  }

  function readableLastAction() {
    return translations[game.language][game.lastAction] || game.lastAction || t('noAction');
  }

  function renderStatePanel() {
    elements.currentState.textContent = formatState();
    elements.boatPosition.textContent = game.state.boat === BOAT_LEFT ? t('left') : t('right');
    elements.selectedPassengers.textContent = selectedPassengerText();
    elements.moveCount.textContent = String(game.moveCount);
    elements.gameStatus.textContent = readableStatus();
    elements.lastAction.textContent = readableLastAction();

    elements.statusPill.textContent = readableStatus();
    elements.statusPill.className = 'status-pill';
    if (game.status === 'winner') elements.statusPill.classList.add('is-win');
    if (game.status === 'gameOver') elements.statusPill.classList.add('is-gameover');
    if (game.status === 'invalidMove') elements.statusPill.classList.add('is-invalid');
  }

  function renderStateLog() {
    elements.stateLogBody.innerHTML = '';

    if (!game.stateLog.length) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 5;
      cell.textContent = t('noLog');
      row.appendChild(cell);
      elements.stateLogBody.appendChild(row);
      return;
    }

    game.stateLog.forEach((entry) => {
      const row = document.createElement('tr');
      [entry.step, entry.previous, entry.action, entry.next, entry.status].forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
      elements.stateLogBody.appendChild(row);
    });
  }

  function renderSolution() {
    elements.solutionPanel.hidden = !game.solutionVisible;
    elements.solutionList.innerHTML = '';

    const startItem = document.createElement('li');
    startItem.textContent = t('solutionStart');
    elements.solutionList.appendChild(startItem);

    translations[game.language].solutionSteps.forEach((step) => {
      const item = document.createElement('li');
      item.textContent = step;
      elements.solutionList.appendChild(item);
    });
  }

  function renderTranslations() {
    document.documentElement.lang = game.language;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (translations[game.language][key]) {
        node.textContent = translations[game.language][key];
      }
    });
    elements.languageButton.textContent = game.language === 'en' ? 'ID' : 'EN';
    elements.solutionButton.textContent = game.solutionVisible ? t('hideSolution') : t('showSolution');
    elements.logButton.textContent = game.logVisible ? t('hideStateLog') : t('viewStateLog');
    elements.soundButton.textContent = game.soundEnabled ? t('soundOn') : t('soundOff');
  }

  function renderGame() {
    renderTranslations();
    renderBank(elements.leftPeople, BOAT_LEFT);
    renderBank(elements.rightPeople, BOAT_RIGHT);
    renderBoat();
    renderStatePanel();
    renderStateLog();
    renderSolution();
    elements.logPanel.hidden = !game.logVisible;
    elements.moveButton.disabled = game.status === 'winner' || game.status === 'gameOver';
  }

  function toggleLanguage() {
    game.language = game.language === 'en' ? 'id' : 'en';
    renderGame();
  }

  async function playSound(type) {
    if (!game.soundEnabled) return;

    const audioMap = {
      win: elements.winSound,
      gameOver: elements.gameOverSound
    };

    const audio = audioMap[type];
    if (!audio) return;

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      // Audio should never block gameplay. Browser policies or missing files are ignored safely.
    }
  }

  async function toggleSound() {
    game.soundEnabled = !game.soundEnabled;

    if (game.soundEnabled) {
      try {
        elements.bgMusic.volume = 0.25;
        await elements.bgMusic.play();
      } catch (error) {
        game.soundEnabled = false;
      }
    } else {
      pauseBackgroundMusic();
    }

    renderGame();
  }

  function pauseBackgroundMusic() {
    try {
      elements.bgMusic.pause();
      elements.bgMusic.currentTime = 0;
    } catch (error) {
      // Safe fallback for browsers that block or fail audio APIs.
    }
  }

  function toggleSolution() {
    game.solutionVisible = !game.solutionVisible;
    renderGame();
  }

  function toggleStateLog() {
    game.logVisible = !game.logVisible;
    renderGame();
  }

  function bindEvents() {
    elements.moveButton.addEventListener('click', moveBoat);
    elements.resetButton.addEventListener('click', resetGame);
    elements.solutionButton.addEventListener('click', toggleSolution);
    elements.logButton.addEventListener('click', toggleStateLog);
    elements.languageButton.addEventListener('click', toggleLanguage);
    elements.soundButton.addEventListener('click', toggleSound);
  }

  bindEvents();
  renderGame();
})();
