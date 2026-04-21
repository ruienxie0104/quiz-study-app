/* ============================================
   考試複習 Quiz App — 核心邏輯
   ============================================ */

// ===== 題庫資料 =====
const QUESTIONS = [
  // ===== 選擇題 (1-12) =====
  {
    id: 1,
    type: 'mc',
    question: 'Having a conversation with someone using a cellular phone is an example of ______ transmission.',
    options: [
      { letter: 'A', text: 'simplex（單工）' },
      { letter: 'B', text: 'full-duplex（全雙工）' },
      { letter: 'C', text: 'half-duplex（半雙工）' },
      { letter: 'D', text: 'analog（類比）' },
      { letter: 'E', text: 'digital（數位）' },
    ],
    answer: 'B',
    explanation: '手機可以同時說話與聽話，這就是全雙工（full-duplex）。',
  },
  {
    id: 2,
    type: 'mc',
    question: 'Frequency division multiplexing:',
    options: [
      { letter: 'A', text: 'operates by statistically time slicing the signal（透過統計學上的時間切片來運作訊號）' },
      { letter: 'B', text: 'operates by dividing the signal into different frequencies（透過將訊號劃分為不同頻率來運作）' },
      { letter: 'C', text: 'uses a codec that divides signals into different channels（使用解碼器將訊號劃分為不同頻道）' },
      { letter: 'D', text: 'operates by time slicing the signal（透過時間切片來運作訊號）' },
      { letter: 'E', text: 'operates by light dividing the signal（透過光切分訊號來運作）' },
    ],
    answer: 'B',
    explanation: '頻分多工（FDM）是透過將訊號劃分為不同頻率來運作。',
  },
  {
    id: 3,
    type: 'mc',
    question: 'Which of the following is NOT true about Telnet?',
    options: [
      { letter: 'A', text: 'Telnet requires an application layer program on the client computer and an application layer program on the server or host computer.（Telnet 需要客戶端與伺服器端都有應用層程式）' },
      { letter: 'B', text: 'Telnet poses no security threat.（Telnet 沒有安全威脅）' },
      { letter: 'C', text: 'Telnet was designed in the early days of the Internet.（Telnet 是在網路早期設計的）' },
      { letter: 'D', text: 'Keystrokes are sent over the network in clear text.（按鍵輸入是以明文透過網路傳送）' },
      { letter: 'E', text: 'One program that conforms to the Telnet standard is PuTTY.（符合 Telnet 標準的程式之一是 PuTTY）' },
    ],
    answer: 'B',
    explanation: 'Telnet 其實有安全威脅，因為它以明文傳送資料（包含密碼），「沒有安全威脅」是錯誤的描述。',
  },
  {
    id: 4,
    type: 'mc',
    question: 'In a ______ architecture, computers are both client and server, thus sharing the work.',
    options: [
      { letter: 'A', text: 'Host-based（基於主機）' },
      { letter: 'B', text: 'Client-based（基於客戶端）' },
      { letter: 'C', text: 'Client-server（主從式）' },
      { letter: 'D', text: 'Peer-to-peer（點對點/P2P）' },
      { letter: 'E', text: 'Network（網路）' },
    ],
    answer: 'D',
    explanation: '在 Peer-to-peer（P2P）架構中，每台電腦同時扮演客戶端與伺服器角色，共同分擔工作。',
  },
  {
    id: 5,
    type: 'mc',
    question: 'IMAP (Internet Message Access Protocol):',
    options: [
      { letter: 'A', text: 'is a set of standards that define how email is to be processed between mail servers（定義郵件伺服器間如何處理郵件的標準）' },
      { letter: 'B', text: 'is exactly the same as SMTP（與 SMTP 完全相同）' },
      { letter: 'C', text: 'copies an e-mail message from the client computer\'s hard disk, deletes it from the client, and stores it on the mail server（從硬碟複製郵件並在客戶端刪除）' },
      { letter: 'D', text: 'is exactly the same as POP（與 POP 完全相同）' },
      { letter: 'E', text: 'permits an e-mail message to remain stored on the mail server even after they have been read by a client computer（允許郵件在閱讀後仍保留在伺服器上）' },
    ],
    answer: 'E',
    explanation: 'IMAP 允許郵件在被客戶端閱讀後，仍然保留在伺服器上，這是它與 POP 最大的差異。',
  },
  {
    id: 6,
    type: 'mc',
    question: 'The protocol that makes it possible for a Macintosh web browser to be able to retrieve a Web page from a Microsoft Web server is called the:',
    options: [
      { letter: 'A', text: 'Hypertext Transfer Protocol（HTTP）' },
      { letter: 'B', text: 'File Transfer Protocol（檔案傳輸協定）' },
      { letter: 'C', text: 'Simple Mail Transfer Protocol（簡單郵件傳輸協定）' },
      { letter: 'D', text: 'Internet Message Access Protocol（IMAP）' },
      { letter: 'E', text: 'Hyperlink Transfer Protocol（超連結傳輸協定）' },
    ],
    answer: 'A',
    explanation: 'HTTP 讓不同作業系統（如 Mac 與 Windows）的瀏覽器與伺服器可以互相通訊取得網頁。',
  },
  {
    id: 7,
    type: 'mc',
    question: 'The primary reason for networking standards is to:',
    options: [
      { letter: 'A', text: 'simplify cost accounting for networks（簡化網路成本會計）' },
      { letter: 'B', text: 'ensure that hardware and software produced by different vendors can work together（確保不同廠商製作的軟硬體可以協同工作）' },
      { letter: 'C', text: 'make it more difficult to develop hardware and software that link different networks（讓連結不同網路的軟硬體開發更困難）' },
      { letter: 'D', text: 'ensure that all network components of a particular network can be provided by only one vendor（確保特定網路組件僅由單一廠商提供）' },
      { letter: 'E', text: 'lock customers into buying network components from one vendor（鎖定客戶只能向同一廠商購買組件）' },
    ],
    answer: 'B',
    explanation: '網路標準的主要目的是確保不同廠商的軟硬體可以互相協作（互通性）。',
  },
  {
    id: 8,
    type: 'mc',
    question: 'If each sample uses 16 bits and the number of samples taken each second is 8000; then the transmission speed on the circuit is?',
    options: [
      { letter: 'A', text: '128 Kbps' },
      { letter: 'B', text: '64 Kbps' },
      { letter: 'C', text: '12800 bps' },
      { letter: 'D', text: '96 Kbps' },
      { letter: 'E', text: '32000 bps' },
    ],
    answer: 'A',
    explanation: '計算：8000 × 16 = 128,000 bps = 128 Kbps。',
  },
  {
    id: 9,
    type: 'mc',
    question: 'Which of the following media is least susceptible to noise?',
    options: [
      { letter: 'A', text: 'fiber optic cable（光纖）' },
      { letter: 'B', text: 'coaxial cable（同軸電纜）' },
      { letter: 'C', text: 'twisted pair（雙絞線）' },
      { letter: 'D', text: 'unshielded twisted pair（非屏蔽雙絞線）' },
      { letter: 'E', text: 'shielded twisted pair（屏蔽雙絞線）' },
    ],
    answer: 'A',
    explanation: '光纖使用光訊號傳輸，不受電磁干擾，因此最不容易受雜訊影響。',
  },
  {
    id: 10,
    type: 'mc',
    question: 'Data is physically transmitted from one computer or terminal to another in the ______ layer.',
    options: [
      { letter: 'A', text: 'physical（實體層）' },
      { letter: 'B', text: 'transport（傳輸層）' },
      { letter: 'C', text: 'application（應用層）' },
      { letter: 'D', text: 'terminal（終端）' },
      { letter: 'E', text: 'data link（資料連結層）' },
    ],
    answer: 'A',
    explanation: '實體層（Physical layer）負責資料的實際物理傳輸。',
  },
  {
    id: 11,
    type: 'mc',
    question: 'Two fundamentally different types of data are:',
    options: [
      { letter: 'A', text: 'DSL and ADSL' },
      { letter: 'B', text: 'asymmetric and symmetric（非對稱與對稱）' },
      { letter: 'C', text: 'Microsoft and IBM' },
      { letter: 'D', text: 'digital and analog（數位與類比）' },
      { letter: 'E', text: 'local area and wide area（區域與廣域）' },
    ],
    answer: 'D',
    explanation: '資料根本上分為兩種類型：數位（digital）與類比（analog）。',
  },
  {
    id: 12,
    type: 'mc',
    question: 'In general, older networks and local loops designed to transmit voice data are likely to be:',
    options: [
      { letter: 'A', text: 'international（國際性的）' },
      { letter: 'B', text: 'level 2' },
      { letter: 'C', text: 'numeric（數字的）' },
      { letter: 'D', text: 'digital（數位的）' },
      { letter: 'E', text: 'analog（類比的）' },
    ],
    answer: 'E',
    explanation: '早期設計用來傳送語音的網路與本地迴路通常是類比（analog）的。',
  },

  // ===== 簡答題 (13-15) =====
  {
    id: 13,
    type: 'short',
    question: 'Please list the 5 layers of the Internet model.（請列出網際網路模型的五個層級）',
    answer: [
      'Application layer（應用層）',
      'Transport layer（傳輸層）',
      'Network layer（網路層）',
      'Data link layer（資料連結層）',
      'Physical layer（實體層）',
    ],
    keywords: ['application', 'transport', 'network', 'data link', 'physical'],
    explanation: '網際網路五層模型由上到下為：Application → Transport → Network → Data Link → Physical。',
  },
  {
    id: 14,
    type: 'short',
    question: 'Please list the 3 cloud computing models with brief descriptions.（請列出三種雲端運算模式並簡短描述）',
    answer: [
      'SaaS（Software as a Service）：所有軟硬體資源都委外管理。',
      'PaaS（Platform as a Service）：提供平台，使用者負責程式碼。',
      'IaaS（Infrastructure as a Service）：僅提供硬體設施委外，其餘內部管理。',
    ],
    keywords: ['saas', 'paas', 'iaas'],
    explanation: '三種雲端運算模式：\n• SaaS — 所有軟硬體資源都委外管理\n• PaaS — 提供平台，使用者負責程式碼\n• IaaS — 僅提供硬體設施委外，其餘內部管理',
  },
  {
    id: 15,
    type: 'short',
    question: 'Given that we have a communication channel with 10MHz bandwidth which can achieve 75Mbps data transfer rate. If we have 20MHz bandwidth for the channel, how many Mbps data transfer rate can we achieve in theory?',
    answer: ['150 Mbps'],
    keywords: ['150'],
    explanation: '頻寬增加為 2 倍（10MHz → 20MHz），理論傳輸速率也變為 2 倍：75 × 2 = 150 Mbps。',
  },
];

// ===== 全域狀態 =====
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = []; // { questionId, yourAnswer, correctAnswer }
let activeQuestions = []; // 當前要作答的題目列表
let answered = false;

// ===== 工具函式 =====
function $(id) {
  return document.getElementById(id);
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ===== 開始作答 =====
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];
  answered = false;

  // 如果沒有指定特定題目，就用全部題目
  if (activeQuestions.length === 0) {
    activeQuestions = [...QUESTIONS];
  }

  showScreen('screen-quiz');
  renderQuestion();
}

// ===== 渲染題目 =====
function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  const total = activeQuestions.length;
  answered = false;

  // 更新 header
  $('q-counter').textContent = `${currentQuestionIndex + 1} / ${total}`;
  $('progress-bar').style.width = `${((currentQuestionIndex) / total) * 100}%`;
  $('score-display').textContent = `✅ ${score}`;
  $('q-type-badge').textContent = q.type === 'mc' ? '選擇題' : '簡答題';
  $('q-type-badge').style.background = q.type === 'mc'
    ? 'linear-gradient(135deg, #4EA8DE 0%, #6C63FF 100%)'
    : 'linear-gradient(135deg, #FF6B9D 0%, #FF9F43 100%)';

  // 題目卡片
  $('question-number').textContent = `Q${q.id}`;
  $('question-text').textContent = q.question;
  $('question-concept').style.display = 'none';

  // 隱藏回饋
  $('feedback-overlay').style.display = 'none';

  if (q.type === 'mc') {
    renderMCOptions(q);
  } else {
    renderShortAnswer(q);
  }
}

// ===== 渲染選擇題選項 =====
function renderMCOptions(q) {
  $('options-container').style.display = 'flex';
  $('short-answer-container').style.display = 'none';

  const container = $('options-container');
  container.innerHTML = '';

  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `option-${opt.letter}`;
    btn.innerHTML = `
      <span class="option-letter">${opt.letter}</span>
      <span class="option-text">${opt.text}</span>
    `;
    btn.style.animationDelay = `${index * 0.06}s`;
    btn.addEventListener('click', () => selectOption(opt.letter, q));
    container.appendChild(btn);
  });
}

// ===== 渲染簡答題 =====
function renderShortAnswer(q) {
  $('options-container').style.display = 'none';
  $('short-answer-container').style.display = 'block';
  $('short-answer-input').value = '';
  $('short-answer-input').disabled = false;
  $('btn-submit-short').disabled = false;
  $('btn-submit-short').style.display = 'flex';
}

// ===== 選擇題作答 =====
function selectOption(selected, q) {
  if (answered) return;
  answered = true;

  const isCorrect = selected === q.answer;

  // 禁用所有選項
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.add('disabled');
  });

  // 標記正確選項
  $(`option-${q.answer}`).classList.add('correct');

  if (isCorrect) {
    score++;
    showFeedback(true, q);
  } else {
    $(`option-${selected}`).classList.add('wrong');
    wrongAnswers.push({
      questionId: q.id,
      question: q.question,
      yourAnswer: `(${selected}) ${q.options.find(o => o.letter === selected).text}`,
      correctAnswer: `(${q.answer}) ${q.options.find(o => o.letter === q.answer).text}`,
    });
    showFeedback(false, q, selected);
  }

  $('score-display').textContent = `✅ ${score}`;
}

// ===== 簡答題作答 =====
function submitShortAnswer() {
  const q = activeQuestions[currentQuestionIndex];
  if (answered) return;

  const userInput = $('short-answer-input').value.trim();
  if (!userInput) {
    // 抖動提示
    $('short-answer-input').style.animation = 'shake 0.4s ease';
    setTimeout(() => { $('short-answer-input').style.animation = ''; }, 500);
    return;
  }

  answered = true;
  $('short-answer-input').disabled = true;
  $('btn-submit-short').disabled = true;

  // 檢查關鍵字是否都有提到
  const inputLower = userInput.toLowerCase();
  const matchedKeywords = q.keywords.filter(kw => inputLower.includes(kw.toLowerCase()));
  const isCorrect = matchedKeywords.length === q.keywords.length;

  if (isCorrect) {
    score++;
    showFeedback(true, q);
  } else {
    const missingKeywords = q.keywords.filter(kw => !inputLower.includes(kw.toLowerCase()));
    wrongAnswers.push({
      questionId: q.id,
      question: q.question,
      yourAnswer: userInput,
      correctAnswer: Array.isArray(q.answer) ? q.answer.join('\n') : q.answer,
    });
    showFeedback(false, q, userInput, missingKeywords);
  }

  $('score-display').textContent = `✅ ${score}`;
}

// ===== 顯示回饋 =====
function showFeedback(isCorrect, q, userAnswer = '', missingKeywords = []) {
  const overlay = $('feedback-overlay');
  const icon = $('feedback-icon');
  const title = $('feedback-title');
  const detail = $('feedback-detail');

  overlay.style.display = 'flex';

  if (isCorrect) {
    icon.textContent = '🎉';
    title.textContent = '答對了！';
    title.className = 'feedback-title correct';
    detail.innerHTML = `<strong>解說：</strong>${q.explanation}`;
  } else {
    icon.textContent = '😣';
    title.textContent = '答錯了！';
    title.className = 'feedback-title wrong';

    let detailHTML = '';
    if (q.type === 'mc') {
      const correctOpt = q.options.find(o => o.letter === q.answer);
      detailHTML = `
        <p><strong>正確答案：</strong>(${q.answer}) ${correctOpt.text}</p>
        <br>
        <p><strong>解說：</strong>${q.explanation}</p>
      `;
    } else {
      const answerText = Array.isArray(q.answer) ? q.answer.map(a => `• ${a}`).join('<br>') : q.answer;
      detailHTML = `
        <p><strong>正確答案：</strong></p>
        <p>${answerText}</p>
        ${missingKeywords.length > 0 ? `<br><p><strong>你缺少的關鍵字：</strong>${missingKeywords.join(', ')}</p>` : ''}
        <br>
        <p><strong>解說：</strong>${q.explanation}</p>
      `;
    }
    detail.innerHTML = detailHTML;
  }

  // 按鈕文字
  const isLast = currentQuestionIndex >= activeQuestions.length - 1;
  $('btn-next-text').textContent = isLast ? '查看結果' : '下一題';
}

// ===== 下一題 =====
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= activeQuestions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

// ===== 顯示結果 =====
function showResult() {
  showScreen('screen-result');

  const total = activeQuestions.length;
  const correctCount = score;
  const percentage = Math.round((correctCount / total) * 100);

  // 表情與標題
  let emoji, titleText;
  if (percentage === 100) {
    emoji = '🏆'; titleText = '滿分！太厲害了！';
  } else if (percentage >= 80) {
    emoji = '🎉'; titleText = '表現優秀！';
  } else if (percentage >= 60) {
    emoji = '💪'; titleText = '還不錯，繼續加油！';
  } else if (percentage >= 40) {
    emoji = '📖'; titleText = '需要再多複習！';
  } else {
    emoji = '😤'; titleText = '加把勁，再來一次！';
  }

  $('result-emoji').textContent = emoji;
  $('result-title').textContent = titleText;
  $('result-score').textContent = `${percentage}%`;
  $('result-summary').textContent = `共 ${total} 題，答對 ${correctCount} 題，答錯 ${total - correctCount} 題`;

  // 環形分數動畫
  const circle = $('score-ring-circle');
  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  circle.style.setProperty('--target-offset', offset);

  // 啟動動畫（延遲一點讓畫面先出現）
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    circle.style.strokeDashoffset = offset;
  }, 300);

  // 錯題列表
  const wrongSection = $('result-wrong-section');
  const wrongList = $('wrong-list');
  const btnRetryWrong = $('btn-retry-wrong');

  if (wrongAnswers.length === 0) {
    wrongSection.style.display = 'none';
    btnRetryWrong.style.display = 'none';
  } else {
    wrongSection.style.display = 'block';
    btnRetryWrong.style.display = 'inline-flex';
    wrongList.innerHTML = '';

    wrongAnswers.forEach((w, i) => {
      const item = document.createElement('div');
      item.className = 'wrong-item';
      item.style.animationDelay = `${i * 0.08}s`;
      item.innerHTML = `
        <div class="wrong-item-header">
          <span class="wrong-item-num">Q${w.questionId}</span>
        </div>
        <p class="wrong-item-question">${w.question}</p>
        <div class="wrong-item-answers">
          <p class="wrong-your-answer">❌ 你的答案：${escapeHTML(w.yourAnswer)}</p>
          <p class="wrong-correct-answer">✅ 正確答案：${escapeHTML(w.correctAnswer)}</p>
        </div>
      `;
      wrongList.appendChild(item);
    });
  }
}

// ===== HTML 跳脫（避免注入） =====
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 全部重新作答 =====
function restartAll() {
  activeQuestions = [...QUESTIONS];
  startQuiz();
}

// ===== 僅錯題重做 =====
function retryWrong() {
  if (wrongAnswers.length === 0) return;
  const wrongIds = wrongAnswers.map(w => w.questionId);
  activeQuestions = QUESTIONS.filter(q => wrongIds.includes(q.id));
  startQuiz();
}

// ===== 鍵盤快捷鍵 =====
document.addEventListener('keydown', (e) => {
  const quizScreen = $('screen-quiz');
  if (!quizScreen.classList.contains('active')) return;

  const q = activeQuestions[currentQuestionIndex];
  const overlay = $('feedback-overlay');

  // 回饋顯示時，按 Enter/Space 進到下一題
  if (overlay.style.display === 'flex') {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nextQuestion();
    }
    return;
  }

  // 選擇題快捷鍵
  if (q && q.type === 'mc' && !answered) {
    const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E',
                     'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E' };
    const letter = keyMap[e.key.toLowerCase()];
    if (letter && q.options.find(o => o.letter === letter)) {
      selectOption(letter, q);
    }
  }
});
