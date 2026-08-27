import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, space, typography } from '../lib/theme';

interface TagProps {
  label: string;
  tone?: 'default' | 'accent' | 'success' | 'info' | 'warning';
}

export function Tag({ label, tone = 'default' }: TagProps) {
  const toneStyle =
    tone === 'accent'
      ? styles.accent
      : tone === 'success'
        ? styles.success
        : tone === 'info'
          ? styles.info
          : tone === 'warning'
            ? styles.warning
            : styles.default;

  const textStyle =
    tone === 'accent'
      ? styles.textAccent
      : tone === 'success'
        ? styles.textSuccess
        : tone === 'info'
          ? styles.textInfo
          : tone === 'warning'
            ? styles.textWarning
            : styles.textDefault;

  return (
    <View style={[styles.base, toneStyle]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: space.sm + 2,
    paddingVertical: space.xs + 1,
    borderRadius: radius.full,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  default: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderColor: colors.borderLight,
  },
  accent: {
    backgroundColor: colors.primaryMuted,
    borderColor: colors.borderAccent,
  },
  success: {
    backgroundColor: colors.accentMuted,
    borderColor: 'rgba(0,217,165,0.35)',
  },
  info: {
    backgroundColor: 'rgba(76,201,240,0.12)',
    borderColor: 'rgba(76,201,240,0.35)',
  },
  warning: {
    backgroundColor: 'rgba(255,176,32,0.12)',
    borderColor: 'rgba(255,176,32,0.35)',
  },
  text: {
    ...typography.caption,
  },
  textDefault: { color: colors.textSecondary },
  textAccent: { color: colors.primaryLight },
  textSuccess: { color: colors.accent },
  textInfo: { color: colors.info },
  textWarning: { color: colors.warning },
});
