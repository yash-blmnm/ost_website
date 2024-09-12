import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articleContent = path.join(process.cwd(), "src/articleContent");

export async function getMarkdownContent(id) {
  const fullPath = path.join(articleContent, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
  };
}
