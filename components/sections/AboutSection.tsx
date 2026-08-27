import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SectionHeader } from '../SectionHeader';
import { GlassCard } from '../GlassCard';
import { colors, typography, space } from '../../lib/theme';
import { profile } from '../../lib/data';

export function AboutSection() {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        overline="01 — Profile"
        title="About"
        subtitle="Engineering craft meets product instinct"
      />
      <GlassCard variant="neu">
        <Text style={styles.bio}>{profile.bio}</Text>
        <View style={styles.divider} />
        <Text style={styles.short}>{profile.shortBio}</Text>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: space.section },
  bio: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: space.md,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: space.md,
  },
  short: {
    ...typography.bodySmall,
    color: colors.textAccent,
    fontStyle: 'italic',
  },
});
