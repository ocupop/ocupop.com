interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: {
    src: string;
    alt: string;
  };
}

interface TestimonialsProps {
  title?: string;
  background_color?: string;
  _show_indicators?: boolean;
  _show_arrows?: boolean;
  number_of_slides: 1 | 2 | 3;
  testimonials: Testimonial[];
}

export default function Testimonials({
  title,
  background_color = 'white',
  _show_indicators = true,
  _show_arrows = true,
  number_of_slides = 1,
  testimonials
}: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      (prev + number_of_slides >= testimonials.length)
        ? 0
        : prev + number_of_slides
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      (prev - number_of_slides < 0)
        ? Math.max(0, testimonials.length - number_of_slides)
        : prev - number_of_slides
    );
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: background_color }}
    >
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>}

        <div className="relative my-8">
          {_show_arrows && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-2xl hover:opacity-75 transition-opacity"
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              &lt;
            </button>
          )}

          <div className="mx-12"
               style={{
                 display: 'grid',
                 gridTemplateColumns: `repeat(${number_of_slides}, 1fr)`,
                 gap: '2rem'
               }}>
            {testimonials
              .slice(currentSlide, currentSlide + number_of_slides)
              .map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8">
                  <img
                    src={testimonial.image.src}
                    alt={testimonial.image.alt}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <blockquote className="italic my-4">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex flex-col space-y-1">
                    <strong className="font-semibold">{testimonial.name}</strong>
                    <span className="text-gray-600">{testimonial.title}</span>
                  </div>
                </div>
              ))}
          </div>

          {_show_arrows && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-2xl hover:opacity-75 transition-opacity"
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              &gt;
            </button>
          )}
        </div>

        {_show_indicators && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: Math.ceil(testimonials.length / number_of_slides) })
              .map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentSlide / number_of_slides ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index * number_of_slides)}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
