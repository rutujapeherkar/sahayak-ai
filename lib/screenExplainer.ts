import { ScreenExplanation } from '@/types';
import { SAMPLE_SCREENS } from '@/data/demoScenarios';

export interface ImageValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateScreenImage(file: { type: string; size: number; name: string }): ImageValidationResult {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  if (!allowedTypes.includes(file.type.toLowerCase())) {
    return {
      isValid: false,
      error: 'Please upload a PNG, JPG, JPEG, or WebP image.',
    };
  }

  // Max 10MB
  const maxBytes = 10 * 1024 * 1024;
  if (file.size > maxBytes) {
    return {
      isValid: false,
      error: 'Image file size exceeds the 10MB limit. Please upload a smaller screenshot.',
    };
  }

  return { isValid: true };
}

export async function explainScreenImage(
  fileName: string,
  sampleId?: string
): Promise<ScreenExplanation> {
  // If user selected one of the curated civic portal demo samples
  if (sampleId) {
    const sample = SAMPLE_SCREENS.find((s) => s.id === sampleId);
    if (sample) {
      return sample.simulatedExplanation;
    }
  }

  // Realistic civic-tech interpretation for arbitrary uploaded portal screens
  const isPaymentRelated = /pay|challan|fee|gras|bill|upi/i.test(fileName);
  const isUploadRelated = /doc|upload|scan|pdf|file|cert/i.test(fileName);

  if (isPaymentRelated) {
    return {
      screenTitle: 'Statutory Citizen Fee Payment Gateway Screen',
      summary: 'This screen is asking you to settle the official government processing fee. It shows payment methods such as UPI, QR Code, or Net Banking.',
      requiredFields: [
        {
          fieldName: 'Select Payment Option',
          description: 'Choice of how to pay.',
          expectedInput: 'Choose "UPI / QR Code" for quick and zero-surcharge settlement.',
        },
        {
          fieldName: 'Security Captcha',
          description: 'Letters shown in the security box.',
          expectedInput: 'Type the exact characters displayed in the image.',
        },
      ],
      terminologyDefinitions: [
        {
          term: 'Challan / GRAS',
          plainExplanation: 'An official government deposit receipt showing money paid into the state treasury.',
        },
        {
          term: 'Gateway Surcharge',
          plainExplanation: 'A nominal processing charge added by banks for certain online modes.',
        },
      ],
      nextAction: 'Select the UPI option, scan the QR code using your bank or UPI app, verify the exact amount on your phone screen, and complete payment.',
      cautionPoints: [
        'Never press the browser Back button while payment is processing.',
        'Remember: you enter your UPI PIN to PAY money, never to receive money.',
      ],
      disclaimer: 'AI-generated screen explanations may be incomplete. Always verify payment amounts on the original service portal before confirming.',
    };
  }

  if (isUploadRelated) {
    return {
      screenTitle: 'Civic Portal Document Attachment Form',
      summary: 'This page requires you to attach scanned identity, address, or income proofs to support your application.',
      requiredFields: [
        {
          fieldName: 'Choose File / Browse',
          description: 'Selecting your document file from phone or computer.',
          expectedInput: 'Upload a clear PDF or JPG under the stated file size limit (often 256 KB).',
        },
        {
          fieldName: 'Document Type Dropdown',
          description: 'Specifying which proof you are providing.',
          expectedInput: 'Select the document you have ready (e.g. Aadhaar Card, Electricity Bill).',
        },
      ],
      terminologyDefinitions: [
        {
          term: 'Self-Declaration',
          plainExplanation: 'A signed statement from you confirming your statements are true.',
        },
        {
          term: 'KB / MB File Limit',
          plainExplanation: 'The maximum allowed file weight. If too large, reduce the photo resolution.',
        },
      ],
      nextAction: 'Ensure your document scans are clearly legible with no cut edges, then click "Choose File" next to the corresponding document title.',
      cautionPoints: [
        'Do not upload password-protected PDF files as government officers cannot open them.',
        'Ensure the name in your document matches the name on your application.',
      ],
      disclaimer: 'AI-generated screen explanations may be incomplete. Verify specific portal requirements before final submission.',
    };
  }

  // General citizen form explanation
  return {
    screenTitle: 'Citizen Public Services Online Application Form',
    summary: 'This page is requesting demographic and residential information to process your service request.',
    requiredFields: [
      {
        fieldName: 'Applicant Personal Details',
        description: 'Your full name, date of birth, and gender as per official identity records.',
        expectedInput: 'Enter details matching your Aadhaar card exactly.',
      },
      {
        fieldName: 'Address & Taluka/Tehsil',
        description: 'Your administrative jurisdiction.',
        expectedInput: 'Select your correct district, taluka, and village/ward name.',
      },
    ],
    terminologyDefinitions: [
      {
        term: 'Tehsil / Taluka',
        plainExplanation: 'The local revenue administrative sub-division of your district.',
      },
      {
        term: 'Mandatory (*) Fields',
        plainExplanation: 'Any field marked with a red star must be filled or the form cannot be submitted.',
      },
    ],
    nextAction: 'Fill in your name and address matching your Aadhaar card, double check for typos, and proceed to the next step.',
    cautionPoints: [
      'Take note of any temporary Application Draft ID shown on top of the page.',
      'Never enter bank passwords or OTPs on non-payment informational forms.',
    ],
    disclaimer: 'AI-generated screen explanations may be incomplete. Always cross-verify with official instructions on the portal.',
  };
}
