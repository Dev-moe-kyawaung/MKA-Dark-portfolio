/** Portfolio content — Senior Android Developer, 2026 */

export const profile = {
  name: 'Alex Rivera',
  title: 'Senior Android Developer',
  tagline: 'Crafting delightful native experiences with Kotlin & Jetpack Compose',
  location: 'Berlin, Germany · Remote',
  availability: 'Open to staff-level roles & select consulting',
  email: 'alex.rivera@android.dev',
  yearsExp: 9,
  appsShipped: 24,
  githubStars: '12.4k',
  usersReached: '40M+',
  avatar: 'AR',
  bio: 'I design and ship production Android systems at scale — from pixel-perfect Compose UI to resilient offline-first architecture. Previously led mobile platform at fintech and health-tech unicorns. Obsessed with Material You, baseline profiles, and developer experience.',
  shortBio: 'Senior Android engineer specializing in Jetpack Compose, multi-module architecture, and high-performance UI.',
};

export const socials = [
  { id: 'github', label: 'GitHub', icon: 'logo-github', url: 'https://github.com' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'logo-linkedin', url: 'https://linkedin.com' },
  { id: 'twitter', label: 'X', icon: 'logo-twitter', url: 'https://x.com' },
  { id: 'medium', label: 'Medium', icon: 'logo-medium', url: 'https://medium.com' },
  { id: 'youtube', label: 'YouTube', icon: 'logo-youtube', url: 'https://youtube.com' },
];

export const skills = {
  core: [
    { name: 'Kotlin', level: 98, category: 'language' },
    { name: 'Jetpack Compose', level: 96, category: 'ui' },
    { name: 'Coroutines & Flow', level: 95, category: 'async' },
    { name: 'Multi-module Arch', level: 94, category: 'architecture' },
    { name: 'Material You / M3', level: 92, category: 'ui' },
    { name: 'Hilt / DI', level: 90, category: 'architecture' },
  ],
  categories: [
    {
      title: 'UI & UX',
      icon: 'color-palette-outline',
      items: ['Compose', 'Material 3', 'Custom Layouts', 'Motion / Anim', 'Accessibility', 'Adaptive UI'],
    },
    {
      title: 'Architecture',
      icon: 'layers-outline',
      items: ['Clean Arch', 'MVI / UDF', 'Multi-module', 'Modularization', 'Navigation', 'App Startup'],
    },
    {
      title: 'Data & Async',
      icon: 'server-outline',
      items: ['Room', 'DataStore', 'Ktor / Retrofit', 'Paging 3', 'WorkManager', 'Offline-first'],
    },
    {
      title: 'Quality',
      icon: 'shield-checkmark-outline',
      items: ['Detekt', 'Screenshot tests', 'Macrobenchmark', 'Baseline Profiles', 'R8 / ProGuard', 'CI/CD'],
    },
  ],
};

export const experience = [
  {
    id: '1',
    company: 'NovaPay',
    role: 'Staff Android Engineer',
    period: '2023 — Present',
    location: 'Remote · EU',
    highlight: true,
    description:
      'Lead of the consumer Android platform serving 12M MAU. Drove Compose migration (92% screens), cut ANRs 67%, and established the design-system package used by 4 product squads.',
    tags: ['Compose', 'KMP', 'Performance', 'Design System'],
  },
  {
    id: '2',
    company: 'HealthLoop',
    role: 'Senior Android Developer',
    period: '2020 — 2023',
    location: 'Berlin',
    highlight: false,
    description:
      'Built the clinical companion app from zero to Play Store feature. Implemented HIPAA-aware offline sync, biometric vault, and real-time care workflows with Flow + Room.',
    tags: ['Offline-first', 'Security', 'Room', 'Hilt'],
  },
  {
    id: '3',
    company: 'PixelForge Labs',
    role: 'Android Developer',
    period: '2017 — 2020',
    location: 'Munich',
    highlight: false,
    description:
      'Shipped SDK tooling and white-label apps for media clients. Introduced coroutines company-wide and authored internal guides on ViewSystem → Compose transitions.',
    tags: ['SDK', 'Kotlin', 'Media', 'Mentoring'],
  },
  {
    id: '4',
    company: 'Freelance / Agency',
    role: 'Android Engineer',
    period: '2015 — 2017',
    location: 'Europe',
    highlight: false,
    description:
      'Delivered production apps for retail, travel, and IoT startups. Early adopter of Architecture Components and Kotlin when it hit 1.0.',
    tags: ['Startup', 'IoT', 'Kotlin'],
  },
];

export const projects = [
  {
    id: 'p1',
    title: 'Aura Wallet',
    subtitle: 'Fintech · Compose · KMP',
    description: 'Next-gen multi-currency wallet with dynamic Material You theming, biometric vault, and sub-16ms frame times on mid-tier devices.',
    metrics: ['4.9★', '2M+ downloads', 'p99 jank < 1%'],
    tags: ['Compose', 'Security', 'KMP'],
    color: '#7F52FF',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Pulse Care',
    subtitle: 'Health · Offline-first',
    description: 'Clinician-facing companion with CRDT-inspired sync, encrypted local store, and adaptive layouts for foldables and tablets.',
    metrics: ['Hospital pilot', '99.97% sync', 'A11y AAA'],
    tags: ['Room', 'Foldables', 'A11y'],
    color: '#00D9A5',
    featured: true,
  },
  {
    id: 'p3',
    title: 'Nexus Design System',
    subtitle: 'Open library · M3',
    description: 'Token-driven Compose design system with 80+ components, motion presets, and automated screenshot coverage.',
    metrics: ['80+ comps', '1.2k★', 'Token pipeline'],
    tags: ['Design System', 'Compose'],
    color: '#4CC9F0',
    featured: true,
  },
  {
    id: 'p4',
    title: 'Streamline Player',
    subtitle: 'Media · ExoPlayer',
    description: 'Low-latency streaming client with custom Compose controls, Picture-in-Picture, and Media3 integration.',
    metrics: ['<200ms start', 'PiP', 'Media3'],
    tags: ['Media3', 'Compose'],
    color: '#C77DFF',
    featured: false,
  },
  {
    id: 'p5',
    title: 'Forge CI Templates',
    subtitle: 'DX · Gradle',
    description: 'Convention plugins, version catalogs, and baseline-profile CI jobs adopted by 15+ internal apps.',
    metrics: ['15 apps', '-40% CI time'],
    tags: ['Gradle', 'CI/CD'],
    color: '#FFB020',
    featured: false,
  },
];

export const architectureDives = [
  {
    id: 'a1',
    title: 'Modularization at 40 modules',
    summary: 'How we split features, cores, and tooling layers without drowning in graph complexity — type-safe navigation boundaries included.',
    readTime: '12 min',
    topics: ['Gradle', 'Modules', 'Navigation'],
  },
  {
    id: 'a2',
    title: 'UDF + Compose: scaling state',
    summary: 'A pragmatic MVI loop with immutable UI state, single-shot events, and ViewModel factories that stay testable.',
    readTime: '9 min',
    topics: ['MVI', 'Compose', 'Testing'],
  },
  {
    id: 'a3',
    title: 'Offline-first sync engine',
    summary: 'Conflict resolution, exponential backoff, and Room + WorkManager orchestration for flaky clinical networks.',
    readTime: '15 min',
    topics: ['Sync', 'Room', 'WorkManager'],
  },
];

export const openSource = [
  {
    id: 'o1',
    name: 'compose-particle-field',
    description: 'GPU-friendly particle system for Compose canvas — used in onboarding hero moments.',
    stars: 2340,
    language: 'Kotlin',
  },
  {
    id: 'o2',
    name: 'flow-event-bus',
    description: 'Typed event channels on SharedFlow with lifecycle-aware collectors.',
    stars: 1890,
    language: 'Kotlin',
  },
  {
    id: 'o3',
    name: 'm3-snapshot-engine',
    description: 'Papalazzi + roborazzi helpers for Material 3 screenshot matrices.',
    stars: 920,
    language: 'Kotlin',
  },
  {
    id: 'o4',
    name: 'gradle-health-score',
    description: 'Plugin that grades module coupling and build cache hit rates.',
    stars: 710,
    language: 'Kotlin',
  },
];

export const certifications = [
  { id: 'c1', title: 'Google Associate Android Developer', issuer: 'Google', year: '2019', icon: 'logo-google' },
  { id: 'c2', title: 'Kotlin Certified Developer', issuer: 'JetBrains', year: '2021', icon: 'code-slash' },
  { id: 'c3', title: 'Android Performance Expert Path', issuer: 'Google / Udacity', year: '2022', icon: 'speedometer-outline' },
  { id: 'c4', title: 'Security Engineering for Mobile', issuer: 'NCC Group', year: '2023', icon: 'lock-closed-outline' },
];

export const blogPosts = [
  {
    id: 'b1',
    title: 'Baseline Profiles in 2026: what still matters',
    date: 'Mar 2026',
    tag: 'Performance',
    excerpt: 'A field guide to startup traces, dex layout, and when Cloud Profiles beat local generation.',
  },
  {
    id: 'b2',
    title: 'Compose compiler metrics, decoded',
    date: 'Jan 2026',
    tag: 'Compose',
    excerpt: 'Reading stability reports without crying — practical refactors that cut recompositions 40%.',
  },
  {
    id: 'b3',
    title: 'KMP shared UI: when it pays off',
    date: 'Nov 2025',
    tag: 'KMP',
    excerpt: 'Decision matrix from three production migrations — including the one we rolled back.',
  },
  {
    id: 'b4',
    title: 'Material You dynamic color pitfalls',
    date: 'Sep 2025',
    tag: 'Design',
    excerpt: 'Contrast failures, brand dilution, and how we built a safe tonal pipeline.',
  },
];

export const testimonials = [
  {
    id: 't1',
    quote: 'Alex elevated our entire Android practice. The Compose migration roadmap alone saved us two quarters of thrash.',
    author: 'Samira Okonkwo',
    role: 'VP Engineering, NovaPay',
  },
  {
    id: 't2',
    quote: 'Rare mix of systems thinking and craft. Code reviews became masterclasses — the team still quotes the UDF guide.',
    author: 'Jonas Berg',
    role: 'Mobile Lead, HealthLoop',
  },
  {
    id: 't3',
    quote: 'Our design system finally feels native. Stakeholders noticed the polish within a single release cycle.',
    author: 'Priya Nair',
    role: 'Design Director, PixelForge',
  },
];

export const techStack = [
  { name: 'Kotlin', icon: 'code-slash' },
  { name: 'Compose', icon: 'phone-portrait-outline' },
  { name: 'KMP', icon: 'git-merge-outline' },
  { name: 'Hilt', icon: 'git-branch-outline' },
  { name: 'Room', icon: 'server-outline' },
  { name: 'Ktor', icon: 'cloud-outline' },
  { name: 'Coil', icon: 'image-outline' },
  { name: 'CameraX', icon: 'camera-outline' },
  { name: 'Media3', icon: 'play-circle-outline' },
  { name: 'Firebase', icon: 'flame-outline' },
  { name: 'Play Billing', icon: 'card-outline' },
  { name: 'Gradle', icon: 'construct-outline' },
];

export const composeHighlights = [
  { title: 'Custom Layouts', detail: 'SubcomposeLayout measurement chains for masonry and timeline UIs' },
  { title: 'Motion', detail: 'Shared element transitions + Physics-based springs aligned to M3 motion' },
  { title: 'Graphics', detail: 'RuntimeShader effects, Agsl glows, and efficient Canvas particles' },
  { title: 'Adaptive', detail: 'WindowSizeClass-driven nav suites for phone, fold, and desktop' },
];

export const kotlinHighlights = [
  { title: 'Coroutines mastery', detail: 'Structured concurrency, custom contexts, Flow operators at scale' },
  { title: 'Multiplatform', detail: 'expect/actual boundaries, shared domain, native UI where it counts' },
  { title: 'DSL design', detail: 'Type-safe builders for navigation graphs and analytics schemas' },
  { title: 'Interop', detail: 'Java migration playbooks, annotation processors → KSP' },
];

export const publications = [
  { title: 'Effective Modularization for Android', venue: 'Droidcon Book / 2025', type: 'Book chapter' },
  { title: 'Compose at Scale', venue: 'Android Weekly #580', type: 'Article' },
  { title: 'ANR archaeology', venue: 'ProAndroidDev', type: 'Deep dive' },
];

export const speaking = [
  { event: 'Droidcon Berlin', talk: 'Baseline Profiles beyond the defaults', year: '2025' },
  { event: 'KotlinConf', talk: 'Flow-powered sync engines', year: '2024' },
  { event: 'Android Dev Summit', talk: 'Design systems in Compose', year: '2024' },
  { event: 'GDG Europe', talk: 'Workshop: Macrobenchmark lab', year: '2023' },
];

export const awards = [
  { title: 'Play Excellence — UX', year: '2025', org: 'Google Play' },
  { title: 'Internal Eng Award — Platform', year: '2024', org: 'NovaPay' },
  { title: 'Open Source Champion', year: '2023', org: 'Kotlin Foundation' },
];

export const education = [
  {
    school: 'TU Munich',
    degree: 'M.Sc. Computer Science',
    period: '2013 — 2015',
    detail: 'HCI · Distributed systems',
  },
  {
    school: 'University of Barcelona',
    degree: 'B.Sc. Software Engineering',
    period: '2009 — 2013',
    detail: 'Mobile systems track',
  },
];

export const sideProjects = [
  { name: 'Nightshift', detail: 'Personal Compose playground for experimental shaders' },
  { name: 'Kotlint', detail: 'CLI that lints commit messages against Conventional + ticket IDs' },
  { name: 'Material Lab', detail: 'Dynamic color explorer with export to Compose tokens' },
];

export const codeSamples = [
  {
    title: 'Stable UI state pattern',
    language: 'kotlin',
    snippet: `@Immutable
data class HomeUiState(
  val feed: ImmutableList<Item>,
  val isRefreshing: Boolean,
  val error: UiError? = null,
)`,
  },
  {
    title: 'Scoped sync worker',
    language: 'kotlin',
    snippet: `class SyncWorker(
  ctx: Context,
  params: WorkerParameters,
) : CoroutineWorker(ctx, params) {
  override suspend fun doWork() =
    syncRepository.runCatching { pull() }
      .fold({ Result.success() }, { Result.retry() })
}`,
  },
];

export const performanceMetrics = [
  { label: 'Cold start (P50)', value: '418ms', delta: '-34%' },
  { label: 'Frame jank (P99)', value: '0.7%', delta: '-61%' },
  { label: 'ANR rate', value: '0.04%', delta: '-67%' },
  { label: 'APK size (arm64)', value: '18.2MB', delta: '-22%' },
];

export const mentorship = {
  summary:
    'I mentor mid/senior Android engineers on architecture reviews, promo packets, and Compose adoption. Weekly office hours + structured 1:1 programs.',
  stats: [
    { label: 'Mentees', value: '30+' },
    { label: 'Promos supported', value: '14' },
    { label: 'Workshops run', value: '22' },
  ],
};

export const community = [
  { name: 'Berlin Android', role: 'Co-organizer', detail: 'Monthly meetups · 2.4k members' },
  { name: 'Kotlin User Group', role: 'Speaker liaison', detail: 'EU virtual series' },
  { name: 'Stack Overflow', role: 'Top 5% Android', detail: '1.8k reputation · Compose tag' },
];

export const tools = [
  'Android Studio Ladybug+',
  'Figma Dev Mode',
  'Charles / Proxyman',
  'Perfetto',
  'Macrobenchmark',
  'GitHub Actions',
  'Gradle Enterprise',
  'Detekt + ktlint',
  'Notion ADR log',
  'Linear',
];

export const languages = [
  { name: 'Kotlin', level: 'Expert' },
  { name: 'Java', level: 'Expert' },
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'C1' },
  { name: 'Spanish', level: 'Native' },
  { name: 'Dart', level: 'Working' },
];

export const timeline = [
  { year: '2015', event: 'Shipped first production Android app' },
  { year: '2017', event: 'Adopted Kotlin 1.1 in production' },
  { year: '2019', event: 'Led Architecture Components rollout' },
  { year: '2021', event: 'First Compose screen in prod' },
  { year: '2023', event: 'Staff role · 12M MAU platform' },
  { year: '2025', event: 'KMP shared domain in wallet stack' },
  { year: '2026', event: 'Open to next chapter' },
];

export const faqs = [
  {
    q: 'Contract or full-time?',
    a: 'Open to both staff/principal full-time and selective architecture retainers.',
  },
  {
    q: 'Remote preferences?',
    a: 'EU-friendly remote preferred; quarterly on-sites welcome.',
  },
  {
    q: 'Stack preferences?',
    a: 'Kotlin-first, Compose-first. Happy to modernize View/XML codebases.',
  },
  {
    q: 'Notice period?',
    a: 'Typically 4–6 weeks depending on engagement type.',
  },
];

export const designSystemNotes = [
  { token: 'color.primary', value: '#7F52FF', note: 'Kotlin purple' },
  { token: 'space.grid', value: '8px', note: 'Base unit' },
  { token: 'radius.lg', value: '18px', note: 'Card default' },
  { token: 'motion.reveal', value: '800ms', note: 'Section entrance' },
  { token: 'glass.blur', value: '24px', note: 'Nav / cards' },
  { token: 'type.ratio', value: '1.25', note: 'Major second' },
];

export const contactChannels = [
  { id: 'email', label: 'Email', value: profile.email, icon: 'mail-outline' },
  { id: 'calendar', label: 'Book a call', value: 'cal.com/alex-android', icon: 'calendar-outline' },
  { id: 'telegram', label: 'Telegram', value: '@arivera_dev', icon: 'paper-plane-outline' },
  { id: 'location', label: 'Based in', value: profile.location, icon: 'location-outline' },
];
