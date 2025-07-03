import { KeenSlider } from 'keen-slider'

// Wait for DOM to be ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const sliderElement = document.getElementById('keen-slider');
    if (sliderElement) {
      new KeenSlider(
        sliderElement,
        {
          loop: true,
          slides: {
            origin: 'center',
            perView: 1.25,
            spacing: 12,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                origin: 'auto',
                perView: 2.5,
                spacing: 32,
              },
            },
          },
        }
      );
    }
  });
}
