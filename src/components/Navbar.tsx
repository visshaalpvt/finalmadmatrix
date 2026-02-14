import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from './LoginModal';
import { Button } from './ui/button';
import SimatsLogo from './SimatsLogo';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Shield, Menu, X, LogIn } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Events', href: '#events' },
        { name: 'Location', href: '#location' },
        { name: 'Team', href: '#team-section' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? 'py-4 bg-background/60 backdrop-blur-xl border-b border-matrix-red/10'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <a href="#" className="flex items-center gap-2 group">
                    <SimatsLogo className="transition-all duration-500" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-matrix font-bold uppercase tracking-[0.4em] text-white/80 hover:text-matrix-red transition-all duration-300 relative group drop-shadow-md"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-matrix-red transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,0,0,0.5)]"></span>
                        </a>
                    ))}
                </div>

                {/* Auth Area */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-12 w-12 rounded-full p-0 border-2 border-matrix-red/30 hover:border-matrix-red transition-all bg-black/40">
                                    <Avatar className="h-10 w-10 border border-matrix-red/20">
                                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                                        <AvatarFallback className="bg-matrix-red/10 text-matrix-red font-matrix font-bold text-lg">
                                            {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-black/95 backdrop-blur-2xl border-matrix-red/30 rounded-xl mt-4 shadow-[0_0_30px_rgba(255,0,0,0.2)]" align="end">
                                <DropdownMenuLabel className="font-normal p-4">
                                    <div className="flex flex-col space-y-2">
                                        <p className="text-sm font-bold text-white uppercase tracking-tight">{user.displayName || 'Matrix User'}</p>
                                        <p className="text-[9px] font-matrix text-matrix-red font-bold uppercase truncate tracking-widest">{user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-matrix-red/20 mx-2" />
                                <DropdownMenuItem className="focus:bg-matrix-red focus:text-black cursor-pointer py-4 px-4 rounded-lg flex items-center gap-3 m-1 transition-all">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-[10px] font-matrix font-bold uppercase tracking-[0.2em]">Dashboard</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={logout}
                                    className="focus:bg-[#cc0000] focus:text-white text-matrix-red/80 cursor-pointer py-4 px-4 rounded-lg flex items-center gap-3 m-1 transition-all"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-[10px] font-matrix font-bold uppercase tracking-[0.2em]">Disconnect</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="bg-matrix-red text-black hover:bg-white hover:text-black transition-all duration-500 font-matrix font-black text-[10px] tracking-[0.2em] px-8 h-12 rounded-none shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            <LogIn className="w-4 h-4 mr-2" />
                            ACCESS SYSTEM
                        </Button>
                    )}

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-matrix-red/20 py-8 px-6 animate-in fade-in slide-in-from-top-4">
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs font-matrix uppercase tracking-[0.4em] text-foreground hover:text-matrix-red transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </nav>
    );
};

export default Navbar;
