import { useState, useEffect } from 'react'
import './app.css'

interface Testimonial {
  text: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This platform has transformed our business operations completely!",
    author: "— Sarah Johnson, CEO",
    company: "TechCorp"
  },
  {
    text: "Outstanding support and incredible results. Highly recommended!",
    author: "— Michael Chen, CTO", 
    company: "DataFlow"
  },
  {
    text: "The best investment we've made for our company this year.",
    author: "— Emma Rodriguez, VP Operations",
    company: "GrowthLab"
  },
  {
    text: "Seamless integration and powerful features. Love it!",
    author: "— David Kim, Product Manager",
    company: "InnovateTech"
  }
];

export function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fadeClass, setFadeClass] = useState<string>('fade-in');

  const showTestimonial = (index: number): void => {
    setFadeClass('');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass('fade-in');
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial: Testimonial = testimonials[currentIndex];

  return (
    <div className="app">
      <div className="testimonial-container">
        <div className={`testimonial-text ${fadeClass}`}>
          "{currentTestimonial.text}"
        </div>
        <div className="testimonial-author">
          {currentTestimonial.author}
        </div>
        <div className="company-logo">
          <span>{currentTestimonial.company}</span>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => showTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
