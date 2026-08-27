import React, { useCallback, useRef, useState, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { colors, layout, motion, space, SectionId } from './lib/theme';
import { StickyNav, NAV_CONTENT_HEIGHT } from './components/StickyNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import {
  OpenSourceSection,
  CertificationsSection,
  BlogSection,
  TestimonialsSection,
  TechStackSection,
  ComposeSection,
  KotlinSection,
  PublicationsSection,
  SpeakingSection,
  AwardsSection,
  EducationSection,
  SideProjectsSection,
  CodeSamplesSection,
  PerformanceSection,
  MentorshipSection,
  CommunitySection,
  ToolsSection,
  LanguagesSection,
  TimelineSection,
  FaqSection,
  DesignSystemSection,
  MetricsOverviewSection,
  ContactSection,
  FooterSection,
} from './components/sections/MiscSections';

/** Section order — 30 content areas for scroll-spy */
const SECTION_ORDER: SectionId[] = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'architecture',
  'opensource',
  'certifications',
  'blog',
  'testimonials',
  'techstack',
  'compose',
  'kotlin',
  'publications',
  'speaking',
  'awards',
  'education',
  'sideprojects',
  'codesamples',
  'performance',
  'mentorship',
  'community',
  'tools',
  'languages',
  'timeline',
  'faq',
  'designsystem',
  'metrics',
  'contact',
  'footer',
];

/**
 * Lenis-style smooth scroll approximation for RN ScrollView.
 * Uses ease-out cubic stepping toward target offset.
 */
function useSmoothScroll(scrollRef: React.RefObject<ScrollView | null>) {
  const animRef = useRef<number | null>(null);
  const currentY = useRef(0);

  const setCurrentY = useCallback((y: number) => {
    currentY.current = y;
  }, []);

  const scrollToY = useCallback(
    (targetY: number, instant = false) => {
      const scroll = scrollRef.current;
      if (!scroll) return;

      if (instant || Platform.OS === 'web') {
        scroll.scrollTo({ y: Math.max(0, targetY), animated: true });
        return;
      }

      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }

      const start = currentY.current;
      const dist = targetY - start;
      if (Math.abs(dist) < 1) return;

      const duration = Math.min(900, Math.max(350, Math.abs(dist) * 0.45));
      const t0 = Date.now();

      const step = () => {
        const t = Math.min(1, (Date.now() - t0) / duration);
        // ease-out cubic (Lenis-like)
        const eased = 1 - Math.pow(1 - t, 3);
        const y = start + dist * eased;
        scroll.scrollTo({ y, animated: false });
        currentY.current = y;
        if (t < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          animRef.current = null;
        }
      };

      animRef.current = requestAnimationFrame(step);
    },
    [scrollRef],
  );

  return { scrollToY, setCurrentY };
}

export default function App() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  const scrollRef = useRef<ScrollView>(null);
  const sectionOffsets = useRef<Partial<Record<SectionId, number>>>({});
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [navElevated, setNavElevated] = useState(false);
  const { scrollToY, setCurrentY } = useSmoothScroll(scrollRef);

  // Approximate sticky nav height for offset compensation
  const navOffset = useMemo(() => {
    const status = Platform.OS === 'android' ? RNStatusBar.currentHeight ?? 0 : 48;
    return status + NAV_CONTENT_HEIGHT + 8;
  }, []);

  const onSectionLayout = useCallback(
    (id: SectionId) => (e: LayoutChangeEvent) => {
      sectionOffsets.current[id] = e.nativeEvent.layout.y;
    },
    [],
  );

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      setCurrentY(y);
      setNavElevated(y > motion.navBlurThreshold);

      // Scroll-spy: pick last section whose top is above viewport midpoint
      const probe = y + navOffset + 24;
      let current: SectionId = 'hero';
      for (const id of SECTION_ORDER) {
        const top = sectionOffsets.current[id];
        if (top !== undefined && top <= probe) {
          current = id;
        }
      }
      // Map footer spy to contact for nav highlight
      if (current === 'footer') current = 'contact';
      setActiveSection((prev) => (prev === current ? prev : current));
    },
    [navOffset, setCurrentY],
  );

  const navigateTo = useCallback(
    (id: SectionId) => {
      const y = sectionOffsets.current[id];
      if (y === undefined) return;
      scrollToY(Math.max(0, y - navOffset + 12));
      setActiveSection(id);
    },
    [navOffset, scrollToY],
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <StatusBar style="light" />
          <StickyNav
            activeSection={activeSection}
            onNavigate={navigateTo}
            elevated={navElevated}
          />

          <KeyboardAvoidingView
            style={styles.flex}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <ScrollView
              ref={scrollRef}
              style={styles.scroll}
              contentContainerStyle={[
                styles.content,
                { paddingTop: navOffset + space.md },
              ]}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={handleScroll}
              // Smooth momentum feel
              decelerationRate="normal"
              keyboardShouldPersistTaps="handled"
            >
              {/* 01 Hero */}
              <View onLayout={onSectionLayout('hero')} collapsable={false}>
                <HeroSection
                  onContact={() => navigateTo('contact')}
                  onProjects={() => navigateTo('projects')}
                />
              </View>

              {/* 02 About */}
              <View onLayout={onSectionLayout('about')} collapsable={false}>
                <AboutSection />
              </View>

              {/* 03 Skills */}
              <View onLayout={onSectionLayout('skills')} collapsable={false}>
                <SkillsSection />
              </View>

              {/* 04 Experience */}
              <View onLayout={onSectionLayout('experience')} collapsable={false}>
                <ExperienceSection />
              </View>

              {/* 05 Projects */}
              <View onLayout={onSectionLayout('projects')} collapsable={false}>
                <ProjectsSection />
              </View>

              {/* 06 Architecture */}
              <View onLayout={onSectionLayout('architecture')} collapsable={false}>
                <ArchitectureSection />
              </View>

              {/* 07 Open Source */}
              <View onLayout={onSectionLayout('opensource')} collapsable={false}>
                <OpenSourceSection />
              </View>

              {/* 08 Certifications */}
              <View onLayout={onSectionLayout('certifications')} collapsable={false}>
                <CertificationsSection />
              </View>

              {/* 09 Blog */}
              <View onLayout={onSectionLayout('blog')} collapsable={false}>
                <BlogSection />
              </View>

              {/* 10 Testimonials */}
              <View onLayout={onSectionLayout('testimonials')} collapsable={false}>
                <TestimonialsSection />
              </View>

              {/* 11 Tech Stack */}
              <View onLayout={onSectionLayout('techstack')} collapsable={false}>
                <TechStackSection />
              </View>

              {/* 12 Compose */}
              <View onLayout={onSectionLayout('compose')} collapsable={false}>
                <ComposeSection />
              </View>

              {/* 13 Kotlin */}
              <View onLayout={onSectionLayout('kotlin')} collapsable={false}>
                <KotlinSection />
              </View>

              {/* 14 Publications */}
              <View onLayout={onSectionLayout('publications')} collapsable={false}>
                <PublicationsSection />
              </View>

              {/* 15 Speaking */}
              <View onLayout={onSectionLayout('speaking')} collapsable={false}>
                <SpeakingSection />
              </View>

              {/* 16 Awards */}
              <View onLayout={onSectionLayout('awards')} collapsable={false}>
                <AwardsSection />
              </View>

              {/* 17 Education */}
              <View onLayout={onSectionLayout('education')} collapsable={false}>
                <EducationSection />
              </View>

              {/* 18 Side Projects */}
              <View onLayout={onSectionLayout('sideprojects')} collapsable={false}>
                <SideProjectsSection />
              </View>

              {/* 19 Code Samples */}
              <View onLayout={onSectionLayout('codesamples')} collapsable={false}>
                <CodeSamplesSection />
              </View>

              {/* 20 Performance */}
              <View onLayout={onSectionLayout('performance')} collapsable={false}>
                <PerformanceSection />
              </View>

              {/* 21 Mentorship */}
              <View onLayout={onSectionLayout('mentorship')} collapsable={false}>
                <MentorshipSection />
              </View>

              {/* 22 Community */}
              <View onLayout={onSectionLayout('community')} collapsable={false}>
                <CommunitySection />
              </View>

              {/* 23 Tools */}
              <View onLayout={onSectionLayout('tools')} collapsable={false}>
                <ToolsSection />
              </View>

              {/* 24 Languages */}
              <View onLayout={onSectionLayout('languages')} collapsable={false}>
                <LanguagesSection />
              </View>

              {/* 25 Timeline */}
              <View onLayout={onSectionLayout('timeline')} collapsable={false}>
                <TimelineSection />
              </View>

              {/* 26 FAQ */}
              <View onLayout={onSectionLayout('faq')} collapsable={false}>
                <FaqSection />
              </View>

              {/* 27 Design System */}
              <View onLayout={onSectionLayout('designsystem')} collapsable={false}>
                <DesignSystemSection />
              </View>

              {/* 28 Metrics */}
              <View onLayout={onSectionLayout('metrics')} collapsable={false}>
                <MetricsOverviewSection />
              </View>

              {/* 29 Contact */}
              <View onLayout={onSectionLayout('contact')} collapsable={false}>
                <ContactSection />
              </View>

              {/* 30 Footer */}
              <View onLayout={onSectionLayout('footer')} collapsable={false}>
                <FooterSection />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    paddingHorizontal: layout.padH,
    paddingBottom: space.huge,
    maxWidth: layout.maxWidth,
    width: '100%',
    alignSelf: 'center',
  },
});
