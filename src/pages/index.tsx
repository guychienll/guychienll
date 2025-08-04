import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Avatar from "../components/Avatar";
import Block from "../components/Block";
import NavigationBar from "../components/NavigationBar";
import NoteItem from "../components/NoteItem";
import PlayingNow from "../components/PlayingNow";
import ProjectItem from "../components/ProjectItem";
import TopTracks from "../components/TopTracks";
import { NOTES, PROJECTS, SKILLS, SOCIAL_LINKS } from "../constants";
import "./index.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="home-page">
      <Layout title="Home" description={siteConfig.tagline}>
        <main className="grid lg:h-screen mx-auto w-full max-w-[1024px] lg:place-items-center">
          <div className="grid lg:grid-cols-12 grid-cols-12 lg:grid-rows-13 gap-4 lg:h-[70dvh] min-h-[850px] w-full p-4">
            <NavigationBar />
            <section className="lg:col-span-4 col-span-12 lg:row-span-12 rounded-lg flex flex-col items-center p-2 h-fit">
              <Avatar isFlipped={isFlipped} onFlip={setIsFlipped} />
              <motion.div className="flex flex-col items-center gap-y-4 py-4">
                <Block id="name" align="center">
                  <motion.div className="flex flex-col items-center text-gray-100 font-bold text-xl tracking-wider">
                    Guy C.
                  </motion.div>
                </Block>

                <Block id="about-me" align="left">
                  我是 Guy，是一名軟體工程師，熱愛分享所見所學，擁有近 6 年的
                  React 經驗，前端效能改善經驗，並協助團隊建立設計系統和透過
                  OpenAPI JSON Schema
                  實現前後端介面統一等，來減少團隊成員之間的溝通障礙，促進團隊效率。如需任何合作邀約、回饋，可以透過{" "}
                  <motion.a href="mailto:guychienll@gmail.com">信箱</motion.a>{" "}
                  或是下方社群連結連絡我。
                </Block>

                <Block
                  id="skills"
                  title="Skills"
                  align="left"
                  contentClassName="grid grid-cols-5 gap-4 w-full"
                >
                  {SKILLS.map((skill) => (
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
                  ))}
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
              </motion.div>
            </section>

            {/* notes */}
            {!isFlipped && (
              <section
                className={clsx(
                  "lg:col-span-5 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center h-fit"
                )}
              >
                <Block
                  id="notes"
                  title="Notes"
                  contentClassName="flex flex-col lg:gap-y-4 w-full gap-2"
                  className="h-full"
                >
                  {NOTES.map((note, index) => (
                    <NoteItem key={index} note={note} />
                  ))}
                </Block>
              </section>
            )}

            {/* portfolios */}
            {!isFlipped && (
              <section
                className={clsx(
                  "lg:col-span-3 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center h-fit"
                )}
              >
                <Block
                  id="portfolios"
                  title="Portfolios"
                  contentClassName="lg:flex lg:flex-col lg:gap-y-4 w-full grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2"
                  className="h-full"
                >
                  {PROJECTS.slice(0, 5).map((project) => (
                    <ProjectItem
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      imageClassName={project.imageClassName}
                    />
                  ))}
                </Block>
              </section>
            )}

            {isFlipped && (
              <section
                className={clsx(
                  "lg:col-span-5 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center h-fit gap-y-4"
                )}
              >
                <Block
                  id="top-tracks"
                  title="Top Tracks"
                  contentClassName="w-full"
                >
                  <TopTracks />
                </Block>
                <Block
                  id="playing-now"
                  title="Playing Now"
                  contentClassName="w-full"
                >
                  <PlayingNow />
                </Block>
              </section>
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
}
