import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { Tag } from '../Tag';
import { colors, typography, space, radius } from '../../lib/theme';
import {
  openSource,
  certifications,
  blogPosts,
  testimonials,
  techStack,
  composeHighlights,
  kotlinHighlights,
  publications,
  speaking,
  awards,
  education,
  sideProjects,
  codeSamples,
  performanceMetrics,
  mentorship,
  community,
  tools,
  languages,
  timeline,
  faqs,
  designSystemNotes,
  contactChannels,
  profile,
} from '../../lib/data';

function SectionShell({
  overline,
  title,
  subtitle,
  children,
}: {
  overline: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <SectionHeader overline={overline} title={title} subtitle={subtitle} />
      {children}
    </View>
  );
}

export function OpenSourceSection() {
  return (
    <SectionShell overline="06 — Community code" title="Open source" subtitle="Libraries and tooling used beyond my day job">
      <View style={styles.gap}>
        {openSource.map((o) => (
          <GlassCard key={o.id}>
            <View style={styles.rowBetween}>
              <Text style={styles.monoName}>{o.name}</Text>
              <View style={styles.star}>
                <Ionicons name="star" size={12} color={colors.warning} />
                <Text style={styles.starText}>{o.stars.toLocaleString()}</Text>
              </View>
            </View>
            <Text style={styles.bodySec}>{o.description}</Text>
            <Tag label={o.language} tone="accent" />
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function CertificationsSection() {
  return (
    <SectionShell overline="07 — Credentials" title="Certifications">
      <View style={styles.gap}>
        {certifications.map((c) => (
          <GlassCard key={c.id} variant="solid">
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Ionicons name={c.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.primaryLight} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.h4}>{c.title}</Text>
                <Text style={styles.caption}>
                  {c.issuer} · {c.year}
                </Text>
              </View>
            </View>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function BlogSection() {
  return (
    <SectionShell overline="08 — Writing" title="Blog" subtitle="Notes on performance, Compose, and platform engineering">
      <View style={styles.gap}>
        {blogPosts.map((b) => (
          <GlassCard key={b.id}>
            <View style={styles.rowBetween}>
              <Tag label={b.tag} tone="info" />
              <Text style={styles.caption}>{b.date}</Text>
            </View>
            <Text style={[styles.h3, { marginTop: space.sm }]}>{b.title}</Text>
            <Text style={styles.bodySec}>{b.excerpt}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function TestimonialsSection() {
  return (
    <SectionShell overline="09 — Social proof" title="Testimonials">
      <View style={styles.gap}>
        {testimonials.map((t) => (
          <GlassCard key={t.id} variant="accent">
            <Ionicons name="chatbubble-ellipses" size={18} color={colors.primaryLight} />
            <Text style={styles.quote}>“{t.quote}”</Text>
            <Text style={styles.h4}>{t.author}</Text>
            <Text style={styles.caption}>{t.role}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function TechStackSection() {
  return (
    <SectionShell overline="10 — Stack" title="Tech stack">
      <View style={styles.chipGrid}>
        {techStack.map((t) => (
          <View key={t.name} style={styles.chip}>
            <Ionicons name={t.icon as keyof typeof Ionicons.glyphMap} size={16} color={colors.primaryLight} />
            <Text style={styles.chipText}>{t.name}</Text>
          </View>
        ))}
      </View>
    </SectionShell>
  );
}

export function ComposeSection() {
  return (
    <SectionShell overline="11 — UI runtime" title="Jetpack Compose" subtitle="Where most of my recent craft lives">
      <View style={styles.gap}>
        {composeHighlights.map((c) => (
          <GlassCard key={c.title} variant="neu">
            <Text style={styles.h4}>{c.title}</Text>
            <Text style={styles.bodySec}>{c.detail}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function KotlinSection() {
  return (
    <SectionShell overline="12 — Language" title="Kotlin highlights">
      <View style={styles.gap}>
        {kotlinHighlights.map((k) => (
          <GlassCard key={k.title}>
            <Text style={styles.h4}>{k.title}</Text>
            <Text style={styles.bodySec}>{k.detail}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function PublicationsSection() {
  return (
    <SectionShell overline="13 — Publishing" title="Publications">
      <View style={styles.gap}>
        {publications.map((p) => (
          <GlassCard key={p.title} variant="outline">
            <Tag label={p.type} />
            <Text style={[styles.h4, { marginTop: space.sm }]}>{p.title}</Text>
            <Text style={styles.caption}>{p.venue}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function SpeakingSection() {
  return (
    <SectionShell overline="14 — Stage" title="Speaking">
      <View style={styles.gap}>
        {speaking.map((s) => (
          <View key={s.talk} style={styles.listRow}>
            <View style={styles.yearPill}>
              <Text style={styles.yearText}>{s.year}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.h4}>{s.talk}</Text>
              <Text style={styles.caption}>{s.event}</Text>
            </View>
          </View>
        ))}
      </View>
    </SectionShell>
  );
}

export function AwardsSection() {
  return (
    <SectionShell overline="15 — Recognition" title="Awards">
      <View style={styles.gap}>
        {awards.map((a) => (
          <GlassCard key={a.title}>
            <View style={styles.rowBetween}>
              <Text style={styles.h4}>{a.title}</Text>
              <Text style={styles.accentText}>{a.year}</Text>
            </View>
            <Text style={styles.caption}>{a.org}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function EducationSection() {
  return (
    <SectionShell overline="16 — Foundations" title="Education">
      <View style={styles.gap}>
        {education.map((e) => (
          <GlassCard key={e.school} variant="solid">
            <Text style={styles.h4}>{e.degree}</Text>
            <Text style={styles.accentText}>{e.school}</Text>
            <Text style={styles.caption}>
              {e.period} · {e.detail}
            </Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function SideProjectsSection() {
  return (
    <SectionShell overline="17 — Nights & weekends" title="Side projects">
      <View style={styles.gap}>
        {sideProjects.map((s) => (
          <GlassCard key={s.name}>
            <Text style={styles.h4}>{s.name}</Text>
            <Text style={styles.bodySec}>{s.detail}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function CodeSamplesSection() {
  return (
    <SectionShell overline="18 — Snippets" title="Code samples">
      <View style={styles.gap}>
        {codeSamples.map((c) => (
          <GlassCard key={c.title} variant="solid">
            <Text style={styles.h4}>{c.title}</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.code}>{c.snippet}</Text>
            </View>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function PerformanceSection() {
  return (
    <SectionShell overline="19 — Runtime" title="Performance metrics" subtitle="Latest production deltas from the consumer app">
      <View style={styles.metricGrid}>
        {performanceMetrics.map((m) => (
          <GlassCard key={m.label} style={styles.metricCard} padded>
            <Text style={styles.metricValue}>{m.value}</Text>
            <Text style={styles.caption}>{m.label}</Text>
            <Text style={styles.delta}>{m.delta}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function MentorshipSection() {
  return (
    <SectionShell overline="20 — Growth" title="Mentorship">
      <GlassCard>
        <Text style={styles.bodySec}>{mentorship.summary}</Text>
        <View style={styles.metricGrid}>
          {mentorship.stats.map((s) => (
            <View key={s.label} style={styles.miniStat}>
              <Text style={styles.metricValue}>{s.value}</Text>
              <Text style={styles.caption}>{s.label}</Text>
            </View>
          ))}
        </View>
      </GlassCard>
    </SectionShell>
  );
}

export function CommunitySection() {
  return (
    <SectionShell overline="21 — Local & online" title="Community">
      <View style={styles.gap}>
        {community.map((c) => (
          <GlassCard key={c.name}>
            <Text style={styles.h4}>{c.name}</Text>
            <Text style={styles.accentText}>{c.role}</Text>
            <Text style={styles.caption}>{c.detail}</Text>
          </GlassCard>
        ))}
      </View>
    </SectionShell>
  );
}

export function ToolsSection() {
  return (
    <SectionShell overline="22 — Workflow" title="Tools">
      <View style={styles.chipGrid}>
        {tools.map((t) => (
          <View key={t} style={styles.chip}>
            <Ionicons name="construct-outline" size={14} color={colors.textTertiary} />
            <Text style={styles.chipText}>{t}</Text>
          </View>
        ))}
      </View>
    </SectionShell>
  );
}

export function LanguagesSection() {
  return (
    <SectionShell overline="23 — Polyglot" title="Languages">
      <View style={styles.gap}>
        {languages.map((l) => (
          <View key={l.name} style={styles.listRow}>
            <Text style={styles.h4}>{l.name}</Text>
            <Tag label={l.level} tone="success" />
          </View>
        ))}
      </View>
    </SectionShell>
  );
}

export function TimelineSection() {
  return (
    <SectionShell overline="24 — Path" title="Timeline">
      <View style={styles.gap}>
        {timeline.map((t) => (
          <View key={t.year} style={styles.listRow}>
            <View style={styles.yearPill}>
              <Text style={styles.yearText}>{t.year}</Text>
            </View>
            <Text style={[styles.bodySec, { flex: 1, marginBottom: 0 }]}>{t.event}</Text>
          </View>
        ))}
      </View>
    </SectionShell>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);
  return (
    <SectionShell overline="25 — FAQ" title="Frequently asked">
      <View style={styles.gap}>
        {faqs.map((f) => {
          const isOpen = open === f.q;
          return (
            <Pressable key={f.q} onPress={() => setOpen(isOpen ? null : f.q)}>
              <GlassCard>
                <View style={styles.rowBetween}>
                  <Text style={[styles.h4, { flex: 1 }]}>{f.q}</Text>
                  <Ionicons
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textTertiary}
                  />
                </View>
                {isOpen ? <Text style={[styles.bodySec, { marginTop: space.sm }]}>{f.a}</Text> : null}
              </GlassCard>
            </Pressable>
          );
        })}
      </View>
    </SectionShell>
  );
}

export function DesignSystemSection() {
  return (
    <SectionShell
      overline="26 — Tokens"
      title="Design system"
      subtitle="Dark-mode-first palette · 8px grid · glass + neu hybrid"
    >
      <View style={styles.gap}>
        {designSystemNotes.map((d) => (
          <GlassCard key={d.token} variant="solid">
            <Text style={styles.monoName}>{d.token}</Text>
            <Text style={styles.accentText}>{d.value}</Text>
            <Text style={styles.caption}>{d.note}</Text>
          </GlassCard>
        ))}
      </View>
      <View style={styles.swatches}>
        {[colors.bg, colors.bgSurface, colors.primary, colors.secondary, colors.accent, colors.info].map(
          (c) => (
            <View key={c} style={[styles.swatch, { backgroundColor: c }]} />
          ),
        )}
      </View>
    </SectionShell>
  );
}

export function MetricsOverviewSection() {
  return (
    <SectionShell overline="27 — Impact" title="Career metrics">
      <LinearGradient
        colors={['rgba(127,82,255,0.2)', 'rgba(76,201,240,0.1)']}
        style={styles.impactCard}
      >
        <View style={styles.metricGrid}>
          <View style={styles.miniStat}>
            <Text style={styles.metricValue}>{profile.yearsExp}+</Text>
            <Text style={styles.caption}>Years shipping</Text>
          </View>
          <View style={styles.miniStat}>
            <Text style={styles.metricValue}>{profile.appsShipped}</Text>
            <Text style={styles.caption}>Production apps</Text>
          </View>
          <View style={styles.miniStat}>
            <Text style={styles.metricValue}>{profile.usersReached}</Text>
            <Text style={styles.caption}>Users reached</Text>
          </View>
          <View style={styles.miniStat}>
            <Text style={styles.metricValue}>{profile.githubStars}</Text>
            <Text style={styles.caption}>OSS stars</Text>
          </View>
        </View>
      </LinearGradient>
    </SectionShell>
  );
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      if (Platform.OS === 'web') {
        window.alert('Please fill in all fields.');
      } else {
        Alert.alert('Missing fields', 'Please fill in all fields.');
      }
      return;
    }
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <SectionShell
      overline="28 — Let's build"
      title="Contact"
      subtitle="Architecture reviews, staff roles, and Compose migrations"
    >
      <View style={styles.gap}>
        {contactChannels.map((c) => (
          <GlassCard key={c.id} variant="outline">
            <View style={styles.row}>
              <View style={styles.iconBox}>
                <Ionicons name={c.icon as keyof typeof Ionicons.glyphMap} size={18} color={colors.primaryLight} />
              </View>
              <View>
                <Text style={styles.caption}>{c.label}</Text>
                <Text style={styles.h4}>{c.value}</Text>
              </View>
            </View>
          </GlassCard>
        ))}

        <GlassCard>
          {sent ? (
            <View style={styles.sentBox}>
              <Ionicons name="checkmark-circle" size={36} color={colors.accent} />
              <Text style={styles.h3}>Message queued</Text>
              <Text style={styles.bodySec}>Thanks — I'll reply within two business days.</Text>
              <Pressable onPress={() => setSent(false)} style={styles.secondaryBtn}>
                <Text style={styles.secondaryBtnText}>Send another</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.form}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor={colors.textTertiary}
                value={name}
                onChangeText={setName}
                returnKeyType="next"
              />
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="you@company.com"
                placeholderTextColor={colors.textTertiary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
              <Text style={styles.inputLabel}>Message</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Role, timeline, or architecture challenge…"
                placeholderTextColor={colors.textTertiary}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
              <Pressable onPress={submit} style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.85 }]}>
                <Ionicons name="send" size={16} color={colors.textInverse} />
                <Text style={styles.primaryBtnText}>Send message</Text>
              </Pressable>
            </View>
          )}
        </GlassCard>
      </View>
    </SectionShell>
  );
}

export function FooterSection() {
  return (
    <View style={styles.footer}>
      <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.footerRule} />
      <Text style={styles.footerBrand}>{profile.name}</Text>
      <Text style={styles.caption}>Senior Android Developer · Kotlin · Compose</Text>
      <Text style={[styles.caption, { marginTop: space.md }]}>
        © 2026 · Built with a dark-mode-first design system
      </Text>
      <Text style={[styles.caption, { marginTop: space.xs, color: colors.textTertiary }]}>
        30 sections · glass + neu · scroll-spy nav · motion tokens
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: space.section },
  gap: { gap: space.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: space.sm,
  },
  h3: { ...typography.h3, color: colors.textPrimary },
  h4: { ...typography.h4, color: colors.textPrimary },
  bodySec: { ...typography.bodySmall, color: colors.textSecondary, marginBottom: space.sm, marginTop: space.xs },
  caption: { ...typography.caption, color: colors.textTertiary },
  accentText: { ...typography.bodySmall, color: colors.primaryLight, marginVertical: 2 },
  monoName: {
    ...typography.mono,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  star: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  starText: { ...typography.caption, color: colors.warning },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
    borderRadius: radius.full,
    backgroundColor: colors.bgSurface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: { ...typography.caption, color: colors.textSecondary },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    backgroundColor: colors.bgSurface,
    borderRadius: radius.md,
    padding: space.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  yearPill: {
    backgroundColor: colors.primaryMuted,
    paddingHorizontal: space.sm,
    paddingVertical: space.xs,
    borderRadius: radius.xs,
  },
  yearText: { ...typography.caption, color: colors.primaryLight, fontWeight: '700' },
  codeBlock: {
    marginTop: space.sm,
    backgroundColor: colors.bg,
    borderRadius: radius.sm,
    padding: space.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  code: {
    ...typography.mono,
    color: colors.tertiary,
    fontSize: 12,
    lineHeight: 18,
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.md,
  },
  metricCard: {
    width: '47%',
    flexGrow: 1,
    minWidth: 140,
  },
  metricValue: {
    ...typography.h2,
    color: colors.primaryLight,
    marginBottom: 2,
  },
  delta: {
    ...typography.caption,
    color: colors.accent,
    marginTop: space.xs,
  },
  miniStat: {
    flex: 1,
    minWidth: 70,
    alignItems: 'center',
    padding: space.sm,
  },
  quote: {
    ...typography.body,
    color: colors.textPrimary,
    fontStyle: 'italic',
    marginVertical: space.md,
  },
  impactCard: {
    borderRadius: radius.lg,
    padding: space.lg,
    borderWidth: 1,
    borderColor: colors.borderAccent,
  },
  swatches: {
    flexDirection: 'row',
    gap: space.sm,
    marginTop: space.lg,
  },
  swatch: {
    flex: 1,
    height: 36,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  form: { gap: space.sm },
  inputLabel: { ...typography.caption, color: colors.textSecondary, marginTop: space.xs },
  input: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: radius.sm,
    paddingHorizontal: space.md,
    paddingVertical: space.md - 2,
    color: colors.textPrimary,
    ...typography.body,
  },
  textArea: {
    minHeight: 100,
    paddingTop: space.md,
  },
  primaryBtn: {
    marginTop: space.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: space.md,
    borderRadius: radius.full,
  },
  primaryBtnText: { ...typography.h4, color: colors.textInverse, fontSize: 14 },
  secondaryBtn: {
    marginTop: space.md,
    paddingVertical: space.sm,
    paddingHorizontal: space.lg,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.borderAccent,
  },
  secondaryBtnText: { ...typography.caption, color: colors.primaryLight },
  sentBox: { alignItems: 'center', paddingVertical: space.lg, gap: space.sm },
  footer: {
    alignItems: 'center',
    paddingVertical: space.xxxl,
    marginBottom: space.xl,
  },
  footerRule: {
    width: 60,
    height: 3,
    borderRadius: 2,
    marginBottom: space.lg,
  },
  footerBrand: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: space.xs,
  },
});
