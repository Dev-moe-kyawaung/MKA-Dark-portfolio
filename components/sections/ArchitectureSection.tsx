import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { Tag } from '../Tag';
import { colors, typography, space } from '../../lib/theme';
import { architectureDives } from '../../lib/data';

export function ArchitectureSection() {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        overline="05 — Systems"
        title="Architecture deep-dives"
        subtitle="Long-form notes on modularization, state, and sync"
      />
      {architectureDives.map((d) => (
        <GlassCard key={d.id} style={styles.card}>
          <View style={styles.top}>
            <Ionicons name="git-network-outline" size={20} color={colors.primaryLight} />
            <Text style={styles.read}>{d.readTime} read</Text>
          </View>
          <Text style={styles.title}>{d.title}</Text>
          <Text style={styles.summary}>{d.summary}</Text>
          <View style={styles.tags}>
            {d.topics.map((t) => (
              <Tag key={t} label={t} tone="info" />
            ))}
          </View>
        </GlassCard>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: space.section, gap: space.md },
  card: {},
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: space.sm,
  },
  read: { ...typography.caption, color: colors.textTertiary },
  title: { ...typography.h3, color: colors.textPrimary, marginBottom: space.sm },
  summary: { ...typography.bodySmall, color: colors.textSecondary, marginBottom: space.md },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
});
