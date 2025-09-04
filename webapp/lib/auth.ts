import { jwtDecode } from "jwt-decode";
interface Idecode {
    id: string,
    role: string[], exp: number, iat: number
}
export const getAuthClient = () => {
    if (typeof window === "undefined") return [];
    const token = document?.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    if (!token) return ["admin"]

    const decode: Idecode = jwtDecode(token)
    return decode.role

}


