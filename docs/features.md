Sahayak AI — Features Specification

Product: Sahayak AITheme: Digital Inclusion & Public AccessDomain: AI + Digital Public Services + AccessibilityPurpose: Detailed feature specification for the MVP implementation.

1. FEATURE PHILOSOPHY

Sahayak AI is not another government-service portal and not a generic chatbot.

Its purpose is to make existing digital services understandable, navigable and accessible.

The core experience is:

Tell us what you want to accomplish → Sahayak understands → Sahayak simplifies → Sahayak guides → You take the next step.

Every feature should support at least one of these principles:

Simplicity

Accessibility

Digital confidence

Personalization

Multilingual access

Actionable guidance

Trust

Privacy

2. FEATURE PRIORITY

P0 — Must Have

These features are required for the hackathon MVP.

AI Task Navigator

Natural-Language Service Discovery

Guided Task Journey

Service Knowledge Base

Multilingual Support

Accessibility Controls

Voice Input

Text-to-Speech

Explain This Screen

Service Details + Document Guidance

Digital Payment Guidance

Demo/Fallback AI Mode

Saved Services

Official Source Links

Responsive UI

P1 — Should Have

Simple / Standard / Assisted modes

Smart clarification questions

Contextual guidance panel

Search and category filtering

Rich structured AI responses

Personalized recommendations

Helpful / Not Helpful feedback

Conversation reset

Recent activity

Better screenshot explanation

P2 — Future Scope

Browser-based guided navigation

Live verified government API integration

More Indian languages

Voice/IVR assistant

WhatsApp integration

Human assistance escalation

Embedded accessibility SDK

Portal integration widget

Offline/low-bandwidth mode

Analytics dashboard

3. FEATURE F01 — AI TASK NAVIGATOR

Purpose

Help a citizen complete a digital-service task without requiring them to understand the structure or terminology of the service portal.

User Story

As a citizen, I want to tell Sahayak what I am trying to do so that I can receive a clear sequence of steps.

Example

User:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

Sahayak:

"I understood: You want help with an Income Certificate."

Then creates:

YOUR JOURNEY

✓ Understand the service

✓ Check requirements

→ Prepare documents

○ Start application

○ Submit

Requirements

Accept natural-language input.

Identify likely user intent.

Identify the task.

Retrieve relevant service.

Create a task journey.

Show current progress.

Explain the next action.

Allow the user to continue or go back.

Acceptance Criteria

User can start a task using natural language.

System identifies a relevant demo service.

Task journey is visually displayed.

Current step is obvious.

User can navigate between steps.

The assistant does not overwhelm the user with all steps at once.

4. FEATURE F02 — NATURAL-LANGUAGE SERVICE DISCOVERY

Purpose

Users should not need to know the official name of a service.

Example

User:

"I need a document that proves where I live."

System identifies:

Residence Certificate guidance

Another example:

"मला माझ्या मुलीच्या शिक्षणासाठी मदत हवी आहे."

System identifies:

Education support / scholarship discovery

Requirements

Support:

English

Hindi

Marathi

Use intent classification plus knowledge-base retrieval.

Acceptance Criteria

Different natural-language descriptions can map to the same intent.

System can ask a clarification question if confidence is low.

System does not claim certainty when the intent is ambiguous.

5. FEATURE F03 — SMART CLARIFICATION QUESTIONS

Purpose

Ask only the questions needed to narrow down the user's task.

Example

User:

"I need education help."

Sahayak:

"What kind of help are you looking for?"

Options:

Scholarship

Fee support

Educational resources

Not sure

Requirements

Questions must:

be short

use plain language

provide quick-select options where possible

avoid unnecessary personal information

explain why sensitive information should not be entered

Acceptance Criteria

The assistant does not ask a long questionnaire.

Questions are related to the selected intent.

User can answer by clicking or typing.

6. FEATURE F04 — GUIDED TASK JOURNEY

Purpose

Turn a complicated process into manageable steps.

UI

Income Certificate

01  Understand service        ✓

02  Check requirements        ✓

03  Prepare documents         →

04  Start application         ○

05  Submit                    ○

Each step should contain

step number

title

simple explanation

why it matters

required action

optional read-aloud button

Acceptance Criteria

Current step is visually distinct.

Completed steps are clearly marked.

Future steps are visible but not overwhelming.

User can return to previous steps.

7. FEATURE F05 — SERVICE KNOWLEDGE BASE

Purpose

Provide structured and reusable service information.

Data Model

Each service should contain:

id

name

category

shortDescription

whoItMayHelp

commonRequirements

documents

steps

officialSource

languages

keywords

disclaimer

MVP Service Categories

Documents

Income Certificate

Residence Certificate

Digital document guidance

Education

Education support

Scholarship discovery

Digital

DigiLocker guidance

Digital payment guidance

Accessibility

Senior citizen digital assistance

Accessible-service guidance

Public Services

Public grievance guidance

Important Rule

Do not fabricate:

benefit amounts

eligibility thresholds

deadlines

legal requirements

official government claims

Where exact information is uncertain:

"Requirements may vary. Check the official portal for current information."

8. FEATURE F06 — SERVICE DETAIL PAGE

Purpose

Explain a service in simple language before the user starts a task.

Sections

Overview

What the service is.

Who it may help

Plain-language description.

Common requirements

High-level information.

Documents

Checklist.

Steps

Numbered process.

Official source

Clearly labeled external link.

Important

Current requirements must be verified on the official source.

Actions

Start guided journey

Save service

Ask Sahayak

Open official source

9. FEATURE F07 — EXPLAIN THIS SCREEN

Purpose

Help users who are stuck on an unfamiliar digital-service screen.

User Flow

Explain This Screen

        ↓

Upload screenshot

        ↓

Preview

        ↓

Analyze

        ↓

Explanation

Output

What is this screen?

Short explanation.

What information is required?

List of visible fields.

What do these terms mean?

Simple explanations.

What should I do next?

One clear recommended next action.

Example

You are on the document-upload step.

This page is asking you to attach supporting documents.

Next: Select the required document from your device and upload it.

Safety

Display:

AI-generated screen explanations may be incomplete. Verify important instructions on the original service portal.

Acceptance Criteria

User can upload PNG/JPG/WebP.

Image preview is shown.

Invalid files are rejected gracefully.

Explanation is structured.

Original image is not permanently stored in the MVP.

10. FEATURE F08 — DIGITAL CONFIDENCE MODES

Purpose

Adapt the amount of guidance to the user's digital familiarity.

Modes

Simple

For first-time users.

Example:

Step 1 of 5Enter your mobile number.Tap Continue.

Standard

Concise normal guidance.

Assisted

Additional context:

Step 2 of 5Enter your mobile number.

Why do we need this?This may be used to verify your account depending on the service.

🔊 Read aloud

Acceptance Criteria

User can change mode.

Guidance changes immediately.

The selected mode persists during the session.

11. FEATURE F09 — MULTILINGUAL SUPPORT

Languages

English

हिंदी

मराठी

Requirements

Language selector must be accessible from the main navigation.

Core UI should translate.

Assistant should accept natural-language input in supported languages.

Example

English:

"Help me get an income certificate."

Hindi:

"मुझे आय प्रमाण पत्र के लिए मदद चाहिए।"

Marathi:

"मला उत्पन्न प्रमाणपत्रासाठी मदत हवी आहे."

All should map to the appropriate task.

Important

Do not mix languages unexpectedly unless the user requests it.

12. FEATURE F10 — VOICE INPUT

Purpose

Allow users to describe their requirement without typing.

UI

Microphone button:

Speak

States:

Idle

Listening

Processing

Result

Unsupported

Requirements

Use browser speech recognition where supported.

Show live/listening feedback.

Allow stopping.

Convert recognized speech into editable text before submission where possible.

Provide typed-input fallback.

Unsupported State

"Voice input is not supported in this browser. You can type your request instead."

13. FEATURE F11 — TEXT-TO-SPEECH

Purpose

Allow users to listen to instructions.

Controls

Read aloud

Pause/stop

Replay

Use browser SpeechSynthesis where available.

Requirements

Read only the relevant response.

Avoid reading UI navigation unnecessarily.

Use the selected language when supported.

14. FEATURE F12 — ACCESSIBILITY CONTROL CENTER

Purpose

Allow users to personalize how they interact with Sahayak.

Controls

Text Size

Default

Large

Extra Large

Contrast

Default

High Contrast

Motion

Normal

Reduced Motion

Voice

Enable/disable read aloud

Language

English

Hindi

Marathi

Persistence

Store non-sensitive preferences in localStorage.

Acceptance Criteria

Controls actually change the UI.

Settings persist after refresh.

High contrast remains readable.

Reduced motion disables unnecessary animations.

15. FEATURE F13 — KEYBOARD AND SCREEN-READER ACCESS

Requirements

Every interactive element keyboard accessible.

Visible focus state.

Logical tab order.

Semantic buttons/links.

Proper labels.

ARIA only where necessary.

Meaningful alt text.

Correct heading hierarchy.

Acceptance Criteria

A user should be able to navigate the core flow without a mouse.

16. FEATURE F14 — DIGITAL PAYMENT LEARNING

Purpose

Help users, especially beginners and older adults, understand digital payment workflows.

Topics

What is UPI?

How to send money

How to verify recipient

Understanding payment requests

UPI PIN safety

What to do if payment fails

Basic digital-payment safety

Safety Messages

Never share your UPI PIN.

Never share OTPs.

Verify the recipient.

Do not enter a PIN to receive money.

Use trusted/official payment applications.

Important

This is educational guidance, not financial advice.

17. FEATURE F15 — SAVED SERVICES

Purpose

Allow users to save useful services for later.

Actions

Save

Remove

View saved

Continue journey

Storage

Use localStorage for MVP.

No authentication required.

Empty State

Nothing saved yet.

Save a service to find it quickly later.

CTA:

Explore Services

18. FEATURE F16 — SEARCH AND FILTER

Search

Allow users to search service names and descriptions.

Filters

Category

Language

Service type

Categories

Documents

Education

Digital Payments

Accessibility

Public Services

Empty State

"Couldn't find a matching service. Try describing what you want to accomplish."

19. FEATURE F17 — CONTEXTUAL GUIDANCE PANEL

On desktop, the assistant can display a side panel containing:

Your goal

Income Certificate

Current step

Prepare documents

You may need

Document A

Document B

Document C

Next

Start application

The panel should update as the conversation progresses.

On mobile, convert it into a collapsible section.

20. FEATURE F18 — TRUST AND SOURCE INDICATORS

Every service should clearly distinguish:

Sahayak guidance

Generated assistance.

Official source

External authoritative source.

Use labels such as:

Sahayak guidance

and

Official source

Never make a third-party source look like an official government source.

21. FEATURE F19 — PRIVACY PROTECTION

The assistant should not ask users for:

OTPs

UPI PINs

passwords

bank credentials

unnecessary identity numbers

If sensitive content is detected:

For your safety, please don't share passwords, OTPs, PINs or sensitive identity information here.

The MVP should not permanently store private conversations.

22. FEATURE F20 — AI FALLBACK / DEMO MODE

Purpose

Ensure the hackathon demo works even if the AI API is unavailable.

Behavior

If external AI is unavailable:

User Input

   ↓

Keyword / intent matching

   ↓

Local knowledge base

   ↓

Predefined structured response

The UI should continue to feel normal.

Do not display:

API key missing

backend unavailable

stack trace

technical errors

23. FEATURE F21 — AI RESPONSE ACTIONS

Each useful assistant response can provide:

Read aloud

Save

Copy

Continue

Start journey

View service

Open official source

Actions should be contextual.

Do not display every action on every message.

24. FEATURE F22 — CONVERSATION MANAGEMENT

The assistant should support:

New conversation

Clear conversation

Scroll to latest message

Loading/typing indicator

Error recovery

For MVP, conversations do not need permanent cloud storage.

25. FEATURE F23 — SMART RECOMMENDATION

When the system identifies a likely service, display:

You may want to explore

Income Certificate

Why it may be relevant

Short explanation.

Continue

Start guided journey.

If confidence is low:

"I found a few possibilities."

Then display up to 3 options.

Do not show a large list.

26. FEATURE F24 — DOCUMENT CHECKLIST

Show required/common documents as checkable items.

Example:

DOCUMENTS

☐ Identity document

☐ Address proof

☐ Supporting document

Allow users to mark documents as prepared.

For MVP, state is local/session only.

27. FEATURE F25 — PROGRESS TRACKING

The task journey should track:

completed

current

upcoming

Use both:

text labels

visual progress

Do not rely only on color.

Example:

Step 3 of 5

must be visible.

28. FEATURE F26 — HELP AND EXPLANATION

Every complicated term should have a simple explanation mechanism.

Possible UI:

What does this mean?

Clicking it opens a short plain-language definition.

Avoid dictionary-style long explanations.

29. FEATURE F27 — OFFICIAL SOURCE NAVIGATION

Every service that has a verified official source should display:

Open Official Portal ↗

Requirements:

open new tab

external-link icon

clearly labeled as external

source domain visible when appropriate

Include:

"Verify current requirements on the official portal."

30. FEATURE F28 — ERROR STATES

Create friendly, human-readable errors.

AI error

"I couldn't process that right now. You can try again or explore services directly."

No match

"I couldn't find a close match. Try describing what you are trying to accomplish."

Upload error

"Please upload a PNG, JPG or WebP image under the supported size limit."

Voice error

"Voice input isn't available right now. You can type your request instead."

31. FEATURE F29 — LOADING STATES

Use meaningful loading states.

Examples:

Assistant

"Understanding your request..."

Retrieval

"Finding relevant services..."

Screen explanation

"Reading the screen..."

Use skeletons where appropriate.

Avoid fake progress percentages.

32. FEATURE F30 — EMPTY STATES

Every collection should have a useful empty state.

Examples:

Saved

Nothing saved yet.

Search

No matching services found.

Conversation

Start by telling Sahayak what you want to accomplish.

33. FEATURE F31 — RESPONSIVE EXPERIENCE

The features must work across:

desktop

tablet

mobile

Mobile

Use:

compact navigation

bottom navigation where appropriate

stacked assistant layout

full-width task cards

large touch targets

Desktop

Use:

contextual side panel

wider conversation area

two-column service layouts

34. FEATURE F32 — HUMAN-CENTERED VISUAL DESIGN

The interface should not visually signal "AI-generated."

Avoid

neon gradients

purple AI aesthetic

excessive glassmorphism

glowing chatbot circles

robot imagery

unnecessary 3D

excessive animation

excessive cards

generic dashboard layout

Prefer

warm neutral background

deep charcoal text

restrained teal/green accent

accessible blue secondary accent

subtle borders

soft shadows

high-quality human photography

clean typography

meaningful whitespace

35. FEATURE F33 — REALISTIC IMAGERY

Use approximately 4–6 meaningful photographs.

Recommended subjects:

Indian senior citizen using smartphone

Indian student using digital services

Indian family using technology

citizen receiving digital assistance

accessibility-focused technology use

Images must:

support the content

have alt text

be properly cropped

not dominate functional screens

Avoid generic AI/robot stock imagery.

36. FEATURE F34 — GUIDED SERVICE CARD

A service card should include:

service name

category

short description

who it may help

difficulty/complexity if useful

Save

View

Start Journey

Do not use fake ratings or popularity numbers.

37. FEATURE F35 — ACCESSIBILITY-AWARE AI RESPONSE

When the user is in Assisted Mode, AI responses should automatically:

shorten sentences

explain unfamiliar terminology

break instructions into steps

include "why" explanations

provide read-aloud action

Example:

Instead of:

"Submit the requisite supporting documentation through the prescribed application interface."

Say:

Upload the required documents.

These documents support your application.

38. FEATURE F36 — SAFETY-AWARE DIGITAL GUIDANCE

When discussing digital payments or sensitive services:

do not ask for secrets

provide safe practices

avoid executing transactions

never request PINs/passwords/OTPs

remind users to verify important information

39. FEATURE F37 — USER FEEDBACK

After useful AI guidance, optionally show:

Was this helpful?

👍 Yes

👎 No

If No:

"What was missing?"

Options:

Too complicated

Wrong service

Need more explanation

Language issue

Other

For MVP, store feedback locally or in memory.

Do not claim feedback metrics unless actually measured.

40. FEATURE F38 — DEMO-SPECIFIC SCENARIOS

The prototype should have at least these ready-to-demo scenarios.

Scenario A — Certificate

Input:

"मला उत्पन्न प्रमाणपत्र काढायचं आहे."

Demonstrate:

Marathi

intent detection

service recommendation

task journey

documents

read aloud

Scenario B — Digital Payment

Input:

"मला UPI वापरायला शिकायचं आहे."

Demonstrate:

beginner guidance

step-by-step instructions

payment safety

Scenario C — Explain Screen

Upload a prepared screenshot.

Demonstrate:

screenshot interpretation

terminology explanation

next-step guidance

Scenario D — Accessibility

Enable:

large text

high contrast

assisted mode

Demonstrate how the interface changes.

41. FEATURE F39 — ANALYTICS-READY EVENTS

Do not build a complex analytics platform for the MVP.

However, structure the application so these events could be measured later:

assistant_started

intent_detected

service_viewed

task_started

task_step_completed

service_saved

voice_used

language_changed

accessibility_enabled

screen_explanation_started

official_source_opened

feedback_submitted

Do not collect sensitive personal content.

42. FEATURE F40 — DEMO DATA RESET

Provide a development/demo reset mechanism.

For example:

Reset demo data

This can clear:

saved services

accessibility preferences

demo conversation

Do not expose development controls prominently in the public UI.

43. FEATURE F41 — ACCESSIBILITY QUICK ACTION

A small persistent accessibility entry point may be placed in the header.

Possible label:

Accessibility

Do not use an unlabeled icon-only control.

44. FEATURE F42 — LANGUAGE QUICK SWITCH

Header:

English | हिंदी | मराठी

The selected language should be visually clear and keyboard accessible.

45. FEATURE F43 — TRUSTED UX COPY

Preferred language:

"You may be eligible..."

rather than:

"You are eligible..."

Preferred:

"You may need these documents..."

rather than:

"These are definitely the required documents..."

Preferred:

"Check the official portal for current requirements."

rather than:

"This is the official requirement."

46. FEATURE F44 — NO FAKE GOVERNMENT IDENTITY

Never use:

national emblem as product branding

government department logos

official-looking seals

fake "Government of India" labels

Sahayak must clearly be presented as an independent assistance prototype.

47. FEATURE F45 — COMPONENT REUSABILITY

Features must be implemented using reusable components.

Examples:

ServiceCard

TaskJourney

TaskStep

DocumentChecklist

VoiceButton

ReadAloudButton

LanguageSelector

AccessibilityPanel

ChatMessage

RecommendationCard

OfficialSourceButton

Do not duplicate the same UI implementation across pages.

48. FEATURE F46 — MODULAR KNOWLEDGE BASE

Adding a new service should require adding a structured record rather than rewriting the assistant.

Example:

{

  id: "income-certificate",

  name: "Income Certificate",

  category: "documents",

  keywords: [

    "income certificate",

    "income proof",

    "उत्पन्न प्रमाणपत्र",

    "आय प्रमाण पत्र"

  ]

}

49. FEATURE F47 — AI PROVIDER ABSTRACTION

The UI should not directly depend on a specific AI vendor.

Create an abstraction:

generateAssistantResponse()

The implementation can switch between:

Demo

Gemini

OpenAI-compatible provider

through environment configuration.

50. FEATURE F48 — PERFORMANCE

The MVP should:

load quickly

lazy-load large images

avoid unnecessary JavaScript

avoid huge dependencies

optimize images

keep chat interactions responsive

Do not add libraries without a clear reason.

51. FEATURE F49 — OFFLINE-FRIENDLY DEMO

The core demo should remain usable even if external AI is unavailable.

At minimum:

home

services

service details

task journey

accessibility

digital payment guidance

should work without an AI API.

52. FEATURE F50 — PRODUCT CREDIBILITY

The product should feel credible through:

clear source separation

realistic copy

restrained design

transparent limitations

accessibility

no exaggerated claims

working interactions

consistent UI

realistic service flows

53. MVP FEATURE MAP

                         SAHAYAK AI

                              │

       ┌──────────────────────┼──────────────────────┐

       │                      │                      │

       ▼                      ▼                      ▼

   UNDERSTAND              NAVIGATE              ACCESS

       │                      │                      │

       ├─ Natural Language    ├─ Task Journey        ├─ Marathi

       ├─ Intent Detection    ├─ Progress            ├─ Hindi

       ├─ Clarification       ├─ Documents           ├─ Voice

       ├─ Explain Screen      ├─ Service Steps       ├─ Read Aloud

       └─ Simple Language     └─ Official Source      ├─ Large Text

                                                      ├─ Contrast

                                                      └─ Reduced Motion

54. FINAL FEATURE PRIORITY FOR HACKATHON

If implementation time becomes limited, prioritize in this exact functional sequence:

Tier 1

Home

AI Assistant

Natural-language intent

Service knowledge base

Task Journey

Service Detail

Marathi example

Tier 2

Accessibility

Voice input

Text-to-speech

Digital Payment guidance

Saved services

Tier 3

Explain This Screen

Simple/Standard/Assisted mode

Advanced personalization

Feedback

Advanced search/filter

The demo must still work if Tier 3 features are incomplete.

55. DEFINITION OF DONE

The feature set is ready for the hackathon when a judge can perform this sequence without assistance:

1. Open Sahayak

2. Choose Marathi

3. Tell Sahayak:

   "मला उत्पन्न प्रमाणपत्र काढायचं आहे."

4. See recognized task

5. Start guided journey

6. See requirements/documents

7. Move through task steps

8. Enable accessibility

9. Listen to guidance

10. Open digital-payment guidance

11. Upload a demo screenshot

12. Receive screen explanation

13. Open an official source

The product should feel coherent from beginning to end.

56. FINAL PRODUCT PRINCIPLE

Every feature must answer this question:

Does this make a digital service easier for a real person to understand, navigate or access?

If the answer is no, do not add the feature simply to make the project look bigger.

The strongest version of Sahayak is not the one with the most features.

It is the one that makes a difficult digital task feel simple.