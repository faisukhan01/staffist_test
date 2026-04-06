'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CoverBgShapes, WelcomePersonIllustration, DeskPersonIllustration } from './AuthShared';

interface AuthCoverPanelProps {
  type: 'sign-in' | 'sign-up';
  role?: 'user' | 'admin';
}

const signInContent = {
  user: {
    heading: 'Welcome Back!',
    subtext: 'Sign in to manage your shifts, check compliance status, and connect with your healthcare team.',
    gradient: 'linear-gradient(145deg, #7c6fe0 0%, #5b4fcf 40%, #8b6fd4 100%)',
  },
  admin: {
    heading: 'Welcome, Admin!',
    subtext: 'Sign in to manage your team, approve shifts, and oversee compliance across your organisation.',
    gradient: 'linear-gradient(145deg, #d97706 0%, #b45309 40%, #f59e0b 100%)',
  },
};

export default function AuthCoverPanel({ type, role = 'user' }: AuthCoverPanelProps) {
  const isSignIn = type === 'sign-in';
  const content = signInContent[role];

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-8 md:p-10 h-full min-h-[260px] overflow-hidden"
      animate={{ background: isSignIn ? content.gradient : 'linear-gradient(145deg, #7c6fe0 0%, #5b4fcf 40%, #8b6fd4 100%)' }}
      transition={{ duration: 0.4 }}
      style={{ background: isSignIn ? content.gradient : 'linear-gradient(145deg, #7c6fe0 0%, #5b4fcf 40%, #8b6fd4 100%)' }}
    >
      <CoverBgShapes />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-5 w-48 h-48">
          {isSignIn ? <WelcomePersonIllustration /> : <DeskPersonIllustration />}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h2
            key={`heading-${role}-${type}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-white mb-2">
            {isSignIn ? content.heading : 'Hello, Friend!'}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`subtext-${role}-${type}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-white/75 text-sm leading-relaxed max-w-[200px]">
            {isSignIn
              ? content.subtext
              : 'Join Staffist and connect with NHS-compliant healthcare opportunities.'}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
