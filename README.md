# Sahayak AI (सहायक AI)

> **Making digital services usable for everyone.**  
> *“We don’t replace digital services. We make them usable.”*

**Sahayak AI** is an AI-powered accessibility and task-navigation layer for digital public services. It bridges the last-mile usability gap for citizens—especially senior citizens, regional language speakers, and first-time smartphone users—by transforming bureaucratic requirements into calm, one-step-at-a-time task journeys.

---

## Key Features

1. **AI Task Navigator (English, हिंदी, मराठी)**:
   - Natural language goal understanding (e.g. *"मला उत्पन्न प्रमाणपत्र काढायचं आहे"* or *"I need a document that proves where I live"*).
   - Heuristic language detection and keyword-weighted retrieval ranking (+5 exact phrase, +3 keyword match, +2 category).
   - Smart clarification when requests are broad or ambiguous.

2. **Guided Task Journeys**:
   - Progressive disclosure: 1 step at a time with dual cues (number + text + visual progress bar).
   - Interactive document preparation checklists with persistent state.
   - Digital Confidence Modes: **Simple** (concise, one action), **Standard** (balanced), and **Assisted** (extra context and explanations).

3. **Explain This Screen**:
   - Upload screenshots (PNG, JPG, WebP) from confusing government portals or click curated sample screens.
   - Plain-language breakdown of required form fields, obscure terminology definitions (e.g. *PoI*, *Treasury Challan*, *Self-Declaration*), and a clear single next action.

4. **Digital Payments & UPI Learning**:
   - Educational safety modules highlighting the golden rule: *"UPI PIN is ONLY for SENDING money. You never enter a PIN to receive money."*
   - Step-by-step QR code payment guides, failed payment auto-reversal timelines, and interactive safety checklists.

5. **Accessibility Control Center**:
   - Real-time text scaling: Default (16px), Large (18px), Extra Large (20px).
   - High contrast mode: crisp black-and-white borders and high-visibility focus indicators.
   - Reduced motion mode for users sensitive to animations.
   - Browser speech synthesis (text-to-speech) and speech recognition (voice input).

6. **Offline-First Zero-Key Guarantee**:
   - Powered by built-in `DemoProvider` that runs completely offline with 100% reliability.
   - Easily enhanced by setting `AI_PROVIDER=gemini` and `GEMINI_API_KEY` in `.env.local` without breaking offline fallbacks.

---

## Design System

- **Brand Colors**: Deep Mineral Teal (`#0B5F63`), Warm Copper (`#B56A32`), Neutral Gray (`#F7F8F6`), Graphite Text (`#17201D`).
- **Typography**: Inter (Latin UI) + Noto Sans Devanagari (Hindi & Marathi).
- **Discipline**: 8px spacing grid, 1px subtle borders, no generic purple gradients or fake government seals.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Automated Tests
```bash
npm test
```
All 20 unit tests across intent classification, retrieval ranking, task planning, and screen explanation will execute via Vitest.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## Demo Scenarios

- **Scenario A (Marathi)**: Type or speak *"मला उत्पन्न प्रमाणपत्र काढायचं आहे."* on the home page → Navigates to Income Certificate guided journey.
- **Scenario B (English)**: Type *"I need a document that proves where I live."* → Matches Residence / Domicile Certificate.
- **Scenario C (UPI)**: Type *"मला UPI वापरायला शिकायचं आहे."* → Opens Digital Payments safety guide.
- **Scenario D (Explain Screen)**: Visit `/explain-screen` and click on the sample *Portal Document Upload Screen* to see an instant structured breakdown.
- **Scenario E (Accessibility)**: Visit `/accessibility` and switch text size to *Large* or contrast to *High Contrast* to see global UI adaptation.

---

## Product Ethics & Privacy
- **Statutory Authority**: Sahayak AI provides educational guidance only. Final submissions occur on official government portals (e.g. Aaple Sarkar, UIDAI, NSP, DigiLocker).
- **Privacy by Design**: No citizen passwords, OTPs, UPI PINs, or Aadhaar numbers are ever collected or stored. Screen uploads are processed in-memory and immediately discarded.
