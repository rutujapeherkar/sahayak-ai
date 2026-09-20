import { NextRequest, NextResponse } from 'next/server';
import { AssistantRequest } from '@/types';
import { getAIProvider } from '@/lib/ai/provider';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AssistantRequest;
    if (!body || !body.message) {
      return NextResponse.json(
        { error: 'Message content is required' },
        { status: 400 }
      );
    }

    const provider = getAIProvider();
    const response = await provider.generateResponse(body);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in /api/assistant:', error);
    // Graceful fallback response: never leak internal stack traces to citizens
    return NextResponse.json(
      {
        message:
          'Sahayak AI is operating in offline guidance mode. We can help you explore services step-by-step.',
        detectedLanguage: 'en',
        detectedIntent: 'fallback',
        confidence: 1.0,
        type: 'understanding',
        actions: [{ type: 'read_aloud' }],
      },
      { status: 200 }
    );
  }
}
