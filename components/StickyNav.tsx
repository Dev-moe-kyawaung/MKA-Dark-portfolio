import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, motion, radius, space, typography, navItems, SectionId } from '../lib/theme';

interface StickyNavProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  elevated?: boolean;
}

export function StickyNav({ activeSection, onNavigate, elevated }: StickyNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrap,
        {
          paddingTop: Math.max(insets.top, space.sm),
          backgroundColor: elevated ? colors.bgGlassHeavy : 'rgba(13,13,15,0.4)',
          borderBottomColor: elevated ? colors.borderLight : 'transparent',
        },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.brand}>
          <View style={styles.logoMark}>
            <Text style={styles.logoText}>AR</Text>
          </View>
          <View>
            <Text style={styles.brandName}>Alex Rivera</Text>
            <Text style={styles.brandRole}>Android · Kotlin</Text>
          </View>
        </View>
        <Pressable
          onPress={() => onNavigate('contact')}
          style={({ pressed }) => [styles.cta, pressed && { opacity: 0.85 }]}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={14} color={colors.textInverse} />
          <Text style={styles.ctaText}>Hire</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
        style={styles.tabScroll}
      >
        {navItems.map((item) => {
          const active = activeSection === item.id;
          return (
            <Pressable
              key={item.id}
              onPress={() => onNavigate(item.id)}
              style={[styles.tab, active && styles.tabActive]}
            >
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={14}
                color={active ? colors.primaryLight : colors.textTertiary}
              />
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export const NAV_CONTENT_HEIGHT = motion.navHeight + 44;

const styles = StyleSheet.create({
  wrap: {
    position: Platform.OS === 'web' ? ('sticky' as any) : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderBottomWidth: 1,
    paddingBottom: space.sm,
    // glass feel
    ...Platform.select({
      web: { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } as any,
      default: {},
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.md,
    marginBottom: space.sm,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
  },
  logoMark: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: colors.textPrimary,
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  brandName: {
    ...typography.h4,
    color: colors.textPrimary,
    fontSize: 14,
  },
  brandRole: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
    borderRadius: radius.full,
  },
  ctaText: {
    ...typography.caption,
    color: colors.textInverse,
    fontWeight: '700',
  },
  tabScroll: {
    flexGrow: 0,
  },
  tabs: {
    paddingHorizontal: space.md,
    gap: space.xs,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: space.sm + 4,
    paddingVertical: space.sm - 1,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'transparent',
    marginRight: space.xs,
  },
  tabActive: {
    backgroundColor: colors.primaryMuted,
    borderColor: colors.borderAccent,
  },
  tabLabel: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  tabLabelActive: {
    color: colors.primaryLight,
    fontWeight: '700',
  },
});
