import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

const submissionTimestamps: Map<string, number[]> = new Map();
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(ip) || [];
  const recentTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );

  if (recentTimestamps.length >= RATE_LIMIT) {
    return false;
  }

  recentTimestamps.push(now);
  submissionTimestamps.set(ip, recentTimestamps);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Слишком много запросов. Попробуйте позже.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Неверные данные формы', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { honeypot, ...formData } = validation.data;

    if (honeypot) {
      console.log('Honeypot triggered:', ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    console.log('Contact form submission:', {
      ip,
      timestamp: new Date().toISOString(),
      data: formData
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
