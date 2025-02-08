import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import "./index.css";

function UnderConstructionSign() {
  return (
    <motion.div className="flex flex-col items-center gap-y-2 animate-pulse">
      <motion.i
        title="working in progress"
        className="fa-solid fa-paint-roller text-4xl cursor-pointer"
        whileHover={{
          opacity: 0.6,
          scale: 1.2,
          rotate: 45,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
      <motion.div className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest">
        work in progress
      </motion.div>
    </motion.div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const onClickSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="home-page">
      <Layout title="Home" description={siteConfig.tagline}>
        <main className="grid lg:h-screen mx-auto w-full max-w-[1024px] lg:place-items-center">
          <div className="grid lg:grid-cols-12 grid-cols-12 lg:grid-rows-13 gap-4 lg:h-[70dvh] w-full p-4">
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
              <motion.div className="avatar">
                <motion.img
                  width={200}
                  height={200}
                  src="/img/media/avatar.jpeg"
                  alt="avatar"
                  className="object-cover rounded-full ring-6 ring-[#101010]"
                />
              </motion.div>
              <motion.div
                className="self-introduction flex flex-col items-center gap-y-4 py-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div className="flex flex-col items-center text-gray-100 font-bold text-xl tracking-wider">
                  Guy C.
                </motion.div>

                <motion.div
                  className="w-full about-me"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    About Me
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-200 text-left indent-4"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    我是 Guy，是一名軟體工程師，熱愛分享所見所學，擁有近 5 年的 
                    React 經驗，前端效能改善經驗，並協助團隊建立設計系統和 OpenAPI Schema Type Generator 等...，來減少團隊成員之間的溝通障礙，目前於{" "}
                    <motion.a href="https://www.linkedin.com/company/rezio-io/posts/?feedView=all">
                      rezio
                    </motion.a>{" "}
                    擔任資深前端工程師。任何合作機會歡迎{" "}
                    <motion.a href="mailto:guychienll@gmail.com">信箱</motion.a>{" "}
                    連絡我。
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Skills
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-5 gap-4 text-gray-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="vim"
                        className="devicon-vim-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="typescript"
                        className="devicon-typescript-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="react / react-native"
                        className="devicon-react-original text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="sass"
                        className="devicon-sass-original text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="tailwindcss"
                        className="devicon-tailwindcss-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="babel"
                        className="devicon-babel-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="postcss"
                        className="devicon-postcss-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="webpack"
                        className="devicon-webpack-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="storybook"
                        className="devicon-storybook-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="jest"
                        className="devicon-jest-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="playwright"
                        className="devicon-playwright-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="nodejs"
                        className="devicon-nodejs-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="git"
                        className="devicon-git-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="docker"
                        className="devicon-docker-plain text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.i
                        title="github actions"
                        className="devicon-github-original text-2xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full social-links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Contact Me
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-5 gap-4 text-gray-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div
                      className="cursor-pointer flex items-center justify-center"
                      onClick={() =>
                        onClickSocialLink("https://github.com/guychienll")
                      }
                    >
                      <motion.i
                        title="github"
                        className="devicon-github-original text-4xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                    <motion.div
                      className="cursor-pointer flex items-center justify-center"
                      onClick={() =>
                        onClickSocialLink(
                          "https://www.linkedin.com/in/guy-chien-0566b61b9/"
                        )
                      }
                    >
                      <motion.i
                        title="linkedin"
                        className="devicon-linkedin-plain text-4xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                    <motion.div
                      className="cursor-pointer flex items-center justify-center"
                      onClick={() =>
                        onClickSocialLink("mailto:guychienll@gmail.com")
                      }
                    >
                      <motion.i
                        title="email"
                        className="fa-regular fa-envelope text-4xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                    <motion.div
                      className="cursor-pointer flex items-center justify-center"
                      onClick={() =>
                        onClickSocialLink("https://www.threads.net/@_chienli_")
                      }
                    >
                      <motion.i
                        title="threads"
                        className="fa-brands fa-threads text-4xl"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full playing-now"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Playing Now
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.a href="https://open.spotify.com/user/11133280780">
                      <motion.img
                        whileHover={{ opacity: 0.6 }}
                        src="https://guychienll.vercel.app/api/spotify"
                        alt="Spotify"
                        className="w-full"
                      />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </section>
            <section className="lg:col-span-5 col-span-12 lg:row-span-12 rounded-lg p-2 flex items-center justify-center">
              <UnderConstructionSign />
            </section>
            <section className="lg:col-span-3 col-span-12 lg:row-span-12 rounded-lg p-2 flex items-center justify-center">
              <UnderConstructionSign />
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
