import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, space, typography } from '../lib/theme';

interface StatPillProps {
  value: string | number;
  label: string;
}

export function StatPill({ value, label }: StatPillProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    minWidth: 72,
    backgroundColor: colors.bgSurface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: space.sm + 4,
    paddingHorizontal: space.sm,
    alignItems: 'center',
  },
  value: {
    ...typography.h3,
    color: colors.primaryLight,
    marginBottom: 2,
  },
  label: {
    ...typography.caption,
    color: colors.textTertiary,
    textAlign: 'center',
  },
});
