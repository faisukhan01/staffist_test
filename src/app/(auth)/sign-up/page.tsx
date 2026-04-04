'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AuthCoverPanel from '@/components/auth/AuthCoverPanel';
import SignUpForm from '@/components/auth/SignUpForm';
import { ParticleBackground } from '@/components/auth/AuthShared';

export default function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleSuccess = () => {
    router.push('/sign-in');
  };

  return (
    <div className="auth-bg min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative">
      <ParticleBackground />

      {/* Back to Sign In */}
      <div className="relative z-10 w-full max-w-[820px] mb-3">
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-[820px] my-4 rounded-2xl shadow-2xl shadow-black/40 flex flex-col md:flex-row bg-white overflow-hidden"
      >
        {/* Form — full width on mobile, 58% on md+ */}
        <div className="w-full md:w-[58%] min-w-0 order-2 md:order-1">
          <SignUpForm onSuccess={handleSuccess} />
        </div>
        {/* Cover — hidden on mobile, right side on md+ */}
        <div className="hidden md:flex md:w-[42%] flex-shrink-0 order-1 md:order-2">
          <AuthCoverPanel type="sign-up" />
        </div>
      </motion.div>
    </div>
  );
}
