import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, typography, space, radius } from '../../lib/theme';
import { profile, socials } from '../../lib/data';
import { StatPill } from '../StatPill';
import { Tag } from '../Tag';

interface Props {
  onContact: () => void;
  onProjects: () => void;
}

export function HeroSection({ onContact, onProjects }: Props) {
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={['rgba(127,82,255,0.25)', 'rgba(199,125,255,0.08)', 'transparent']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.glow}
      />

      <View style={styles.badgeRow}>
        <View style={styles.liveDot} />
        <Text style={styles.badgeText}>{profile.availability}</Text>
      </View>

      <View style={styles.avatarRow}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientMid]}
          style={styles.avatarRing}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{profile.avatar}</Text>
          </View>
        </LinearGradient>
        <View style={styles.meta}>
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={12} color={colors.textTertiary} />{' '}
            {profile.location}
          </Text>
          <Tag label="Senior · Staff-track" tone="accent" />
        </View>
      </View>

      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.title}>{profile.title}</Text>
      <Text style={styles.tagline}>{profile.tagline}</Text>

      <View style={styles.actions}>
        <Pressable onPress={onContact} style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}>
          <Ionicons name="mail" size={16} color={colors.textInverse} />
          <Text style={styles.primaryBtnText}>Get in touch</Text>
        </Pressable>
        <Pressable onPress={onProjects} style={({ pressed }) => [styles.secondaryBtn, pressed && styles.pressed]}>
          <Ionicons name="rocket-outline" size={16} color={colors.primaryLight} />
          <Text style={styles.secondaryBtnText}>View work</Text>
        </Pressable>
      </View>

      <View style={styles.stats}>
        <StatPill value={`${profile.yearsExp}+`} label="Years" />
        <StatPill value={String(profile.appsShipped)} label="Apps shipped" />
        <StatPill value={profile.githubStars} label="GitHub ★" />
        <StatPill value={profile.usersReached} label="Users reached" />
      </View>

      <View style={styles.socials}>
        {socials.map((s) => (
          <View key={s.id} style={styles.socialBtn}>
            <Ionicons name={s.icon as keyof typeof Ionicons.glyphMap} size={18} color={colors.textSecondary} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: space.lg,
    marginBottom: space.xl,
    position: 'relative',
  },
  glow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: radius.xl,
    height: 280,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    marginBottom: space.lg,
    backgroundColor: colors.accentMuted,
    alignSelf: 'flex-start',
    paddingHorizontal: space.md,
    paddingVertical: space.sm - 2,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'rgba(0,217,165,0.3)',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  badgeText: {
    ...typography.caption,
    color: colors.accent,
    flexShrink: 1,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    marginBottom: space.lg,
  },
  avatarRing: {
    padding: 3,
    borderRadius: radius.xl,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: radius.lg + 2,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    ...typography.h2,
    color: colors.primaryLight,
  },
  meta: {
    gap: space.sm,
    flex: 1,
  },
  location: {
    ...typography.bodySmall,
    color: colors.textTertiary,
  },
  name: {
    ...typography.hero,
    color: colors.textPrimary,
    marginBottom: space.xs,
  },
  title: {
    ...typography.h3,
    color: colors.primaryLight,
    marginBottom: space.sm,
  },
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: space.lg,
    maxWidth: 480,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginBottom: space.lg,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: space.lg,
    paddingVertical: space.md - 2,
    borderRadius: radius.full,
  },
  primaryBtnText: {
    ...typography.h4,
    color: colors.textInverse,
    fontSize: 14,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primaryMuted,
    borderWidth: 1,
    borderColor: colors.borderAccent,
    paddingHorizontal: space.lg,
    paddingVertical: space.md - 2,
    borderRadius: radius.full,
  },
  secondaryBtnText: {
    ...typography.h4,
    color: colors.primaryLight,
    fontSize: 14,
  },
  pressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginBottom: space.lg,
  },
  socials: {
    flexDirection: 'row',
    gap: space.sm,
  },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.bgSurface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
