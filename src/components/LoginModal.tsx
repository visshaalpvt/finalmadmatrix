import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
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
import { User, Building2, Phone, Mail, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// ✅ Google Apps Script Web App URL — Version 6, "Anyone" access
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzq0Hk7AgXE8QyvtBnF3_tkxHRLiZDLODCYBTODVfrikQWYcjusXmeKCM2v3aTgpcZa/exec';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const { login, pendingProtocol } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        phone: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    /**
     * ✅ HIDDEN FORM SUBMIT METHOD — bypasses CORS completely
     */
    const sendToSheet = (data: typeof formData) => {
        try {
            const iframeName = 'hidden_sheet_iframe';
            let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = iframeName;
                iframe.name = iframeName;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = APPS_SCRIPT_URL;
            form.target = iframeName;

            const fields: Record<string, string> = {
                name: data.name,
                college: data.college,
                phone: data.phone,
                email: data.email,
                protocol: pendingProtocol || "General Interest",
                timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            };

            Object.entries(fields).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();

            setTimeout(() => {
                document.body.removeChild(form);
            }, 1000);

            console.log('✅ Data sent to GAS via hidden form');
        } catch (err) {
            console.error('Sheet submit error:', err);
        }
    };




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Save locally first
            login(formData);

            // 2. Send to Google Sheet (hidden form — bypasses all CORS)
            sendToSheet(formData);

            toast.success("🔐 Access granted! Launching registration form...", {
                description: "Your details have been secured. Redirecting now."
            });

            // 3. Close modal — the calling component will handle redirection via useEffect
            setTimeout(() => {
                onClose();
            }, 1000);

        } catch (error: any) {
            toast.error("Submission failed. Please try again.");
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[420px] w-[92%] max-h-[95vh] overflow-y-auto bg-background/90 backdrop-blur-2xl border-matrix-red/20 shadow-[0_0_40px_rgba(255,0,0,0.2)] rounded-2xl p-5 sm:p-8">
                <DialogHeader className="space-y-2">
                    <div className="flex justify-center mb-2 sm:mb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-matrix-red/10 border border-matrix-red/30 flex items-center justify-center">
                            <User className="w-6 h-6 sm:w-8 sm:h-8 text-matrix-red" />
                        </div>
                    </div>
                    <DialogTitle className="text-xl sm:text-3xl font-poster text-center tracking-tight text-foreground">
                        REGISTRATION
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground font-matrix text-[9px] sm:text-[11px] uppercase tracking-[0.2em]">
                        Enter credentials to proceed
                    </DialogDescription>
                </DialogHeader>


                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-8">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div className="space-y-1 sm:space-y-2">
                            <Label htmlFor="name" className="text-[9px] sm:text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="pl-9 sm:pl-10 h-10 sm:h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix text-xs sm:text-base"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                            <Label htmlFor="college" className="text-[9px] sm:text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Institution</Label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
                                <Input
                                    id="college"
                                    type="text"
                                    placeholder="Your College"
                                    className="pl-9 sm:pl-10 h-10 sm:h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix text-xs sm:text-base"
                                    value={formData.college}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1 sm:space-y-2">
                                <Label htmlFor="phone" className="text-[9px] sm:text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Phone</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        className="pl-9 sm:pl-10 h-10 sm:h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix text-xs sm:text-base"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1 sm:space-y-2">
                                <Label htmlFor="email" className="text-[9px] sm:text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 sm:h-4 w-3.5 sm:w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="pl-9 sm:pl-10 h-10 sm:h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix text-xs sm:text-base"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-matrix-red text-black font-matrix font-bold tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(255,0,0,0.2)] mt-2 sm:mt-4"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                        ) : (
                            <span className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                                PROCEED TO REGISTER <ArrowRight className="w-4 h-4" />
                            </span>
                        )}
                    </Button>
                </form>


                <p className="text-center text-[9px] text-muted-foreground mt-8 font-matrix uppercase tracking-[0.3em] opacity-60">
                    Sankalp 2026 • Secure Data Transfer Protocol Enabled
                </p>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
