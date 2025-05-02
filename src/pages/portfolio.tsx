import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";
import ProjectItem from "../components/ProjectItem";
import { ProjectCategory, PROJECTS } from "../constants";

const CATEGORY_OPTIONS = [
  { category: ProjectCategory.ALL, label: "全部" },
  { category: ProjectCategory.WEBSITE, label: "網站開發" },
  { category: ProjectCategory.APP, label: "APP 開發" },
  { category: ProjectCategory.TOOL, label: "工具開發" },
] as const;

const ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const { siteConfig } = useDocusaurusContext();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL
  );

  const filteredProjects = PROJECTS.filter((project) =>
    project.categories.includes(selectedCategory)
  );

  return (
    <Layout title="Portfolio" description={siteConfig.tagline}>
      <div className="p-4 max-w-[1024px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-zen-maru-gothic text-center mb-4">
            作品集
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 font-zen-maru-gothic mb-4">
            以下是我過去參與開發的一些專案作品
          </p>
          <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
            {CATEGORY_OPTIONS.map(({ category, label }) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "primary" : "secondary"
                }
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="w-[calc(50%-0.5rem)] sm:w-auto"
              >
                {label}
              </Button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4"
          variants={ANIMATION_VARIANTS}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={ITEM_VARIANTS}>
              <ProjectItem {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Portfolio;
