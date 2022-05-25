import type { NextFetchEvent, NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // return new Response('Hello world')

    // posso pegar o cookie de autenticação

    // chamar alguma api

    return NextResponse.redirect('http:localhost:3000')
}