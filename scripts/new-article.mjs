import { access, copyFile, readFile, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const [, , title, requestedSlug] = process.argv;

if (!title) {
  console.error('Usage: npm run new:article -- "Article title" optional-slug');
  process.exit(1);
}

const slug = (requestedSlug || title)
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

if (!slug) {
  console.error('The title or slug must contain letters or numbers.');
  process.exit(1);
}

const root = process.cwd();
const source = join(root, 'blog', '_article-template.html');
const destination = join(root, 'blog', `${slug}.html`);

try {
  await access(destination, constants.F_OK);
  console.error(`An article already exists at blog/${slug}.html`);
  process.exit(1);
} catch {
  // The destination is available.
}

await copyFile(source, destination);
let article = await readFile(destination, 'utf8');
article = article
  .replaceAll('{{TITLE}}', title)
  .replaceAll('{{SLUG}}', slug)
  .replaceAll('{{DATE}}', new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date()));
await writeFile(destination, article);

console.log(`Created blog/${slug}.html`);
