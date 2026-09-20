import { NextRequest, NextResponse } from 'next/server';
import { explainScreenImage, validateScreenImage } from '@/lib/screenExplainer';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const sampleId = formData.get('sampleId') as string | null;

      if (sampleId) {
        const explanation = await explainScreenImage('sample.png', sampleId);
        return NextResponse.json(explanation);
      }

      if (!file) {
        return NextResponse.json(
          { error: 'No image file provided.' },
          { status: 400 }
        );
      }

      const validation = validateScreenImage({
        name: file.name,
        type: file.type,
        size: file.size,
      });

      if (!validation.isValid) {
        return NextResponse.json({ error: validation.error }, { status: 400 });
      }

      const explanation = await explainScreenImage(file.name);
      return NextResponse.json(explanation);
    }

    // JSON fallback for client simulation
    const json = await req.json();
    const explanation = await explainScreenImage(json.fileName || 'screen.png', json.sampleId);
    return NextResponse.json(explanation);
  } catch (error) {
    console.error('Error in /api/explain-screen:', error);
    return NextResponse.json(
      {
        screenTitle: 'Civic Service Portal Screen',
        summary: 'This screen asks for demographic or document information. Please verify instructions on the official portal.',
        requiredFields: [],
        terminologyDefinitions: [],
        nextAction: 'Ensure all mandatory information is entered before submitting.',
        cautionPoints: ['Never share passwords or OTPs.'],
        disclaimer: 'AI-generated screen explanations may be incomplete. Cross-verify with official instructions.',
      },
      { status: 200 }
    );
  }
}
