import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, space } from '../lib/theme';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ overline, title, subtitle }: SectionHeaderProps) {
  return (
    <View style={styles.wrap}>
      {overline ? <Text style={styles.overline}>{overline}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: space.lg,
  },
  overline: {
    ...typography.overline,
    color: colors.primaryLight,
    marginBottom: space.sm,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: space.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: space.sm,
    maxWidth: 520,
  },
  rule: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginTop: space.sm,
  },
});
