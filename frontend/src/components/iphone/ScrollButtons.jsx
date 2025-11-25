const ScrollButtons = ({ 
    scrollContainerRef, 
    position = "bottom-10 right-10",
    buttonSize = "w-12 h-12",
    iconSize = "w-6 h-6"
  }) => {
    const scrollLeft = () => {
      if (scrollContainerRef?.current) {
        const card = scrollContainerRef.current.querySelector('button');
        if (card) {
          const cardWidth = card.offsetWidth;
          const gap = 32;
          scrollContainerRef.current.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
          });
        }
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef?.current) {
        const card = scrollContainerRef.current.querySelector('button');
        if (card) {
          const cardWidth = card.offsetWidth;
          const gap = 32;
          scrollContainerRef.current.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
          });
        }
      }
    };
  
    return (
      <div className={`absolute ${position} z-40 flex gap-4`}>
        <button
          onClick={scrollLeft}
          className={`bg-white/20 hover:bg-white/30 text-white rounded-full ${buttonSize} flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110`}
          aria-label="Scroll left"
        >
          <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className={`bg-white/20 hover:bg-white/30 text-white rounded-full ${buttonSize} flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110`}
          aria-label="Scroll right"
        >
          <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default ScrollButtons;