import { css } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
}

export const color = {
  // Palette
  primary: '#a9cc17', // acidgreem

  // Monochrome
  lightest: '#FFF',
  lighter: '#e1e1e1',
  darkest: '#1e1e1e',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
}

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
}

export const typography = {
  type: {
    primary: '"Source Sans Pro", sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    light: '200',
    regular: '400',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '1.6',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    l4: '50',
    code: '90',
  },
}

export const breakpoint = 600
export const pageMargin = '5.55555'

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`
