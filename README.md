# Open Plans Work Project

이 프로젝트는 **Next.js 16**과 **TurboRepo**를 기반으로 한 모노레포 프로젝트입니다.
사진 조회 웹 애플리케이션(`apps/web`)과 UI 컴포넌트 문서화 도구(`apps/storybook`), 그리고 공유 패키지(`packages`)로 구성되어 있습니다.

## 📂 프로젝트 구조 (Monorepo)

```bash
.
├── apps
│   ├── web        # 메인 웹 애플리케이션 (Next.js 16)
│   └── storybook  # UI 컴포넌트 스토리북 (Vite)
└── packages
    ├── ui                 # 공통 UI 컴포넌트 라이브러리
    ├── eslint-config      # ESLint 공통 설정
    └── typescript-config  # TypeScript 공통 설정
```

## 🚀 시작하기 (Getting Started)

### 사전 요구사항

- Node.js 18 이상
- pnpm 9.0.0 (권장)

### 설치 및 실행

1. **의존성 설치**

   ```bash
   pnpm install
   ```

2. **개발 서버 실행 (전체 워크스페이스)**

   ```bash
   pnpm run dev
   ```

   - Web: [http://localhost:3000](http://localhost:3000)
   - Storybook: [http://localhost:6006](http://localhost:6006)

3. **빌드**
   ```bash
   pnpm run build
   ```

---

## 🛠 기술 스택 (Tech Stack)

### Core

- **Framework:** Next.js 16.1.0 (App Router)
- **Library:** React 19.2.0
- **Language:** TypeScript 5.9
- **Build System:** TurboRepo

### State Management & Data Fetching

- **Client State:** Zustand v5 (with Persist Middleware)
- **Server State:** TanStack Query v5
- **Data Fetching:** Next.js Server Actions

### Styling

- **CSS Framework:** Tailwind CSS v4
- **Font:** Pretendard (CDN)

### Tooling

- **Package Manager:** pnpm
- **Documentation:** Storybook 8+ (Vite Builder)

---

## 💻 Web Application (@apps/web)

Unsplash(Picsum) API를 활용하여 랜덤 사진 정보를 조회하고 보여주는 애플리케이션입니다.

### 주요 기능 및 특징

1.  **Server Actions & SSR**
    - `fetch` API(`cache: 'no-store'`)와 Server Actions를 활용하여 최신 데이터를 서버 사이드에서 조회합니다.
    - `force-dynamic` 설정을 통해 항상 최신 데이터를 보장하며, 빌드 타임 에러를 방지하기 위한 Graceful Error Handling이 적용되어 있습니다.

2.  **상태 관리 (Zustand)**
    - **SSR Initializer Pattern**: 서버에서 받아온 초기 데이터를 클라이언트 스토어에 주입하여 Hydration Mismatch 없이 상태를 초기화합니다.
    - **Persistence**: `persist` 미들웨어를 사용하여 새로고침 후에도 조회된 사진 데이터와 `isView` 상태가 유지됩니다.(localStorage에 저장됨)
    - **Context Provider Pattern**: 요청 간 데이터 격리 및 안전한 SSR 지원을 위해 Context API와 Zustand를 결합한 Provider 패턴을 사용할 수 있는 구조를 갖췄습니다.

3.  **성능 최적화 (Performance)**
    - **LCP (Largest Contentful Paint) 개선**: 배경 이미지를 CSS `background-image` 대신 `next/image`의 `priority` 속성을 사용하여 우선 로드되도록 최적화했습니다.
    - **Skeleton UI**: 데이터 로딩 중이나 초기 진입 시 스켈레톤 UI를 제공하여 CLS(Cumulative Layout Shift)를 방지하고 사용자 경험을 향상시켰습니다.

4.  **API 팩토리 패턴**
    - API 팩토리 패턴을 활용하여 API 호출 로직을 모듈화하고 재사용성을 높였습니다.
    - 확장에 유리한 구조를 채택했습니다.

### 폴더 구조 (FSD-lite Architecture)

유지보수성과 확장성을 고려하여 **Feature-Sliced Design(FSD)** 패턴을 경량화하여 적용했습니다.

- **`app/`**: Next.js App Router의 페이지 및 라우팅 진입점
- **`entities/`**: 비즈니스 도메인 로직 (Model, API, UI)
  - `home`: 메인 페이지 관련 로직
  - `photo`: 사진 조회 및 결과 페이지 관련 로직 (Store, Server Actions 포함)
- **`shared/`**: 전역적으로 사용되는 재사용 가능한 UI 컴포넌트 및 유틸리티
  - `ui`: Spinner, Header 등 공통 컴포넌트

---

## 📚 Storybook (@apps/storybook)

- `@repo/ui` 패키지의 공통 컴포넌트(Button 등)를 문서화하고 테스트합니다.
- Vite 빌더를 사용하여 빠른 미리보기를 제공하며, Next.js 환경에 맞춰 설정되어 있습니다.
- **경로**: `/apps/storybook/src/stories/Button.stories.ts` 등
