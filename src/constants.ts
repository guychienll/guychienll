import notes from "../notes/feed.json";

enum ProjectCategory {
  ALL = "all",
  WEBSITE = "website",
  APP = "app",
  TOOL = "tool",
}

const SOCIAL_LINKS = [
  {
    title: "github",
    icon: "fa-brands fa-github text-2xl",
    url: "https://github.com/guychienll",
  },
  {
    title: "linkedin",
    icon: "fa-brands fa-linkedin text-2xl",
    url: "https://www.linkedin.com/in/guy-chien-0566b61b9/",
  },
  {
    title: "email",
    icon: "fa-regular fa-envelope text-2xl",
    url: "mailto:guychienll@gmail.com",
  },
  {
    title: "threads",
    icon: "fa-brands fa-threads text-2xl",
    url: "https://www.threads.net/@_chienli_",
  },
] as const;

const NOTES = Object.values(notes)
  .filter((note) => !note.draft)
  .map((note) => ({
    title: note.title,
    description: note.description,
    link: `/notes/${note.path}`,
    date: note.created,
  }))
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  .slice(0, 5);

const SKILLS = [
  {
    title: "vim",
    icon: "devicon-vim-plain text-2xl",
  },
  {
    title: "typescript",
    icon: "devicon-typescript-plain text-2xl",
  },
  {
    title: "react / react-native",
    icon: "devicon-react-original text-2xl",
  },
  {
    title: "sass",
    icon: "devicon-sass-original text-2xl",
  },
  {
    title: "tailwindcss",
    icon: "devicon-tailwindcss-plain text-2xl",
  },
  {
    title: "babel",
    icon: "devicon-babel-plain text-2xl",
  },
  {
    title: "postcss",
    icon: "devicon-postcss-plain text-2xl",
  },
  {
    title: "webpack",
    icon: "devicon-webpack-plain text-2xl",
  },
  {
    title: "storybook",
    icon: "devicon-storybook-plain text-2xl",
  },
  {
    title: "jest",
    icon: "devicon-jest-plain text-2xl",
  },
  {
    title: "playwright",
    icon: "devicon-playwright-plain text-2xl",
  },
  {
    title: "nodejs",
    icon: "devicon-nodejs-plain text-2xl",
  },
  {
    title: "git",
    icon: "devicon-git-plain text-2xl",
  },
  {
    title: "docker",
    icon: "devicon-docker-plain text-2xl",
  },
  {
    title: "github actions",
    icon: "devicon-github-original text-2xl",
  },
] as const;

const PROJECTS = [
  {
    title: "嘉禮富裕 | 嘉禮建設",
    description: "嘉禮富裕建案官網，提供建案介紹、規劃、諮詢表單。",
    image: "/img/media/chia-li-fu-yu-16-9.gif",
    link: "https://chia-li-fu-yu.vercel.app/",
    created: "2023-10-30",
    imageClassName: "bg-[#ffffff]",
    categories: [
      ProjectCategory.ALL,
      ProjectCategory.WEBSITE,
      ProjectCategory.TOOL,
    ],
  },
  {
    title: "葛林美斯家具 | Glimax",
    description:
      "葛林美斯家具品牌官網，全站包含搜尋、產品列表篩選分頁，並提供顧客線上諮詢表單寄送",
    image: "/img/media/glimax-16-9.png",
    link: "https://oa7-11.web.app/",
    created: "2022-07-02",
    imageClassName: "bg-[#ffffff] p-4",
    categories: [ProjectCategory.ALL, ProjectCategory.WEBSITE],
  },
  {
    title: "fake line message generator",
    description: "生成假 Line 訊息，協助行銷人員推廣產品。",
    image: "/img/media/flmg-16-9.gif",
    link: "/portfolio/flmg",
    created: "2024-02-15",
    imageClassName: "bg-[#ffffff]",
    categories: [
      ProjectCategory.ALL,
      ProjectCategory.WEBSITE,
      ProjectCategory.TOOL,
    ],
  },
  {
    title: "Pull Request Platform",
    description:
      "Pull Request 平台，協助團隊成員管理跨 Repository Pull Request",
    image: "/img/media/prp-16-9.gif",
    link: "/portfolio/prp",
    created: "2024-10-11",
    imageClassName: "bg-[#ffffff] p-2",
    categories: [
      ProjectCategory.ALL,
      ProjectCategory.WEBSITE,
      ProjectCategory.TOOL,
    ],
  },
  {
    title: ".vim",
    description: "個人 Vim 配置，包含 Vim 生態系 plugins / 自訂快捷鍵",
    image: "/img/media/vim-16-9.png",
    link: "https://github.com/guychienll/.vim",
    created: "2020-12-18",
    imageClassName: "bg-[#ffffff]",
    categories: [ProjectCategory.ALL, ProjectCategory.TOOL],
  },
  {
    title: "幫農事 | ifarmer",
    description: "為直接跟農夫買內部運作管理系統，便於農夫管理訂單、產品、物流",
    image: "/img/media/ifarmer-16-9.jpg",
    link: "https://apps.apple.com/tw/app/%E5%B9%AB%E8%BE%B2%E4%BA%8B/id1607435148",
    created: "2020-02-14",
    imageClassName: "bg-[#ffffff]",
    categories: [ProjectCategory.ALL, ProjectCategory.APP],
  },
].sort((a, b) => {
  return new Date(b.created).getTime() - new Date(a.created).getTime();
});

export { NOTES, ProjectCategory, PROJECTS, SKILLS, SOCIAL_LINKS };

