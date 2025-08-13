# 🌟 유명인 정보 검색 앱

OpenAI GPT API를 사용하여 유명인에 대한 상세한 정보를 검색할 수 있는 현대적인 React 애플리케이션입니다.

## ✨ 주요 기능

- 🔍 **AI 기반 검색**: OpenAI GPT-3.5-turbo로 정확한 정보 제공
- 📚 **상세 정보**: 생년월일, 국적, 직업, 업적, 약력, 흥미로운 사실
- 🎨 **현대적 UI**: Glassmorphism 디자인과 반응형 레이아웃
- 📱 **모바일 최적화**: 모든 디바이스에서 최적화된 경험
- ⚡ **빠른 응답**: 최적화된 API 호출과 에러 처리
- 🔒 **보안 강화**: 환경 변수를 통한 안전한 API 키 관리

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn
- OpenAI API 키

### 설치 및 실행

1. **프로젝트 클론**
```bash
git clone <repository-url>
cd famous-people-search
```

2. **의존성 설치**
```bash
npm install
```

3. **환경 변수 설정**
프로젝트 루트에 `.env` 파일 생성:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

4. **개발 서버 실행**
```bash
npm run dev
```

5. **브라우저에서 접속**
`http://localhost:3000` 접속

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 4.5
- **Styling**: CSS3 (Glassmorphism, CSS Grid, Flexbox)
- **HTTP Client**: Axios
- **AI API**: OpenAI GPT-3.5-turbo
- **Deployment**: Vercel (권장)

## 📱 사용법

1. **검색창에 유명인 이름 입력**
   - 예: 알베르트 아인슈타인, 마리 퀴리, 스티브 잡스
2. **"🔍 검색" 버튼 클릭**
3. **AI가 분석한 상세 정보 확인**
4. **"✨ 새로 검색" 버튼으로 새로운 검색**

## 🔧 환경 설정

### API 키 설정

**⚠️ 중요**: API 키는 절대 코드에 직접 입력하지 마세요!

#### 로컬 개발 환경

프로젝트 루트에 `.env` 파일을 생성하고:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**보안 주의사항**:
- `.env` 파일은 절대 Git에 커밋하지 마세요
- `.gitignore`에 이미 `.env` 파일이 포함되어 있습니다
- API 키는 로컬에서만 사용하고 공개하지 마세요

#### Vercel 배포 환경

Vercel 대시보드에서 환경 변수를 설정하세요:

1. **Project Settings** → **Environment Variables** 클릭
2. **Add New** 클릭
3. **Key**: `VITE_OPENAI_API_KEY`
4. **Value**: `your_openai_api_key_here`
5. **Environment**: Production, Preview, Development 모두 선택
6. **Save** 클릭

#### 코드에서 사용

`famousPersonService.ts`에서 자동으로 환경 변수를 사용합니다:

```typescript
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
```

## 📦 빌드

### 개발 빌드
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 미리보기
```bash
npm run preview
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 🎨 UI 특징

- **Glassmorphism 디자인**: 반투명한 유리 효과와 backdrop-filter
- **그라데이션 배경**: 시각적으로 매력적인 색상 조합
- **반응형 레이아웃**: CSS Grid와 Flexbox를 활용한 최적화
- **애니메이션**: 부드러운 전환 효과와 로딩 스피너
- **접근성**: 키보드 네비게이션과 스크린 리더 지원
- **모바일 우선**: 모든 디바이스에서 최적화된 경험

## 🚀 배포하기

### Vercel을 통한 무료 배포 (추천)

#### 1단계: Vercel 프로젝트 생성
1. [vercel.com](https://vercel.com)에서 "New Project" 클릭
2. GitHub 저장소 연결 또는 코드 직접 업로드

#### 2단계: 환경 변수 설정
1. **Project Settings** → **Environment Variables** 클릭
2. **Add New** 클릭
3. **Key**: `VITE_OPENAI_API_KEY`
4. **Value**: `your_openai_api_key_here`
5. **Environment**: Production, Preview, Development 모두 선택
6. **Save** 클릭

**보안 주의사항**: 
- 실제 API 키는 위의 `your_openai_api_key_here` 부분에 입력하세요
- API 키는 절대 공개 저장소에 커밋하지 마세요
- Vercel 환경 변수는 암호화되어 안전하게 저장됩니다
- **중요**: 이 문서에는 실제 API 키가 포함되어 있지 않습니다

#### 3단계: 자동 배포
- GitHub 연동 시: 코드 푸시 시 자동 배포
- 직접 업로드 시: 즉시 배포 완료

#### 4단계: 도메인 확인
- Vercel에서 제공하는 무료 도메인으로 접근 가능
- 커스텀 도메인 설정도 가능

### 대안 배포 방법

#### GitHub Pages
```bash
npm run build
# dist 폴더를 GitHub Pages에 배포
```

#### Netlify
```bash
npm run build
# dist 폴더를 Netlify에 드래그 앤 드롭
```

## 🔒 보안 가이드

### API 키 보안
- **절대 코드에 직접 입력하지 마세요**
- **환경 변수만 사용하세요**
- **공개 저장소에 API 키를 커밋하지 마세요**
- **API 키는 정기적으로 순환하세요**
- **문서에 실제 키 값을 포함하지 마세요**

### 환경 변수 관리
- **로컬**: `.env` 파일 사용 (Git 제외)
- **배포**: Vercel 환경 변수 설정
- **팀 협업**: 각자 다른 API 키 사용

### 네트워크 보안
- **HTTPS**: 모든 배포 환경에서 HTTPS 사용
- **CORS**: 적절한 CORS 설정으로 보안 강화
- **Rate Limiting**: API 호출 제한으로 남용 방지

## 🧪 테스트

### 로컬 테스트
```bash
npm run dev
# 브라우저에서 http://localhost:3000 접속
```

### 빌드 테스트
```bash
npm run build
npm run preview
# http://localhost:4173 접속
```

## 📊 성능 최적화

- **Code Splitting**: Vite의 자동 코드 분할
- **Tree Shaking**: 사용하지 않는 코드 제거
- **Lazy Loading**: 필요시에만 컴포넌트 로드
- **Image Optimization**: 최적화된 이미지 로딩
- **Caching**: 브라우저 캐싱 최적화

## 🐛 문제 해결

### 일반적인 문제

1. **API 키 오류**
   - 환경 변수가 올바르게 설정되었는지 확인
   - `.env` 파일이 프로젝트 루트에 있는지 확인

2. **빌드 오류**
   - Node.js 버전이 16.0.0 이상인지 확인
   - `npm install` 재실행

3. **배포 오류**
   - Vercel 환경 변수 설정 확인
   - 빌드 로그 확인

## 📄 라이선스

MIT License

## 🤝 기여하기

버그 리포트나 기능 제안은 언제든 환영합니다!

### 기여 방법
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

문제가 발생하거나 질문이 있으시면:
- GitHub Issues 생성
- 프로젝트 문서 확인
- 커뮤니티 포럼 참여

---

**🌟 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

