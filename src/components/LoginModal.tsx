import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, Mail, Lock, Chrome, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Signed in with Google successfully!");
            onClose();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success("Account created successfully!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Logged in successfully!");
            }
            onClose();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[400px] w-[95%] max-h-[90vh] overflow-y-auto bg-background/80 backdrop-blur-xl border-matrix-red/20 shadow-[0_0_50px_rgba(255,0,0,0.15)] rounded-2xl scale-95 sm:scale-100 transition-transform">
                <DialogHeader>
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-matrix-red/10 border border-matrix-red/30 flex items-center justify-center">
                            <LogIn className="w-6 h-6 text-matrix-red animate-pulse" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl font-poster text-center tracking-tight text-foreground">
                        {isSignUp ? "Create Secure Access" : "Matrix Authentication"}
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground font-matrix text-[10px] uppercase tracking-widest">
                        {isSignUp ? "Join the system network" : "Authorized personnel only"}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleEmailAuth} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-matrix text-matrix-red/60 uppercase">Email Protocol</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@domain.com"
                                className="pl-10 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" title="Encrypted Key" className="text-xs font-matrix text-matrix-red/60 uppercase">Passkey</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-matrix-red to-matrix-maroon hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all font-matrix font-bold tracking-widest py-6 rounded-xl overflow-hidden group relative"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <span className="relative z-10 flex items-center gap-2">
                                {isSignUp ? "SIGN UP" : "LOGIN"}
                            </span>
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-matrix-red/10"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground font-matrix text-[9px] tracking-widest">Or Bridge Via</span>
                    </div>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full border-matrix-red/20 hover:bg-matrix-red/5 hover:border-matrix-red transition-all py-6 rounded-xl flex items-center gap-3 font-matrix text-xs tracking-widest"
                >
                    <Chrome className="w-5 h-5 text-matrix-red" />
                    SIGN IN WITH GOOGLE
                </Button>

                <p className="text-center text-[10px] text-muted-foreground mt-6 font-matrix uppercase tracking-[0.2em]">
                    {isSignUp ? "Already registered?" : "New to the matrix?"} {" "}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-matrix-red hover:underline underline-offset-4"
                    >
                        {isSignUp ? "Back to Login" : "Request Access"}
                    </button>
                </p>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
