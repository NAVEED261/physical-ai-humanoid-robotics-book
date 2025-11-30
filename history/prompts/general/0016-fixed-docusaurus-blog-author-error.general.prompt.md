---
id: 0016
title: Fixed Docusaurus blog author error
stage: general
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-robotics-textbook
branch: master
user: user
command: /sp.implement
labels: ["frontend", "blog", "error-fix"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - docusaurus/blog/authors.yml
tests:

---

## Prompt

PS D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus>  npm start

> docusaurus@1.0.0 start
> docusaurus start

[INFO] Starting the development server...
[WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.

[ERROR] Error: Processing of blog source file path=2025-11-30-welcome.md failed.
    at doProcessBlogSourceFile (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:271:19)
    at async Promise.all (index 0)
    at async generateBlogPosts (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:274:24)
    at async Object.loadContent (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\index.js:155:29)
    at async D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\core\lib\server\plugins\plugins.js:40:23
    at async Promise.all (index 1)
    at async D:\physihumanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:82:23)
      at toAuthor (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurcal-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\core\lib\server\plugins\plugins.js:146:25
    at async loadSite (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\core\lib\server\site.js:155:45)
    at async createReloadableSite (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\core\lib\commands\start\utils.js:62:16)
    at async doStart (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\core\lib\commands\start\start.js:22:28) {
  [cause]: Error: Can't reference blog post authors by a key (such as 'claude') because no authors map file could be loaded.
  Please double-check your blog plugin config (in particular 'authorsMapPath'), ensure the file exists at the configured path, is not empty, and is valid!
      at getAuthorsMapAuthor (D:\physical-ai-humanoid-robotics-book\physical-ai-us\plugin-content-blog\lib\authors.js:100:16)
      at Array.map (<anonymous>)
      at getFrontMatterAuthors (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:58:42)
      at getBlogPostAuthors (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\authors.js:114:21)
      at processBlogSourceFile (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:215:54)
      at async doProcessBlogSourceFile (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:268:20)
      at async Promise.all (index 0)
      at async generateBlogPosts (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\blogUtils.js:274:24)
      at async Object.loadContent (D:\physical-ai-humanoid-robotics-book\physical-ai-humanoid-robotics-book\docusaurus\node_modules\@docusaurus\plugin-content-blog\lib\index.js:155:29)
}

## Response snapshot

I've created the `docusaurus/blog/authors.yml` file and defined the 'Claude' author. This should resolve the error related to finding the blog post author.

Now, please try running `npm start` again in the `docusaurus/` directory:

**`docusaurus/` directory mein dobara `npm start` chalayein:**

```bash
npm start

```

## Outcome

- ✅ Impact: Created `authors.yml` file and defined the `claude` author to resolve the blog author mapping error.
- 🧪 Tests: N/A
- 📁 Files: `docusaurus/blog/authors.yml` was created.
- 🔁 Next prompts: User is expected to re-attempt `npm start`.
- 🧠 Reflection: Successfully identified and corrected the Docusaurus configuration issue related to blog authors.

## Evaluation notes (flywheel)

- Failure modes observed: `Can't reference blog post authors by a key (such as 'claude') because no authors map file could be loaded.` error encountered during `npm start`.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
