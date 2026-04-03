'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Chrome, Apple } from 'lucide-react';

// ==================== Illustrations ====================

export function DeskPersonIllustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[280px] mx-auto">
      {/* Desk */}
      <rect x="60" y="200" width="280" height="12" rx="6" fill="rgba(255,255,255,0.25)" />
      <rect x="80" y="212" width="8" height="70" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="312" y="212" width="8" height="70" rx="3" fill="rgba(255,255,255,0.2)" />
      {/* Monitor */}
      <rect x="125" y="105" width="130" height="82" rx="6" fill="rgba(0,0,0,0.3)" />
      <rect x="130" y="110" width="120" height="72" rx="4" fill="#5b4fcf" />
      <rect x="140" y="120" width="60" height="4" rx="2" fill="rgba(255,255,255,0.7)" />
      <rect x="140" y="130" width="100" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
      <rect x="140" y="138" width="85" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <rect x="140" y="146" width="95" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
      <rect x="140" y="158" width="40" height="14" rx="7" fill="rgba(255,255,255,0.25)" />
      <rect x="190" y="158" width="40" height="14" rx="7" fill="rgba(255,255,255,0.4)" />
      {/* Monitor stand */}
      <rect x="183" y="187" width="34" height="13" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="170" y="198" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      {/* Person body */}
      <path d="M175 105 C175 105 168 130 168 155 L168 198 L232 198 L232 155 C232 130 225 105 225 105 Z" fill="rgba(255,255,255,0.15)" />
      {/* Person head */}
      <rect x="191" y="78" width="18" height="22" rx="7" fill="#f0c8a0" />
      <ellipse cx="200" cy="62" rx="24" ry="26" fill="#f0c8a0" />
      {/* Hair */}
      <path d="M176 55 C176 38 188 30 200 30 C212 30 224 38 224 55 C224 50 221 40 200 40 C179 40 176 50 176 55 Z" fill="#2d3436" />
      {/* Eyes */}
      <ellipse cx="192" cy="60" rx="3" ry="3.5" fill="#2d3436" />
      <ellipse cx="208" cy="60" rx="3" ry="3.5" fill="#2d3436" />
      <circle cx="193" cy="59" r="1" fill="#fff" />
      <circle cx="209" cy="59" r="1" fill="#fff" />
      {/* Smile */}
      <path d="M193 72 Q200 78 207 72" stroke="#c0785c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="176" cy="63" rx="4" ry="6" fill="#f0c8a0" />
      <ellipse cx="224" cy="63" rx="4" ry="6" fill="#f0c8a0" />
      {/* Small items on desk */}
      <rect x="290" y="182" width="18" height="18" rx="3" fill="rgba(255,255,255,0.6)" />
      <circle cx="80" cy="185" r="8" fill="rgba(0,200,150,0.6)" />
    </svg>
  );
}

export function WelcomePersonIllustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[260px] mx-auto">
      {/* Legs */}
      <rect x="178" y="218" width="14" height="72" rx="6" fill="#2d3436" />
      <rect x="208" y="218" width="14" height="72" rx="6" fill="#2d3436" />
      <ellipse cx="185" cy="292" rx="12" ry="6" fill="#2d3436" />
      <ellipse cx="215" cy="292" rx="12" ry="6" fill="#2d3436" />
      {/* Body */}
      <path d="M170 108 C167 128 164 158 166 218 L234 218 C236 158 233 128 230 108 Z" fill="rgba(255,255,255,0.2)" />
      {/* Left arm raised */}
      <path d="M170 118 C150 105 135 82 140 58" stroke="rgba(255,255,255,0.2)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <ellipse cx="138" cy="52" rx="8" ry="7" fill="#f0c8a0" transform="rotate(-20 138 52)" />
      {/* Right arm raised */}
      <path d="M230 118 C250 102 262 78 256 54" stroke="rgba(255,255,255,0.2)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <ellipse cx="258" cy="48" rx="8" ry="7" fill="#f0c8a0" transform="rotate(15 258 48)" />
      {/* Neck */}
      <rect x="193" y="80" width="14" height="24" rx="6" fill="#f0c8a0" />
      {/* Head */}
      <ellipse cx="200" cy="58" rx="26" ry="28" fill="#f0c8a0" />
      {/* Hair */}
      <path d="M174 50 C174 30 186 20 200 20 C214 20 226 30 226 50 C226 44 222 32 200 32 C178 32 174 44 174 50 Z" fill="#6c5ce7" />
      {/* Eyes - happy squint */}
      <path d="M188 52 Q192 48 196 52" stroke="#2d3436" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M204 52 Q208 48 212 52" stroke="#2d3436" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Big smile */}
      <path d="M188 66 Q200 78 212 66" stroke="#c0785c" strokeWidth="2" fill="#e17055" opacity="0.5" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="183" cy="62" rx="7" ry="4" fill="#fab1a0" opacity="0.5" />
      <ellipse cx="217" cy="62" rx="7" ry="4" fill="#fab1a0" opacity="0.5" />
      {/* Sparkles */}
      <path d="M130 35 L133 25 L136 35 L146 38 L136 41 L133 51 L130 41 L120 38 Z" fill="#ffeaa7" opacity="0.8">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M258 30 L260 23 L262 30 L269 32 L262 34 L260 41 L258 34 L251 32 Z" fill="#ffeaa7" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>
      {/* Heart */}
      <path d="M270 80 C270 77 273 74 276 77 C279 74 282 77 282 80 C282 84 276 89 276 89 C276 89 270 84 270 80 Z" fill="#ff7675" opacity="0.8">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

// ==================== Particle Background ====================

export function ParticleBackground() {
  const particles = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${(i * 2.1 + Math.sin(i) * 30 + 50) % 100}%`,
    top: `${(i * 3.7 + Math.cos(i) * 20 + 50) % 100}%`,
    size: (i % 3) + 1,
    opacity: 0.15 + (i % 5) * 0.08,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full bg-white"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity }} />
      ))}
    </div>
  );
}

// ==================== Floating Shapes (cover panel bg circles) ====================

export function CoverBgShapes() {
  return (
    <>
      <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-white/10" />
      <div className="absolute top-24 right-20 w-16 h-16 rounded-full bg-white/8" />
      <div className="absolute bottom-16 left-8 w-20 h-20 rounded-full bg-white/10" />
      <div className="absolute bottom-8 right-12 w-10 h-10 rounded-full bg-white/8" />
      <div className="absolute top-1/2 left-4 w-8 h-8 rounded-full bg-white/10" />
    </>
  );
}

// ==================== Password Strength ====================

export function getPasswordStrength(password: string) {
  if (!password) return { score: 0, label: '', color: '#e5e7eb', width: '0%' };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 1) return { score, label: 'Weak', color: '#ef4444', width: '20%' };
  if (score <= 2) return { score, label: 'Fair', color: '#f97316', width: '40%' };
  if (score <= 3) return { score, label: 'Good', color: '#eab308', width: '60%' };
  if (score <= 4) return { score, label: 'Strong', color: '#22c55e', width: '80%' };
  return { score, label: 'Very Strong', color: '#16a34a', width: '100%' };
}

// ==================== Auth Input ====================

export interface AuthInputProps {
  id: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  togglePassword?: () => void;
  showPassword?: boolean;
  autoComplete?: string;
}

export function AuthInput({ id, type, placeholder, icon, value, onChange, error, togglePassword, showPassword, autoComplete }: AuthInputProps) {
  return (
    <div className="w-full isolate">
      <div className={`flex items-center gap-3 border rounded-xl px-4 h-12 bg-white transition-all duration-200 w-full min-w-0 overflow-hidden ${error ? 'border-red-400 ring-1 ring-red-200' : 'border-gray-200 focus-within:border-[#667eea] focus-within:ring-2 focus-within:ring-[#667eea]/15'}`}>
        <span className="text-gray-400 flex-shrink-0 leading-none">{icon}</span>
        <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}
          autoComplete={autoComplete}
          style={{ fontSize: '16px' }}
          className="flex-1 min-w-0 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent border-none shadow-none appearance-none" />
        {togglePassword && (
          <button type="button" onClick={togglePassword}
            className="text-gray-400 hover:text-[#667eea] transition-colors flex-shrink-0 leading-none" tabIndex={-1}>
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        )}
      </div>
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1 ml-1">{error}</motion.p>
      )}
    </div>
  );
}

// ==================== Social Buttons ====================

export function SocialLoginButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button type="button" aria-label="Google"
        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
        <Chrome size={19} className="text-gray-500" />
      </button>
      <button type="button" aria-label="Facebook"
        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
        <svg viewBox="0 0 24 24" width="19" height="19" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>
      <button type="button" aria-label="Apple"
        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
        <Apple size={19} className="text-gray-500" />
      </button>
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-gray-400 font-medium whitespace-nowrap">Or continue with</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
