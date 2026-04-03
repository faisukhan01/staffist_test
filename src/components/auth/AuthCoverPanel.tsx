'use client';

import { motion } from 'framer-motion';
import { CoverBgShapes, WelcomePersonIllustration, DeskPersonIllustration } from './AuthShared';

interface AuthCoverPanelProps {
  type: 'sign-in' | 'sign-up';
}

export default function AuthCoverPanel({ type }: AuthCoverPanelProps) {
  const isSignIn = type === 'sign-in';

  return (
    <div className="relative flex flex-col items-center justify-center p-8 md:p-10 h-full min-h-[260px] overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #7c6fe0 0%, #5b4fcf 40%, #8b6fd4 100%)' }}>
      <CoverBgShapes />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-5 w-48 h-48">
          {isSignIn ? <WelcomePersonIllustration /> : <DeskPersonIllustration />}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-2">
          {isSignIn ? 'Welcome Back!' : 'Hello, Friend!'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-white/75 text-sm leading-relaxed max-w-[200px]">
          {isSignIn
            ? 'Sign in to manage shifts, compliance, and your healthcare team.'
            : 'Join Staffist and connect with NHS-compliant healthcare opportunities.'}
        </motion.p>
      </div>
    </div>
  );
}
