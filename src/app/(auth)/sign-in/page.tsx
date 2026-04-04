'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { useAppStore } from '@/store/useAppStore';
import AuthCoverPanel from '@/components/auth/AuthCoverPanel';
import SignInForm from '@/components/auth/SignInForm';
import { ParticleBackground } from '@/components/auth/AuthShared';

export default function SignInPage() {
  const router = useRouter();
  const { signIn } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleSuccess = () => {
    signIn();
    router.push('/');
  };

  return (
    <div className="auth-bg min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative">
      <ParticleBackground />

      {/* Back to Home */}
      <div className="relative z-10 w-full max-w-[820px] mb-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-[820px] my-4 rounded-2xl shadow-2xl shadow-black/40 flex flex-col md:flex-row bg-white overflow-hidden"
      >
        {/* Cover — left side (hidden on mobile) */}
        <div className="hidden md:flex md:w-[42%] flex-shrink-0">
          <AuthCoverPanel type="sign-in" />
        </div>
        {/* Form — full width on mobile, 58% on md+ */}
        <div className="w-full md:w-[58%] min-w-0">
          <SignInForm onSuccess={handleSuccess} />
        </div>
      </motion.div>
    </div>
  );
}
