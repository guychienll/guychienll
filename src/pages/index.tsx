import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import Avatar from "../components/Avatar";
import Block from "../components/Block";
import NavigationBar from "../components/NavigationBar";
import NoteItem from "../components/NoteItem";
import PlayingNow from "../components/PlayingNow";
import ProjectItem from "../components/ProjectItem";
import TopTracks from "../components/TopTracks";
import { NOTES, PROJECTS, SKILLS, SOCIAL_LINKS } from "../constants";
import "./index.css";
import { useSpotifyRefreshToken } from "../components/PlayingNow/hooks";

const HIGH_LITGHT_ITEM = [
  {
    type: "image",
    url: "/gallary/kkday.JPG",
    alt: "kkday / graduation",
    description: "KKday 畢業時，Sandbox 小隊所有成員合照。",
    date: "2025-07-21",
  },
  {
    type: "image",
    url: "/gallary/pinkoi.JPG",
    alt: "pinkoi / graduation",
    description: "Pinkoi 畢業時，與前端團隊一起拍攝的畢業照。",
    date: "2023-11-20",
  },
  {
    type: "image",
    url: "/gallary/graduation.jpg",
    alt: "university / graduation",
    description: "大學專題組 ZooPower 的畢業照。",
    date: "2019-06-18",
  },
  {
    type: "image",
    url: "/gallary/sunmai.jpg",
    alt: "sunmai / magic",
    description: "大學時期，在金色三麥沿桌駐點表演近距離魔術。",
    date: "2016-09-15",
  },
  {
    type: "image",
    url: "/gallary/clown.jpg",
    alt: "clown / magic / balloon",
    description: "大學時期，學習小丑妝容，在保德信家庭日表演，並製作氣球。",
    date: "2017-08-20",
  },
  {
    type: "image",
    url: "/gallary/intern.jpg",
    alt: "intern / titansoft / graduation",
    description: "於鈦坦科技實習畢業。",
    date: "2019-08-30",
  },
  {
    type: "video",
    url: "/gallary/fjumc.mp4",
    alt: "fjumc / magic / fju",
    description: "從輔大畢業後，第一次輔大魔術社老人聚。",
    videoOptions: {
      poster: "/gallary/fjumc.jpg",
      posterAlt: "fjumc",
    },
    date: "2020-01-31",
  },
  {
    type: "video",
    url: "/gallary/dove.mp4",
    alt: "dove / magic",
    description: "輔大招生週，在輔大校園內表演出鴿。",
    videoOptions: {
      poster: "/gallary/dove.jpg",
      posterAlt: "dove",
    },
    date: "2017-09-27",
  },
  {
    type: "image",
    url: "/gallary/army.JPG",
    alt: "army",
    description: "0111 梯，宜蘭金六結服役。",
    date: "2020-09-27",
  },
  {
    type: "image",
    url: "/gallary/revtel.JPG",
    alt: "revtel",
    description: "忻旅科技尾牙，所有同事們一起合照與三老闆。",
    date: "2022-01-12",
  },
]
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  })
  .reverse();

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentGallaryIndex, setCurrentGallaryIndex] = useState(-1);
  const isSpotifyRefreshTokenReady = useSpotifyRefreshToken();

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

            {/* music */}
            {isFlipped && (
              <section
                className={clsx(
                  "lg:col-span-4 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center h-fit gap-y-4"
                )}
              >
                <Block
                  id="top-tracks"
                  title="Top Tracks"
                  contentClassName="w-full"
                >
                  <TopTracks
                    isSpotifyRefreshTokenReady={isSpotifyRefreshTokenReady}
                  />
                </Block>
                <Block
                  id="playing-now"
                  title="Playing Now"
                  contentClassName="w-full"
                >
                  <PlayingNow
                    isSpotifyRefreshTokenReady={isSpotifyRefreshTokenReady}
                  />
                </Block>
              </section>
            )}

            {/* highlights */}
            {isFlipped && (
              <section
                className={clsx(
                  "lg:col-span-4 col-span-12 lg:row-span-12 rounded-lg p-2 flex flex-col items-center justify-center h-fit"
                )}
              >
                <Block
                  id="highlights"
                  title="Highlights"
                  contentClassName="w-full"
                >
                  <Lightbox
                    open={currentGallaryIndex !== -1}
                    close={() => setCurrentGallaryIndex(-1)}
                    plugins={[Video, Captions, Thumbnails]}
                    index={currentGallaryIndex}
                    slides={HIGH_LITGHT_ITEM.map((item) => {
                      if (item.type === "video") {
                        return {
                          src: item.url,
                          alt: item.alt,
                          type: item.type,
                          poster: item.videoOptions?.poster,
                          autoPlay: true,
                          controls: false,
                          loop: true,
                          playsInline: true,
                          description: `${item.date}\n${item.description}`,
                          sources: [
                            {
                              src: item.url,
                              type: "video/mp4",
                            },
                          ],
                        };
                      }
                      return {
                        src: item.url,
                        alt: item.alt,
                        description: `${item.date}\n${item.description}`,
                        type: "image",
                      };
                    })}
                  />
                  <div className="columns-2 gap-2 w-full">
                    {HIGH_LITGHT_ITEM.map((item, idx) => {
                      const isVideo = item.type === "video";
                      const key = item.url + idx;
                      const src = isVideo
                        ? item.videoOptions?.poster
                        : item.url;
                      const alt = isVideo
                        ? item.videoOptions?.posterAlt
                        : item.alt;

                      return (
                        <motion.img
                          key={key}
                          src={src}
                          alt={alt}
                          className="w-full rounded mb-2 object-cover cursor-pointer"
                          loading="lazy"
                          whileHover={{ scale: 1.05, opacity: 0.85 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          onClick={() => {
                            setCurrentGallaryIndex(idx);
                          }}
                        />
                      );
                    })}
                  </div>
                </Block>
              </section>
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
}
