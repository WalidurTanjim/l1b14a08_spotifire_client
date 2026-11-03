"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const [profileMenuOpen, setProfileMenuOpen] = useState(false);
     const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

     const profileMenuRef = useRef<HTMLDivElement>(null);

     const navItems = [
          { path: "Home", href: "/" },
          { path: "Explore Studios", href: "/studios" },
          { path: "How It Works", href: "#how-it-works" },
          { path: "About Us", href: "#about-us" }
     ];

     const pathname = usePathname();
     const { data, isPending } = authClient.useSession();
     console.log("Session:", data, isPending);

     const user = data?.user;
     const userName = user?.name || user?.email || "U";
     const firstLetter = userName.charAt(0).toUpperCase();

     // Close desktop profile dropdown on outside click
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                    setProfileMenuOpen(false);
               }
          };
          document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside);
     }, []);

     return (
          <nav className="bg-white px-5 md:px-8 lg:px-12 xl:px-20 w-full max-w-7xl mx-auto py-4 flex items-center justify-between relative">
               <Link href="/" className='text-lg font-semibold text-slate-700'>Spotifire</Link>

               {/* Desktop Navigation Links */}
               <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                    {navItems.map((item, idx) => (
                         <Link key={idx} href={item?.href} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${item?.href === pathname ? 'bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600' : 'text-zinc-500 hover:text-zinc-400'}`}>{item?.path}</Link>
                    ))}
               </div>

               {/* Desktop Signin/Signup Buttons or User Profile Dropdown */}
               <div className='hidden md:flex items-center gap-2.5 relative' ref={profileMenuRef}>
                    {isPending ? (
                         <div className="w-9 h-9 rounded-full bg-zinc-200 animate-pulse" />
                    ) : user ? (
                         <div>
                              <button
                                   onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                                   className="flex items-center gap-2 focus:outline-none cursor-pointer"
                              >
                                   {user?.image ? (
                                        <img src={user.image} alt={userName} className="w-9 h-9 rounded-full object-cover border border-zinc-200" />
                                   ) : (
                                        <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold">{firstLetter}</div>
                                   )}
                              </button>

                              {/* large device profile menu */}
                              {profileMenuOpen && (
                                   <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-md shadow-lg flex flex-col z-50 pb-1.5">
                                        <div className="px-4 py-2 border-b border-zinc-100 bg-gray-100 hover:cursor-not-allowed">
                                             <p className="text-sm text-slate-700 ">{user?.name}</p>
                                             <p className="text-xs text-zinc-500 font-medium truncate">{user?.email}</p>
                                        </div>
                                        <Link href="/add-studio" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 px-4 py-2">Add New Studio</Link>
                                        <Link href="/my-listings" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 px-4 py-2">My Studio Listings</Link>
                                        <Link href="/my-bookings" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 px-4 py-2">My Bookings</Link>
                                        <Link href="/wishlist" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 px-4 py-2">Saved Wishlist</Link>
                                        <button onClick={async () => {
                                                  setProfileMenuOpen(false);
                                                  await authClient.signOut();
                                             }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-zinc-50 transition-colors cursor-pointer">Signout</button>
                                   </div>
                              )}
                         </div>
                    ) : (
                         <>
                              <Link href="/signin" className="flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-5 py-2 rounded-lg transition-colors">Signin</Link>
                              <Link href="/signup" className="flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-zinc-50 text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm">Signup</Link>
                         </>
                    )}
               </div>

               {/* Mobile Hamburger Button */}
               <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1" aria-label="Toggle Menu">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
               </button>

               {/* Mobile Dropdown Menu */}
               {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 shadow-lg flex flex-col p-5 gap-3 md:hidden z-50">
                         {navItems.map((item, idx) => (
                              <Link key={idx} href={item?.href} onClick={() => setMenuOpen(false)} className={`px-4 py-2 rounded-lg text-sm transition-colors ${item?.href === pathname ? 'bg-zinc-100 font-medium text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`}>{item?.path}</Link>
                         ))}

                         <div className="h-px bg-zinc-100 my-1" />

                         {/* Mobile Signin/Signup or Profile Section */}
                         {isPending ? (
                              <div className="w-full h-10 rounded-lg bg-zinc-100 animate-pulse" />
                         ) : user ? (
                              <div className="flex flex-col gap-2 w-full">
                                   <button onClick={() => setMobileProfileOpen(!mobileProfileOpen)} className="flex items-center justify-between w-full p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 cursor-pointer">
                                        <div className="flex items-center gap-3">
                                             {user?.image ? (
                                                  <img src={user.image} alt={userName} className="w-8 h-8 rounded-full object-cover" />
                                             ) : (
                                                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-medium">{firstLetter}</div>
                                             )}
                                             <span className="text-sm font-medium text-zinc-800 truncate max-w-45">{userName}</span>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${mobileProfileOpen ? 'rotate-180' : ''}`} />
                                   </button>

                                   {/* small & medium device profile menu */}
                                   {mobileProfileOpen && (
                                        <div className="flex flex-col pl-4 gap-2 border-l-2 border-zinc-200 my-1">
                                             <Link href="/add-studio" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 py-1">Add New Studio</Link>
                                             <Link href="/my-listings" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 py-1">My Studio Listings</Link>
                                             <Link href="/my-bookings" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 py-1">My Bookings</Link>
                                             <Link href="/wishlist" onClick={() => { setMenuOpen(false); setMobileProfileOpen(false); }} className="text-sm text-zinc-600 hover:text-zinc-900 py-1">Saved Wishlist</Link>
                                             <button onClick={async () => {
                                                       setMenuOpen(false);
                                                       setMobileProfileOpen(false);
                                                       await authClient.signOut();
                                                  }} className="text-sm text-left text-red-600 hover:text-red-700 py-1 cursor-pointer">Signout</button>
                                        </div>
                                   )}
                              </div>
                         ) : (
                              <div className='flex items-center gap-3 w-full'>
                                   <Link
                                        href="/signin"
                                        onClick={() => setMenuOpen(false)}
                                        className="flex-1 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium py-2.5 rounded-lg transition-colors"
                                   >
                                        Signin
                                   </Link>
                                   <Link
                                        href="/signup"
                                        onClick={() => setMenuOpen(false)}
                                        className="flex-1 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-zinc-50 text-sm font-medium py-2.5 rounded-lg transition-colors"
                                   >
                                        Signup
                                   </Link>
                              </div>
                         )}
                    </div>
               )}
          </nav>
     );
};

export default Navbar;