import clsx from "clsx";
import { motion } from "framer-motion";

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
        "relative max-w-full h-[135px] aspect-[16/9] clip-path-inset-0-round-8px rounded-lg overflow-hidden box-border group cursor-pointer bg-cover bg-center bg-no-repeat bg-white"
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

export default ProjectItem;
