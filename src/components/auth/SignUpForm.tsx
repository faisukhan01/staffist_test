'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Shield, AtSign, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AuthInput, SocialLoginButtons, Divider, getPasswordStrength } from './AuthShared';

interface SignUpFormProps {
  onSuccess?: () => void;
}

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string; email?: string; password?: string; confirmPassword?: string; terms?: string;
  }>({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  const strength = getPasswordStrength(password);

  const validate = () => {
    const e: typeof errors = {};
    if (!fullName.trim()) e.fullName = 'Full name is required';
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 8) e.password = 'At least 8 characters';
    if (!confirmPassword) e.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!agreeTerms) e.terms = 'You must agree to the terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onSuccess?.(); }, 2000);
  };

  return (
    <div className="w-full px-6 pt-5 pb-6 sm:px-8 sm:pt-6 sm:pb-8 md:px-10 md:pt-7 md:pb-10 box-border">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
        {/* Back to Sign In */}
        <div className="mb-4 mt-1">
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Sign In
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
        <p className="text-gray-400 text-sm mb-4">Join Staffist as a healthcare professional or provider.</p>

        {/* Admin note */}
        <div className="flex items-start gap-2.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl mb-5">
          <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-xs text-slate-500 leading-snug">
            <span className="font-semibold text-slate-600">Admin account?</span> Admin credentials are provided directly by your Organisation — no sign-up required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <AuthInput id="signup-name" type="text" placeholder="Full Name" icon={<User size={17} />}
            value={fullName} onChange={(e) => { setFullName(e.target.value); setErrors(p => ({ ...p, fullName: undefined })); }}
            error={errors.fullName} autoComplete="name" />

          <AuthInput id="signup-email" type="email" placeholder="Email Address" icon={<AtSign size={17} />}
            value={email} onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: undefined })); }}
            error={errors.email} autoComplete="email" />

          <div>
            <AuthInput id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Password" icon={<Shield size={17} />}
              value={password} onChange={(e) => { setPassword(e.target.value); setErrors(p => ({ ...p, password: undefined })); }}
              error={errors.password} togglePassword={() => setShowPassword(!showPassword)} showPassword={showPassword}
              autoComplete="new-password" />
            {password && (
              <div className="mt-1.5 px-1">
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-400"
                    style={{ width: strength.width, backgroundColor: strength.color }} />
                </div>
                <p className="text-xs mt-0.5" style={{ color: strength.color }}>{strength.label}</p>
              </div>
            )}
          </div>

          <AuthInput id="signup-confirm" type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password" icon={<Lock size={17} />}
            value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setErrors(p => ({ ...p, confirmPassword: undefined })); }}
            error={errors.confirmPassword} togglePassword={() => setShowConfirm(!showConfirm)} showPassword={showConfirm}
            autoComplete="new-password" />

          <div>
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input type="checkbox" checked={agreeTerms}
                onChange={(e) => { setAgreeTerms(e.target.checked); setErrors(p => ({ ...p, terms: undefined })); }}
                className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-[#667eea] flex-shrink-0" />
              <span className="text-sm text-gray-500 leading-snug">
                I agree to the{' '}
                <span className="text-[#667eea] font-medium cursor-pointer hover:text-[#5b4fcf]">Terms of Service</span>
                {' '}and{' '}
                <span className="text-[#667eea] font-medium cursor-pointer hover:text-[#5b4fcf]">Privacy Policy</span>
              </span>
            </label>
            {errors.terms && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-1 ml-6">{errors.terms}</motion.p>
            )}
          </div>

          <motion.button ref={buttonRef} type="submit" disabled={isLoading} whileTap={{ scale: 0.98 }}
            className="w-full h-12 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-200 hover:shadow-lg hover:shadow-[#667eea]/30"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            {isLoading
              ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <><span>Create Account</span><ArrowRight size={17} /></>}
          </motion.button>
        </form>

        <Divider />
        <SocialLoginButtons />

        <p className="text-sm text-gray-400 text-center mt-5">
          Already have an account?{' '}
          <Link href="/sign-in" className="font-semibold text-[#667eea] hover:text-[#5b4fcf] transition-colors">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
