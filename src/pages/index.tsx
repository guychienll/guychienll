import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import Block from "../components/Block";
import "./index.css";
import clsx from "clsx";

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

const POSTS = [
  {
    title: "Vim Basics",
    description: "Vim 基礎筆記 / 模式切換 / 記憶詞 / Text Object",
    link: "/notes/vim",
    date: "2024-04-08",
  },
  {
    title: "VSCode 配置推薦",
    description:
      "VSCode 配置推薦，包含 Vim 生態系 plugins / VSCode 設定 / 自訂快捷鍵",
    link: "/notes/vim/vscode",
    date: "2024-04-08",
  },
  {
    title: "JetBrains 配置推薦",
    description:
      "JetBrains 系列 IDE 配置推薦，包含 vim 生態系 plugins / 自訂快捷鍵",
    link: "/notes/vim/jetbrains",
    date: "2024-04-08",
  },
  {
    title: "Webpack Tree Shaking",
    description:
      "使用簡易程式碼解釋 webpack 如何達成 Tree Shaking，並且介紹 Tree Shaking 的必備條件，以及如何撰寫 best practices 以輕鬆達成 Tree Shaking",
    link: "/notes/webpack/tree-shaking",
    date: "2023-11-09",
  },
  {
    title: "Webpack Loaders 與 Plugins",
    description:
      "Webpack 常用 loaders 與 plugins 使用方式介紹，及其適用場景與注意細節。",
    link: "/notes/webpack/loaders",
    date: "2023-12-10",
  },
]
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

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  imageClassName?: string;
}

function ProjectItem({
  title,
  description,
  image,
  link,
  imageClassName,
}: ProjectItemProps) {
  const onClickProjectItem = () => {
    if (link.startsWith("/portfolio/")) {
      window.location.href = link;
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      title={`${title} - ${description}`}
      className={clsx(
        "relative w-full aspect-[16/9] clip-path-inset-0-round-8px rounded-lg overflow-hidden box-border group cursor-pointer bg-contain bg-center bg-no-repeat bg-white"
      )}
      style={{
        backgroundImage: `url(${image})`,
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      onClick={onClickProjectItem}
    >
      <motion.div className="absolute inset-0 backdrop-blur-sm rounded-lg bg-black/30 opacity-0 group-hover:opacity-100 active:opacity-100 transition-all duration-300 flex items-center justify-center">
        <motion.div className="flex flex-col items-center">
          <motion.div className="text-white text-center px-4 font-zen-maru-gothic">
            {title}
          </motion.div>
          <motion.div className="text-white text-center px-4 font-zen-maru-gothic line-clamp-2 select-none">
            {description}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const PROJECTS = [
  {
    title: "嘉禮富裕 | 嘉禮建設",
    description: "嘉禮富裕建案官網，提供建案介紹、規劃、諮詢表單。",
    image: "/img/media/chia-li-fu-yu-16-9.gif",
    link: "https://chia-li-fu-yu.vercel.app/",
    created: "2023-10-30",
    imageClassName: "bg-[#ffffff]",
  },
  {
    title: "葛林美斯家具 | Glimax",
    description:
      "葛林美斯家具品牌官網，全站包含搜尋、產品列表篩選分頁，並提供顧客線上諮詢表單寄送",
    image: "/img/media/glimax-16-9.png",
    link: "https://oa7-11.web.app/",
    created: "2022-07-02",
    imageClassName: "bg-[#ffffff] p-4",
  },
  {
    title: "fake line message generator",
    description: "生成假 Line 訊息，協助行銷人員推廣產品。",
    image: "/img/media/flmg-16-9.gif",
    link: "/portfolio/flmg",
    created: "2024-02-15",
    imageClassName: "bg-[#ffffff]",
  },
  {
    title: "Pull Request Platform",
    description:
      "Pull Request 平台，協助團隊成員管理跨 Repository Pull Request",
    image: "/img/media/prp-16-9.gif",
    link: "https://pr.guychienll.dev",
    created: "2024-10-11",
    imageClassName: "bg-[#ffffff] p-2",
  },
  {
    title: ".vim",
    description: "個人 Vim 配置，包含 Vim 生態系 plugins / 自訂快捷鍵",
    image: "/img/media/vim-16-9.png",
    link: "https://github.com/guychienll/.vim",
    created: "2020-12-18",
    imageClassName: "bg-[#ffffff]",
  },
  {
    title: "幫農事 | ifarmer",
    description: "為直接跟農夫買內部運作管理系統，便於農夫管理訂單、產品、物流",
    image: "/img/media/ifarmer-16-9.jpg",
    link: "https://apps.apple.com/tw/app/%E5%B9%AB%E8%BE%B2%E4%BA%8B/id1607435148",
    created: "2020-02-14",
    imageClassName: "bg-[#ffffff]",
  },
]
  .sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  })
  .slice(0, 5);

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const onClickSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onClickPost = (link: string) => {
    window.location.href = link;
  };

  return (
    <div id="home-page">
      <Layout title="Home" description={siteConfig.tagline}>
        <main className="grid lg:h-screen mx-auto w-full max-w-[1024px] lg:place-items-center">
          <div className="grid lg:grid-cols-12 grid-cols-12 lg:grid-rows-13 gap-4 lg:h-[70dvh] min-h-[850px] w-full p-4">
            <section className="p-2 customize-navbar col-span-12 flex items-center justify-between row-span-1 flex-wrap">
              <div className="font-permanent-marker text-2xl tracking-[0.2em] uppercase">
                guychienll
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <a
                  href="/notes/category/vim"
                  className="text-xl font-bold font-sriracha tracking-widest capitalize"
                >
                  notes
                </a>
              </div>
            </section>
            <section className="lg:col-span-4 col-span-12 lg:row-span-12 rounded-lg flex flex-col items-center p-2">
              <Block id="avatar" align="center">
                <motion.img
                  width={200}
                  height={200}
                  src="/img/media/avatar.jpeg"
                  alt="avatar"
                  className="object-cover rounded-full ring-6 ring-[#101010]"
                />
              </Block>
              <motion.div className="flex flex-col items-center gap-y-4 py-4">
                <Block id="name" align="center">
                  <motion.div className="flex flex-col items-center text-gray-100 font-bold text-xl tracking-wider">
                    Guy C.
                  </motion.div>
                </Block>

                <Block id="about-me" align="left">
                  我是 Guy，是一名軟體工程師，熱愛分享所見所學，擁有近 5 年的
                  React 經驗，前端效能改善經驗，並協助團隊建立設計系統和 OpenAPI
                  Schema Type Generator
                  等...，來減少團隊成員之間的溝通障礙，目前於{" "}
                  <motion.a href="https://www.linkedin.com/company/rezio-io/posts/?feedView=all">
                    rezio
                  </motion.a>{" "}
                  擔任資深前端工程師。任何合作機會歡迎{" "}
                  <motion.a href="mailto:guychienll@gmail.com">信箱</motion.a>{" "}
                  連絡我。
                </Block>

                <Block
                  id="skills"
                  title="Skills"
                  align="left"
                  contentClassName="grid grid-cols-5 gap-4 w-full"
                >
                  {SKILLS.map((skill) => {
                    return (
                      <div
                        key={skill.title}
                        className="flex items-center justify-center"
                      >
                        <motion.i
                          title={skill.title}
                          className={skill.icon}
                          whileHover={{ opacity: 0.6 }}
                        />
                      </div>
                    );
                  })}
                </Block>

                <Block
                  id="contact-me"
                  title="Contact Me"
                  align="left"
                  contentClassName="grid grid-cols-5 gap-4 text-gray-200 w-full"
                >
                  {SOCIAL_LINKS.map((link) => (
                    <motion.div
                      key={link.title}
                      className="cursor-pointer flex items-center justify-center"
                      onClick={() => onClickSocialLink(link.url)}
                    >
                      <motion.i
                        title={link.title}
                        className={link.icon}
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                  ))}
                </Block>

                <Block
                  id="playing-now"
                  title="Playing Now"
                  contentClassName="w-full"
                >
                  <motion.a href="https://open.spotify.com/user/11133280780">
                    <motion.div className="relative">
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-[#101010] to-[#202020] animate-pulse rounded-lg w-full aspect-[720/200]" />
                      <motion.img
                        width={200}
                        height={200}
                        whileHover={{ opacity: 0.6 }}
                        src="https://guychienll.vercel.app/api/spotify"
                        alt="Spotify"
                        className="w-full relative z-10"
                        onLoad={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.previousElementSibling?.classList.add(
                            "hidden"
                          );
                        }}
                      />
                    </motion.div>
                  </motion.a>
                </Block>
              </motion.div>
            </section>
            <section className="lg:col-span-5 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center">
              <Block
                id="posts"
                title="Posts"
                contentClassName="flex flex-col gap-y-2 w-full"
                className="h-full"
              >
                {POSTS.map((post) => {
                  return (
                    <motion.div
                      key={post.title}
                      className="flex flex-col p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300 cursor-pointer h-[130px]"
                      onClick={() => {
                        onClickPost(post.link);
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.1,
                        },
                      }}
                    >
                      <motion.div className="text-md text-gray-400 mb-2 font-bold">
                        {post.title}
                      </motion.div>
                      <motion.div className="text-sm text-gray-400 mb-2 line-clamp-2">
                        {post.description}
                      </motion.div>
                      <div className="flex-1" />
                      <motion.div className="text-xs text-gray-500 text-right">
                        {post.date}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </Block>
              <motion.div
                className="flex self-end mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.a
                  href="/notes/category/vim"
                  className="text-gray-400 hover:text-gray-200 text-sm font-sriracha tracking-widest"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  see more
                </motion.a>
              </motion.div>
            </section>
            <section className="lg:col-span-3 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center">
              <Block
                id="portfolio"
                title="Portfolio"
                contentClassName="lg:flex lg:flex-col lg:gap-y-2 w-full grid sm:grid-cols-3 grid-cols-2 gap-2"
                className="h-full"
              >
                {PROJECTS.map((project) => {
                  return (
                    <ProjectItem
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      imageClassName={project.imageClassName}
                    />
                  );
                })}
              </Block>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
