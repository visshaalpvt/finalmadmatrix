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
     * Browser allows cross-origin form POST. Script executes. Data saved.
     * The form submits into a hidden iframe so the page doesn't navigate away.
     */
    const sendToSheet = (data: typeof formData) => {
        try {
            // Create a hidden iframe to absorb the form navigation
            const iframeName = 'hidden_sheet_iframe';
            let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = iframeName;
                iframe.name = iframeName;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            // Create a hidden form that POSTs to Apps Script
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = APPS_SCRIPT_URL;
            form.target = iframeName; // Submit into the hidden iframe

            // Add all fields
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
            form.submit(); // Submit in background — no CORS, no redirect issues!

            // Clean up the form element
            setTimeout(() => {
                document.body.removeChild(form);
            }, 1000);

            console.log('✅ Data sent to Google Sheet via hidden form:', { ...data, protocol: pendingProtocol });
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
            <DialogContent className="sm:max-w-[450px] w-[95%] max-h-[90vh] overflow-y-auto bg-background/80 backdrop-blur-xl border-matrix-red/20 shadow-[0_0_50px_rgba(255,0,0,0.15)] rounded-2xl scale-95 sm:scale-100 transition-transform p-8">
                <DialogHeader>
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-matrix-red/10 border-2 border-matrix-red/30 flex items-center justify-center">
                            <User className="w-8 h-8 text-matrix-red animate-pulse" />
                        </div>
                    </div>
                    <DialogTitle className="text-3xl font-poster text-center tracking-tight text-foreground">
                        REGISTRATION PORTAL
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground font-matrix text-[11px] uppercase tracking-[0.2em] mt-2">
                        Enter your credentials to proceed to the Matrix
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="pl-10 h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="college" className="text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">College / University</Label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="college"
                                    type="text"
                                    placeholder="Your Institution"
                                    className="pl-10 h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix"
                                    value={formData.college}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        className="pl-10 h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest pl-1">Email ID</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="pl-10 h-12 bg-black/40 border-matrix-red/10 focus:border-matrix-red focus:ring-matrix-red/20 transition-all rounded-xl font-matrix"
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
                        className="w-full h-14 bg-gradient-to-r from-matrix-red to-matrix-maroon hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all font-matrix font-bold tracking-[0.3em] rounded-xl overflow-hidden group relative"
                    >
                        {isLoading ? (
                            <Loader2 className="w-6 h-6 animate-spin text-white" />
                        ) : (
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                PROCEED TO REGISTER <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
