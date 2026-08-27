import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, glass, radius, space } from '../lib/theme';

interface GlassCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  variant?: 'default' | 'accent' | 'solid' | 'neu' | 'outline';
  padded?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  children,
  style,
  onPress,
  variant = 'default',
  padded = true,
  gradientBorder = false,
}: GlassCardProps) {
  const variantStyle =
    variant === 'accent'
      ? styles.accent
      : variant === 'solid'
        ? styles.solid
        : variant === 'neu'
          ? styles.neu
          : variant === 'outline'
            ? styles.outline
            : styles.default;

  const content = (
    <View style={[styles.base, variantStyle, padded && styles.padded, style]}>{children}</View>
  );

  if (gradientBorder) {
    const inner = (
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientWrap}
      >
        <View style={[styles.base, styles.gradientInner, variantStyle, padded && styles.padded, style]}>
          {children}
        </View>
      </LinearGradient>
    );
    if (onPress) {
      return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
          {inner}
        </Pressable>
      );
    }
    return inner;
  }

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [pressed && styles.pressed]}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  padded: {
    padding: space.md,
  },
  default: {
    ...glass,
  },
  accent: {
    backgroundColor: colors.primaryMuted,
    borderWidth: 1,
    borderColor: colors.borderAccent,
    borderRadius: radius.lg,
  },
  solid: {
    backgroundColor: colors.bgCardSolid,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
  },
  neu: {
    backgroundColor: colors.bgCardSolid,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neuLight,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 8,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: radius.lg,
  },
  gradientWrap: {
    borderRadius: radius.lg,
    padding: 1,
  },
  gradientInner: {
    backgroundColor: colors.bgSurface,
    borderWidth: 0,
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.985 }],
  },
});
