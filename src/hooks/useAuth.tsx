import React, { createContext, useContext, useEffect, useState } from 'react';

interface UserData {
    name: string;
    college: string;
    phone: string;
    email: string;
}

interface AuthContextType {
    user: UserData | null;
    loading: boolean;
    login: (data: UserData) => void;
    logout: () => void;
    pendingLink: string | null;
    setPendingLink: (link: string | null) => void;
    pendingProtocol: string | null;
    setPendingProtocol: (protocol: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [pendingLink, setPendingLink] = useState<string | null>(null);
    const [pendingProtocol, setPendingProtocol] = useState<string | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('madmatrix_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (data: UserData) => {
        setUser(data);
        localStorage.setItem('madmatrix_user', JSON.stringify(data));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('madmatrix_user');
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            logout,
            pendingLink,
            setPendingLink,
            pendingProtocol,
            setPendingProtocol
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

