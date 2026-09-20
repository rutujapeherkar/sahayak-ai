import { GuidanceMode, Language, Service, ServiceStep } from '@/types';

export interface PlannedTaskStep {
  stepNumber: number;
  totalSteps: number;
  title: string;
  explanation: string;
  whyItMatters: string;
  requiredAction: string;
  assistedContext?: string;
  officialActionUrl?: string;
  isCompleted: boolean;
}

export interface PlannedTask {
  serviceId: string;
  serviceName: string;
  currentStepIndex: number;
  totalSteps: number;
  steps: PlannedTaskStep[];
  officialSource: {
    name: string;
    url: string;
    portalName: string;
    note: string;
  };
  disclaimer: string;
}

export function buildTaskPlan(
  service: Service,
  language: Language = 'en',
  mode: GuidanceMode = 'standard',
  completedStepIndices: number[] = []
): PlannedTask {
  const steps: PlannedTaskStep[] = service.steps.map((rawStep, index) => {
    let explanation = rawStep.explanation[language];
    let requiredAction = rawStep.requiredAction[language];

    if (mode === 'simple') {
      if (rawStep.simpleGuidance && rawStep.simpleGuidance[language]) {
        explanation = rawStep.simpleGuidance[language];
      }
      requiredAction = rawStep.requiredAction[language];
    } else if (mode === 'assisted') {
      if (rawStep.assistedContext && rawStep.assistedContext[language]) {
        explanation = `${explanation} ${rawStep.assistedContext[language]}`;
      }
    }

    return {
      stepNumber: rawStep.stepNumber,
      totalSteps: service.steps.length,
      title: rawStep.title[language],
      explanation,
      whyItMatters: rawStep.whyItMatters[language],
      requiredAction,
      officialActionUrl: rawStep.officialActionUrl,
      isCompleted: completedStepIndices.includes(index),
    };
  });

  // Find first uncompleted step or default to first step
  const firstUnfinished = steps.findIndex((s) => !s.isCompleted);
  const currentStepIndex = firstUnfinished === -1 ? steps.length - 1 : firstUnfinished;

  return {
    serviceId: service.id,
    serviceName: service.name[language],
    currentStepIndex,
    totalSteps: steps.length,
    steps,
    officialSource: {
      name: service.officialSource.name,
      url: service.officialSource.url,
      portalName: service.officialSource.portalName,
      note: service.officialSource.verifiedNote[language],
    },
    disclaimer: service.disclaimer[language],
  };
}
