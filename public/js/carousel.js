import KeenSlider from 'keen-slider';

export const keenSlider = (sliderElement) => {
  if (typeof window !== 'undefined') {
    new KeenSlider(sliderElement, {
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
    });
  }
};
