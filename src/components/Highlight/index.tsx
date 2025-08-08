import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

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

function Highlight(props: {
  currentGallaryIndex: number;
  setCurrentGallaryIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { currentGallaryIndex, setCurrentGallaryIndex } = props;

  const [leftColumn, rightColumn] = React.useMemo(() => {
    const left: typeof HIGH_LITGHT_ITEM = [];
    const right: typeof HIGH_LITGHT_ITEM = [];
    HIGH_LITGHT_ITEM.forEach((item, idx) => {
      if (idx % 2 === 0) {
        left.push(item);
      } else {
        right.push(item);
      }
    });
    return [left, right];
  }, []);

  const getOriginalIndex = (col: number, idx: number) => {
    if (col === 0) {
      return idx * 2;
    } else {
      return idx * 2 + 1;
    }
  };

  return (
    <React.Fragment>
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
      <div className="flex gap-2 w-full">
        {[leftColumn, rightColumn].map((column, colIdx) => (
          <div className="flex flex-col w-1/2" key={colIdx}>
            {column.map((item, idx) => {
              const isVideo = item.type === "video";
              const key = item.url + colIdx + idx;
              const src = isVideo ? item.videoOptions?.poster : item.url;
              const alt = isVideo ? item.videoOptions?.posterAlt : item.alt;
              const originalIdx = getOriginalIndex(colIdx, idx);

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
                    setCurrentGallaryIndex(originalIdx);
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Highlight;
