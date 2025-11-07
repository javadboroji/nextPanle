"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface RoleContextType {
    role: string[]
    setRole: (Role: RolesTypes) => void
}
type RolesTypes = string[]
const RoleContext = createContext<RoleContextType | undefined>(undefined);


export function RoleProvider({ children }: { children: ReactNode }) {
    const [role, setRole] = useState<RolesTypes>([])
    const setRoleLocalStorage = (roles: string[]) => {
        setRole(roles)
        localStorage.setItem("roles", JSON.stringify(roles))
    }
    useEffect(() => {
        const saved = localStorage.getItem("roles")
        if (saved) {
            try {
                setRole(JSON.parse(saved))
            } catch {
                setRole([])
            }
        }
    }, [])
    return <RoleContext.Provider value={{ role, setRole:setRoleLocalStorage }}>   {children}</RoleContext.Provider>

}

export const useRole = () => {
    const context = useContext(RoleContext);
    if (!context) throw new Error("useRole must be used within a RoleProvider");
    return context
}