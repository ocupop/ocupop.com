import { useState } from "react";

interface Slide {
  image: {
    src: string;
    alt: string;
  };
  caption_html?: string;
  link?: string;
  link_label?: string;
}

interface CarouselProps {
  title?: string;
  show_indicators?: boolean;
  show_arrows?: boolean;
  extend_to_browser_edge?: boolean;
  number_of_slides?: number;
  slides: Slide[];
}

export default function Carousel({
  title,
  show_indicators = true,
  show_arrows = true,
  extend_to_browser_edge = false,
  number_of_slides = 1,
  slides
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`carousel-container ${extend_to_browser_edge ? 'full-width' : ''}`}>
      {title && <h2>{title}</h2>}

      <div className="carousel-wrapper">
        {show_arrows && (
          <button className="carousel-arrow prev" onClick={prevSlide}>
            &lt;
          </button>
        )}

        <div className="carousel-content">
          {slides.slice(0, number_of_slides).map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              {slide.link ? (
                <a href={slide.link} className="slide-link">
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.link_label && <span className="link-label">{slide.link_label}</span>}
                </a>
              ) : (
                <img src={slide.image.src} alt={slide.image.alt} />
              )}
              {slide.caption_html && (
                <div
                  className="caption"
                  dangerouslySetInnerHTML={{ __html: slide.caption_html }}
                />
              )}
            </div>
          ))}
        </div>

        {show_arrows && (
          <button className="carousel-arrow next" onClick={nextSlide}>
            &gt;
          </button>
        )}

        {show_indicators && (
          <div className="carousel-indicators">
            {slides.slice(0, number_of_slides).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
