Sahayak AI — System Architecture Specification

Product: Sahayak AIVersion: 1.0Architecture Type: Modular AI-enabled web applicationTheme: Digital Inclusion & Public AccessPrimary Goal: Provide an AI-powered accessibility and task-navigation layer for digital public services.

1. Architecture Overview

Sahayak AI is designed as a modular, layerSahayak AI — System Architecture Specification

Product: Sahayak AIVersion: 1.0Architecture Type: Modular AI-enabled web applicationTheme: Digital Inclusion & Public AccessPrimary Goal: Provide an AI-powered accessibility and task-navigation layer for digital public services.

1. Architecture Overview

Sahayak AI is designed as a modular, layered web application.

The architecture separates:

Presentation and accessibility

User interaction

AI orchestration

Intent detection

Knowledge retrieval

Task planning

Guidance generation

Screen explanation

Service data

Local user preferences and saved data

The core architectural principle is:

The AI should understand the user's goal, retrieve trusted service information, convert it into an actionable task, and present that task through an accessibility-first interface.

2. High-Level Architecture

                         ┌───────────────────────┐

                         │        CITIZEN        │

                         │                       │

                         │ Text / Voice / Image  │

                         └───────────┬───────────┘

                                     │

                                     ▼

                    ┌────────────────────────────────┐

                    │        PRESENTATION LAYER      │

                    │                                │

                    │ Next.js + React + TypeScript   │

                    │                                │

                    │ Home / Services / Assistant    │

                    │ Task Journey / Accessibility   │

                    │ Screen Explanation             │

                    └───────────────┬────────────────┘

                                    │

                                    ▼

                    ┌────────────────────────────────┐

                    │      APPLICATION LAYER         │

                    │                                │

                    │ Assistant Controller           │

                    │ Task Controller                 │

                    │ Service Controller              │

                    │ Accessibility Controller       │

                    └───────────────┬────────────────┘

                                    │

                  ┌─────────────────┼─────────────────┐

                  │                 │                 │

                  ▼                 ▼                 ▼

          ┌──────────────┐ ┌───────────────┐ ┌───────────────┐

          │ AI           │ │ Retrieval     │ │ Task Planner  │

          │ Orchestrator │ │ Engine        │ │               │

          └──────┬───────┘ └───────┬───────┘ └──────┬────────┘

                 │                 │                │

                 └─────────────────┼────────────────┘

                                   ▼

                    ┌────────────────────────────────┐

                    │      KNOWLEDGE LAYER           │

                    │                                │

                    │ Service Knowledge Base         │

                    │ Service Metadata               │

                    │ Requirements                   │

                    │ Documents                      │

                    │ Steps                          │

                    │ Official Sources               │

                    └───────────────┬────────────────┘

                                    │

                                    ▼

                    ┌────────────────────────────────┐

                    │       RESPONSE LAYER           │

                    │                                │

                    │ Structured Guidance            │

                    │ Recommendations                │

                    │ Task Steps                     │

                    │ Accessibility Transformation   │

                    └────────────────────────────────┘

3. Architecture Principles

3.1 Modular

Each major responsibility should be isolated.

Example:

Intent Detection

       ≠

Knowledge Retrieval

       ≠

Task Planning

       ≠

UI Rendering

3.2 Provider Independent

The frontend must not be tightly coupled to a specific AI provider.

The application should expose an internal interface such as:

generateAssistantResponse()

The implementation can use:

Demo mode

Gemini

OpenAI-compatible provider

without changing the UI.

3.3 Accessibility First

Accessibility is part of the architecture.

The accessibility layer should be able to transform:

Standard UI

   ↓

Large Text

High Contrast

Reduced Motion

Voice Assistance

Simplified Guidance

3.4 Trust First

AI-generated information must remain distinguishable from official information.

Architecture should keep:

Sahayak Guidance

        ≠

Official Source

3.5 Graceful Degradation

If an external dependency fails:

AI API unavailable

       ↓

Demo AI / local retrieval

       ↓

Application continues

The application must not become unusable because one external service is unavailable.

4. Recommended Technology Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Accessible UI primitives

Lucide React

AI

Primary:

Gemini or OpenAI-compatible LLM

Fallback:

Local deterministic intent matching

Local knowledge-base retrieval

Data

MVP:

JSON / TypeScript structured data

localStorage for non-sensitive user preferences

Optional:

SQLite

Avoid unnecessary database infrastructure for the first prototype.

Browser APIs

Web Speech API / Speech Recognition

SpeechSynthesis API

File API

localStorage

Deployment

Recommended:

Vercel for Next.js

Alternative:

Any Node-compatible hosting platform

5. Application Layers

Layer 1 — Presentation

Responsible for:

pages

components

navigation

visual hierarchy

responsive behavior

accessibility UI

Example:

app/

components/

styles/

Layer 2 — Interaction

Responsible for:

user input

conversation state

task state

service selection

accessibility preferences

Layer 3 — Application Services

Responsible for coordinating business operations.

Examples:

AssistantService

TaskService

ServiceDiscoveryService

ScreenExplanationService

AccessibilityService

Layer 4 — AI Orchestration

Responsible for coordinating:

Intent Detection

      ↓

Retrieval

      ↓

Task Planning

      ↓

Response Generation

The orchestration layer should not directly render UI.

Layer 5 — Knowledge

Contains structured service information.

Layer 6 — External Services

Optional external dependencies:

LLM provider

verified official sources

browser speech APIs

6. Frontend Architecture

Recommended Next.js App Router structure:

app/

├── page.tsx

├── assistant/

│   └── page.tsx

├── services/

│   ├── page.tsx

│   └── [id]/

│       └── page.tsx

├── task/

│   └── [id]/

│       └── page.tsx

├── explain-screen/

│   └── page.tsx

├── digital-payments/

│   └── page.tsx

├── saved/

│   └── page.tsx

├── accessibility/

│   └── page.tsx

└── about/

    └── page.tsx

7. Component Architecture

Use reusable components.

components/

│

├── layout/

│   ├── Navbar.tsx

│   ├── Footer.tsx

│   └── MobileNav.tsx

│

├── assistant/

│   ├── ChatWindow.tsx

│   ├── ChatMessage.tsx

│   ├── QuickPrompt.tsx

│   ├── VoiceInput.tsx

│   ├── GuidancePanel.tsx

│   ├── RecommendationCard.tsx

│   └── ResponseActions.tsx

│

├── task/

│   ├── TaskJourney.tsx

│   ├── TaskStep.tsx

│   ├── ProgressIndicator.tsx

│   └── DocumentChecklist.tsx

│

├── services/

│   ├── ServiceCard.tsx

│   ├── ServiceFilters.tsx

│   ├── ServiceDetail.tsx

│   ├── ServiceSearch.tsx

│   └── OfficialSourceButton.tsx

│

├── accessibility/

│   ├── AccessibilityPanel.tsx

│   ├── TextSizeControl.tsx

│   ├── ContrastControl.tsx

│   ├── MotionControl.tsx

│   └── ReadAloudButton.tsx

│

├── screen-explainer/

│   ├── UploadZone.tsx

│   ├── ImagePreview.tsx

│   └── ExplanationPanel.tsx

│

├── payments/

│   ├── PaymentGuide.tsx

│   ├── PaymentStep.tsx

│   └── SafetyPanel.tsx

│

└── ui/

    ├── Button.tsx

    ├── Card.tsx

    ├── Input.tsx

    ├── Badge.tsx

    ├── Modal.tsx

    ├── Select.tsx

    ├── Toast.tsx

    └── Skeleton.tsx

8. Core AI Architecture

The AI pipeline is:

                    USER INPUT

                        │

             ┌──────────┴──────────┐

             │                     │

           Text                  Voice

             │                     │

             └──────────┬──────────┘

                        ▼

                Language Detection

                        │

                        ▼

                 Intent Detection

                        │

                        ▼

                 Task Identification

                        │

              ┌─────────┴─────────┐

              │                   │

          Enough data?         Missing data

              │                   │

             YES                  ▼

              │            Clarification

              │              Question

              │                   │

              └─────────┬─────────┘

                        ▼

                 Knowledge Retrieval

                        │

                        ▼

                   Task Planner

                        │

                        ▼

                Response Generator

                        │

                        ▼

             Accessibility Formatter

                        │

                        ▼

                      USER

9. AI Orchestrator

Create:

lib/ai.ts

Responsibilities:

receive user request

determine mode

call intent engine

retrieve context

call task planner

generate structured response

apply fallback if needed

Conceptual interface:

type AssistantRequest = {

  message: string;

  language?: "en" | "hi" | "mr";

  guidanceMode?: "simple" | "standard" | "assisted";

  conversation?: Message[];

};

type AssistantResponse = {

  intent: string;

  response: string;

  serviceId?: string;

  taskId?: string;

  nextAction?: string;

  sources?: Source[];

};

10. Intent Engine

Create:

lib/intent.ts

Responsibilities

Classify the user's goal.

Possible intents:

education

documents

income_certificate

residence_certificate

digital_payments

digilocker

senior_citizen

public_grievance

accessibility

general_service_discovery

unknown

MVP strategy

Use a hybrid approach:

User Input

   ↓

Keyword / rules

   ↓

If confident → intent

   ↓

If uncertain → LLM

This reduces unnecessary API usage.

11. Retrieval Engine

Create:

lib/retrieval.ts

Responsibilities:

search service records

match keywords

match categories

return relevant service records

MVP:

Keyword matching

+

metadata matching

Future:

Embeddings

+

Vector database

+

Semantic retrieval

Do not introduce a vector database unless it is genuinely required for the MVP.

12. Knowledge Base

Suggested:

data/

├── services.ts

├── paymentGuides.ts

├── accessibilityGuides.ts

└── sampleScenarios.ts

Example:

export const services = [

  {

    id: "income-certificate",

    name: "Income Certificate",

    category: "documents",

    keywords: [

      "income certificate",

      "income proof",

      "उत्पन्न प्रमाणपत्र",

      "आय प्रमाण पत्र"

    ],

    description: "...",

    documents: [],

    steps: [],

    officialSource: ""

  }

];

The knowledge base must be modular.

Adding a new service should not require modifying AI orchestration logic.

13. Task Planner

Create:

lib/taskPlanner.ts

Responsibilities

Convert service information into an actionable journey.

Input:

Service

+

User context

Output:

Task

├── Step 1

├── Step 2

├── Step 3

├── Step 4

└── Step 5

Example:

{

  id: "income-certificate",

  steps: [

    {

      id: "understand",

      title: "Understand the service"

    },

    {

      id: "requirements",

      title: "Check requirements"

    },

    {

      id: "documents",

      title: "Prepare documents"

    },

    {

      id: "application",

      title: "Start application"

    },

    {

      id: "submission",

      title: "Submit"

    }

  ]

}

14. Guidance Modes

The task planner and response generator should respect:

simple

standard

assisted

Simple

Minimal text.

Standard

Normal guidance.

Assisted

Additional:

explanation

"why" context

warnings

read-aloud action

step-by-step instructions

15. Screen Explanation Architecture

The flow is:

Image Upload

     │

     ▼

Client Validation

     │

     ▼

Image Preview

     │

     ▼

Vision-Capable AI

     │

     ▼

Structured Analysis

     │

     ├── Page purpose

     ├── Visible fields

     ├── Terms

     ├── Next action

     └── Warnings

     │

     ▼

Explanation UI

Important

The screen-explanation model must not claim to know information that is not visible or available in context.

If uncertain:

"I can't confidently identify this field from the screenshot."

16. Voice Architecture

Input

Microphone

    ↓

Speech Recognition

    ↓

Text

    ↓

Assistant Pipeline

Output

AI Response

    ↓

SpeechSynthesis

    ↓

Audio

If unavailable:

Voice unavailable

      ↓

Typed interaction

The rest of the application must continue working.

17. Accessibility Architecture

Create a centralized accessibility context/provider.

Example:

AccessibilityProvider

        │

        ├── textSize

        ├── contrastMode

        ├── motionMode

        ├── voiceEnabled

        └── language

Persist settings using localStorage.

18. Accessibility State

Example:

type AccessibilitySettings = {

  textSize: "default" | "large" | "extra-large";

  contrast: "default" | "high";

  motion: "normal" | "reduced";

  voiceEnabled: boolean;

  language: "en" | "hi" | "mr";

};

The UI should react immediately when settings change.

19. Localization Architecture

Create:

locales/

├── en.ts

├── hi.ts

└── mr.ts

Use translation keys rather than duplicating UI strings.

Example:

{

  home: {

    title: "...",

    subtitle: "...",

    askSahayak: "..."

  }

}

Assistant content can be generated in the selected language.

20. State Architecture

Use local React state/context for MVP.

Global state candidates

accessibility settings

selected language

guidance mode

current task

Local state

chat input

loading

upload state

search query

filters

service save state

Persistence

localStorage:

accessibilitySettings

savedServices

guidanceMode

language

Do not persist sensitive conversation content.

21. Data Flow — Assistant

User types message

       │

       ▼

ChatWindow

       │

       ▼

Assistant Controller

       │

       ▼

Language Detection

       │

       ▼

Intent Engine

       │

       ▼

Retrieval Engine

       │

       ▼

Task Planner

       │

       ▼

AI Response Generator

       │

       ▼

Structured Response

       │

       ▼

ChatMessage

       │

       ├── Read aloud

       ├── Save

       ├── Continue

       └── Start journey

22. Data Flow — Service Discovery

Search / Natural Language

          │

          ▼

     Intent Engine

          │

          ▼

     Retrieval Engine

          │

          ▼

   Ranked Service Results

          │

          ▼

     Service Cards

For MVP, ranking can be simple keyword/category relevance.

23. Data Flow — Task Journey

Service Selected

      │

      ▼

Task Planner

      │

      ▼

Task Object

      │

      ▼

Task Journey UI

      │

      ▼

Current Step

      │

      ▼

User Action

      │

      ▼

Next Step

Task progress can be stored in session/local state.

24. Data Flow — Explain Screen

User selects image

       │

       ▼

File validation

       │

       ▼

Image preview

       │

       ▼

Vision AI

       │

       ▼

Structured explanation

       │

       ▼

Explanation Panel

The original image should not be permanently stored for the MVP.

25. Data Flow — Accessibility

Accessibility Panel

       │

       ▼

Accessibility Context

       │

       ├── Text scale

       ├── Contrast

       ├── Motion

       ├── Voice

       └── Language

       │

       ▼

Application UI

26. Official Source Architecture

Official sources should be represented separately from AI-generated guidance.

Example:

type Source = {

  name: string;

  url: string;

  type: "official";

};

UI:

SAHAYAK GUIDANCE

AI-generated assistance

        ↓

OFFICIAL SOURCE

Verify current requirements

[Open Official Portal ↗]

27. Security Architecture

Secrets

Store API keys only on the server.

Example:

.env.local

Never expose:

AI_API_KEY

to browser-side JavaScript.

Upload Security

Validate:

MIME type

file extension

file size

Recommended MVP maximum:

5 MB

Reject unsupported formats.

Input Security

Treat user and AI-generated content as untrusted.

Avoid unsafe HTML rendering.

Prefer plain text / structured components.

28. Privacy Architecture

MVP data model should intentionally minimize stored user data.

Store locally:

Accessibility preferences

Saved service IDs

Demo task state

Do not store:

Passwords

OTP

UPI PIN

Bank credentials

Sensitive identity numbers

Private conversations

29. AI Provider Architecture

Use a provider interface.

Example:

interface AIProvider {

  generateResponse(

    request: AssistantRequest

  ): Promise<AssistantResponse>;

  explainImage?(

    image: File

  ): Promise<ScreenExplanation>;

}

Possible implementations:

DemoProvider

GeminiProvider

OpenAIProvider

Provider selected through environment configuration.

30. Environment Configuration

Example:

AI_PROVIDER=demo

AI_API_KEY=

AI_MODEL=

Possible values:

demo

gemini

openai

Default:

demo

The project must run without external API credentials.

31. Fallback Architecture

             AI Request

                  │

                  ▼

          External AI available?

             /           \

           YES            NO

            │              │

            ▼              ▼

        AI Provider    Demo Provider

            │              │

            └──────┬───────┘

                   ▼

             Structured Response

No visible technical failure should interrupt the user journey.

32. Error Boundary Architecture

Use application-level error boundaries where appropriate.

Expected failure domains:

AI request

image processing

voice

external links

service retrieval

Each should degrade independently.

Example:

Voice fails

   ↓

Text input remains available

not:

Voice fails

   ↓

Entire assistant fails

33. Performance Architecture

Prioritize:

optimized images

lazy loading

minimal dependencies

server-side rendering where appropriate

client components only where interaction requires them

lightweight local data

minimal API calls

Do not send unnecessary user context to the AI provider.

34. Recommended Repository Structure

sahayak-ai/

│

├── app/

│   ├── page.tsx

│   ├── assistant/

│   ├── services/

│   ├── task/

│   ├── explain-screen/

│   ├── digital-payments/

│   ├── saved/

│   ├── accessibility/

│   └── about/

│

├── components/

│   ├── layout/

│   ├── assistant/

│   ├── task/

│   ├── services/

│   ├── accessibility/

│   ├── screen-explainer/

│   ├── payments/

│   └── ui/

│

├── lib/

│   ├── ai.ts

│   ├── intent.ts

│   ├── retrieval.ts

│   ├── taskPlanner.ts

│   ├── screenExplainer.ts

│   ├── accessibility.ts

│   └── language.ts

│

├── data/

│   ├── services.ts

│   ├── paymentGuides.ts

│   ├── accessibilityGuides.ts

│   └── sampleScenarios.ts

│

├── context/

│   ├── AccessibilityContext.tsx

│   └── AppContext.tsx

│

├── locales/

│   ├── en.ts

│   ├── hi.ts

│   └── mr.ts

│

├── public/

│   ├── images/

│   └── icons/

│

├── types/

│   ├── assistant.ts

│   ├── service.ts

│   ├── task.ts

│   └── accessibility.ts

│

├── styles/

│

├── .env.example

├── README.md

├── PRD.md

├── features.md

└── architecture.md

35. Type Architecture

Define shared types.

Service

type Service = {

  id: string;

  name: string;

  category: ServiceCategory;

  description: string;

  whoItMayHelp: string;

  requirements: string[];

  documents: string[];

  steps: TaskStep[];

  officialSource?: Source;

  languages: Language[];

  keywords: string[];

};

Task

type Task = {

  id: string;

  serviceId: string;

  title: string;

  steps: TaskStep[];

  currentStep: number;

};

Task Step

type TaskStep = {

  id: string;

  title: string;

  description: string;

  why?: string;

  status?: "upcoming" | "current" | "completed";

};

Message

type Message = {

  id: string;

  role: "user" | "assistant";

  content: string;

  timestamp: string;

  actions?: MessageAction[];

};

36. API Architecture

For MVP, use Next.js route handlers where server-side operations are needed.

Suggested:

app/api/

├── assistant/

│   └── route.ts

├── explain-screen/

│   └── route.ts

└── services/

    └── route.ts

37. Assistant API

Example:

POST /api/assistant

Request:

{

  "message": "मला उत्पन्न प्रमाणपत्र काढायचं आहे",

  "language": "mr",

  "guidanceMode": "assisted"

}

Response:

{

  "intent": "income_certificate",

  "serviceId": "income-certificate",

  "response": "...",

  "nextAction": "start_task"

}

38. Explain Screen API

Example:

POST /api/explain-screen

Input:

multipart/form-data

image=<file>

language=mr

guidanceMode=assisted

Response:

{

  "purpose": "...",

  "fields": [],

  "terms": [],

  "nextAction": "...",

  "disclaimer": "..."

}

39. Service API

For future extensibility:

GET /api/services

GET /api/services/:id

For MVP, static local data can be used directly.

40. API Error Contract

Use consistent error responses.

Example:

{

  "error": {

    "code": "AI_UNAVAILABLE",

    "message": "Unable to process the request right now."

  }

}

Never return raw stack traces to the client.

41. Observability

For the hackathon MVP:

browser console should be clean

server errors should be logged safely

no sensitive user data should be logged

Optional future:

structured logs

performance monitoring

AI latency tracking

feature usage analytics

42. Accessibility Architecture — Detailed

Every component must support:

Keyboard

Tab

Shift + Tab

Enter

Space

Escape

Arrow keys where appropriate

Focus

Use visible focus rings.

Screen Readers

Use:

semantic landmarks

aria-labels

aria-live for dynamic assistant responses

meaningful button labels

Example:

<div aria-live="polite">

  Assistant response...

</div>

43. AI Accessibility Transformation

The AI response should adapt based on user preference.

Raw response

     │

     ▼

Guidance mode

     │

     ├── Simple

     ├── Standard

     └── Assisted

     │

     ▼

Language

     │

     ▼

Accessibility presentation

     │

     ▼

UI

This means accessibility affects content structure, not just font size.

44. Task State Machine

A task can be modeled as:

NOT_STARTED

     ↓

IN_PROGRESS

     ↓

STEP_COMPLETED

     ↓

NEXT_STEP

     ↓

...

     ↓

COMPLETED

Potential state:

type TaskStatus =

  | "not_started"

  | "in_progress"

  | "completed";

Step status:

type StepStatus =

  | "upcoming"

  | "current"

  | "completed";

45. Screen Explanation State Machine

IDLE

 ↓

UPLOADING

 ↓

VALIDATING

 ↓

ANALYZING

 ↓

RESULT

Error branches:

INVALID_FILE

AI_ERROR

UNSUPPORTED_FORMAT

46. Voice State Machine

IDLE

 ↓

LISTENING

 ↓

PROCESSING

 ↓

TEXT_READY

Error:

UNSUPPORTED

PERMISSION_DENIED

RECOGNITION_ERROR

47. Service Retrieval Ranking

MVP scoring can be simple:

keyword match       +3

category match      +2

language keyword    +2

exact phrase        +5

Return top 1–3 results.

Do not show dozens of irrelevant results.

Future architecture can replace this with semantic retrieval.

48. AI Prompt Architecture

Do not put the entire application prompt inside the frontend.

Maintain prompts separately.

Example:

prompts/

├── assistant.ts

├── screenExplainer.ts

└── taskPlanner.ts

The assistant system prompt should instruct the AI to:

use only provided service context

avoid inventing requirements

state uncertainty

use plain language

follow selected language

respect guidance mode

avoid requesting sensitive information

distinguish official information from generated guidance

49. RAG-Ready Architecture

Although the MVP can use local keyword retrieval, structure the system so future RAG can be added.

Future:

Official Documents

       ↓

Document Processing

       ↓

Chunking

       ↓

Embeddings

       ↓

Vector Store

       ↓

Semantic Retrieval

       ↓

LLM

Do not implement a complex vector database unless required.

50. Deployment Architecture

Recommended:

                   Internet

                      │

                      ▼

                  Vercel

                      │

             ┌────────┴────────┐

             │                 │

             ▼                 ▼

         Next.js UI       API Routes

                               │

                         ┌─────┴─────┐

                         │           │

                         ▼           ▼

                    AI Provider   Local Data

Browser capabilities:

Browser

 ├── Speech Recognition

 ├── Speech Synthesis

 ├── localStorage

 └── File APIs

51. Environment Separation

Development

AI_PROVIDER=demo

Demo

Can use:

AI_PROVIDER=gemini

if API is available.

Production prototype

Use secure server-side environment variables.

Never commit .env.local.

52. Testing Architecture

Unit Testing

Test:

intent matching

retrieval

task generation

language selection

accessibility state

service filtering

Integration Testing

Test:

assistant → retrieval

assistant → task planner

service → task journey

upload → explanation

accessibility → UI

Manual Testing

Test:

mobile

desktop

keyboard

screen reader where available

voice

high contrast

reduced motion

53. Critical Test Scenarios

Test 1

Input:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

Expected:

intent = income_certificate

language = mr

Test 2

Input:

"I need help proving where I live."

Expected:

intent = residence_certificate

Test 3

Input:

"मला UPI वापरायला शिकायचं आहे."

Expected:

intent = digital_payments

Test 4

AI provider unavailable.

Expected:

demo fallback works

Test 5

Voice unavailable.

Expected:

typed input remains available

Test 6

Large text enabled.

Expected:

application typography increases without breaking layout

Test 7

High contrast enabled.

Expected:

text and controls remain clearly distinguishable

54. Performance Targets

For the prototype:

no unnecessary blocking scripts

optimized images

fast initial page load

responsive interaction

no large client-side data payloads

lazy-load screen explanation functionality if possible

AI latency should be communicated with a subtle loading state.

Do not fake instant AI responses if the API is actually processing.

55. Scalability Path

Current

Local JSON

+

Simple retrieval

+

LLM

Next

Structured database

+

Semantic retrieval

+

Verified knowledge synchronization

Future

Government/API integrations

+

RAG

+

Browser navigation

+

SDK

+

Voice/IVR

The interfaces between modules should remain stable.

56. Architecture Decision Records

ADR-01 — Next.js

Chosen to keep frontend and lightweight server-side API logic in one project.

ADR-02 — Local knowledge base for MVP

Chosen because the hackathon prototype needs reliability and fast iteration.

ADR-03 — Demo fallback

Chosen to prevent external AI/API failure from breaking the demonstration.

ADR-04 — Browser speech APIs

Chosen to demonstrate voice accessibility without adding unnecessary infrastructure.

ADR-05 — localStorage

Chosen for non-sensitive MVP preferences and saved services.

ADR-06 — Provider abstraction

Chosen to avoid locking the application to a single AI vendor.

57. What NOT to Build in MVP

Avoid:

microservices

Kubernetes

complex authentication

PostgreSQL unless necessary

vector database unless necessary

custom model training

payment processing

government login automation

browser automation

large-scale analytics

unnecessary admin dashboards

The MVP should remain a modular monolith.

58. Why Modular Monolith

For a two-person hackathon team, the recommended architecture is:

Modular monolith + clean internal boundaries

rather than microservices.

Benefits:

faster development

easier deployment

easier debugging

fewer infrastructure failures

easier local development

simpler demo

Internal modules can later become services if required.

59. Final Architecture

                           SAHAYAK AI

                               │

                               ▼

                     ┌───────────────────┐

                     │   Next.js App     │

                     │ React + TypeScript│

                     └─────────┬─────────┘

                               │

              ┌────────────────┼────────────────┐

              │                │                │

              ▼                ▼                ▼

        Accessibility      Assistant        Services

           Layer             Layer           Layer

              │                │                │

              │                ▼                │

              │          AI Orchestrator       │

              │                │                │

              │       ┌────────┼────────┐       │

              │       ▼        ▼        ▼       │

              │    Intent   Retrieval  Task     │

              │    Engine    Engine   Planner   │

              │       │        │        │       │

              │       └────────┼────────┘       │

              │                ▼                │

              │       Response Generator        │

              │                │                │

              └────────────────┼────────────────┘

                               ▼

                     Service Knowledge Base

                               │

                    ┌──────────┴──────────┐

                    ▼                     ▼

             Local Demo Data        Official Sources

                    │

                    ▼

              Citizen Guidance

60. Final Architectural Principle

The most important architectural rule is:

Keep the AI, knowledge, task planning, accessibility and presentation layers separate.

This allows Sahayak to evolve from:

Hackathon MVP

into:

AI accessibility layer

        ↓

Portal widget

        ↓

SDK/API

        ↓

Multi-service digital navigation platform

without rebuilding the entire system.

61. Definition of Architectural Done

The architecture is considered implemented when:

Frontend and application modules are separated.

AI provider is abstracted.

Demo fallback works.

Intent detection is isolated.

Retrieval is isolated.

Task planning is isolated.

Knowledge base is modular.

Accessibility state is centralized.

Localization is modular.

Screen explanation is isolated.

Voice functionality degrades gracefully.

Sensitive information is not persisted.

API keys are server-side only.

Components are reusable.

The application can run without complex infrastructure.

The architecture can later support RAG and verified service integrations.

62. Final Architecture Statement

Sahayak AI uses a modular monolithic architecture built around an AI orchestration layer, structured service knowledge base, task-planning engine and accessibility-first presentation layer.

The architecture is intentionally lightweight for a two-person hackathon team while keeping clean boundaries for future expansion.

The system transforms:

Natural-language user intent → service understanding → task planning → accessible guidance → user action.

That transformation is the technical foundation of Sahayak AI.

ed web application.

The architecture separates:

Presentation and accessibility

User interaction

AI orchestration

Intent detection

Knowledge retrieval

Task planning

Guidance generation

Screen explanation

Service data

Local user preferences and saved data

The core architectural principle is:

The AI should understand the user's goal, retrieve trusted service information, convert it into an actionable task, and present that task through an accessibility-first interface.

2. High-Level Architecture

                         ┌───────────────────────┐

                         │        CITIZEN        │

                         │                       │

                         │ Text / Voice / Image  │

                         └───────────┬───────────┘

                                     │

                                     ▼

                    ┌────────────────────────────────┐

                    │        PRESENTATION LAYER      │

                    │                                │

                    │ Next.js + React + TypeScript   │

                    │                                │

                    │ Home / Services / Assistant    │

                    │ Task Journey / Accessibility   │

                    │ Screen Explanation             │

                    └───────────────┬────────────────┘

                                    │

                                    ▼

                    ┌────────────────────────────────┐

                    │      APPLICATION LAYER         │

                    │                                │

                    │ Assistant Controller           │

                    │ Task Controller                 │

                    │ Service Controller              │

                    │ Accessibility Controller       │

                    └───────────────┬────────────────┘

                                    │

                  ┌─────────────────┼─────────────────┐

                  │                 │                 │

                  ▼                 ▼                 ▼

          ┌──────────────┐ ┌───────────────┐ ┌───────────────┐

          │ AI           │ │ Retrieval     │ │ Task Planner  │

          │ Orchestrator │ │ Engine        │ │               │

          └──────┬───────┘ └───────┬───────┘ └──────┬────────┘

                 │                 │                │

                 └─────────────────┼────────────────┘

                                   ▼

                    ┌────────────────────────────────┐

                    │      KNOWLEDGE LAYER           │

                    │                                │

                    │ Service Knowledge Base         │

                    │ Service Metadata               │

                    │ Requirements                   │

                    │ Documents                      │

                    │ Steps                          │

                    │ Official Sources               │

                    └───────────────┬────────────────┘

                                    │

                                    ▼

                    ┌────────────────────────────────┐

                    │       RESPONSE LAYER           │

                    │                                │

                    │ Structured Guidance            │

                    │ Recommendations                │

                    │ Task Steps                     │

                    │ Accessibility Transformation   │

                    └────────────────────────────────┘

3. Architecture Principles

3.1 Modular

Each major responsibility should be isolated.

Example:

Intent Detection

       ≠

Knowledge Retrieval

       ≠

Task Planning

       ≠

UI Rendering

3.2 Provider Independent

The frontend must not be tightly coupled to a specific AI provider.

The application should expose an internal interface such as:

generateAssistantResponse()

The implementation can use:

Demo mode

Gemini

OpenAI-compatible provider

without changing the UI.

3.3 Accessibility First

Accessibility is part of the architecture.

The accessibility layer should be able to transform:

Standard UI

   ↓

Large Text

High Contrast

Reduced Motion

Voice Assistance

Simplified Guidance

3.4 Trust First

AI-generated information must remain distinguishable from official information.

Architecture should keep:

Sahayak Guidance

        ≠

Official Source

3.5 Graceful Degradation

If an external dependency fails:

AI API unavailable

       ↓

Demo AI / local retrieval

       ↓

Application continues

The application must not become unusable because one external service is unavailable.

4. Recommended Technology Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Accessible UI primitives

Lucide React

AI

Primary:

Gemini or OpenAI-compatible LLM

Fallback:

Local deterministic intent matching

Local knowledge-base retrieval

Data

MVP:

JSON / TypeScript structured data

localStorage for non-sensitive user preferences

Optional:

SQLite

Avoid unnecessary database infrastructure for the first prototype.

Browser APIs

Web Speech API / Speech Recognition

SpeechSynthesis API

File API

localStorage

Deployment

Recommended:

Vercel for Next.js

Alternative:

Any Node-compatible hosting platform

5. Application Layers

Layer 1 — Presentation

Responsible for:

pages

components

navigation

visual hierarchy

responsive behavior

accessibility UI

Example:

app/

components/

styles/

Layer 2 — Interaction

Responsible for:

user input

conversation state

task state

service selection

accessibility preferences

Layer 3 — Application Services

Responsible for coordinating business operations.

Examples:

AssistantService

TaskService

ServiceDiscoveryService

ScreenExplanationService

AccessibilityService

Layer 4 — AI Orchestration

Responsible for coordinating:

Intent Detection

      ↓

Retrieval

      ↓

Task Planning

      ↓

Response Generation

The orchestration layer should not directly render UI.

Layer 5 — Knowledge

Contains structured service information.

Layer 6 — External Services

Optional external dependencies:

LLM provider

verified official sources

browser speech APIs

6. Frontend Architecture

Recommended Next.js App Router structure:

app/

├── page.tsx

├── assistant/

│   └── page.tsx

├── services/

│   ├── page.tsx

│   └── [id]/

│       └── page.tsx

├── task/

│   └── [id]/

│       └── page.tsx

├── explain-screen/

│   └── page.tsx

├── digital-payments/

│   └── page.tsx

├── saved/

│   └── page.tsx

├── accessibility/

│   └── page.tsx

└── about/

    └── page.tsx

7. Component Architecture

Use reusable components.

components/

│

├── layout/

│   ├── Navbar.tsx

│   ├── Footer.tsx

│   └── MobileNav.tsx

│

├── assistant/

│   ├── ChatWindow.tsx

│   ├── ChatMessage.tsx

│   ├── QuickPrompt.tsx

│   ├── VoiceInput.tsx

│   ├── GuidancePanel.tsx

│   ├── RecommendationCard.tsx

│   └── ResponseActions.tsx

│

├── task/

│   ├── TaskJourney.tsx

│   ├── TaskStep.tsx

│   ├── ProgressIndicator.tsx

│   └── DocumentChecklist.tsx

│

├── services/

│   ├── ServiceCard.tsx

│   ├── ServiceFilters.tsx

│   ├── ServiceDetail.tsx

│   ├── ServiceSearch.tsx

│   └── OfficialSourceButton.tsx

│

├── accessibility/

│   ├── AccessibilityPanel.tsx

│   ├── TextSizeControl.tsx

│   ├── ContrastControl.tsx

│   ├── MotionControl.tsx

│   └── ReadAloudButton.tsx

│

├── screen-explainer/

│   ├── UploadZone.tsx

│   ├── ImagePreview.tsx

│   └── ExplanationPanel.tsx

│

├── payments/

│   ├── PaymentGuide.tsx

│   ├── PaymentStep.tsx

│   └── SafetyPanel.tsx

│

└── ui/

    ├── Button.tsx

    ├── Card.tsx

    ├── Input.tsx

    ├── Badge.tsx

    ├── Modal.tsx

    ├── Select.tsx

    ├── Toast.tsx

    └── Skeleton.tsx

8. Core AI Architecture

The AI pipeline is:

                    USER INPUT

                        │

             ┌──────────┴──────────┐

             │                     │

           Text                  Voice

             │                     │

             └──────────┬──────────┘

                        ▼

                Language Detection

                        │

                        ▼

                 Intent Detection

                        │

                        ▼

                 Task Identification

                        │

              ┌─────────┴─────────┐

              │                   │

          Enough data?         Missing data

              │                   │

             YES                  ▼

              │            Clarification

              │              Question

              │                   │

              └─────────┬─────────┘

                        ▼

                 Knowledge Retrieval

                        │

                        ▼

                   Task Planner

                        │

                        ▼

                Response Generator

                        │

                        ▼

             Accessibility Formatter

                        │

                        ▼

                      USER

9. AI Orchestrator

Create:

lib/ai.ts

Responsibilities:

receive user request

determine mode

call intent engine

retrieve context

call task planner

generate structured response

apply fallback if needed

Conceptual interface:

type AssistantRequest = {

  message: string;

  language?: "en" | "hi" | "mr";

  guidanceMode?: "simple" | "standard" | "assisted";

  conversation?: Message[];

};

type AssistantResponse = {

  intent: string;

  response: string;

  serviceId?: string;

  taskId?: string;

  nextAction?: string;

  sources?: Source[];

};

10. Intent Engine

Create:

lib/intent.ts

Responsibilities

Classify the user's goal.

Possible intents:

education

documents

income_certificate

residence_certificate

digital_payments

digilocker

senior_citizen

public_grievance

accessibility

general_service_discovery

unknown

MVP strategy

Use a hybrid approach:

User Input

   ↓

Keyword / rules

   ↓

If confident → intent

   ↓

If uncertain → LLM

This reduces unnecessary API usage.

11. Retrieval Engine

Create:

lib/retrieval.ts

Responsibilities:

search service records

match keywords

match categories

return relevant service records

MVP:

Keyword matching

+

metadata matching

Future:

Embeddings

+

Vector database

+

Semantic retrieval

Do not introduce a vector database unless it is genuinely required for the MVP.

12. Knowledge Base

Suggested:

data/

├── services.ts

├── paymentGuides.ts

├── accessibilityGuides.ts

└── sampleScenarios.ts

Example:

export const services = [

  {

    id: "income-certificate",

    name: "Income Certificate",

    category: "documents",

    keywords: [

      "income certificate",

      "income proof",

      "उत्पन्न प्रमाणपत्र",

      "आय प्रमाण पत्र"

    ],

    description: "...",

    documents: [],

    steps: [],

    officialSource: ""

  }

];

The knowledge base must be modular.

Adding a new service should not require modifying AI orchestration logic.

13. Task Planner

Create:

lib/taskPlanner.ts

Responsibilities

Convert service information into an actionable journey.

Input:

Service

+

User context

Output:

Task

├── Step 1

├── Step 2

├── Step 3

├── Step 4

└── Step 5

Example:

{

  id: "income-certificate",

  steps: [

    {

      id: "understand",

      title: "Understand the service"

    },

    {

      id: "requirements",

      title: "Check requirements"

    },

    {

      id: "documents",

      title: "Prepare documents"

    },

    {

      id: "application",

      title: "Start application"

    },

    {

      id: "submission",

      title: "Submit"

    }

  ]

}

14. Guidance Modes

The task planner and response generator should respect:

simple

standard

assisted

Simple

Minimal text.

Standard

Normal guidance.

Assisted

Additional:

explanation

"why" context

warnings

read-aloud action

step-by-step instructions

15. Screen Explanation Architecture

The flow is:

Image Upload

     │

     ▼

Client Validation

     │

     ▼

Image Preview

     │

     ▼

Vision-Capable AI

     │

     ▼

Structured Analysis

     │

     ├── Page purpose

     ├── Visible fields

     ├── Terms

     ├── Next action

     └── Warnings

     │

     ▼

Explanation UI

Important

The screen-explanation model must not claim to know information that is not visible or available in context.

If uncertain:

"I can't confidently identify this field from the screenshot."

16. Voice Architecture

Input

Microphone

    ↓

Speech Recognition

    ↓

Text

    ↓

Assistant Pipeline

Output

AI Response

    ↓

SpeechSynthesis

    ↓

Audio

If unavailable:

Voice unavailable

      ↓

Typed interaction

The rest of the application must continue working.

17. Accessibility Architecture

Create a centralized accessibility context/provider.

Example:

AccessibilityProvider

        │

        ├── textSize

        ├── contrastMode

        ├── motionMode

        ├── voiceEnabled

        └── language

Persist settings using localStorage.

18. Accessibility State

Example:

type AccessibilitySettings = {

  textSize: "default" | "large" | "extra-large";

  contrast: "default" | "high";

  motion: "normal" | "reduced";

  voiceEnabled: boolean;

  language: "en" | "hi" | "mr";

};

The UI should react immediately when settings change.

19. Localization Architecture

Create:

locales/

├── en.ts

├── hi.ts

└── mr.ts

Use translation keys rather than duplicating UI strings.

Example:

{

  home: {

    title: "...",

    subtitle: "...",

    askSahayak: "..."

  }

}

Assistant content can be generated in the selected language.

20. State Architecture

Use local React state/context for MVP.

Global state candidates

accessibility settings

selected language

guidance mode

current task

Local state

chat input

loading

upload state

search query

filters

service save state

Persistence

localStorage:

accessibilitySettings

savedServices

guidanceMode

language

Do not persist sensitive conversation content.

21. Data Flow — Assistant

User types message

       │

       ▼

ChatWindow

       │

       ▼

Assistant Controller

       │

       ▼

Language Detection

       │

       ▼

Intent Engine

       │

       ▼

Retrieval Engine

       │

       ▼

Task Planner

       │

       ▼

AI Response Generator

       │

       ▼

Structured Response

       │

       ▼

ChatMessage

       │

       ├── Read aloud

       ├── Save

       ├── Continue

       └── Start journey

22. Data Flow — Service Discovery

Search / Natural Language

          │

          ▼

     Intent Engine

          │

          ▼

     Retrieval Engine

          │

          ▼

   Ranked Service Results

          │

          ▼

     Service Cards

For MVP, ranking can be simple keyword/category relevance.

23. Data Flow — Task Journey

Service Selected

      │

      ▼

Task Planner

      │

      ▼

Task Object

      │

      ▼

Task Journey UI

      │

      ▼

Current Step

      │

      ▼

User Action

      │

      ▼

Next Step

Task progress can be stored in session/local state.

24. Data Flow — Explain Screen

User selects image

       │

       ▼

File validation

       │

       ▼

Image preview

       │

       ▼

Vision AI

       │

       ▼

Structured explanation

       │

       ▼

Explanation Panel

The original image should not be permanently stored for the MVP.

25. Data Flow — Accessibility

Accessibility Panel

       │

       ▼

Accessibility Context

       │

       ├── Text scale

       ├── Contrast

       ├── Motion

       ├── Voice

       └── Language

       │

       ▼

Application UI

26. Official Source Architecture

Official sources should be represented separately from AI-generated guidance.

Example:

type Source = {

  name: string;

  url: string;

  type: "official";

};

UI:

SAHAYAK GUIDANCE

AI-generated assistance

        ↓

OFFICIAL SOURCE

Verify current requirements

[Open Official Portal ↗]

27. Security Architecture

Secrets

Store API keys only on the server.

Example:

.env.local

Never expose:

AI_API_KEY

to browser-side JavaScript.

Upload Security

Validate:

MIME type

file extension

file size

Recommended MVP maximum:

5 MB

Reject unsupported formats.

Input Security

Treat user and AI-generated content as untrusted.

Avoid unsafe HTML rendering.

Prefer plain text / structured components.

28. Privacy Architecture

MVP data model should intentionally minimize stored user data.

Store locally:

Accessibility preferences

Saved service IDs

Demo task state

Do not store:

Passwords

OTP

UPI PIN

Bank credentials

Sensitive identity numbers

Private conversations

29. AI Provider Architecture

Use a provider interface.

Example:

interface AIProvider {

  generateResponse(

    request: AssistantRequest

  ): Promise<AssistantResponse>;

  explainImage?(

    image: File

  ): Promise<ScreenExplanation>;

}

Possible implementations:

DemoProvider

GeminiProvider

OpenAIProvider

Provider selected through environment configuration.

30. Environment Configuration

Example:

AI_PROVIDER=demo

AI_API_KEY=

AI_MODEL=

Possible values:

demo

gemini

openai

Default:

demo

The project must run without external API credentials.

31. Fallback Architecture

             AI Request

                  │

                  ▼

          External AI available?

             /           \

           YES            NO

            │              │

            ▼              ▼

        AI Provider    Demo Provider

            │              │

            └──────┬───────┘

                   ▼

             Structured Response

No visible technical failure should interrupt the user journey.

32. Error Boundary Architecture

Use application-level error boundaries where appropriate.

Expected failure domains:

AI request

image processing

voice

external links

service retrieval

Each should degrade independently.

Example:

Voice fails

   ↓

Text input remains available

not:

Voice fails

   ↓

Entire assistant fails

33. Performance Architecture

Prioritize:

optimized images

lazy loading

minimal dependencies

server-side rendering where appropriate

client components only where interaction requires them

lightweight local data

minimal API calls

Do not send unnecessary user context to the AI provider.

34. Recommended Repository Structure

sahayak-ai/

│

├── app/

│   ├── page.tsx

│   ├── assistant/

│   ├── services/

│   ├── task/

│   ├── explain-screen/

│   ├── digital-payments/

│   ├── saved/

│   ├── accessibility/

│   └── about/

│

├── components/

│   ├── layout/

│   ├── assistant/

│   ├── task/

│   ├── services/

│   ├── accessibility/

│   ├── screen-explainer/

│   ├── payments/

│   └── ui/

│

├── lib/

│   ├── ai.ts

│   ├── intent.ts

│   ├── retrieval.ts

│   ├── taskPlanner.ts

│   ├── screenExplainer.ts

│   ├── accessibility.ts

│   └── language.ts

│

├── data/

│   ├── services.ts

│   ├── paymentGuides.ts

│   ├── accessibilityGuides.ts

│   └── sampleScenarios.ts

│

├── context/

│   ├── AccessibilityContext.tsx

│   └── AppContext.tsx

│

├── locales/

│   ├── en.ts

│   ├── hi.ts

│   └── mr.ts

│

├── public/

│   ├── images/

│   └── icons/

│

├── types/

│   ├── assistant.ts

│   ├── service.ts

│   ├── task.ts

│   └── accessibility.ts

│

├── styles/

│

├── .env.example

├── README.md

├── PRD.md

├── features.md

└── architecture.md

35. Type Architecture

Define shared types.

Service

type Service = {

  id: string;

  name: string;

  category: ServiceCategory;

  description: string;

  whoItMayHelp: string;

  requirements: string[];

  documents: string[];

  steps: TaskStep[];

  officialSource?: Source;

  languages: Language[];

  keywords: string[];

};

Task

type Task = {

  id: string;

  serviceId: string;

  title: string;

  steps: TaskStep[];

  currentStep: number;

};

Task Step

type TaskStep = {

  id: string;

  title: string;

  description: string;

  why?: string;

  status?: "upcoming" | "current" | "completed";

};

Message

type Message = {

  id: string;

  role: "user" | "assistant";

  content: string;

  timestamp: string;

  actions?: MessageAction[];

};

36. API Architecture

For MVP, use Next.js route handlers where server-side operations are needed.

Suggested:

app/api/

├── assistant/

│   └── route.ts

├── explain-screen/

│   └── route.ts

└── services/

    └── route.ts

37. Assistant API

Example:

POST /api/assistant

Request:

{

  "message": "मला उत्पन्न प्रमाणपत्र काढायचं आहे",

  "language": "mr",

  "guidanceMode": "assisted"

}

Response:

{

  "intent": "income_certificate",

  "serviceId": "income-certificate",

  "response": "...",

  "nextAction": "start_task"

}

38. Explain Screen API

Example:

POST /api/explain-screen

Input:

multipart/form-data

image=<file>

language=mr

guidanceMode=assisted

Response:

{

  "purpose": "...",

  "fields": [],

  "terms": [],

  "nextAction": "...",

  "disclaimer": "..."

}

39. Service API

For future extensibility:

GET /api/services

GET /api/services/:id

For MVP, static local data can be used directly.

40. API Error Contract

Use consistent error responses.

Example:

{

  "error": {

    "code": "AI_UNAVAILABLE",

    "message": "Unable to process the request right now."

  }

}

Never return raw stack traces to the client.

41. Observability

For the hackathon MVP:

browser console should be clean

server errors should be logged safely

no sensitive user data should be logged

Optional future:

structured logs

performance monitoring

AI latency tracking

feature usage analytics

42. Accessibility Architecture — Detailed

Every component must support:

Keyboard

Tab

Shift + Tab

Enter

Space

Escape

Arrow keys where appropriate

Focus

Use visible focus rings.

Screen Readers

Use:

semantic landmarks

aria-labels

aria-live for dynamic assistant responses

meaningful button labels

Example:

<div aria-live="polite">

  Assistant response...

</div>

43. AI Accessibility Transformation

The AI response should adapt based on user preference.

Raw response

     │

     ▼

Guidance mode

     │

     ├── Simple

     ├── Standard

     └── Assisted

     │

     ▼

Language

     │

     ▼

Accessibility presentation

     │

     ▼

UI

This means accessibility affects content structure, not just font size.

44. Task State Machine

A task can be modeled as:

NOT_STARTED

     ↓

IN_PROGRESS

     ↓

STEP_COMPLETED

     ↓

NEXT_STEP

     ↓

...

     ↓

COMPLETED

Potential state:

type TaskStatus =

  | "not_started"

  | "in_progress"

  | "completed";

Step status:

type StepStatus =

  | "upcoming"

  | "current"

  | "completed";

45. Screen Explanation State Machine

IDLE

 ↓

UPLOADING

 ↓

VALIDATING

 ↓

ANALYZING

 ↓

RESULT

Error branches:

INVALID_FILE

AI_ERROR

UNSUPPORTED_FORMAT

46. Voice State Machine

IDLE

 ↓

LISTENING

 ↓

PROCESSING

 ↓

TEXT_READY

Error:

UNSUPPORTED

PERMISSION_DENIED

RECOGNITION_ERROR

47. Service Retrieval Ranking

MVP scoring can be simple:

keyword match       +3

category match      +2

language keyword    +2

exact phrase        +5

Return top 1–3 results.

Do not show dozens of irrelevant results.

Future architecture can replace this with semantic retrieval.

48. AI Prompt Architecture

Do not put the entire application prompt inside the frontend.

Maintain prompts separately.

Example:

prompts/

├── assistant.ts

├── screenExplainer.ts

└── taskPlanner.ts

The assistant system prompt should instruct the AI to:

use only provided service context

avoid inventing requirements

state uncertainty

use plain language

follow selected language

respect guidance mode

avoid requesting sensitive information

distinguish official information from generated guidance

49. RAG-Ready Architecture

Although the MVP can use local keyword retrieval, structure the system so future RAG can be added.

Future:

Official Documents

       ↓

Document Processing

       ↓

Chunking

       ↓

Embeddings

       ↓

Vector Store

       ↓

Semantic Retrieval

       ↓

LLM

Do not implement a complex vector database unless required.

50. Deployment Architecture

Recommended:

                   Internet

                      │

                      ▼

                  Vercel

                      │

             ┌────────┴────────┐

             │                 │

             ▼                 ▼

         Next.js UI       API Routes

                               │

                         ┌─────┴─────┐

                         │           │

                         ▼           ▼

                    AI Provider   Local Data

Browser capabilities:

Browser

 ├── Speech Recognition

 ├── Speech Synthesis

 ├── localStorage

 └── File APIs

51. Environment Separation

Development

AI_PROVIDER=demo

Demo

Can use:

AI_PROVIDER=gemini

if API is available.

Production prototype

Use secure server-side environment variables.

Never commit .env.local.

52. Testing Architecture

Unit Testing

Test:

intent matching

retrieval

task generation

language selection

accessibility state

service filtering

Integration Testing

Test:

assistant → retrieval

assistant → task planner

service → task journey

upload → explanation

accessibility → UI

Manual Testing

Test:

mobile

desktop

keyboard

screen reader where available

voice

high contrast

reduced motion

53. Critical Test Scenarios

Test 1

Input:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

Expected:

intent = income_certificate

language = mr

Test 2

Input:

"I need help proving where I live."

Expected:

intent = residence_certificate

Test 3

Input:

"मला UPI वापरायला शिकायचं आहे."

Expected:

intent = digital_payments

Test 4

AI provider unavailable.

Expected:

demo fallback works

Test 5

Voice unavailable.

Expected:

typed input remains available

Test 6

Large text enabled.

Expected:

application typography increases without breaking layout

Test 7

High contrast enabled.

Expected:

text and controls remain clearly distinguishable

54. Performance Targets

For the prototype:

no unnecessary blocking scripts

optimized images

fast initial page load

responsive interaction

no large client-side data payloads

lazy-load screen explanation functionality if possible

AI latency should be communicated with a subtle loading state.

Do not fake instant AI responses if the API is actually processing.

55. Scalability Path

Current

Local JSON

+

Simple retrieval

+

LLM

Next

Structured database

+

Semantic retrieval

+

Verified knowledge synchronization

Future

Government/API integrations

+

RAG

+

Browser navigation

+

SDK

+

Voice/IVR

The interfaces between modules should remain stable.

56. Architecture Decision Records

ADR-01 — Next.js

Chosen to keep frontend and lightweight server-side API logic in one project.

ADR-02 — Local knowledge base for MVP

Chosen because the hackathon prototype needs reliability and fast iteration.

ADR-03 — Demo fallback

Chosen to prevent external AI/API failure from breaking the demonstration.

ADR-04 — Browser speech APIs

Chosen to demonstrate voice accessibility without adding unnecessary infrastructure.

ADR-05 — localStorage

Chosen for non-sensitive MVP preferences and saved services.

ADR-06 — Provider abstraction

Chosen to avoid locking the application to a single AI vendor.

57. What NOT to Build in MVP

Avoid:

microservices

Kubernetes

complex authentication

PostgreSQL unless necessary

vector database unless necessary

custom model training

payment processing

government login automation

browser automation

large-scale analytics

unnecessary admin dashboards

The MVP should remain a modular monolith.

58. Why Modular Monolith

For a two-person hackathon team, the recommended architecture is:

Modular monolith + clean internal boundaries

rather than microservices.

Benefits:

faster development

easier deployment

easier debugging

fewer infrastructure failures

easier local development

simpler demo

Internal modules can later become services if required.

59. Final Architecture

                           SAHAYAK AI

                               │

                               ▼

                     ┌───────────────────┐

                     │   Next.js App     │

                     │ React + TypeScript│

                     └─────────┬─────────┘

                               │

              ┌────────────────┼────────────────┐

              │                │                │

              ▼                ▼                ▼

        Accessibility      Assistant        Services

           Layer             Layer           Layer

              │                │                │

              │                ▼                │

              │          AI Orchestrator       │

              │                │                │

              │       ┌────────┼────────┐       │

              │       ▼        ▼        ▼       │

              │    Intent   Retrieval  Task     │

              │    Engine    Engine   Planner   │

              │       │        │        │       │

              │       └────────┼────────┘       │

              │                ▼                │

              │       Response Generator        │

              │                │                │

              └────────────────┼────────────────┘

                               ▼

                     Service Knowledge Base

                               │

                    ┌──────────┴──────────┐

                    ▼                     ▼

             Local Demo Data        Official Sources

                    │

                    ▼

              Citizen Guidance

60. Final Architectural Principle

The most important architectural rule is:

Keep the AI, knowledge, task planning, accessibility and presentation layers separate.

This allows Sahayak to evolve from:

Hackathon MVP

into:

AI accessibility layer

        ↓

Portal widget

        ↓

SDK/API

        ↓

Multi-service digital navigation platform

without rebuilding the entire system.

61. Definition of Architectural Done

The architecture is considered implemented when:

Frontend and application modules are separated.

AI provider is abstracted.

Demo fallback works.

Intent detection is isolated.

Retrieval is isolated.

Task planning is isolated.

Knowledge base is modular.

Accessibility state is centralized.

Localization is modular.

Screen explanation is isolated.

Voice functionality degrades gracefully.

Sensitive information is not persisted.

API keys are server-side only.

Components are reusable.

The application can run without complex infrastructure.

The architecture can later support RAG and verified service integrations.

62. Final Architecture Statement

Sahayak AI uses a modular monolithic architecture built around an AI orchestration layer, structured service knowledge base, task-planning engine and accessibility-first presentation layer.

The architecture is intentionally lightweight for a two-person hackathon team while keeping clean boundaries for future expansion.

The system transforms:

Natural-language user intent → service understanding → task planning → accessible guidance → user action.

That transformation is the technical foundation of Sahayak AI.