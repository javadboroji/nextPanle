import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const protectedRoutes = ['/dashboard/users', '/dashboard/tasks' ,'/dashboard/roles']
export function middleware(req:NextRequest){
    
}