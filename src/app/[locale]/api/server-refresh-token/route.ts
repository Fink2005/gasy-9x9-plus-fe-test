// app/api/auth/refresh-token/route.ts
import { createCookie, getCookie } from '@/app/actions/cookie';
import { NextResponse } from 'next/server';

export async function POST() {
  const refreshToken = await getCookie('refreshToken9x9');
  if (!refreshToken) {
    return NextResponse.json({ error: 'No refresh token' }, { status: 401 });
  }

  const res = await fetch(`${process.env.API_BASE_SERVER}/auth/refresh-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: 'Refresh token invalid' }, { status: 401 });
  }
  try {
    Promise.all([
      createCookie({
        name: 'accessToken9x9',
        value: data.accessToken,
      }),
      createCookie({
        name: 'refreshToken9x9',
        value: data.refreshToken,
      })
    ]);
  } catch (error) {
    console.error('Failed to set cookies:', error);
    return NextResponse.json({ error: 'Failed to set cookies' }, { status: 500 });
  }
  const response = NextResponse.json({ success: true });

  return response;
}
