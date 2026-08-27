import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { Tag } from '../Tag';
import { colors, typography, space, radius } from '../../lib/theme';
import { skills } from '../../lib/data';

export function SkillsSection() {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        overline="02 — Craft"
        title="Skills"
        subtitle="Depth where it compounds — UI systems, architecture, and runtime performance"
      />

      <View style={styles.bars}>
        {skills.core.map((s) => (
          <View key={s.name} style={styles.barRow}>
            <View style={styles.barMeta}>
              <Text style={styles.barName}>{s.name}</Text>
              <Text style={styles.barLevel}>{s.level}%</Text>
            </View>
            <View style={styles.track}>
              <View style={[styles.fill, { width: `${s.level}%` as any }]} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.cats}>
        {skills.categories.map((cat) => (
          <GlassCard key={cat.title} style={styles.catCard}>
            <View style={styles.catHead}>
              <Ionicons
                name={cat.icon as keyof typeof Ionicons.glyphMap}
                size={18}
                color={colors.primaryLight}
              />
              <Text style={styles.catTitle}>{cat.title}</Text>
            </View>
            <View style={styles.tags}>
              {cat.items.map((item) => (
                <Tag key={item} label={item} />
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
  bars: {
    gap: space.md,
    marginBottom: space.lg,
    backgroundColor: colors.bgSurface,
    borderRadius: radius.lg,
    padding: space.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  barRow: { gap: space.xs },
  barMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  barName: { ...typography.bodySmall, color: colors.textPrimary, fontWeight: '600' },
  barLevel: { ...typography.caption, color: colors.primaryLight },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  cats: { gap: space.md },
  catCard: {},
  catHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    marginBottom: space.md,
  },
  catTitle: { ...typography.h4, color: colors.textPrimary },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
});
