import React from 'react';
import { ShieldCheck, UserCheck, PackageCheck, Headphones, CheckCircle2 } from 'lucide-react';

interface FeatureProps {
     title: string;
     description: string;
     icon: React.ElementType;
     highlights: string[];
}

const guarantees: FeatureProps[] = [
     {
          title: '$1M Liability Protection',
          description:
               'Comprehensive property and liability damage safeguards provided for every confirmed reservation.',
          icon: ShieldCheck,
          highlights: ['Property damage coverage', 'Third-party liability protection'],
     },
     {
          title: 'Verified Creator Profiles',
          description:
               'Multi-stage identity and background verification ensures trust between hosts and visiting crews.',
          icon: UserCheck,
          highlights: ['ID & government checks', 'Peer rating history'],
     },
     {
          title: 'Equipment & Space Safety',
          description:
               'Strict safety standards and venue protocols ensure smooth shoots and high-value gear protection.',
          icon: PackageCheck,
          highlights: ['Secure gear check-ins', 'Inspected stage setups'],
     },
     {
          title: '24/7 Creator & Host Support',
          description:
               'Dedicated support specialists available anytime via live chat or phone for urgent stage assistance.',
          icon: Headphones,
          highlights: ['Instant live chat', 'Dedicated dispute resolution'],
     },
];

export const HostGuarantee: React.FC = () => {
     return (
          <section className="w-full py-16 md:py-24 bg-linear-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 transition-colors relative overflow-hidden">
               {/* Background Decorative Soft Amber Glow */}
               <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

               <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                         <div className="max-w-xl">
                              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-400/10 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-400/20 inline-block mb-3">
                                   Trust & Security
                              </span>
                              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                                   Host Guarantee & Creator Support
                              </h2>
                              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                   We provide continuous protection, transparent workflows, and round-the-clock peace of mind so you can focus entirely on creating.
                              </p>
                         </div>

                         <div className="shrink-0">
                              <a
                                   href="#learn-more"
                                   className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-200 border border-zinc-800 dark:border-zinc-700/60 transition-colors shadow-sm"
                              >
                                   Learn about Creator Protection
                              </a>
                         </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {guarantees.map((item, index) => {
                              const Icon = item.icon;
                              return (
                                   <div
                                        key={index}
                                        className="bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-amber-500/40 dark:hover:border-amber-500/30 transition-all duration-300"
                                   >
                                        <div>
                                             <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-400/10 border border-amber-200/60 dark:border-amber-400/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
                                                  <Icon className="w-6 h-6 stroke-[1.8]" />
                                             </div>
                                             <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                                  {item.title}
                                             </h3>
                                             <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                                  {item.description}
                                             </p>
                                        </div>

                                        {/* Bullet Highlight List */}
                                        <div className="border-t border-zinc-100 dark:border-zinc-800/60 pt-4 space-y-2">
                                             {item.highlights.map((highlight, hIdx) => (
                                                  <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                                                       <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                                       <span>{highlight}</span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </section>
     );
};