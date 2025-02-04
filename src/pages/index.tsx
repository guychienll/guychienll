import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
  const { siteConfig, ...rest } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      {/* <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="max-w-4xl mx-auto px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Guy Chien
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
              資深前端工程師
            </p>
          </motion.div>

          <motion.section variants={containerVariants} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              最新文章
            </h2>
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.title}
                  variants={itemVariants}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {post.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section variants={containerVariants}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              技能專長
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div> */}
    </Layout>
  );
}
