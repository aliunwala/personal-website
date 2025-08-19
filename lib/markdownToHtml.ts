// import { remark } from "remark";
import html from "remark-html";

// export default async function markdownToHtml(markdown: string) {
// const result = await remark().use(html).process(markdown);
// return result.toString();
// }

import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype) // Convert markdown to HTML AST
    .use(rehypeHighlight) // Apply syntax highlighting
    .use(rehypeStringify) // Convert HTML AST to string
    .process(markdown);
  return result.toString();
}
