# Testimonial Carousel

A beautiful, responsive testimonial carousel built with React, TypeScript, and Vite. Features auto-rotating testimonials with smooth fade animations and interactive navigation dots.

Built with nothing but vibes and good intentions. 😎

## ✨ Features

- **Auto-rotation**: Testimonials change every 4 seconds
- **Interactive navigation**: Click dots to jump to specific testimonials
- **Smooth animations**: Fade transitions between testimonials
- **Glassmorphism design**: Modern blur effects and gradient background
- **Fully responsive**: Works on all device sizes
- **TypeScript**: Full type safety and better developer experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd testimonial-carousel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with modern features (backdrop-filter, gradients)

## 🎨 Customization

### Adding New Testimonials

Edit the `testimonials` array in `src/app.tsx`:

```typescript
const testimonials: Testimonial[] = [
  {
    text: "Your testimonial text here",
    author: "— Name, Title",
    company: "Company Name"
  },
  // Add more testimonials...
];
```

### Styling

- Main styles are in `src/app.css`
- Global styles in `src/index.css`
- Modify CSS variables for quick theme changes

### Auto-rotation Timing

Change the interval in `src/app.tsx`:

```typescript
// Currently set to 4000ms (4 seconds)
setInterval(() => {
  // ...
}, 4000); // Change this value
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically detects Vite and deploys

### Other Platforms

Build the project and deploy the `dist` folder:

```bash
npm run build
```

The `dist` folder contains all static files ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues

Found a bug or have a feature request? Please open an issue on GitHub.
