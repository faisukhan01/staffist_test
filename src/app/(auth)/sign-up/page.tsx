'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import AuthCoverPanel from '@/components/auth/AuthCoverPanel';
import SignUpForm from '@/components/auth/SignUpForm';
import { ParticleBackground } from '@/components/auth/AuthShared';

export default function SignUpPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/sign-in');
  };

  return (
    <div className="auth-bg min-h-screen flex items-center justify-center p-4 sm:p-6 relative">
      <ParticleBackground />
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
