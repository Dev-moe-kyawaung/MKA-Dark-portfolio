import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { Tag } from '../Tag';
import { colors, typography, space, radius } from '../../lib/theme';
import { projects } from '../../lib/data';

export function ProjectsSection() {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        overline="04 — Selected work"
        title="Projects"
        subtitle="Product surfaces and platform bets that shipped to millions"
      />
      <View style={styles.grid}>
        {projects.map((p) => (
          <GlassCard key={p.id} gradientBorder={p.featured} style={styles.card}>
            <View style={[styles.swatch, { backgroundColor: p.color }]} />
            <Text style={styles.subtitle}>{p.subtitle}</Text>
            <Text style={styles.title}>{p.title}</Text>
            <Text style={styles.desc}>{p.description}</Text>
            <View style={styles.metrics}>
              {p.metrics.map((m) => (
                <View key={m} style={styles.metric}>
                  <Text style={styles.metricText}>{m}</Text>
                </View>
              ))}
            </View>
            <View style={styles.tags}>
              {p.tags.map((t) => (
                <Tag key={t} label={t} tone="accent" />
              ))}
            </View>
          </GlassCard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: space.section },
  grid: { gap: space.md },
  card: {},
  swatch: {
    width: 36,
    height: 4,
    borderRadius: 2,
    marginBottom: space.md,
  },
  subtitle: { ...typography.overline, color: colors.textTertiary, marginBottom: space.xs },
  title: { ...typography.h2, color: colors.textPrimary, marginBottom: space.sm },
  desc: { ...typography.bodySmall, color: colors.textSecondary, marginBottom: space.md },
  metrics: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm, marginBottom: space.md },
  metric: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    paddingHorizontal: space.sm,
    paddingVertical: space.xs,
    borderRadius: radius.xs,
  },
  metricText: { ...typography.caption, color: colors.accent },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
});
