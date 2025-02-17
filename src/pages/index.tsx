import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import Block from "../components/Block";
import ProjectItem from "../components/ProjectItem";
import { POSTS, PROJECTS, SKILLS, SOCIAL_LINKS } from "../constants";
import "./index.css";

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
                {PROJECTS.slice(0, 5).map((project) => {
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
              <motion.div
                className="flex self-end mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.a
                  href="/portfolio"
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
          </div>
        </main>
      </Layout>
    </div>
  );
}
