# 🌟 유명인 정보 검색 앱

OpenAI GPT API를 사용하여 유명인에 대한 상세한 정보를 검색할 수 있는 React 애플리케이션입니다.

## ✨ 주요 기능

- 🔍 유명인 이름으로 검색
- 📚 상세한 개인 정보 제공
- 🎨 현대적이고 반응형 UI
- 📱 모바일 친화적 디자인
- ⚡ 빠른 검색 결과

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 프로젝트 클론
```bash
git clone <repository-url>
cd famous-people-search
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 `http://localhost:3000` 접속

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 (Glassmorphism 디자인)
- **HTTP Client**: Axios
- **AI API**: OpenAI GPT-3.5-turbo

## 📱 사용법

1. 검색창에 유명인의 이름을 입력합니다
2. "🔍 검색" 버튼을 클릭합니다
3. AI가 분석한 상세 정보를 확인합니다

## 🔧 환경 설정

### API 키 설정

1. [OpenAI Platform](https://platform.openai.com/api-keys)에서 API 키를 발급받으세요
2. `src/services/famousPersonService.ts` 파일에서 `API_KEY` 변수를 실제 키로 교체하세요

```typescript
const API_KEY = 'your-actual-api-key-here';
```

### 환경 변수 사용 (권장)

프로젝트 루트에 `.env` 파일을 생성하고:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

그리고 `famousPersonService.ts`에서:

```typescript
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
```

## 📦 빌드

프로덕션 빌드를 위해:

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 🎨 UI 특징

- **Glassmorphism 디자인**: 반투명한 유리 효과
- **그라데이션 배경**: 시각적으로 매력적인 색상 조합
- **반응형 레이아웃**: 모든 디바이스에서 최적화된 경험
- **애니메이션**: 부드러운 전환 효과와 로딩 스피너

## 🚀 배포하기

### Vercel을 통한 무료 배포 (추천)

1. [vercel.com](https://vercel.com)에서 "New Project" 클릭
2. GitHub 저장소 연결
3. Environment Variables에서 `VITE_OPENAI_API_KEY` 설정
4. 자동 배포 완료!

## 📄 라이선스

MIT License

## 🤝 기여하기

버그 리포트나 기능 제안은 언제든 환영합니다!

