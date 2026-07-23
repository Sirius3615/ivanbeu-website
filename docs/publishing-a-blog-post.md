# Publishing a blog post

The blog is deliberately static: every article is a fast, indexable HTML page with no database or dashboard to maintain.

## Create an article

From the project folder, run:

```sh
npm run new:article -- "Your article title" your-article-slug
```

This creates `blog/your-article-slug.html` in the same design as the existing articles. Replace the bracketed draft text, update the description, topic, section links and reading time, then add the new article to:

- `blog/index.html`
- the Ideas section in `index.html` if it should be featured on the homepage
- the previous article's “Next signal” link

## Writing structure

Each article supports:

- a headline, short deck, topic, date and reading time
- a sticky “On this signal” table of contents
- normal headings and paragraphs
- `<blockquote>` for the central opinion
- `<ul>` for compact principles or requirements
- `.article-note` for a highlighted side note
- an end note and link to the next article

Run `npm run build` before publishing.
