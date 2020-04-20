# 버킷플레이스(오늘의집) 과제: 사진 피드 만들기

이 프로젝트는 버킷플레이스(오늘의집) 과제입니다.

![](/images/card_list.jpg)

## 기술 스택

이 프로젝트에 사용된 기술은 다음과 같습니다.

- Language: [TypeScript](https://github.com/microsoft/TypeScript)
- Library: [react](https://github.com/facebook/react/), [redux](https://github.com/reduxjs/redux), [redux-saga](https://github.com/redux-saga/redux-saga), [axios](https://github.com/axios/axios), [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
- Styling: [styled-components](https://github.com/styled-components/styled-components)
- Project Setup: [Create React App](https://github.com/facebook/create-react-app)

## 프로젝트 시연

- Production: [https://ohouse-frontend-homework.now.sh/](https://ohouse-frontend-homework.now.sh/)
- Development: 프로젝트 디렉터리에서 `yarn start` 명령어 실행 후 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 요구사항

### 디자인

[디자인 가이드](https://zpl.io/bzN4xWM)에 부합하는 웹 PC 화면 구현

- ID: developer@bucketplace.net
- PW: helloBucket!

### 백로그

- 사진 리스트
  - 다음 URL을 통해 받아온 사진 리스트 정보를 보여주도록 구현
  ```
  https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_1.json
  https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_2.json
  ... 계속
  ```
  - JSON 스키마
  ```
  [
    {
      id: number,
      image_url: string,
      nickname: string,
      profile_image_url: string
    },
    ...
  ]
  ```
  - 무한 스크롤(스크롤에 따라 다음 페이지 정보 요청)으로 구현
  - 빈 값이 나올떄까지 지속적으로 Ajax 요청하도록 구현
- 스크랩 기능
  - 스크랩 버튼 클릭 시 `localStorage`를 이용하여 스크랩한 사진 정보 저장/삭제하도록 구현
  - 스크랩이 된 경우 스크랩 버튼이 파란색으로, 스크랩이 되지 않은 경우에는 스크랩 버튼이 하얀색으로 변하도록 구현
  - 새로고침 시 스크랩된 사진의 경우 스크랩된 상태로 표시되어 있도록 구현
- 필터 기능
  - 스크랩한 것만 모아보기 필터 사용 시 스크랩된 사진만 불러오도록 구현

### 선택사항

- 스크랩/스크랩 취소 시 사용자와의 인터랙션
