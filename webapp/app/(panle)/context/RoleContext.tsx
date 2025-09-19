"use client"
import { createContext, ReactNode, useContext, useState } from "react"

interface RoleContextType {
    role: string[]
    setRole: (Role: RolesTypes) => void
}
type RolesTypes = string[]
const RoleContext = createContext<RoleContextType | undefined>(undefined);


export function RoleProvider({ children }: { children: ReactNode }) {
    const [role, setRole] = useState<RolesTypes>(null)

    return <RoleContext.Provider value={{ role, setRole }}>   {children}</RoleContext.Provider>

}

export const useRole = () => {
    const context = useContext(RoleContext);
    if (!context) throw new Error("useRole must be used within a RoleProvider");
    return context
}