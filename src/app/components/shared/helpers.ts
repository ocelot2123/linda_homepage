export type tDevices = 'mobile' | 'tablet' | 'desktop';

export const BreakPoints: Record<string, number> = {
  mobile: 320,
  tablet: 768,
  desktop: 992,
};

export const styledMediaQuery = (device: tDevices): string => {
  switch (device) {
    case 'mobile':
      return `@media(max-width: ${BreakPoints.tablet}px)`;

    case 'tablet':
      return `@media(min-width: ${BreakPoints.tablet}px)`;

    case 'desktop':
      return `@media(min-width: ${BreakPoints.desktop}px)`;
  }
};
