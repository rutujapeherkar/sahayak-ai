export type Language = 'en' | 'hi' | 'mr';

export type GuidanceMode = 'simple' | 'standard' | 'assisted';

export type TextSize = 'default' | 'large' | 'xlarge';
export type ContrastMode = 'default' | 'high';
export type MotionMode = 'normal' | 'reduced';

export interface AccessibilityPreferences {
  textSize: TextSize;
  contrast: ContrastMode;
  motion: MotionMode;
  voiceEnabled: boolean;
  language: Language;
  guidanceMode: GuidanceMode;
}

export type ServiceCategory =
  | 'certificates'
  | 'education'
  | 'digital_finance'
  | 'identity'
  | 'social_welfare'
  | 'grievances';

export interface ServiceDocument {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  isMandatory: boolean;
  alternatives?: Record<Language, string[]>;
}

export interface ServiceStep {
  stepNumber: number;
  title: Record<Language, string>;
  explanation: Record<Language, string>;
  whyItMatters: Record<Language, string>;
  requiredAction: Record<Language, string>;
  simpleGuidance?: Record<Language, string>;
  assistedContext?: Record<Language, string>;
  officialActionUrl?: string;
}

export interface ServiceOfficialSource {
  name: string;
  url: string;
  portalName: string;
  verifiedNote: Record<Language, string>;
}

export interface Service {
  id: string;
  slug: string;
  name: Record<Language, string>;
  category: ServiceCategory;
  shortDescription: Record<Language, string>;
  whoItMayHelp: Record<Language, string[]>;
  commonRequirements: Record<Language, string[]>;
  documents: ServiceDocument[];
  steps: ServiceStep[];
  officialSource: ServiceOfficialSource;
  languages: Language[];
  keywords: Record<Language, string[]>;
  disclaimer: Record<Language, string>;
}

export type MessageRole = 'user' | 'assistant';

export type AssistantMessageType =
  | 'understanding'
  | 'recommendation'
  | 'clarification'
  | 'task'
  | 'explanation'
  | 'warning'
  | 'official_source';

export interface AssistantAction {
  type: 'read_aloud' | 'save' | 'copy' | 'start_journey' | 'view_service' | 'open_official';
  serviceId?: string;
  url?: string;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  type?: AssistantMessageType;
  detectedLanguage?: Language;
  recommendedServices?: Service[];
  clarificationOptions?: { label: string; value: string }[];
  taskPreview?: {
    serviceId: string;
    serviceName: string;
    stepNumber: number;
    stepTitle: string;
    requiredAction: string;
  };
  actions?: AssistantAction[];
}

export interface AssistantRequest {
  message: string;
  language?: Language;
  guidanceMode?: GuidanceMode;
  conversationHistory?: { role: MessageRole; content: string }[];
}

export interface AssistantResponse {
  message: string;
  detectedLanguage: Language;
  detectedIntent: string;
  confidence: number;
  type: AssistantMessageType;
  recommendedServices?: Service[];
  clarificationOptions?: { label: string; value: string }[];
  taskRecommendation?: {
    serviceId: string;
    stepNumber: number;
  };
  actions?: AssistantAction[];
}

export interface ScreenFieldInfo {
  fieldName: string;
  description: string;
  expectedInput: string;
}

export interface TermDefinition {
  term: string;
  plainExplanation: string;
}

export interface ScreenExplanation {
  screenTitle: string;
  summary: string;
  requiredFields: ScreenFieldInfo[];
  terminologyDefinitions: TermDefinition[];
  nextAction: string;
  cautionPoints: string[];
  disclaimer: string;
}

export interface PaymentTopic {
  id: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  keyRules: Record<Language, string[]>;
  steps: {
    stepNumber: number;
    title: Record<Language, string>;
    detail: Record<Language, string>;
    safetyCheck?: Record<Language, string>;
  }[];
}
