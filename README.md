# [iPortfolio Homepage](https://iportfolio.co.kr/)

회사 홈페이지 소스 코드 저장소입니다.

## Branches

development - Contains the source code.\
master - Contains the static files after gatsby build. Used to make it into github page.

## Scripts

### `npm start`

Runs the website in the development mode.\
Open [http://localhost:7001](http://localhost:7001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `public` folder.

### `npm run deploy`

Builds the app and deploys to master branch in ipf-dev/ipf-homepage-new repository.

### `npm run clean`

Gatsby cache clean script.
(locales 폴더 내 변경사항이 있을때 사용)

#### Before deployment, do the following

1. Update siteUrl in gatsby-config.js. This is the cname.
2. Update og:url and og:image in pages/index.tsx to match the cname.

## Folder Structure

```bash
src
├── api                 # api calls to get news and jobs data from culture.iportfolio.co.kr
├── assets
│   ├──files                # files to download onClick
│   └──images               # images organized based on pages
├── components          # all presentational components
├── containers          # container components that handles React states
├── layouts
│   ├──Typography           # function that returns css based on typography type
│   ├──colors               # stores colors
│   └──responsive           # conditions for tablet, desktop and high resolution
├── locales             # translations based on each language
│   ├──ko
│   └──en
├── pages               # import sections to create gatsby pages (folder name == path name)
└── sections            # imports components and containers to create sections of each page
static              # image used for open graph protocol
└──og.png
```

## Trouble Shooting

### 배포 명령어 실행시 인증 에러(403) 발생 (macOS 환경)

gh-pages 명령어 실행시 Credential 정보를 macOS Keychain에 저장하고 참조합니다. 인증에 실패하고 있거나, 인증 과정에서 다른 계정 정보로 인증을 했다면 기존 정보를 초기화해서 재시도할 수 있습니다.

- 참고: [Updating credentials from the macOS Keychain
  ](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)
