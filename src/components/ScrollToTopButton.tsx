import { ScrollToTopButtonProps } from '../types/types';

function ScrollToTopButton({ onClick }: ScrollToTopButtonProps) {
  return (
    <button
      className="scroll-to-top-button"
      onClick={onClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;