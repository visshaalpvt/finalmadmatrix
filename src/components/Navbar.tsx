import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from './LoginModal';
import { Button } from './ui/button';
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
                    <div className="w-8 h-8 rounded bg-matrix-red/10 border border-matrix-red/30 flex items-center justify-center transition-all group-hover:bg-matrix-red/20 group-hover:border-matrix-red group-hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                        <span className="text-matrix-red font-poster text-xl">M</span>
                    </div>
                    <span className="text-foreground font-poster text-xl tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden w-0 group-hover:w-24">
                        MADMATRIX
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-matrix uppercase tracking-[0.3em] text-muted-foreground hover:text-matrix-red transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matrix-red transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Auth Area */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 border border-matrix-red/20 hover:border-matrix-red transition-all hover:bg-matrix-red/5">
                                    <Avatar className="h-9 w-9 border border-background/10">
                                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                                        <AvatarFallback className="bg-matrix-red/10 text-matrix-red font-matrix">
                                            {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-background/90 backdrop-blur-xl border-matrix-red/20 rounded-xl mt-2" align="end">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium text-foreground">{user.displayName || 'Matrix User'}</p>
                                        <p className="text-[10px] font-matrix text-matrix-red/60 uppercase truncate">{user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-matrix-red/10" />
                                <DropdownMenuItem className="focus:bg-matrix-red/5 focus:text-matrix-red cursor-pointer py-3 rounded-lg flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-xs font-matrix uppercase tracking-widest">Dashboard</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={logout}
                                    className="focus:bg-red-500/10 focus:text-red-500 text-muted-foreground cursor-pointer py-3 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-xs font-matrix uppercase tracking-widest">Disconnect</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="bg-transparent border border-matrix-red/30 text-matrix-red hover:bg-matrix-red hover:text-white transition-all duration-300 font-matrix text-[10px] tracking-widest px-6 h-10 rounded-full hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                        >
                            <LogIn className="w-3 h-3 mr-2" />
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
