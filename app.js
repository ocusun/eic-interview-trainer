// EIC Interview Trainer - Core Logic
let currentExam = null;
let mediaRecorder = null;
let recordedChunks = [];
let prepInterval = null;
let answerInterval = null;
let prepSeconds = 60;
let answerSeconds = 120;
let isRecording = false;

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderExamList();
  renderVocab();
  updateStats();
  setupEventListeners();
  applyTheme();
});

function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen(btn.dataset.screen);
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);
  document.querySelectorAll('.filter-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tabs .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderExamList(tab.dataset.year);
    });
  });
  document.querySelectorAll('.step-tab').forEach(tab => {
    tab.addEventListener('click', () => goStep(tab.dataset.step));
  });
  document.getElementById('btn-start-prep').addEventListener('click', startPrepTimer);
  document.getElementById('btn-start-answer').addEventListener('click', startAnswerTimer);
  document.getElementById('btn-stop-timer').addEventListener('click', stopTimers);
  document.getElementById('btn-record').addEventListener('click', toggleRecord);
  ['logic', 'eng', 'detail'].forEach(key => {
    const el = document.getElementById('score-' + key);
    if (el) el.addEventListener('input', () => {
      document.getElementById('score-' + key + '-val').textContent = el.value;
    });
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === id);
  });
  if (id === 'exams') renderExamList();
  if (id === 'progress') renderProgress();
  if (id === 'vocab') renderVocab();
}

function goStep(step) {
  document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step-tab').forEach(t => t.classList.remove('active'));
  const content = document.getElementById('step-' + step);
  const tab = document.querySelector('.step-tab[data-step="' + step + '"]');
  if (content) content.classList.add('active');
  if (tab) tab.classList.add('active');
}

function renderExamList(yearFilter) {
  yearFilter = yearFilter || 'all';
  const list = document.getElementById('exam-list');
  let exams = EXAMS.filter(e => e.type === 'OFFICIAL');
  if (yearFilter !== 'all') exams = exams.filter(e => String(e.year) === yearFilter);
  if (exams.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted-dark);text-align:center;padding:20px;">해당 연도 기출은 곧 추가됩니다.<br>2025·2026은 영문 전문이 있습니다.</p>';
    return;
  }
  list.innerHTML = exams.map(e =>
    '<div class="exam-item" onclick="openExam(\'' + e.id + '\')">' +
    '<div class="exam-meta"><span class="exam-badge">공식</span><span>' + e.year + '</span><span>' + (e.card || e.category) + '</span></div>' +
    '<h3>' + e.title + '</h3>' +
    '<div class="exam-meta" style="margin-top:6px;"><span>' + e.department + '</span></div></div>'
  ).join('');
}

function openExam(id) {
  currentExam = EXAMS.find(e => e.id === id);
  if (!currentExam) return;
  document.getElementById('practice-title').textContent = currentExam.title;
  document.getElementById('practice-badge').textContent = currentExam.type === 'OFFICIAL' ? '공식' : currentExam.type;
  document.getElementById('q-topic').textContent = currentExam.topic;
  document.getElementById('q-year').textContent = currentExam.year + ' · ' + currentExam.track;
  document.getElementById('q-time').textContent = '준비 ' + currentExam.prepMinutes + '분 / 답변 ' + currentExam.answerMinutes + '분';
  document.getElementById('q-passage').textContent = currentExam.passage;
  document.getElementById('q-questions').innerHTML = currentExam.questions.map(q => '<p>' + q + '</p>').join('');
  document.getElementById('q-coach-tip').textContent = currentExam.coachTip || '';
  const r = currentExam.rubric || { high: '', mid: '', low: '' };
  document.getElementById('q-rubric').innerHTML =
    '<h4>상</h4><p>' + r.high + '</p><h4>중</h4><p>' + r.mid + '</p><h4>하</h4><p>' + r.low + '</p>' +
    (currentExam.exampleCore ? '<h4 style="margin-top:12px;">상위권 특징</h4><p>' + currentExam.exampleCore + '</p>' : '');
  document.getElementById('self-check').innerHTML = (currentExam.selfCheck || []).map(function(item, i) {
    return '<label><input type="checkbox" id="check-' + i + '"> ' + item + '</label>';
  }).join('');
  // 해설보기
  var intEl = document.getElementById('q-intention');
  if (intEl) intEl.textContent = currentExam.intention || '';
  var conEl = document.getElementById('q-concepts');
  if (conEl) conEl.textContent = (currentExam.keyConcepts || []).join(' · ') || '-';
  var exEl = document.getElementById('q-example-core');
  if (exEl) exEl.textContent = currentExam.exampleCore || '';
  var tipEl = document.getElementById('q-explain-tip');
  if (tipEl) tipEl.textContent = currentExam.coachTip || '';
  var rubEl = document.getElementById('q-explain-rubric');
  if (rubEl) rubEl.innerHTML = '<p><strong>상</strong> ' + r.high + '</p><p><strong>중</strong> ' + r.mid + '</p><p><strong>하</strong> ' + r.low + '</p>';
  prepSeconds = (currentExam.prepMinutes || 1) * 60;
  answerSeconds = (currentExam.answerMinutes || 2) * 60;
  updateTimerDisplay();
  stopTimers();
  document.getElementById('think-memo').value = '';
  document.getElementById('think-en').value = '';
  document.getElementById('speak-memo').value = '';
  document.getElementById('coach-note').value = '';
  showScreen('practice');
  goStep('input');
}

function startToday15() {
  const official = EXAMS.filter(e => e.type === 'OFFICIAL' && e.passage && e.passage.indexOf('업데이트') === -1 && e.passage.indexOf('추가됩니다') === -1);
  if (official.length === 0) { openExam(EXAMS[0].id); return; }
  const progress = getProgress();
  const unmastered = official.filter(e => progress.mastered.indexOf(e.id) === -1);
  const pick = unmastered.length > 0 ? unmastered[Math.floor(Math.random() * unmastered.length)] : official[Math.floor(Math.random() * official.length)];
  openExam(pick.id);
}

function retryQuestion() {
  if (currentExam) { goStep('input'); window.scrollTo(0, 0); }
}

function updateTimerDisplay() {
  document.getElementById('prep-timer').textContent = formatTime(prepSeconds);
  document.getElementById('answer-timer').textContent = formatTime(answerSeconds);
}
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return m + ':' + s;
}
function startPrepTimer() {
  stopTimers();
  prepSeconds = (currentExam && currentExam.prepMinutes ? currentExam.prepMinutes : 1) * 60;
  updateTimerDisplay();
  prepInterval = setInterval(function() {
    prepSeconds--;
    updateTimerDisplay();
    if (prepSeconds <= 0) { clearInterval(prepInterval); prepInterval = null; }
  }, 1000);
}
function startAnswerTimer() {
  if (prepInterval) { clearInterval(prepInterval); prepInterval = null; }
  answerSeconds = (currentExam && currentExam.answerMinutes ? currentExam.answerMinutes : 2) * 60;
  updateTimerDisplay();
  answerInterval = setInterval(function() {
    answerSeconds--;
    updateTimerDisplay();
    if (answerSeconds <= 0) {
      clearInterval(answerInterval);
      answerInterval = null;
      if (isRecording) toggleRecord();
    }
  }, 1000);
}
function stopTimers() {
  if (prepInterval) clearInterval(prepInterval);
  if (answerInterval) clearInterval(answerInterval);
  prepInterval = null;
  answerInterval = null;
}

async function toggleRecord() {
  const btn = document.getElementById('btn-record');
  const status = document.getElementById('record-status');
  const audio = document.getElementById('audio-playback');
  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = function(e) { if (e.data.size > 0) recordedChunks.push(e.data); };
      mediaRecorder.onstop = function() {
        const blob = new Blob(recordedChunks, { type: 'audio/webm' });
        audio.src = URL.createObjectURL(blob);
        audio.style.display = 'block';
        stream.getTracks().forEach(function(t) { t.stop(); });
      };
      mediaRecorder.start();
      isRecording = true;
      btn.classList.add('recording');
      btn.querySelector('.rec-text').textContent = '녹음 중';
      status.textContent = '녹음 중 · 다시 누르면 멈춰요';
    } catch (err) {
      status.textContent = '마이크를 허용해 주세요';
    }
  } else {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    isRecording = false;
    btn.classList.remove('recording');
    btn.querySelector('.rec-text').textContent = '녹음하기';
    status.textContent = '녹음 끝 · 아래에서 들어보세요';
  }
}

function renderVocab() {
  const list = document.getElementById('vocab-list');
  list.innerHTML = VOCAB.map(function(v) {
    return '<div class="vocab-card" onclick="this.classList.toggle(\'flipped\')">' +
      '<div class="pos">' + v.pos + '</div><div class="front">' + v.word + '</div>' +
      '<div class="back"><strong>' + v.meaning + '</strong><br><em style="font-size:12px;color:var(--text-muted-dark)">' + v.example + '</em></div></div>';
  }).join('');
}
function shuffleVocab() {
  for (let i = VOCAB.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = VOCAB[i]; VOCAB[i] = VOCAB[j]; VOCAB[j] = t;
  }
  renderVocab();
}
function toggleVocabMode() {
  document.querySelectorAll('.vocab-card').forEach(function(c) { c.classList.toggle('flipped'); });
}

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('eic_progress') || '{\"mastered\":[],\"practiced\":[],\"streak\":0,\"lastDate\":\"\",\"notes\":{}}');
  } catch (e) {
    return { mastered: [], practiced: [], streak: 0, lastDate: '', notes: {} };
  }
}
function saveProgressData(data) {
  localStorage.setItem('eic_progress', JSON.stringify(data));
}
function loadProgress() {
  const p = getProgress();
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastDate && p.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (p.lastDate !== yesterday.toISOString().slice(0, 10)) {
      p.streak = 0;
      saveProgressData(p);
    }
  }
}
function updateStats() {
  const p = getProgress();
  document.getElementById('stat-mastered').textContent = p.mastered.length;
  document.getElementById('stat-practiced').textContent = p.practiced.length;
  document.getElementById('stat-streak').textContent = p.streak;
  document.getElementById('streak-display').textContent = '🔥 ' + p.streak;
}
function saveProgress() {
  if (!currentExam) return;
  const p = getProgress();
  const today = new Date().toISOString().slice(0, 10);
  if (p.practiced.indexOf(currentExam.id) === -1) p.practiced.push(currentExam.id);
  const checks = document.querySelectorAll('#self-check input[type="checkbox"]');
  const checked = Array.prototype.filter.call(checks, function(c) { return c.checked; }).length;
  if (checked >= Math.ceil(checks.length * 0.7) && p.mastered.indexOf(currentExam.id) === -1) {
    p.mastered.push(currentExam.id);
  }
  if (p.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (p.lastDate === yesterday.toISOString().slice(0, 10) || !p.lastDate) p.streak = (p.streak || 0) + 1;
    else p.streak = 1;
    p.lastDate = today;
  }
  const note = document.getElementById('coach-note').value;
  if (note) {
    p.notes[currentExam.id] = {
      note: note,
      scores: {
        logic: document.getElementById('score-logic').value,
        eng: document.getElementById('score-eng').value,
        detail: document.getElementById('score-detail').value
      },
      date: today
    };
  }
  saveProgressData(p);
  updateStats();
  alert('저장했어요! 잘하고 있어요');
}
function renderProgress() {
  const p = getProgress();
  document.getElementById('progress-summary').innerHTML =
    '<p>연습한 문항: <strong>' + p.practiced.length + '</strong></p>' +
    '<p>잘하게 된 문제: <strong>' + p.mastered.length + '</strong></p>' +
    '<p>연속 연습일: <strong>' + p.streak + '</strong>일</p>';
  const wrong = Object.entries(p.notes || {});
  if (wrong.length === 0) {
    document.getElementById('wrong-list').innerHTML = '<p style="color:var(--text-muted-dark)">아직 기록이 없습니다.</p>';
  } else {
    document.getElementById('wrong-list').innerHTML = wrong.map(function(pair) {
      const id = pair[0], data = pair[1];
      const exam = EXAMS.find(function(e) { return e.id === id; });
      return '<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border)">' +
        '<strong>' + (exam ? exam.title : id) + '</strong><br><small>' + data.date + '</small><br>' + data.note + '</div>';
    }).join('');
  }
}
function resetProgress() {
  if (confirm('모든 진행 기록을 삭제할까요?')) {
    localStorage.removeItem('eic_progress');
    updateStats();
    renderProgress();
  }
}
function applyTheme() {
  const theme = localStorage.getItem('eic_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('btn-theme').textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('eic_theme', next);
  document.getElementById('btn-theme').textContent = next === 'dark' ? '☀️' : '🌙';
}
