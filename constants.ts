export const IMAGE_ASSETS = {
  HERO_BG: "https://picsum.photos/1600/900?random=1",
  COACH_PROFILE: "https://picsum.photos/1600/900?random=2",
  TRAINING_DRILL: "https://picsum.photos/1600/900?random=3",
  CLASS_VIBE: "https://picsum.photos/1600/900?random=4",
  TESTIMONIAL_BEFORE: "https://picsum.photos/400/300?random=5",
  TESTIMONIAL_AFTER: "https://picsum.photos/400/300?random=6",
};

export const NAVIGATION_LINKS = [
  { name: '메인', href: '/' },
  { name: '커리큘럼', href: '/curriculum' },
  { name: '프로그램', href: '/program' },
  { name: '코치 소개', href: '/about' },
  { name: '문의', href: '/contact' },
];

export const MAIN_CONTENT = {
  headline: "대한민국 최고의 슈터에게 배우는 '진짜' 슛의 정석",
  ctaText: "지금 바로 슈팅 마스터 클래스 합류하기",
  keyMessages: [
    "슛은 던지는 것이 아니라, 메커니즘을 완성하는 것입니다.",
    "국가대표 슈터의 노하우를 당신의 근육에 이식해 드립니다.",
    "정확한 자세 교정이 확률을 100% 바꿉니다.",
  ],
  authority: {
    title: "방성윤 코치의 슈팅 철학",
    description: "KBL 역대 최고의 슈터 중 한 명인 방성윤 코치는 단순한 득점 기술을 넘어, 농구 선수의 근본적인 슈팅 메커니즘을 혁신적으로 변화시킬 독보적인 노하우를 가지고 있습니다.",
    achievements: [
      "2005-2006 KBL 신인왕",
      "KBL 한 경기 최다 3점슛 성공 (11개)",
      "국가대표 슈터 활약",
      "다수의 슈팅 클리닉 운영 및 성공 사례 배출",
    ],
  },
  problemSolution: {
    title: "아마추어 슈터들의 흔한 실수, 그리고 방성윤의 해결책",
    problems: [
      {
        heading: "문제: 불안정한 슛 밸런스",
        description: "하체와 상체의 불균형으로 슛 릴리즈 시 몸이 흔들려 정확도가 떨어집니다.",
        image: "https://picsum.photos/600/400?random=7"
      },
      {
        heading: "문제: 일관성 없는 슛 폼",
        description: "매번 다른 폼으로 슛을 던져 슈팅 성공률 예측이 불가능해집니다.",
        image: "https://picsum.photos/600/400?random=8"
      },
      {
        heading: "문제: 짧은 비거리와 낮은 포물선",
        description: "코어 활용 미숙으로 슛에 힘이 실리지 않아 림에 미치지 못합니다.",
        image: "https://picsum.photos/600/400?random=9"
      }
    ],
    solutions: [
      {
        heading: "해결책: 코어 슈팅 밸런스",
        description: "하체에서 시작해 코어를 거쳐 손끝으로 이어지는 완벽한 에너지 전달 훈련.",
      },
      {
        heading: "해결책: 매직 핸드 시스템",
        description: "방성윤 코치만의 일관된 슛 폼 구축을 위한 맞춤형 교정 프로그램.",
      },
      {
        heading: "해결책: 림 타겟팅 포물선",
        description: "손쉬운 장거리 슛과 높은 포물선을 위한 릴리즈 각도 및 파워 훈련.",
      }
    ]
  },
  preview: {
    title: "슈팅 마스터 클래스 커리큘럼 미리보기",
    description: "방성윤 코치의 슈팅 철학이 담긴 체계적인 커리큘럼으로 당신의 슛을 변화시키세요.",
    modules: [
      { icon: "🎯", title: "기초 폼 교정", description: "정확한 슈팅 자세의 기반을 다집니다." },
      { icon: "🏀", title: "드리블 후 슈팅", description: "실전 상황에서의 득점력을 향상시킵니다." },
      { icon: "⏱️", title: "무빙 샷 & 스텝", description: "다양한 움직임 속에서 정확한 슈팅을 구사합니다." },
      { icon: "🧠", title: "멘탈 트레이닝", description: "경기 중 압박감 속에서도 침착하게 슛을 성공시키는 법." },
    ],
  },
  testimonials: [
    {
      beforeImage: IMAGE_ASSETS.TESTIMONIAL_BEFORE,
      afterImage: IMAGE_ASSETS.TESTIMONIAL_AFTER,
      name: "김민준 (30세, 직장인)",
      quote: "슛 폼이 너무 들쭉날쭉했는데, 코치님 덕분에 이제는 자신감 있게 던질 수 있게 됐습니다! 특히 릴리즈 포인트 교정이 신의 한 수였어요.",
    },
    {
      beforeImage: IMAGE_ASSETS.TESTIMONIAL_BEFORE,
      afterImage: IMAGE_ASSETS.TESTIMONIAL_AFTER,
      name: "박서연 (17세, 엘리트 지망생)",
      quote: "프로 선수의 노하우를 직접 배울 수 있어서 정말 좋았어요. 비거리와 정확도가 동시에 늘어서 꿈에 그리던 엘리트 선수에 한 발짝 더 다가간 기분입니다!",
    },
  ],
  footer: {
    copyright: "© 2024 BASKETBALL SHOOTING MASTER. All rights reserved.",
    socialLinks: [
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "YouTube", url: "#" },
    ],
  },
};

export const CURRICULUM_CONTENT = {
  title: "슈팅 마스터 클래스 상세 커리큘럼",
  description: "방성윤 코치와 함께하는 4주간의 집중 트레이닝으로 당신의 슈팅을 완성하세요.",
  weeks: [
    {
      week: "1주차: 슈팅 폼 진단 및 기초 밸런스 확립",
      topics: [
        "개인별 슈팅 폼 정밀 분석 (비디오 촬영 및 피드백)",
        "하체-코어-상체 연결을 위한 파워 포지션 훈련",
        "볼 그립 및 손가락 위치 교정",
        "원핸드 슛 기초 메커니즘 이해 및 반복",
      ],
      materials: "농구공, 운동복",
      method: "오프라인 그룹 레슨 (주 2회, 2시간)",
    },
    {
      week: "2주차: 릴리즈 & 팔로우 스루 교정 및 비거리 증대",
      topics: [
        "정확한 릴리즈 타이밍 및 각도 훈련",
        "손목 스냅과 팔로우 스루 일관성 확보",
        "코어 힘을 활용한 비거리 증대 훈련",
        "자유투 성공률 향상 전략",
      ],
      materials: "농구공, 슈팅 훈련 장비",
      method: "오프라인 그룹 레슨 (주 2회, 2시간), 온라인 개별 과제",
    },
    {
      week: "3주차: 무빙 샷 & 스텝 심화 훈련",
      topics: [
        "드리블 후 슈팅 (풀업 점퍼, 스텝백 점퍼)",
        "캐치 앤 슛 (V-컷, L-컷)",
        "스크린 활용 슈팅 및 움직임 이해",
        "상황별 슈팅 선택 및 판단력 훈련",
      ],
      materials: "농구공, 운동복, 전술 보드",
      method: "오프라인 그룹 레슨 (주 2회, 2시간), 실전 시뮬레이션",
    },
    {
      week: "4주차: 실전 적용 및 멘탈 강화",
      topics: [
        "경기 중 슈팅 성공률을 높이는 멘탈 관리",
        "압박 상황에서의 슈팅 연습 (클러치 샷)",
        "개인별 슈팅 데이터 분석 및 맞춤형 훈련 플랜 제공",
        "수료식 및 피드백 세션",
      ],
      materials: "농구공, 경기 분석 자료",
      method: "오프라인 그룹 레슨 (주 2회, 2시간), 최종 테스트",
    },
  ],
};

export const PROGRAM_CONTENT = {
  title: "트레이닝 프로그램 및 서비스",
  description: "개인의 필요에 맞춰 슈팅 능력을 극대화할 수 있는 다양한 프로그램을 제공합니다.",
  services: [
    {
      icon: "🎥",
      title: "비디오 슈팅 폼 분석 서비스",
      description: "고화질 비디오 촬영 후 방성윤 코치가 직접 상세 분석 및 맞춤형 피드백 제공. 약점 파악과 효율적인 개선 방향 제시.",
    },
    {
      icon: "🤝",
      title: "1:1 원포인트 레슨",
      description: "코치와 1:1로 집중적인 슈팅 교정 및 맞춤 훈련. 단기간에 큰 효과를 원하는 선수들에게 최적화된 프로그램.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "소규모 그룹 트레이닝",
      description: "비슷한 수준의 동호인 또는 팀원들과 함께 경쟁하며 배우는 그룹 레슨. 동기 부여와 팀워크 향상.",
    },
    {
      icon: "📊",
      title: "슈팅 데이터 분석 리포트",
      description: "슈팅 성공률, 슛 존 분포, 릴리즈 시간 등 정량적 데이터를 분석하여 과학적인 훈련 계획 수립을 지원.",
    },
  ],
};

export const ABOUT_CONTENT = {
  title: "방성윤 코치 소개",
  tagline: "슛은 던지는 것이 아니라, 설계하는 것입니다.",
  intro: "대한민국 농구 역사에 한 획을 그은 슈터, 방성윤 코치입니다. 선수 시절 '미스터빅뱅'이라는 별명으로 불리며 탁월한 슈팅 능력을 선보였던 저의 모든 노하우를 여러분에게 전수하고자 합니다.",
  highlightReel: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefghi", // Placeholder YouTube embed
  philosophy: "저의 슈팅 철학은 '일관성'과 '효율성'입니다. 슛은 단순히 던지는 행위를 넘어, 신체의 모든 부분이 유기적으로 연결되어 최적의 에너지를 볼에 전달하는 과학이자 예술입니다. 저는 여러분의 신체적 특성과 습관을 면밀히 분석하여, 가장 효율적이고 일관적인 슈팅 메커니즘을 찾아드립니다. '미스터빅뱅'의 비결은 결코 특별한 재능이 아닌, 철저한 원리 이해와 반복 훈련에서 비롯됩니다.",
  achievements: [
    "KBL 신인왕 (2005-2006)",
    "KBL 한 경기 최다 3점슛 성공 기록 보유 (11개)",
    "농구 국가대표팀 주전 슈터",
    "다수의 프로 구단 슈팅 코치 역임",
    "스포츠 전문 채널 해설위원 및 방송 출연 다수",
  ],
  image: IMAGE_ASSETS.COACH_PROFILE,
};

export const CONTACT_CONTENT = {
  title: "수강 신청 및 문의",
  description: "방성윤 슈팅 마스터 클래스에 대한 궁금한 점이 있으시거나 수강 신청을 원하시면 아래 양식을 작성해 주세요. 친절하게 안내해 드리겠습니다.",
  formFields: [
    { label: "이름", type: "text", name: "name", placeholder: "이름을 입력해주세요" },
    { label: "연락처", type: "tel", name: "phone", placeholder: "010-XXXX-XXXX" },
    { label: "이메일", type: "email", name: "email", placeholder: "example@email.com" },
    { label: "문의 내용", type: "textarea", name: "message", placeholder: "문의하실 내용을 상세히 입력해주세요." },
  ],
  faq: [
    {
      question: "수업은 어디에서 진행되나요?",
      answer: "주로 서울 강남 지역의 실내 농구장에서 진행되며, 정확한 장소는 수강 확정 후 개별 안내 드립니다. 온라인 클래스도 운영 중입니다.",
    },
    {
      question: "농구 초보자도 수강할 수 있나요?",
      answer: "네, 슈팅의 기초부터 탄탄하게 가르쳐드리기 때문에 농구 초보자부터 숙련자, 엘리트 선수 지망생까지 모두에게 적합한 커리큘럼입니다.",
    },
    {
      question: "수강료는 얼마인가요?",
      answer: "클래스 종류(그룹/개인) 및 기간에 따라 상이합니다. 자세한 내용은 문의하기 양식을 통해 상담 신청해주시면 상세히 안내해 드립니다.",
    },
  ],
  location: {
    address: "서울특별시 강남구 테헤란로 123 방성윤 농구교실",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.733075249416!2d127.027008!3d37.502095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38423f77861%3A0x3f5c5b4e3a4e3a4e!2sGangnam-gu%20Office!5e0!3m2!1sen!2skr!4v1678912345678!5m2=1sen!2skr", // Placeholder Google Maps embed URL
  },
  kakaoTalkLink: "https://pf.kakao.com/_xxxxxxxx", // Placeholder KakaoTalk link
};