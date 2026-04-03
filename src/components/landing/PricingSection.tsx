'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star, Zap, Building2, Users } from 'lucide-react';

const plans = [
  {
    name: 'Healthcare Professionals',
    price: '£0',
    period: '/month',
    desc: 'Complete access to job opportunities',
    icon: Users,
    features: ['Unlimited job applications', 'Profile management', 'Compliance tracking'],
    btn: 'Join Free',
    popular: false,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Small Care Providers',
    price: '£299',
    period: '/month',
    desc: 'Perfect for care homes and small clinics',
    icon: Building2,
    features: ['Up to 50 staff members', 'Basic compliance tracking', 'Email support', 'Shift scheduling'],
    btn: 'Start Trial',
    popular: false,
    accent: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Medium Providers',
    price: '£699',
    period: '/month',
    desc: 'Ideal for multi-site operations',
    icon: Zap,
    features: ['Up to 200 staff members', 'Advanced analytics', 'Priority support', 'Custom integrations'],
    btn: 'Start Trial',
    popular: true,
    accent: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Large NHS Trusts',
    price: 'Custom',
    period: ' pricing',
    desc: 'Enterprise solutions for large trusts',
    icon: Star,
    features: ['Unlimited staff members', 'Dedicated account manager', '24/7 priority support', 'Custom development'],
    btn: 'Contact Sales',
    popular: false,
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function PricingSection() {
  const { navigateTo } = useAppStore();

  return (
    <section className="py-[110px] relative overflow-hidden" style={{ background: '#F8FAFD' }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.028) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Top radial */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[580px] mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[12px] font-semibold text-blue-700 mb-5">
            Pricing
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.65rem)] font-bold text-slate-900 tracking-[-0.025em] mb-4 leading-[1.15]">
            Transparent Pricing for Every Healthcare Provider
          </h2>
          <p className="text-[16px] text-slate-500 leading-[1.7]">
            Choose the plan that fits your organization&apos;s needs
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } },
              }}
              whileHover={{
                y: p.popular ? -10 : -6,
                boxShadow: p.popular
                  ? '0 28px 64px rgba(37,99,235,0.22)'
                  : '0 16px 40px rgba(0,0,0,0.1)',
                transition: { type: 'spring', stiffness: 300, damping: 18 },
              }}
              className={`group relative flex flex-col rounded-2xl overflow-hidden cursor-default ${
                p.popular
                  ? 'border-2 border-blue-400/60 shadow-[0_0_0_4px_rgba(37,99,235,0.08),0_12px_40px_rgba(37,99,235,0.18)] bg-white'
                  : 'border border-slate-200/80 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]'
              }`}
            >
              {/* Popular: animated shimmer top bar */}
              {p.popular ? (
                <div className="relative h-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500" />
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                </div>
              ) : (
                <div className="h-1 bg-transparent group-hover:bg-slate-100" />
              )}

              <div className="p-6 flex-1 flex flex-col">
                {p.popular && (
                  <div className="mb-4">
                    <motion.span
                      animate={{ opacity: [0.85, 1, 0.85] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center text-[10.5px] font-bold px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full uppercase tracking-wider shadow-sm"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${p.popular ? 'bg-blue-600' : 'bg-slate-100'}`}
                >
                  <p.icon className={`w-5 h-5 ${p.popular ? 'text-white' : 'text-slate-400'}`} />
                </motion.div>

                <h3 className="text-[14px] font-semibold text-slate-900 mb-1.5">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className={`text-[28px] font-bold tracking-[-0.025em] ${p.popular ? 'text-blue-600' : 'text-slate-900'}`}>
                    {p.price}
                  </span>
                  <span className="text-[13px] text-slate-400">{p.period}</span>
                </div>
                <p className="text-[13px] text-slate-500 mb-5 leading-relaxed">{p.desc}</p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.features.map((f, fi) => (
                    <motion.li
                      key={fi}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + fi * 0.06, duration: 0.35 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] ${p.popular ? 'bg-blue-100' : 'bg-slate-100'}`}>
                        <Check className={`w-2.5 h-2.5 ${p.popular ? 'text-blue-600' : 'text-slate-500'}`} />
                      </div>
                      <span className="text-[13px] text-slate-600 leading-snug">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={() => navigateTo('signup')}
                    className={`w-full rounded-xl h-[44px] text-[13px] font-semibold mt-auto transition-all ${
                      p.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.4)]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {p.btn}
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </motion.div>
              </div>

              {/* Bottom accent line — sweeps in on hover like FeaturesSection */}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${p.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
