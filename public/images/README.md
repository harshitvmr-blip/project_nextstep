# Image Management Guide

This folder contains custom images for the Next Step Guide application.

## Folder Structure

```
public/images/
├── careers/       # Career-related images (600x400px recommended)
├── colleges/      # College campus images (600x400px recommended)
├── counselors/    # Counselor profile photos (150x150px recommended)
└── resources/     # Resource article/video thumbnails (300x200px recommended)
```

## Using Local Images

### Option 1: Replace Unsplash URLs with Local Images

1. Add your images to the appropriate folders above
2. Update `data/imageUrls.ts` to use local paths:

```typescript
export const careerImages = {
  softwareEngineer: '/images/careers/software-engineer.jpg',
  dataScientist: '/images/careers/data-scientist.jpg',
  // ... etc
};
```

### Option 2: Keep Using Unsplash (Current Setup)

The app currently uses curated Unsplash images which are:
- Free to use
- High quality
- No download required
- Automatically optimized

## Image Specifications

### Careers
- **Size**: 600x400px
- **Format**: JPG or PNG
- **Naming**: Use kebab-case (e.g., `software-engineer.jpg`)

### Colleges
- **Size**: 600x400px
- **Format**: JPG or PNG
- **Naming**: Use kebab-case (e.g., `stanford-university.jpg`)

### Counselors
- **Size**: 150x150px (square)
- **Format**: JPG or PNG
- **Naming**: Use kebab-case (e.g., `emily-watson.jpg`)

### Resources
- **Size**: 300x200px
- **Format**: JPG or PNG
- **Naming**: Use kebab-case (e.g., `ai-impact.jpg`)

## Finding Free Images

If you need more images, check these free resources:
- [Unsplash](https://unsplash.com/) - High-quality free photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos
- [Freepik](https://www.freepik.com/) - Free vectors and photos

## Tips

- Optimize images before adding them (use tools like TinyPNG or Squoosh)
- Keep file sizes under 200KB for faster loading
- Use consistent aspect ratios within each category
- Consider using WebP format for better compression
