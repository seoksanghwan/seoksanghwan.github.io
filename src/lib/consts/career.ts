import { Career } from '@/types/career';

export const careerData: Career[] = [
  {
    company: '(주) 클로버추얼패션 (CLO Virtual Fashion)',
    startDate: '2019.05',
    endDate: null,
    isGoing: true,
    tasks: [
      {
        service: '웹사이트 전면 리뉴얼 및 Zendesk Help Center 리뉴얼',
        descriptions: [
          'ASP.NET(Razor) 구조를 Next.js로 마이그레이션하여 빌드 속도 30% 개선 및 글로벌 SEO 강화',
          'Stripe/PayPal/Alipay 등 글로벌 결제 시스템 연동 및 인보이스 PDF 추출 기능 개발',
          'Zendesk SSO FAQ API 통합 및 JSON 기반 커스터마이징으로 CX팀 업무 효율 향상',
        ],
      },
      {
        service: '비즈니스 지표 최적화 및 구독/결제 시스템 고도화',
        descriptions: [
          '구독 일시중지/재개 기능 개발로 구독 취소율 13%p 감소 (35% → 22%) 및 약 300명 유저 확보',
          '트라이얼 플랜 신규 구축 및 A/B 테스트(AWS Evidently)를 통한 유료 전환율 2.7%p 상승',
          '프로모션 페이지 신규 유료 사용자 552명 유입 및 $128K 매출 달성 기여',
        ],
      },
      {
        service: '디자인 시스템 구축 및 협업 프로세스 자동화',
        descriptions: [
          'Storybook 및 Chromatic 기반 UI 라이브러리 구축으로 컴포넌트 재사용률 50% 향상',
          '학생 인증 자동화 시스템 구축으로 관련 CS 문의 30% 감소 및 연간 150시간 운영 리소스 절감',
          '인앱 웹뷰용 스킴(Scheme) 생성 자동화 빌더 개발로 업무 소요 시간 83% 단축 (60분 → 10분)',
        ],
      },
      {
        service: '사용자 경험(UX) 개선 및 글로벌 확장',
        descriptions: [
          '통합 로그인(SSO) 시스템 구축 주도로 5개 서비스 간 사용자 편의성 및 시너지 극대화',
          'i18n 및 Weglot을 활용한 다국어(/ko/jp/en/zh) 지원으로 글로벌 오피스 협업 효율 개선',
          '주문 확인 및 결제 완료 페이지 UX 리뉴얼로 환불 관련 CS 문의 20% 감소',
        ],
      },
    ],
  },
  {
    company: '주식회사 뉴럴비씨 (NeuralBC)',
    startDate: '2018.12',
    endDate: '2019.05',
    isGoing: false,
    tasks: [
      {
        service: 'Uzmex (비트코인 마진거래소) 구축 및 실시간 UI 개발',
        descriptions: [
          'WebSocket을 활용한 실시간 주문장(Orderbook) 및 체결 내역 반영으로 거래 신뢰성 강화 ',
          '공매수/공매도, 거래 취소, 입금 관리 등 핵심 마진거래 인터페이스 설계 및 구현',
          '다양한 디바이스 환경을 고려한 반응형 UI 적용으로 사용자 경험 최적화',
        ],
      },
      {
        service: 'Aipebot (AI Bot 투자 대시보드) 개발',
        descriptions: [
          'Chart.js를 활용하여 AI Bot별 Tradelog 데이터를 시각화하고 일별/트렌드 그래프 제공',
          '다양한 AI Bot 리스트 및 상세 대시보드를 구축하여 실시간 투자 현황 모니터링 환경 제공',
        ],
      },
      {
        service: '3Piks (코인 리워드 플랫폼) 기능 개발',
        descriptions: [
          '마이페이지 내 닉네임 수정 및 추천인 URL 발급/조회 기능을 통한 사용자 편의성 증대',
          '자산 현황, 유저 랭킹, 플레이 기록 등 핵심 데이터를 컴포넌트 단위로 설계하여 재사용성 확보 ',
        ],
      },
    ],
  },
];

export const skills = {
  core: ['Javascript', 'Typescript', 'React', 'Next.js'],
  stateData: ['Mobx', 'TanStack Query'],
  stylingUI: ['Styled-components', 'TailwindCss', 'SCSS'],
  other: [
    'Zendesk',
    'Node.js',
    'Git',
    'AWS',
    'Figma',
    'Framer',
    'Chromatic',
    'Stripe/PayPal API',
    'Weglot',
  ],
};
