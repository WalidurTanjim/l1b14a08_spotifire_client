import React from 'react';
import { Search, Calendar, Zap, Sparkles, ArrowRight } from 'lucide-react';

interface StepItem {
     number: string;
     title: string;
     description: string;
     icon: React.ReactNode;
     iconBgColor: string;
     iconColor: string;
}

const steps: StepItem[] = [
     {
          number: '01',
          title: 'Discover Spaces',
          description:
               'Filter verified cyc walls, podcast lounges, soundstages gear inventory, and creator reviews.',
          icon: <Search className="w-5 h-5" />,
          iconBgColor: 'bg-amber-100/70 dark:bg-amber-950/40',
          iconColor: 'text-amber-600 dark:text-amber-400',
     },
     {
          number: '02',
          title: 'Select Shoot Hours',
          description:
               'Inspect live calendar availability and review transparent breakdown rates with zero surprise fees.',
          icon: <Calendar className="w-5 h-5" />,
          iconBgColor: 'bg-sky-100/70 dark:bg-sky-950/40',
          iconColor: 'text-sky-600 dark:text-sky-400',
     },
     {
          number: '03',
          title: 'Book Instantly',
          description:
               'Lock in your reservation with double-booking collision prevention and downloadable invoice vouchers.',
          icon: <Zap className="w-5 h-5" />,
          iconBgColor: 'bg-emerald-100/70 dark:bg-emerald-950/40',
          iconColor: 'text-emerald-600 dark:text-emerald-400',
     },
     {
          number: '04',
          title: 'Create & Produce',
          description:
               'Arrive at the stage with verified access codes and bring your vision to life.',
          icon: <Sparkles className="w-5 h-5" />,
          iconBgColor: 'bg-purple-100/70 dark:bg-purple-950/40',
          iconColor: 'text-purple-600 dark:text-purple-400',
     },
];

export default function HowDoesWorks() {
     return (
          <section id="how-it-works" className="relative py-20  bg-neutral-50/50 dark:bg-neutral-950 overflow-hidden">
               {/* Background Soft Glow */}
               <div className="absolute inset-0 bg-linear-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />

               <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20 relative z-10">
                    {/* Header Section */}
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                         <span className="text-xs font-bold tracking-widest text-amber-600 dark:text-amber-500 uppercase">FRICTIONLESS BOOKING</span>
                         <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">How StudioSpace Works</h2>
                         <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Four simple steps from pre-production concept to rolling camera in world-class creative facilities.</p>
                    </div>

                    {/* Steps Grid Container */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                         {steps.map((step, index) => (
                              <React.Fragment key={step.number}>
                                   {/* Card item */}
                                   <div className="group relative flex flex-col justify-between p-7 bg-white dark:bg-neutral-900/80 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div>
                                             {/* Top Header: Icon & Step Number */}
                                             <div className="flex items-center justify-between mb-8">
                                                  <div className={`p-3 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-115 ${step.iconBgColor} ${step.iconColor}`}>{step.icon}</div>
                                                  <span className="text-2xl font-bold text-neutral-300 dark:text-neutral-700 select-none">{step.number}</span>
                                             </div>

                                             {/* Step Content */}
                                             <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{step.title}</h3>
                                             <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">{step.description}</p>
                                        </div>
                                   </div>

                                   {/* Connecting Arrow for large screens */}
                                   {index < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center text-neutral-300 dark:text-neutral-700"
                                             style={{
                                                  left: `calc(${(index + 1) * 25}% - 12px)`
                                             }}
                                        >
                                             <ArrowRight className="w-5 h-5 stroke-[1.5]" />
                                        </div>
                                   )}
                              </React.Fragment>
                         ))}
                    </div>

                    {/* Action Button */}
                    {/* <div className="mt-14 text-center">
                         <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-medium text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group">
                              <span>Start Exploring Workspaces</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                         </button>
                    </div> */}
               </div>
          </section>
     );
}