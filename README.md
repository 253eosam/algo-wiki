# 📚 algo-wiki

> 알고리즘과 자료구조에 대한 내용을 정리하고, 다양한 문제풀이를 기록하는 VitePress 기반 위키입니다.

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)
![VitePress](https://img.shields.io/badge/VitePress-Framework-blue)
![License](https://img.shields.io/github/license/253eosam/algo-wiki)

## 🚀 프로젝트 소개

**algo-wiki**는 다음과 같은 내용을 담고 있습니다.

- 주요 **자료구조 및 알고리즘 이론 정리**
- **LeetCode, Codility, 백준, 프로그래머스** 등의 문제풀이 모음
- 커스텀 문제 폴더 지원

문서 기반으로 쉽게 찾아볼 수 있도록 **VitePress**를 사용하여 구축했습니다.

👉 **배포 URL:**  
[https://253eosam.github.io/algo-wiki/](https://253eosam.github.io/algo-wiki/)

---

## 📂 프로젝트 구조

```bash
├── docs
│   └── .vitepress
│       └── config.js        # VitePress 설정 파일
│
│   └── theory               # 이론 관련 문서
│       └── data-structure   # 자료구조
│       └── algorithm        # 알고리즘
│
│   └── problems             # 문제풀이 폴더
│       └── leetcode
│       └── codility
│       └── baekjoon
│       └── programmers
│       └── custom
│
├── .github
│   └── workflows
│       └── deploy.yml       # GitHub Actions 배포 설정
│
├── package.json
└── README.md
```

---

## 🛠️ 사용 기술

- **VitePress**
- **GitHub Actions** (자동 배포)
- **GitHub Pages**

---

## 📄 주요 기능

- **사이드바 & 네비게이션 구조화:**  
  빠른 접근을 위한 이론, 문제별 카테고리 구성
- **다양한 알고리즘 문제풀이:**  
  LeetCode, Codility, 백준, 프로그래머스 등
- **자동 배포 파이프라인:**  
  `master` 브랜치 푸시 시 GitHub Pages에 자동 배포

---

## 🏗️ 로컬에서 실행하는 방법

```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 실행
npm run docs:dev

# 3. 빌드
npm run docs:build
```

빌드 결과물은 `docs/.vitepress/dist` 폴더에 생성됩니다.

---

## 🚀 GitHub Pages 배포 방법

`master` 브랜치에 커밋 후 푸시하면, **GitHub Actions**를 통해 자동으로 `gh-pages` 브랜치에 배포됩니다.

배포 관련 설정은 `.github/workflows/deploy.yml` 에서 확인할 수 있습니다.

---

## 🔗 주요 링크

- **배포된 사이트:** [algo-wiki 바로가기](https://253eosam.github.io/algo-wiki/)
- **VitePress 공식 문서:** [VitePress Docs](https://vitepress.dev/)
- **레포지토리:** [GitHub Repo](https://github.com/253eosam/algo-wiki)

---

## 📜 라이선스

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
