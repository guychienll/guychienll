import { motion } from "framer-motion";

interface Note {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
}

interface NoteItemProps {
  note: Note;
}

const VISIBLE_TAGS_COUNT = 2;

function NoteItem(props: NoteItemProps) {
  const { note } = props;

  const onClickNote = (link: string) => {
    window.location.href = link;
  };

  const onClickTag = (tag: string) => {
    window.location.href = `/notes/tags/${tag}`;
  };

  return (
    <motion.div
      key={note.title}
      className="flex flex-col p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300 cursor-pointer aspect-[16/9] h-[135px]"
      onClick={() => {
        onClickNote(note.link);
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
      <motion.div className="text-lg text-gray-400 mb-2 font-bold line-clamp-1">
        {note.title}
      </motion.div>
      <motion.div className="text-sm text-gray-400 mb-2 line-clamp-2">
        {note.description}
      </motion.div>
      <div className="flex-1" />
      <div className="flex flex-row justify-between items-center">
        <motion.div className="text-xs flex gap-2">
          {note.tags.slice(0, VISIBLE_TAGS_COUNT).map((tag) => (
            <button
              key={tag}
              className="px-2 py-1 rounded-full bg-green-900 text-green-300 hover:bg-green-700 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-[1px] border border-green-700"
              onClick={(e) => {
                e.stopPropagation();
                onClickTag(tag);
              }}
            >
              # {tag}
            </button>
          ))}
        </motion.div>
        <motion.div className="text-xs text-gray-500 text-right">
          {note.date}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NoteItem;
