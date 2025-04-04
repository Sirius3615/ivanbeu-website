# Project Page Documentation

This guide explains how to create and format project detail pages.

## Basic Structure

Each project page should be created in the `/projects` directory using the template.html as a base.

## Adding Content

### Headers
```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Text Content
```html
<p>Regular paragraph text goes here.</p>
```

### Images
```html
<img src="/path/to/image.jpg" alt="Description" title="Optional tooltip">
```

### Links
```html
<a href="url" target="_blank">Link text</a>
```

### Code Blocks
```html
<pre><code>
Your code goes here
</code></pre>
```

### Lists
```html
<ul>
  <li>Unordered list item</li>
</ul>

<ol>
  <li>Ordered list item</li>
</ol>
```

## Best Practices

1. Keep paragraphs concise and focused
2. Use descriptive alt text for images
3. Optimize images before uploading
4. Use semantic HTML elements
5. Test pages on multiple devices

## Example Project Page

```html
<article class="project-content">
  <h2>Project Overview</h2>
  <p>Introduction to your project...</p>

  <h3>Key Features</h3>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>

  <h2>Technical Details</h2>
  <p>Technical explanation...</p>

  <img src="/images/screenshot.jpg" alt="Project screenshot">
</article>
```
