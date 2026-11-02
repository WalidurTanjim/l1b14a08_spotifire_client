import React from 'react';
import { Sparkles, MapPin, Users, Sliders, GalleryVerticalEnd } from 'lucide-react';

export default function AboutUs() {
     return (
          <section id='about-us' className="w-full bg-[#0a0a0a] text-white py-20">
               <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                         {/* Left Heading Box */}
                         <div className="lg:col-span-4 flex flex-col justify-between p-2">
                              <div>
                                   {/* Small top icon/badge */}
                                   <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center mb-8">
                                        <GalleryVerticalEnd className="w-4 h-4 text-white" />
                                   </div>

                                   {/* Main Section Title */}
                                   <h2 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[0.95] uppercase">ABOUT<br />US</h2>
                              </div>
                         </div>

                         {/* Right Bento Grid */}
                         <div className="lg:col-span-8 flex flex-col gap-6">

                              {/* Top Large Card: CREATIVE SPACES & GEAR */}
                              <div className="relative overflow-hidden rounded-3xl bg-[#121212] border border-neutral-800 p-8 md:p-10 flex flex-col justify-between min-h-65">
                                   {/* Top Row: Title + Paragraph */}
                                   <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                                        <h3 className="text-xl md:text-2xl font-mono font-bold tracking-wider uppercase text-white">CREATIVE SPACES</h3>
                                        <p className="text-xs md:text-sm text-neutral-400 max-w-md leading-relaxed">A high-performance peer-to-peer marketplace connecting studio owners with filmmakers, photographers, podcasters, and musicians. From cyc walls to recording suites, book the space you need instantly.</p>
                                   </div>

                                   {/* Bottom Row: Circular Brand/Category Badges */}
                                   <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800/60">
                                        {/* Active Highlight Badge */}
                                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-lime-400/20">
                                             <GalleryVerticalEnd className="w-5 h-5 fill-black" />
                                        </div>

                                        {/* Circular Category / Partner Pills */}
                                        <div className="py-2 px-5 rounded-md border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-[10px] md:text-xs font-mono font-semibold tracking-tighter text-neutral-300">CYC WALLS</div>
                                        <div className="py-2 px-5 rounded-md border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-[10px] md:text-xs font-mono font-semibold tracking-tighter text-neutral-300">PODCAST</div>
                                        <div className="py-2 px-5 rounded-md border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-[10px] md:text-xs font-mono font-semibold tracking-tighter text-neutral-300">SOUNDSTAGE</div>
                                        <div className="py-2 px-5 rounded-md border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-[10px] md:text-xs font-mono font-semibold tracking-tighter text-neutral-300">SUITES</div>
                                        <div className="py-2 px-5 rounded-md border border-neutral-700 bg-neutral-900/80 flex items-center justify-center text-[10px] md:text-xs font-mono font-semibold tracking-tighter text-neutral-300">WORKSHOPS</div>
                                   </div>

                                   {/* Bottom Subtle Gradient Glow */}
                                   <div className="absolute -bottom-10 right-0 w-72 h-36 bg-lime-500/10 blur-3xl pointer-events-none rounded-full" />
                              </div>

                              {/* Bottom Row: Two Equal Bento Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                   {/* Bottom Left Card: FLEXIBLE LOCATIONS */}
                                   <div className="relative overflow-hidden rounded-3xl bg-[#121212] border border-neutral-800 p-8 flex flex-col justify-between min-h-70">
                                        {/* Curtain/Visual Side Overlay */}
                                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-amber-900/40 via-amber-950/20 to-transparent border-r border-amber-900/30 flex items-center justify-center">
                                             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                                                  <MapPin className="w-5 h-5 text-black" />
                                             </div>
                                        </div>

                                        <div className="pl-20">
                                             <div className="flex justify-end mb-8">
                                                  <h3 className="text-xl font-mono font-bold tracking-wider uppercase text-white">LOCATIONS</h3>
                                             </div>

                                             <p className="text-xs text-neutral-400 leading-relaxed font-sans">Find and filter creative environments near you or anywhere your project takes you. Inspect real-time availability and lock in exact hourly slots.</p>
                                        </div>
                                   </div>

                                   {/* Bottom Right Card: CREATOR COMMUNITY */}
                                   <div className="relative overflow-hidden rounded-3xl bg-[#121212] border border-neutral-800 p-8 flex flex-col justify-between min-h-70">
                                        <div>
                                             <h3 className="text-xl font-mono font-bold tracking-wider uppercase text-white mb-6">OUR COMMUNITY</h3>

                                             <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">We empower studio hosts to monetize their spaces while giving creators seamless access to world-class facilities with zero surprise fees.</p>

                                             {/* Badges / Pill Tags */}
                                             <div className="flex items-center gap-2 mb-4">
                                                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-mono font-medium">creators</span>
                                                  <span className="text-amber-500 font-mono font-bold">+</span>
                                                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-mono font-medium">hosts</span>
                                             </div>

                                             <p className="text-[11px] text-neutral-500 font-mono">transparent pricing + real-time booking</p>
                                        </div>

                                        {/* Bottom Soft Glow */}
                                        <div className="absolute -bottom-10 -right-10 w-48 h-24 bg-lime-500/10 blur-2xl pointer-events-none rounded-full" />
                                   </div>

                              </div>

                         </div>

                    </div>
               </div>
          </section>
     );
}