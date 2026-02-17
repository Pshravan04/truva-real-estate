"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, name: string) => void;
    register: (email: string, name: string) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for user in localStorage on mount
        const storedUser = localStorage.getItem("truva_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, name: string) => {
        const newUser = { id: Math.random().toString(36).substr(2, 9), email, name };
        setUser(newUser);
        localStorage.setItem("truva_user", JSON.stringify(newUser));
    };

    const register = (email: string, name: string) => {
        const newUser = { id: Math.random().toString(36).substr(2, 9), email, name };
        setUser(newUser);
        localStorage.setItem("truva_user", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("truva_user");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
