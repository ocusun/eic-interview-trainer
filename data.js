// EIC Interview Trainer - Official Data from 선행학습 영향평가 결과보고서
// OFFICIAL only from PDFs. PREDICTED clearly separated.

const EXAMS = [
  // ===== 2026 =====
  {
    id: "2026-17",
    year: 2026,
    type: "OFFICIAL",
    track: "글로벌인재",
    department: "동아시아국제학부, 글로벌엘리트학부",
    card: "문항카드 17",
    title: "Prosperity Paradox (번영의 역설)",
    category: "논리적 사고력 1",
    prepMinutes: 1,
    answerMinutes: 2,
    topic: "Prosperity Paradox – Economic success vs life satisfaction",
    keyConflict: "경제 성장이 반드시 삶의 만족도로 이어지지 않는 현상",
    passage: "The 'prosperity paradox' refers to the observation that economic growth and rising material wealth do not always lead to corresponding increases in people's life satisfaction or happiness. While countries that have experienced rapid economic development often show higher average incomes, surveys of subjective well-being sometimes reveal stagnation or even decline in reported happiness levels after a certain threshold.\n\nResearchers point to several possible explanations. One is that once basic needs are met, relative income and social comparison become more important than absolute income. Another is that the costs of economic growth—such as longer working hours, environmental degradation, weakened community ties, and increased inequality—can offset the benefits of higher material standards. Additionally, adaptation and rising expectations may cause people to quickly adjust to higher living standards, so that the initial boost in satisfaction fades over time.\n\nThis paradox raises important questions for policymakers: Should the primary goal of public policy remain maximizing GDP and economic growth, or should greater emphasis be placed on measures of well-being, work-life balance, social capital, and environmental sustainability?",
    questions: [
      "1-1. According to the passage, what is the prosperity paradox? Explain the difference between economic success and life satisfaction, and provide two possible reasons for this difference.",
      "1-2. In your opinion, should the primary goal of government policy be economic growth or improving citizens' life satisfaction? Choose one position and support your answer with reasons and examples."
    ],
    intention: "영문 제시문 이해 + 경제성장과 삶의 만족도 관계 분석 + 정책 입장 제시",
    subjects: ["영어", "사회"],
    keyConcepts: ["prosperity paradox", "subjective well-being", "relative income", "adaptation"],
    rubric: {
      high: "핵심 정확히 파악, 이유 2개 이상, 입장 분명, 사례·반대인정 포함, 영어 자연스러움",
      mid: "대체로 이해했으나 구체성·깊이 부족",
      low: "핵심 오해, 근거 부족, 입장 불분명"
    },
    exampleCore: "한 줄 요약 → 이유 2개 → 입장 + 사례 → 반대 인정 후 재주장",
    coachTip: "1분 준비 / 2분 답변. 구조: 요약 → 이유 → 입장 → 사례 → 반대인정",
    selfCheck: ["prosperity paradox를 말했는가?", "이유 2개?", "입장 명확?", "사례 있음?", "반대 인정?"],
    vocab: ["prosperity", "paradox", "subjective well-being", "stagnation", "threshold", "relative income", "adaptation", "offset", "sustainability", "social capital"]
  },
  {
    id: "2026-18",
    year: 2026,
    type: "OFFICIAL",
    track: "글로벌인재",
    department: "동아시아국제학부, 글로벌엘리트학부",
    card: "문항카드 18",
    title: "AI Companion Apps",
    category: "논리적 사고력 2",
    prepMinutes: 1,
    answerMinutes: 2,
    topic: "AI Companion Apps – regulation for adolescents",
    keyConflict: "청소년 AI 동반자 앱 규제 vs 자율·효용",
    passage: "Passage A\nArtificial intelligence companion applications have become increasingly popular, especially among young people. These apps use advanced language models to engage in conversations that can feel empathetic, supportive, and personalized. Users report that AI companions help reduce loneliness, provide a non-judgmental space to express emotions, and offer practical advice or motivation.\n\nPassage B\nCritics warn that heavy reliance on AI companions may hinder the development of real-world social skills. Adolescents in particular are still forming their identities and learning how to navigate complex human relationships. Substituting human interaction with AI may lead to emotional dependency, distorted expectations of relationships, and reduced ability to handle conflict or ambiguity that naturally occur with real people.\n\nPassage C\nSome researchers and policymakers argue for age-appropriate regulation. Suggestions include limiting usage time for minors, requiring transparency about the AI nature of the companion, prohibiting certain emotional manipulation techniques, and ensuring that sensitive conversations are not used for commercial data collection. Others contend that over-regulation could stifle innovation and deny young people potentially beneficial tools for mental health support.",
    questions: [
      "2-1. Summarize the main idea of each passage (A, B, and C). Based on passages B and C, what concerns and regulatory approaches are raised regarding AI companion apps?",
      "2-2. Do you think governments should regulate AI companion apps for adolescents? State your opinion and support it with reasons and examples."
    ],
    intention: "복수 제시문 비교·요약 + AI 사회영향과 청소년 보호 균형 판단",
    subjects: ["영어", "사회"],
    keyConcepts: ["AI companion", "loneliness", "dependency", "regulation", "transparency"],
    rubric: {
      high: "A/B/C 각각 요약, 우려·규제 연결, 입장+근거+사례, 반대인정",
      mid: "요약은 맞으나 깊이·균형 부족",
      low: "제시문 혼동, 입장 불분명"
    },
    exampleCore: "A효용 B위험 C규제 → 입장 → 사례 → 반대인정",
    coachTip: "2-1은 요약→연결, 2-2는 입장 먼저 + 이유2 + 사례1",
    selfCheck: ["A B C 구분 요약?", "규제 입장 명확?", "사례 있음?", "반대 인정?"],
    vocab: ["companion", "empathetic", "loneliness", "dependency", "ambiguity", "regulation", "transparency", "manipulation", "stifle", "adolescent"]
  },

  // ===== 2025 (PDF 문항카드 14, 15 전문) =====
  {
    id: "2025-14",
    year: 2025,
    type: "OFFICIAL",
    track: "글로벌인재 / 학교생활우수자",
    department: "국제계열 (영문 제시문)",
    card: "문항카드 14",
    title: "Cyberbullying & Deepfake",
    category: "인성 및 가치관",
    prepMinutes: 10,
    answerMinutes: 5,
    topic: "Cyberbullying and deepfake crimes",
    keyConflict: "사이버 괴롭힘·딥페이크와 대응",
    passage: "[A] According to a recent survey by the Ministry of Education, among 50,000 students from elementary to high school who have suffered from school violence, 10.8 percent experienced cyberbullying. The ratio was higher than those who suffered physical violence, 10 percent. On Sept. 2, a high school student in Jecheon, North Chungcheong Province, committed suicide after receiving constant threats from her peers. The method of cyberbullying varies by platforms, such as leaving a student out from a KakaoTalk group chat room among classmates, ordering students to do something through text message, spreading personal information to others through social media or verbally abusing others during online games.\n\n[B] Major K-pop agencies such as JYP Entertainment, YG Entertainment and Cube Entertainment have declared war on deepfake visual content created using images of their K-pop artists. This comes at a time when deepfake crimes have attracted renewed attention in South Korea, after the revelation of online rooms in which users shared AI-generated pornographic videos of acquaintances. It is becoming more and more common for K-pop singers to fall victim to deepfake pornography, according to industry sources. YG Entertainment announced on Sept. 2 that it was taking legal action against these activities. \"We are actively monitoring this widespread and malicious illegal activity, and making efforts to delete such illegal videos. We are also taking all possible legal actions. We will continue to respond strictly to all illegal activities that seriously harm the reputation of our artists,\" said YG Entertainment in a public statement. (G)I-dle, NewJeans, Twice, Kwon Eun-bi and Blackpink are just a few of the artists who are victims of deepfake pornography.",
    questions: [
      "(1-1) Summarize the passage [A] and state your opinion on what people can do to stop cyberbullying.",
      "(1-2) Summarize the passage [B] and explain the meaning of the phrase underlined (these activities)."
    ],
    intention: "제시문 요약 + 사이버 폭력·딥페이크에 대한 의견·설명",
    subjects: ["영어", "통합사회"],
    keyConcepts: ["cyberbullying", "deepfake", "malicious", "reputation"],
    rubric: {
      high: "요약 정확 + 의견/밑줄 설명 명확 + 논리·영어 우수",
      mid: "요약은 되나 의견·설명이 약함",
      low: "요약 실패 또는 핵심 누락"
    },
    exampleCore: "A: 사이버괴롭힘 통계·사례·유형 + 예방 의견 / B: 딥페이크 대응 + these activities = 딥페이크 포르노 제작",
    coachTip: "1-1은 요약 후 예방 의견(개인·학교·제도). 1-2는 딥페이크 요약 + 밑줄 의미.",
    selfCheck: ["A 요약했는가?", "예방 의견 있음?", "B 요약?", "밑줄 설명?"],
    vocab: ["cyberbullying", "commit suicide", "threat", "deepfake", "malicious", "acquaintance", "reputation", "illegal", "victim"]
  },
  {
    id: "2025-15",
    year: 2025,
    type: "OFFICIAL",
    track: "글로벌인재",
    department: "동아시아국제학부, 글로벌엘리트학부",
    card: "문항카드 15",
    title: "Protective Trade Policy (Tariffs)",
    category: "논리적 사고력",
    prepMinutes: 10,
    answerMinutes: 5,
    topic: "Protective tariffs and trade policy debate",
    keyConflict: "보호무역(고관세) vs 자유무역·소비자 비용",
    passage: "[A] After initially suggesting that he wanted to impose 10 percent tariffs on all imported goods to the United States, Mr. Donald Trump -- Republican candidate for the presidential election scheduled on November 05, 2024 -- has recently announced that the tariffs could be as high as 20 percent. For Chinese imports, he has talked about imposing tariffs up to 60 percent.\n\n[B] The US government estimates that Chinese imports caused roughly two million manufacturing jobs to disappear in the United States over last two decades. Cheap prices were the main reason that made Chinese goods attractive to American consumers. As a result, many companies competing with Chinese imports found their profits shrinking. Some of them were forced to cut jobs and even went out of business. High tariffs may help protect American businesses and workers, leading to restoration of the manufacturing industries.\n\n[C] Critics have been worried about the costs of Mr. Trump's trade policy. The Peterson Institute for International Economics -- a think tank in Washington D.C. -- calculates that Mr. Trump's new tariffs would increase the overall prices of imported goods in the United States, triggering a rise of up to $2,600 in what the average household spends on consumption per year. In particular, high tariffs would hurt low-income households by increasing their living costs. Mr. Trump's policy would also hamper economic growth. For instance, rising prices from high tariffs would discourage consumer spending and business investment. Foreign governments would also respond by introducing high tariffs on American exports.",
    questions: [
      "(2-1) Summarize the main contents from each passage.",
      "(2-2) What is your opinion on protective trade policy? Support your idea with concrete examples."
    ],
    intention: "무역정책 제시문 요약 + 보호무역에 대한 입장과 사례",
    subjects: ["영어", "통합사회", "경제"],
    keyConcepts: ["tariff", "protective trade", "manufacturing jobs", "retaliatory tariffs"],
    rubric: {
      high: "A/B/C 각각 핵심 요약 + 보호무역 입장 + 구체 사례 + 논리",
      mid: "요약은 되나 입장·사례 약함",
      low: "핵심 누락, 입장 불분명"
    },
    exampleCore: "A 관세안 / B 일자리 보호 논리 / C 소비자·성장 비용 → 내 입장 + 사례",
    coachTip: "2-1은 세 제시문 한 문장씩. 2-2는 찬성/반대 명확히 + 교과서 수준 사례.",
    selfCheck: ["A B C 각각 요약?", "보호무역 입장 명확?", "구체 사례?"],
    vocab: ["tariff", "impose", "manufacturing", "profits", "hamper", "discourage", "investment", "retaliatory"]
  },

  // ===== 2024 placeholders (전문 추출 후 교체 예정) =====
  {
    id: "2024-14",
    year: 2024,
    type: "OFFICIAL",
    track: "글로벌인재 / 학교생활우수자",
    department: "국제계열",
    card: "문항카드 14",
    title: "2024 인성 및 가치관 (영문)",
    category: "인성 및 가치관",
    prepMinutes: 1,
    answerMinutes: 2,
    topic: "2024 인성·가치관 영문 제시문",
    keyConflict: "PDF 부록 추출 중",
    passage: "※ 2024년 영문 제시문 전문은 PDF 부록에서 추출하여 곧 업데이트됩니다. 학습 흐름(읽기→생각→말하기→점검)은 그대로 연습할 수 있습니다.",
    questions: ["제시문을 바탕으로 인성·가치관 관련 질문에 답하시오. (전문 업데이트 예정)"],
    intention: "인성 및 가치관 평가",
    subjects: ["영어", "사회"],
    keyConcepts: [],
    rubric: { high: "가치관 일관 + 경험 연결", mid: "기본 입장", low: "추상적" },
    exampleCore: "제시문 + 나의 경험 연결",
    coachTip: "인성 문항은 나의 경험과 가치관을 제시문과 연결하세요.",
    selfCheck: ["제시문과 연결?", "구체 경험?"],
    vocab: []
  },
  {
    id: "2024-15",
    year: 2024,
    type: "OFFICIAL",
    track: "글로벌인재",
    department: "국제계열",
    card: "문항카드 15",
    title: "2024 논리적 사고력 (영문)",
    category: "논리적 사고력",
    prepMinutes: 1,
    answerMinutes: 2,
    topic: "2024 논리적 사고력 영문 제시문",
    keyConflict: "PDF 부록 추출 중",
    passage: "※ 2024년 영문 제시문 전문은 PDF 부록에서 추출하여 곧 업데이트됩니다.",
    questions: ["제시문을 읽고 논리적 사고력 관련 질문에 답하시오. (전문 업데이트 예정)"],
    intention: "논리적 사고력 평가",
    subjects: ["영어", "사회"],
    keyConcepts: [],
    rubric: { high: "핵심+대립+근거", mid: "기본 이해", low: "핵심 실패" },
    exampleCore: "대립 관점 명확히",
    coachTip: "6단계로 한국어 먼저 정리하세요.",
    selfCheck: ["핵심 파악?", "대립 관점?"],
    vocab: []
  }
];

const PREDICTED = [
  {
    id: "2027-pred-1",
    year: 2027,
    type: "PREDICTED",
    title: "AI & Labor Market Polarization",
    topic: "Generative AI and job polarization",
    passage: "[PREDICTED – 공식 자료 아님]\\n\\nGenerative AI is rapidly automating cognitive tasks previously thought to require human intelligence. While productivity gains are expected, concerns grow about polarization between high-skill workers who leverage AI and middle-skill workers whose roles may be displaced.",
    questions: ["What are the potential benefits and risks of generative AI for the labor market? Should governments intervene, and if so, how?"],
    coachTip: "예상 문제입니다. 구조 연습용으로만 사용하세요."
  },
  {
    id: "2027-pred-2",
    year: 2027,
    type: "PREDICTED",
    title: "Climate Migration",
    topic: "Climate change and cross-border migration",
    passage: "[PREDICTED – 공식 자료 아님]\\n\\nRising sea levels and extreme weather are forcing communities to move. Some argue for international legal recognition of climate refugees; others emphasize national border control and adaptation in place.",
    questions: ["Should countries expand legal pathways for climate migrants? Give reasons and examples."],
    coachTip: "예상 문제. 대립 관점(인도 vs 주권)을 분명히 하세요."
  }
];

const VOCAB = [
  { word: "prosperity", meaning: "번영", pos: "n.", example: "Economic prosperity does not always equal happiness." },
  { word: "paradox", meaning: "역설", pos: "n.", example: "The prosperity paradox challenges assumptions." },
  { word: "cyberbullying", meaning: "사이버 괴롭힘", pos: "n.", example: "Cyberbullying is more common than physical violence in some surveys." },
  { word: "deepfake", meaning: "딥페이크", pos: "n.", example: "Deepfake crimes target celebrities and ordinary people." },
  { word: "tariff", meaning: "관세", pos: "n.", example: "High tariffs may protect domestic industries." },
  { word: "malicious", meaning: "악의적인", pos: "adj.", example: "Malicious illegal activity harms reputation." },
  { word: "hamper", meaning: "방해하다", pos: "v.", example: "High tariffs could hamper economic growth." },
  { word: "dependency", meaning: "의존", pos: "n.", example: "Emotional dependency on AI is a concern." },
  { word: "transparency", meaning: "투명성", pos: "n.", example: "Transparency about AI nature is important." },
  { word: "regulation", meaning: "규제", pos: "n.", example: "Age-appropriate regulation may be needed." },
  { word: "adaptation", meaning: "적응", pos: "n.", example: "People adapt quickly to higher living standards." },
  { word: "retaliatory", meaning: "보복의", pos: "adj.", example: "Foreign governments may impose retaliatory tariffs." },
  { word: "subjective well-being", meaning: "주관적 웰빙", pos: "n.", example: "Surveys measure subjective well-being." },
  { word: "stifle", meaning: "억누르다", pos: "v.", example: "Over-regulation could stifle innovation." },
  { word: "polarization", meaning: "양극화", pos: "n.", example: "Job polarization is a growing concern." }
];
