# 구조

@repo/ui : UI 컴포넌트 라이브러리
@apps/web : 웹 애플리케이션
@apps/storybook : 스토리북

## 서버 동작 방법

- 의존성 설치 : pnpm install
- 개발 서버 실행(모든 워크스페이스) : pnpm run dev
- 빌드(모든 워크스페이스) : pnpm run build

## 기술 스택

- 스타일라이브러리 : tailwindcss
- 프레임워크 : nextjs
- 상태관리 : zustand
- 데이터 상태관리 : tanstack query
- 모노레포 : turborepo
- 패키지매니저 : pnpm

## 스토리북

- 버튼의 상태값을 보여줍니다. /apps/storybook/src/stories/Button.stories.ts에 정의되어 있습니다.
- 패키지(@repo/ui)에서 생성한 UI컴포넌트를 확인할 수 있습니다.

## web

- 사진을 조회하는 웹 애플리케이션입니다.
- '다음'버튼을 클릭하면 api를 호출하고 응답을 받으면 '/result'페이지로 이동합니다.
- '/result'페이지에서는 사진 이미지와 정보를 확인할 수 있습니다.(출처 : picsum)
- api 응답을 통한 정보는 zustand를 사용하여 전역 상태를 관리합니다.
- 새로고침시 zustand의 persist 기능을 이용하여 데이터를 유지합니다.
- 존재하지 않는 페이지는 not-found.tsx 페이지로 이동합니다.
