# iPortfolio Homepage

회사 홈페이지 소스 코드 저장소입니다.

## Scripts

### `npm start`

Runs the website in the development mode.\
Open [http://localhost:7001](http://localhost:7001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `public` folder.\

### `npm run deploy`

Builds the app and deploys to gh-pages branch.\

**Before deployment, do the following**

1. Update siteUrl in gatsby-config.js. This is the cname.
2. Update og:url and og:image in pages/index.tsx to match the cname.

## Folder Structure

```
src
└── api                   # api calls to get news and jobs data from culture.iportfolio.co.kr
    └
    assets
    └──files              # files to download onClick
    └──images             # images organized based on pages
        └──About
        └──Career
        ...
    components            # all presentational components
    └
    containers            # container components that handles React states
    └
    layouts
    └──Typography            # function that returns css based on typography type
    └──colors                # stores colors
    └──responsive            # conditions for tablet, desktop and high resolution
    locales            # translations based on each language
    └──ko
    └──en
    pages            # import sections to create gatsby pages (folder name == path name)
    └──career
        └──job
    └──about
    ...
    sections            # imports components and containers to create sections of each page
    └──About
    └──Career
static            # image used for open graph protocol
└──og.png
```
