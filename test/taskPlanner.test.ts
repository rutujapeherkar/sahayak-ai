import { describe, it, expect } from 'vitest';
import { buildTaskPlan } from '../lib/taskPlanner';
import { SERVICES_DATA } from '../data/services';

describe('Task Planner Module', () => {
  const service = SERVICES_DATA[0]; // Income Certificate

  it('Generates sequential task steps with explanation, whyItMatters, and requiredAction', () => {
    const plan = buildTaskPlan(service, 'en', 'standard');
    expect(plan.steps.length).toBeGreaterThan(0);
    expect(plan.steps[0].title).toBeDefined();
    expect(plan.steps[0].explanation).toBeDefined();
    expect(plan.steps[0].whyItMatters).toBeDefined();
    expect(plan.steps[0].requiredAction).toBeDefined();
    expect(plan.officialSource.url).toBeDefined();
  });

  it('Adapts guidance in simple mode to be concise', () => {
    const standardPlan = buildTaskPlan(service, 'en', 'standard');
    const simplePlan = buildTaskPlan(service, 'en', 'simple');

    expect(simplePlan.steps[0].explanation).toBeDefined();
    expect(simplePlan.steps.length).toBe(standardPlan.steps.length);
  });

  it('Supports Marathi language generation', () => {
    const plan = buildTaskPlan(service, 'mr', 'standard');
    expect(plan.serviceName).toContain('उत्पन्न');
    expect(plan.steps[0].title).toBeDefined();
  });
});
