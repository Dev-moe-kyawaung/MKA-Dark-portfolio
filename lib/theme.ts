/**
 * 2026-Trending Design System
 * Senior Android Developer Portfolio
 * Dark-mode-first · Kotlin-purple · Material You · 8px grid
 */

export const colors = {
  // Deep charcoal foundation
  bg: '#0D0D0F',
  bgElevated: '#141418',
  bgSurface: '#1A1A20',
  bgCard: 'rgba(26, 26, 32, 0.72)',
  bgCardSolid: '#1C1C24',
  bgGlass: 'rgba(20, 20, 28, 0.65)',
  bgGlassHeavy: 'rgba(14, 14, 18, 0.85)',

  // Kotlin purple + Material You dynamic accents
  primary: '#7F52FF',
  primaryLight: '#A78BFA',
  primaryDark: '#5B2EE6',
  primaryMuted: 'rgba(127, 82, 255, 0.15)',
  primaryGlow: 'rgba(127, 82, 255, 0.35)',

  secondary: '#C77DFF',
  tertiary: '#E0AAFF',
  accent: '#00D9A5',
  accentMuted: 'rgba(0, 217, 165, 0.15)',
  warning: '#FFB020',
  error: '#FF5C7A',
  info: '#4CC9F0',

  // Gradients (as color stops)
  gradientStart: '#7F52FF',
  gradientMid: '#C77DFF',
  gradientEnd: '#4CC9F0',
  gradientKotlin: ['#7F52FF', '#C77DFF', '#E0AAFF'] as const,
  gradientHero: ['#7F52FF', '#5B2EE6', '#1A1A20'] as const,
  gradientCard: ['rgba(127, 82, 255, 0.12)', 'rgba(76, 201, 240, 0.06)'] as const,
  gradientAccent: ['#00D9A5', '#4CC9F0'] as const,

  // Typography
  textPrimary: '#F4F4F7',
  textSecondary: '#A0A0B0',
  textTertiary: '#6B6B7B',
  textInverse: '#0D0D0F',
  textAccent: '#A78BFA',

  // Borders & dividers
  border: 'rgba(255, 255, 255, 0.08)',
  borderLight: 'rgba(255, 255, 255, 0.12)',
  borderAccent: 'rgba(127, 82, 255, 0.4)',
  divider: 'rgba(255, 255, 255, 0.06)',

  // Neumorphism shadows
  neuLight: 'rgba(255, 255, 255, 0.04)',
  neuDark: 'rgba(0, 0, 0, 0.5)',

  // Status
  success: '#00D9A5',
  online: '#00D9A5',
} as const;

/** Fluid typography scale — mobile-first, ~1.25 ratio */
export const typography = {
  hero: {
    fontSize: 36,
    fontWeight: '800' as const,
    lineHeight: 42,
    letterSpacing: -0.8,
  },
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 34,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 22,
    fontWeight: '700' as const,
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
    letterSpacing: -0.2,
  },
  h4: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 22,
  },
  body: {
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 13,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  overline: {
    fontSize: 11,
    fontWeight: '700' as const,
    lineHeight: 14,
    letterSpacing: 1.4,
    textTransform: 'uppercase' as const,
  },
  mono: {
    fontSize: 13,
    fontWeight: '500' as const,
    lineHeight: 20,
    fontFamily: 'monospace' as const,
  },
} as const;

/** 8px spacing grid */
export const space = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  section: 56,
  block: 64,
  huge: 80,
} as const;

export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  xxl: 32,
  full: 999,
} as const;

/** Glassmorphism + Neumorphism hybrid card style */
export const glass = {
  backgroundColor: colors.bgGlass,
  borderWidth: 1,
  borderColor: colors.borderLight,
  borderRadius: radius.lg,
  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.35,
  shadowRadius: 24,
  // Android elevation
  elevation: 12,
} as const;

export const glassHeavy = {
  ...glass,
  backgroundColor: colors.bgGlassHeavy,
  borderColor: colors.border,
} as const;

export const neuCard = {
  backgroundColor: colors.bgCardSolid,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.neuLight,
  shadowColor: colors.neuDark,
  shadowOffset: { width: 6, height: 6 },
  shadowOpacity: 0.6,
  shadowRadius: 12,
  elevation: 8,
} as const;

export const glassAccent = {
  ...glass,
  borderColor: colors.borderAccent,
  backgroundColor: colors.primaryMuted,
} as const;

/** Scroll-linked animation variables */
export const motion = {
  // Scroll thresholds (px)
  fadeInDistance: 80,
  parallaxFactor: 0.35,
  stickyOffset: 64,
  sectionRevealDelay: 60,

  // Timing
  durationFast: 200,
  durationNormal: 350,
  durationSlow: 600,
  durationReveal: 800,

  // Easing approximations (reanimated)
  springConfig: { damping: 18, stiffness: 140, mass: 0.8 },
  snappySpring: { damping: 20, stiffness: 200, mass: 0.6 },

  // Opacity / scale ranges for scroll reveals
  revealOpacity: [0, 1] as [number, number],
  revealTranslateY: [28, 0] as [number, number],
  revealScale: [0.96, 1] as [number, number],

  // Navbar
  navBlurThreshold: 24,
  navHeight: 56,
  navHeightSafe: 96,
} as const;

export const layout = {
  maxWidth: 680,
  padH: space.md,
  padHLarge: space.lg,
  sectionGap: space.section,
  cardGap: space.md,
  hitSlop: { top: 8, bottom: 8, left: 8, right: 8 },
} as const;

export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'architecture'
  | 'opensource'
  | 'certifications'
  | 'blog'
  | 'testimonials'
  | 'techstack'
  | 'compose'
  | 'kotlin'
  | 'publications'
  | 'speaking'
  | 'awards'
  | 'education'
  | 'sideprojects'
  | 'codesamples'
  | 'performance'
  | 'mentorship'
  | 'community'
  | 'tools'
  | 'languages'
  | 'timeline'
  | 'faq'
  | 'designsystem'
  | 'metrics'
  | 'contact'
  | 'footer';

export const navItems: { id: SectionId; label: string; icon: string }[] = [
  { id: 'hero', label: 'Home', icon: 'home-outline' },
  { id: 'about', label: 'About', icon: 'person-outline' },
  { id: 'skills', label: 'Skills', icon: 'code-slash-outline' },
  { id: 'experience', label: 'Work', icon: 'briefcase-outline' },
  { id: 'projects', label: 'Projects', icon: 'rocket-outline' },
  { id: 'architecture', label: 'Architecture', icon: 'git-network-outline' },
  { id: 'opensource', label: 'OSS', icon: 'logo-github' },
  { id: 'blog', label: 'Blog', icon: 'newspaper-outline' },
  { id: 'contact', label: 'Contact', icon: 'mail-outline' },
];
