'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import PricingSection from '@/components/landing/PricingSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';
import MyShiftsContent from '@/components/dashboard/MyShiftsContent';
import ComplianceContent from '@/components/dashboard/ComplianceContent';
import AnimatedLoginPage from '@/components/AnimatedLoginPage';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const contentVariants = {
  initial: { opacity: 0, x: 12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, x: -12, transition: { duration: 0.2 } },
};

export default function Home() {
  const { currentPage, sidebarTab, isAuthenticated, navigateTo } = useAppStore();
  const [mounted, setMounted] = useState(false);

  // Rehydrate zustand persist store and mark as mounted
  useEffect(() => {
    useAppStore.persist.rehydrate();
    setMounted(true);
  }, []);

  // Guard: run once on mount to enforce rules without calling setState during render
  useEffect(() => {
    if (!mounted) return;
    const validPages = ['landing', 'signin', 'dashboard', 'compliance'];
    if (!validPages.includes(currentPage)) {
      navigateTo('landing');
      return;
    }
    // Unauthenticated users cannot access dashboard/compliance pages
    if (!isAuthenticated && currentPage !== 'landing' && currentPage !== 'signin') {
      navigateTo('landing');
    }
  }, [mounted]);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  // Render landing page shell on server / before hydration to avoid mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    );
  }

  // Derive what to show synchronously
  const validPages = ['landing', 'signin', 'dashboard', 'compliance'];
  const safePage = !validPages.includes(currentPage)
    ? 'landing'
    : !isAuthenticated && currentPage !== 'landing' && currentPage !== 'signin'
    ? 'landing'
    : currentPage;

  return (
    <AnimatePresence mode="wait">
      {/* ── Sign In Page ── */}
      {safePage === 'signin' && (
        <motion.div key="signin" variants={pageVariants} initial="initial" animate="animate" exit="exit">
          <AnimatedLoginPage />
        </motion.div>
      )}

      {/* ── Landing Page ── */}
      {safePage === 'landing' && (
        <motion.div key="landing" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <CTASection />
          </main>
          <Footer />
        </motion.div>
      )}

      {/* ── App Shell (Dashboard / Shifts / Compliance) ── */}
      {(safePage === 'dashboard' || safePage === 'compliance') && (
        <motion.div key="app" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex min-h-screen">
          <Sidebar />
          <div className="md:ml-[220px] flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {sidebarTab === 'compliance' ? (
                <motion.div key="compliance" variants={contentVariants} initial="initial" animate="animate" exit="exit">
                  <ComplianceContent />
                </motion.div>
              ) : sidebarTab === 'shifts' ? (
                <motion.div key="shifts" variants={contentVariants} initial="initial" animate="animate" exit="exit">
                  <MyShiftsContent />
                </motion.div>
              ) : (
                <motion.div key="dashboard" variants={contentVariants} initial="initial" animate="animate" exit="exit">
                  <DashboardContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
