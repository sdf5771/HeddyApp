# HeddyApp

<img width="900" alt="스크린샷 2025-05-07 오전 9 13 44" src="https://github.com/user-attachments/assets/82ae4aba-d98a-40dc-a104-b321650c8527" />


HeddyApp은 React Native 기반의 모바일 애플리케이션입니다.  
다양한 건강 관리, 기록, 사용자 정보 관리 기능을 제공합니다.

## 주요 기능

- 사용자 회원가입 및 로그인
- 건강 기록 및 리포트
- 반려동물 등록 및 관리
- 마케팅 정보 수신 동의, 위치 기반 서비스 동의 등 다양한 약관 관리
- 마이페이지, 비밀번호 찾기, 정보 수정 등

## 폴더 구조
```
src/
components/ # UI 컴포넌트 (Atoms, Molecules, organisms, templates, BottomSheet, Screen 등)
hooks/ # 커스텀 훅
navigator/ # 네비게이션 관련 코드
queries/ # 서버 통신 및 쿼리 관리
stores/ # 상태 관리 (Recoil 등)
types/ # 타입 정의
assets/ # 이미지, 폰트 등 정적 리소스
```


## 주요 화면

- `LoginScreen`: 로그인
- `MyPageScreen`: 마이페이지
- `RecordScreen`: 건강 기록
- `HealthReportScreen`: 건강 리포트
- `RegistUserInformationScreen`: 사용자 정보 등록
- `RegistPetScreen`: 반려동물 등록
- `ConsentToReceiveMarketingInformationScreen`: 마케팅 정보 수신 동의
- `LocationBasedServiceConsentScreen`: 위치 기반 서비스 동의
- `TermOfServiceScreen`: 서비스 이용약관
- `PersonalInformationTermScreen`: 개인정보 처리방침
- `ServiceWithdrawal*Screen`: 서비스 탈퇴 관련 화면
- `FindPassword*Screen`: 비밀번호 찾기 관련 화면

## 사용 기술

- React Native 0.75.3
- React 18.3.1
- TypeScript
- Recoil (상태 관리)
- React Navigation (화면 이동)
- React Query (서버 상태 관리)
- Lottie, react-native-svg 등 다양한 UI 라이브러리

## 설치 및 실행

> **사전 준비:** [React Native 환경설정](https://reactnative.dev/docs/environment-setup)을 완료하세요.

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. Metro 서버 실행

```bash
npm start
# 또는
yarn start
```

### 3. 앱 실행

#### Android

```bash
npm run android
# 또는
yarn android
```

#### iOS

```bash
npm run ios
# 또는
yarn ios
```

## 기타 참고

- [React Native 공식 문서](https://reactnative.dev/)
- [문제 해결 가이드](https://reactnative.dev/docs/troubleshooting)
