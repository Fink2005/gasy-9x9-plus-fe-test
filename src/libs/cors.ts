// libs/cors.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface CorsOptions {
  origin?: string | string[] | boolean;
  methods?: string[];
  allowedHeaders?: string[];
  exposedHeaders?: string[];
  credentials?: boolean;
  maxAge?: number;
}

const defaultOptions: CorsOptions = {
  origin: true, // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'Cache-Control',
    'X-File-Name',
    'X-API-Key',
    'X-Client-ID'
  ],
  exposedHeaders: [
    'Content-Length',
    'Content-Type',
    'Date',
    'Server',
    'X-RateLimit-Limit',
    'X-RateLimit-Remaining'
  ],
  credentials: true,
  maxAge: 86400, // 24 hours
};

function isOriginAllowed(origin: string | null, allowedOrigin: string | string[] | boolean): boolean {
  if (!origin) {
    return false;
  }

  if (typeof allowedOrigin === 'boolean') {
    return allowedOrigin;
  }

  if (typeof allowedOrigin === 'string') {
    return origin === allowedOrigin;
  }

  if (Array.isArray(allowedOrigin)) {
    return allowedOrigin.includes(origin);
  }

  return false;
}

export function cors(request: NextRequest, response?: NextResponse, options: CorsOptions = {}): NextResponse | null {
  const opts = { ...defaultOptions, ...options };
  const origin = request.headers.get('origin');

  // Handle preflight OPTIONS requests
  if (request.method === 'OPTIONS') {
    const headers = new Headers();

    // Set origin
    if (opts.origin === true) {
      headers.set('Access-Control-Allow-Origin', '*');
    } else if (origin && isOriginAllowed(origin, opts.origin!)) {
      headers.set('Access-Control-Allow-Origin', origin);
      headers.set('Vary', 'Origin');
    }

    // Set other CORS headers
    headers.set('Access-Control-Allow-Methods', opts.methods!.join(', '));
    headers.set('Access-Control-Allow-Headers', opts.allowedHeaders!.join(', '));

    if (opts.credentials) {
      headers.set('Access-Control-Allow-Credentials', 'true');
    }

    if (opts.maxAge) {
      headers.set('Access-Control-Max-Age', opts.maxAge.toString());
    }

    return new NextResponse(null, { status: 200, headers });
  }

  // Handle actual requests
  if (response) {
    const headers = new Headers(response.headers);

    // Set origin
    if (opts.origin === true) {
      headers.set('Access-Control-Allow-Origin', '*');
    } else if (origin && isOriginAllowed(origin, opts.origin!)) {
      headers.set('Access-Control-Allow-Origin', origin);
      headers.set('Vary', 'Origin');
    }

    // Set exposed headers
    if (opts.exposedHeaders && opts.exposedHeaders.length > 0) {
      headers.set('Access-Control-Expose-Headers', opts.exposedHeaders.join(', '));
    }

    if (opts.credentials) {
      headers.set('Access-Control-Allow-Credentials', 'true');
    }

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return null;
}

// Configuration for different environments
export const corsConfig = {
  development: {
    origin: true, // Allow all origins in development
    credentials: true,
  },
  production: {
    origin: [
      'https://yourdomain.com',
      'https://www.yourdomain.com',
      // Add your production domains here
    ],
    credentials: true,
  },
};

// Helper function to get environment-specific config
export function getCorsConfig(): CorsOptions {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? corsConfig.development : corsConfig.production;
}
