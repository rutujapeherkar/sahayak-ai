Product Requirements Document (PRD)

Sahayak AI

Version: 1.0Status: MVP / Hackathon PrototypeTheme: Digital Inclusion & Public AccessDomain: AI + Digital Public Services + AccessibilityTeam Size: 2Product Type: Web Application

1. Product Summary

1.1 Product Name

Sahayak AI

Tagline

Making digital services usable for everyone.

Core USP

We don't replace digital services. We make them usable.

Sahayak AI is an AI-powered accessibility and task-navigation layer designed to help citizens understand and navigate existing digital public and essential digital services.

Instead of creating another service portal, Sahayak focuses on the last-mile usability problem:

A citizen may have access to a digital service but still not know what to do, which service to choose, what information is required, or how to complete the process.

Sahayak converts a user's natural-language goal into a simple, personalized and accessible task journey.

2. Product Vision

Create a human-centered digital assistant that helps citizens move from:

"I don't know what to do."

to:

"I understand my next step."

The product should reduce barriers caused by:

complicated terminology

unfamiliar digital interfaces

multi-step service workflows

language barriers

limited digital literacy

accessibility needs

3. Problem Statement

Many digital public services are available online, but availability does not guarantee usability.

Users can struggle with:

identifying the correct service

understanding government terminology

knowing which documents they need

understanding application steps

navigating unfamiliar digital interfaces

interpreting forms and fields

knowing what to do after an error

using services in a preferred regional language

reading or interacting with interfaces due to accessibility needs

This problem can be particularly significant for:

senior citizens

first-time digital-service users

regional-language users

users with accessibility needs

Problem statement

Citizens need a simpler way to understand and navigate digital public services without having to first understand the technology, terminology or structure of the service portal.

4. Product Goals

Primary Goals

G1 — Natural-language service discovery

Allow users to describe what they want to accomplish instead of requiring them to know the exact service name.

Example:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

The system should infer the likely task.

G2 — Guided task navigation

Convert a complex service into a sequence of understandable steps.

Example:

✓ Understand service

✓ Check requirements

→ Prepare documents

○ Start application

○ Submit

G3 — Simplify complex information

Convert technical or complicated service information into clear, plain-language instructions.

G4 — Accessibility-first interaction

Provide:

large text

high contrast

voice input

text-to-speech

keyboard navigation

reduced motion

screen-reader-friendly structure

G5 — Multilingual interaction

Support:

English

Hindi

Marathi

for the core assistant experience.

G6 — Explain confusing digital screens

Allow users to upload a screenshot of a confusing service page and receive an explanation of:

what the page is for

what information is required

what important terms mean

what the user should do next

G7 — Support digital confidence

Provide different levels of guidance:

Simple

Standard

Assisted

5. Non-Goals

The MVP will NOT:

replace government portals

claim to be an official government application

submit government applications automatically

perform financial transactions

store bank credentials

store UPI PINs

collect unnecessary identity information

guarantee eligibility

provide legal advice

provide medical diagnosis

fabricate government scheme details

attempt to support every public service in India

6. Target Users

Persona 1 — Senior Citizen

Characteristics

May own a smartphone.

May have limited digital confidence.

May prefer voice or larger text.

May become confused by multi-step portals.

Needs

simple instructions

large controls

voice assistance

step-by-step guidance

clear confirmation

Success condition

The user can understand the next action without needing someone else to interpret the interface.

Persona 2 — Regional-Language User

Characteristics

More comfortable communicating in Marathi/Hindi.

May understand basic English but prefer their native language.

Needs

natural-language input

localized interface

voice assistance

simple terminology

Persona 3 — First-Time Digital User

Characteristics

Does not know the exact service name.

May not understand government terminology.

Needs

goal-based discovery

clarification questions

task planning

document guidance

Persona 4 — Accessibility-Focused User

Needs

high contrast

text resizing

keyboard support

screen-reader-compatible UI

voice interaction

reduced motion

7. Product Principles

P1 — Goal before terminology

Ask:

"What are you trying to do?"

rather than:

"Which government department/service do you need?"

P2 — One step at a time

Avoid overwhelming users with a large procedure.

P3 — Explain before asking

Whenever possible, explain why information is being requested.

P4 — Never hide uncertainty

If the AI is uncertain:

"I'm not completely sure. Here are the closest options."

P5 — Official source remains authoritative

Sahayak provides assistance.

The official service portal remains the source of truth.

P6 — Accessibility is core functionality

Accessibility must affect the entire product, not only one settings page.

P7 — Human-centered over AI-centered

Do not make the product look like an "AI demo."

The user task is more important than the AI technology.

8. Core User Journeys

Journey 1 — Discover a Service

Home

 ↓

Ask Sahayak

 ↓

User enters natural-language request

 ↓

Language detection

 ↓

Intent detection

 ↓

Clarifying question

 ↓

Service recommendation

 ↓

Service details

 ↓

Start guided journey

Journey 2 — Guided Task

Service

 ↓

Start Journey

 ↓

Understand service

 ↓

Requirements

 ↓

Documents

 ↓

Application steps

 ↓

Official portal

The system should maintain visible progress.

Journey 3 — Marathi Voice Interaction

User taps microphone

 ↓

Speaks Marathi

 ↓

Speech converted to text

 ↓

Intent detected

 ↓

Response generated in Marathi

 ↓

User taps Read Aloud

 ↓

Response spoken

Journey 4 — Explain a Screen

Explain This Screen

 ↓

Upload screenshot

 ↓

Image analysis

 ↓

Identify visible purpose/fields

 ↓

Explain terminology

 ↓

Suggest next step

The result should contain a clear disclaimer that image-based interpretation can be incomplete.

Journey 5 — Accessibility Mode

Accessibility

 ↓

Choose preferences

 ↓

Text size

 ↓

Contrast

 ↓

Motion

 ↓

Voice

 ↓

Preferences persist

Journey 6 — Digital Payment Learning

Digital Payments

 ↓

Choose topic

 ↓

Step-by-step explanation

 ↓

Read aloud if required

 ↓

Safety guidance

9. Functional Requirements

FR-01 — Home Page

The system shall provide:

project introduction

primary "Ask Sahayak" action

service discovery

digital payment guidance

accessibility entry point

language selection

FR-02 — Natural Language Input

The assistant shall accept:

typed text

voice input where supported

FR-03 — Language Detection

The system should identify English, Hindi and Marathi input where possible.

If uncertain, it should use the selected UI language.

FR-04 — Intent Detection

The system should classify requests into demo categories such as:

education

documents

digital payments

senior citizen support

social/public services

health-service navigation

general service discovery

FR-05 — Clarification

If required information is missing, the assistant should ask targeted questions.

Questions should be:

short

relevant

easy to answer

limited in number

FR-06 — Service Retrieval

The system shall retrieve relevant records from the local knowledge base.

Each service record should include:

id

name

category

description

whoItMayHelp

requirements

documents

steps

officialSource

languages

keywords

FR-07 — Service Detail

The service page shall display:

service name

purpose

who it may help

common requirements

documents

steps

official source

disclaimer

FR-08 — Task Journey

The system shall create a visible journey containing:

completed steps

current step

upcoming steps

FR-09 — Simple / Standard / Assisted Modes

The user shall be able to change guidance complexity.

Simple

Short, direct instructions.

Standard

Normal level of detail.

Assisted

Extra explanation, reasons and voice support.

FR-10 — Explain This Screen

The system shall allow image upload.

Supported MVP format:

PNG

JPG

JPEG

WebP

The AI should return:

page purpose

visible fields

terminology explanations

suggested next action

FR-11 — Voice Input

Use browser speech recognition where available.

Provide:

start

stop

processing state

unsupported-browser fallback

FR-12 — Text-to-Speech

Provide:

play

stop

read current response

Use browser SpeechSynthesis where available.

FR-13 — Accessibility

Provide controls for:

text size

contrast

reduced motion

voice assistance

FR-14 — Saved Services

Users shall be able to:

save a service

remove a service

view saved services

For the MVP, use localStorage rather than requiring authentication.

FR-15 — Digital Payment Guidance

Provide educational flows for:

what UPI is

sending money

verifying recipient

payment requests

PIN safety

failed payment guidance

FR-16 — External Official Sources

Official-source links should:

be clearly labeled

open in a new tab

not be presented as part of Sahayak itself

include a reminder to verify current information

10. AI Requirements

AI Architecture

User Input

   ↓

Language Layer

   ↓

Intent Detection

   ↓

Task Identification

   ↓

Clarification

   ↓

Knowledge Retrieval

   ↓

Task Planner

   ↓

Response Generator

   ↓

Accessibility Transformation

AI Modules

lib/

  ai.ts

  intent.ts

  retrieval.ts

  taskPlanner.ts

  services.ts

  language.ts

  screenExplainer.ts

AI Response Requirements

Responses must be:

concise

structured

plain-language

actionable

transparent about uncertainty

Avoid giant paragraphs.

11. Knowledge Base Requirements

Create a curated MVP dataset containing approximately 10–15 service/guidance records.

Suggested categories:

Documents

Income Certificate guidance

Residence Certificate guidance

Digital document guidance

Education

Education support discovery

Scholarship discovery

Digital

DigiLocker guidance

UPI learning

Digital payment safety

Accessibility

Senior citizen digital assistance

Accessible digital-service guidance

Public Services

Public grievance guidance

Do not invent current official requirements.

Where exact requirements are unknown:

"Requirements may vary. Check the official portal for current information."

12. Demo Mode

The application must work without an AI API key.

Demo mode should:

detect common intents

retrieve service data

provide structured answers

support predefined demo conversations

support Marathi examples

demonstrate task journeys

No visible technical errors should occur.

13. UI/UX REQUIREMENTS

Visual identity

The product should feel:

trustworthy

calm

human

modern

civic-tech oriented

accessible

professional

It should NOT look like a generic AI-generated application.

Avoid

excessive gradients

neon colors

glowing AI elements

robot graphics

fake government logos

excessive glassmorphism

excessive rounded cards

unnecessary animation

huge decorative AI illustrations

random emojis

Prefer

strong typography

warm neutral background

dark readable text

restrained teal/green accent

accessible blue secondary accent

subtle borders

soft shadows

real human-centered photography

consistent iconography

clear spacing

14. Typography

Use a professional readable font system.

Recommended:

Primary Latin

Inter / Manrope / Plus Jakarta Sans

Devanagari

Noto Sans Devanagari

Typography should prioritize:

readability

hierarchy

multilingual rendering

accessibility

15. Color Requirements

Use a restrained palette.

Suggested roles:

Primary

Deep teal/green.

Secondary

Accessible muted blue.

Background

Warm off-white.

Surface

White or very light neutral.

Text

Deep charcoal.

Success

Accessible green.

Warning

Accessible amber.

Error

Accessible red.

Do not rely on color alone for status.

16. Image Requirements

Use approximately 4–6 high-quality human-centered images.

Preferred themes:

Indian senior citizen using smartphone

Indian student

Indian family using technology

citizen receiving digital assistance

accessible technology

Avoid:

AI robots

futuristic interfaces

politicians

fake officials

generic AI imagery

All images must have meaningful alt text.

17. Responsive Requirements

The product shall support:

desktop

tablet

mobile

Target widths:

1440px

1024px

768px

390px

Requirements:

no horizontal overflow

touch-friendly controls

minimum approximately 44px touch targets

readable text

mobile-friendly navigation

18. Accessibility Requirements

Target good WCAG-inspired practices.

Must include:

semantic HTML

heading hierarchy

keyboard navigation

visible focus

accessible labels

alt text

adequate contrast

reduced-motion support

screen-reader-friendly controls

logical tab order

19. Information Architecture

Home

│

├── Explore Services

│   └── Service Detail

│       └── Task Journey

│

├── Ask Sahayak

│   ├── Chat

│   ├── Voice

│   └── Recommendations

│

├── Explain This Screen

│

├── Digital Payments

│

├── Saved

│

├── Accessibility

│

└── About

20. Suggested Routes

/

 /services

 /services/[id]

 /assistant

 /task/[id]

 /explain-screen

 /digital-payments

 /saved

 /accessibility

 /about

21. Component Requirements

Use modular components.

Suggested structure:

components/

  layout/

    Navbar

    Footer

    MobileNav

  assistant/

    ChatWindow

    ChatMessage

    QuickPrompt

    VoiceInput

    GuidancePanel

    RecommendationCard

  task/

    TaskJourney

    TaskStep

    ProgressIndicator

  services/

    ServiceCard

    ServiceFilters

    ServiceDetail

    DocumentChecklist

    StepList

  accessibility/

    AccessibilityPanel

    TextSizeControl

    ContrastControl

    MotionControl

  screen-explainer/

    UploadZone

    ImagePreview

    ExplanationPanel

  ui/

    Button

    Card

    Input

    Select

    Modal

    Badge

    Toast

22. State Management

Use simple state management appropriate for MVP.

Use:

React state/context where sufficient

localStorage for accessibility preferences

localStorage for saved services

no unnecessary global state library

23. Error Handling

The system shall handle:

AI unavailable

Fallback to demo mode.

Voice unavailable

Display:

"Voice input is not supported in this browser. You can type your request instead."

Invalid image

Display:

"Please upload a PNG, JPG or WebP image."

Empty search

Display a useful suggestion.

No matching service

Display:

"I couldn't find a close match. Try describing what you want to accomplish rather than the service name."

24. Privacy Requirements

Do not store sensitive information.

Do not request:

OTP

UPI PIN

passwords

bank account credentials

unnecessary identity numbers

If detected in user input, warn the user.

25. Trust and Disclaimer Requirements

Persistent or easily accessible disclaimer:

Sahayak AI provides guidance and does not represent a government department.

Additional:

Requirements and procedures may change. Verify current information on the official service portal before submitting an application.

26. Success Metrics

The hackathon prototype should not claim measured results unless testing has actually been conducted.

For future pilot testing, measure:

task completion rate

time to identify service

task completion time

user errors

abandonment

accessibility success

user confidence

language usage

successful navigation to official source

27. Technical Architecture

Recommended:

                 User

                   │

                   ▼

          Next.js Web Application

                   │

        ┌──────────┴──────────┐

        ▼                     ▼

   Accessibility          AI Interface

      Layer                    │

        │                      ▼

        │               Intent Engine

        │                      │

        │                 Retrieval

        │                      │

        │                 Task Planner

        │                      │

        │               Response Layer

        │                      │

        └──────────┬───────────┘

                   ▼

          Service Knowledge Base

                   │

                   ▼

           Guidance to Citizen

28. Recommended Technology Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

accessible component primitives

Lucide icons

AI

Gemini or OpenAI-compatible API

demo/fallback mode

Data

JSON/TypeScript data

optional SQLite if required

Browser APIs

Speech Recognition

Speech Synthesis

File Upload APIs

Deployment

Vercel or equivalent

Keep infrastructure minimal.

29. Security Requirements

Never expose API keys in client code.

Store secrets in environment variables.

Validate uploaded file types.

Limit uploaded image size.

Avoid persistent sensitive chat storage.

Sanitize rendered user/AI content where appropriate.

External links should be explicitly identified.

30. MVP Scope

Must Have

Home

AI assistant

Natural-language intent detection

Service retrieval

Task journey

Marathi/Hindi/English core UI

Voice input where supported

Text-to-speech

Accessibility controls

Service details

Document guidance

Digital payment learning

Explain This Screen prototype

Saved services

Demo fallback mode

Responsive design

Should Have

Guidance modes

Rich structured AI responses

Better screen explanation

Search/filter

polished empty/error/loading states

Could Have

Browser-side guided overlay

additional Indian languages

richer voice experience

more service records

analytics dashboard

Won't Have in MVP

real government transaction execution

payment processing

government authentication

permanent user accounts

large-scale live government API integration

full browser automation

31. Demo Script

The demo should take approximately 2–3 minutes.

Step 1

Open Sahayak.

Say:

"Many people can access digital services but still struggle to understand them."

Step 2

Enter:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

Show intent recognition.

Step 3

Show:

I understood: Income Certificate

Step 4

Start task journey.

Show:

✓ Understand

✓ Requirements

→ Prepare documents

○ Application

○ Submission

Step 5

Switch to Marathi.

Step 6

Enable:

large text

high contrast

read aloud

Step 7

Demonstrate:

Explain This Screen

Upload a prepared sample screenshot.

Step 8

Open Digital Payments.

Show the guided UPI-learning flow.

32. Hackathon Presentation Claims

Use factual, defensible language.

Good

"Sahayak aims to reduce the digital-literacy barrier."

"The prototype demonstrates multilingual, accessibility-first task guidance."

"The architecture can be extended to additional digital services."

Avoid

"Sahayak will solve digital exclusion."

"Sahayak guarantees successful applications."

"Sahayak is officially integrated with government systems."

"Our AI is 100% accurate."

33. Competitive Positioning

The product should not be positioned as a replacement for:

government service aggregators

document platforms

language platforms

grievance systems

banking applications

Instead:

Sahayak is an assistance and accessibility layer that can sit on top of existing digital-service ecosystems.

This is the central market/product positioning.

34. Social Impact

The intended impact is to make digital services more usable for people who may otherwise struggle because of:

language

age

digital literacy

interface complexity

accessibility requirements

The product promotes:

independence

digital confidence

accessibility

clearer understanding

safer digital interaction

35. Scalability

The architecture should allow expansion from:

5–15 demo journeys

to:

Many service journeys

without changing the fundamental AI pipeline.

The knowledge base should be modular.

Each new service should be addable as a new structured record.

36. Future Vision

Long-term:

Phase 1

Curated service guidance.

Phase 2

Verified service knowledge synchronization.

Phase 3

Embedded accessibility widget for existing portals.

Phase 4

Browser-based task navigation.

Phase 5

Voice/IVR support.

Phase 6

SDK/API for digital-service providers.

37. Acceptance Criteria

The MVP is complete when:

Functional

Home works.

Navigation works.

Service search works.

Service details work.

Assistant works.

Natural-language demo works.

Marathi example works.

Task journey works.

Accessibility controls work.

Voice works where browser-supported.

Text-to-speech works where supported.

Saved services work.

Digital payment guidance works.

Screenshot upload works.

Explain This Screen produces a structured response.

Demo mode works without API key.

UI

No horizontal overflow.

No broken images.

No placeholder content.

No generic lorem ipsum.

No visible debug text.

Mobile layout works.

Desktop layout works.

Visual hierarchy is consistent.

Accessibility

Keyboard navigation works.

Focus states are visible.

Controls have labels.

Images have alt text.

Text contrast is adequate.

Reduced motion is respected.

Trust

Disclaimer is visible.

No fake government branding.

No unsupported claims.

Sensitive information is not requested.

38. Product Success Definition

For this hackathon prototype, success means demonstrating that a citizen can:

Describe a digital-service goal in natural language → understand what service is relevant → receive a simple task journey → access guidance in their preferred language → use accessibility features → know what to do next.

The product should demonstrate a meaningful reduction in interaction complexity, not merely provide another chatbot.

39. Final Product Statement

Sahayak AI

An AI-powered accessibility and task-navigation layer that helps citizens understand and use digital public services through natural-language interaction, multilingual assistance, guided workflows and accessibility features.

Short pitch

"You don't need to know which service you need. Just tell Sahayak what you're trying to do."

USP

"Existing digital services provide access. Sahayak provides understanding."