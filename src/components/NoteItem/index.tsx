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
      className="flex flex-col p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300 cursor-pointer aspect-[16/9] h-[135px]"
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
      <motion.div className="text-md text-gray-400 mb-2 font-bold">
        {note.title}
      </motion.div>
      <motion.div className="text-sm text-gray-400 mb-2 line-clamp-2">
        {note.description}
      </motion.div>
      <div className="flex-1" />
      <div className="flex flex-row justify-between items-center">
        <motion.div className="text-xs flex gap-2">
          {note.tags.slice(0, 2).map((tag) => {
            return (
              <button
                key={tag}
                className="px-2 py-1 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-[1px]"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickTag(tag);
                }}
              >
                # {tag}
              </button>
            );
          })}
        </motion.div>
        <motion.div className="text-xs text-gray-500 text-right">
          {note.date}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NoteItem;
