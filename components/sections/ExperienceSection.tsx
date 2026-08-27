import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { Tag } from '../Tag';
import { colors, typography, space, radius } from '../../lib/theme';
import { experience } from '../../lib/data';

export function ExperienceSection() {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        overline="03 — Career"
        title="Experience"
        subtitle="Platform leadership across fintech, health, and product studios"
      />
      <View style={styles.timeline}>
        {experience.map((job, i) => (
          <View key={job.id} style={styles.item}>
            <View style={styles.rail}>
              <View style={[styles.dot, job.highlight && styles.dotHot]} />
              {i < experience.length - 1 ? <View style={styles.line} /> : null}
            </View>
            <GlassCard style={styles.card} variant={job.highlight ? 'accent' : 'default'}>
              <View style={styles.head}>
                <Text style={styles.role}>{job.role}</Text>
                <Text style={styles.period}>{job.period}</Text>
              </View>
              <Text style={styles.company}>
                {job.company} · {job.location}
              </Text>
              <Text style={styles.desc}>{job.description}</Text>
              <View style={styles.tags}>
                {job.tags.map((t) => (
                  <Tag key={t} label={t} tone={job.highlight ? 'accent' : 'default'} />
                ))}
              </View>
            </GlassCard>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: space.section },
  timeline: { gap: 0 },
  item: { flexDirection: 'row', gap: space.md },
  rail: { width: 16, alignItems: 'center' },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.bgSurface,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: space.lg,
  },
  dotHot: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: colors.border,
    marginVertical: 4,
  },
  card: { flex: 1, marginBottom: space.md },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: space.sm,
    marginBottom: space.xs,
    flexWrap: 'wrap',
  },
  role: { ...typography.h4, color: colors.textPrimary, flex: 1 },
  period: { ...typography.caption, color: colors.primaryLight },
  company: { ...typography.bodySmall, color: colors.textAccent, marginBottom: space.sm },
  desc: { ...typography.bodySmall, color: colors.textSecondary, marginBottom: space.md },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
});
