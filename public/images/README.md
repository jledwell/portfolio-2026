# Static Content Images

This directory contains static images for the content page.

## Usage

Images placed in this directory can be referenced in your content data using the path `/images/filename.ext`.

### Example

If you have an image file named `summary-graphic.png` in this directory, reference it in `contentData.js` as:

```javascript
{
  heading: 'Summary',
  imagePath: '/images/summary-graphic.png',
  // ...
}
```

## File Organization

- Place all content images here
- Use descriptive filenames (e.g., `summary-graphic.png`, `situation-diagram.jpg`)
- Supported formats: PNG, JPG, JPEG, SVG, WebP

## Notes

- Files in the `public` directory are served as-is by Vite
- No build processing is applied to these files
- Paths should start with `/images/` when referencing from code
