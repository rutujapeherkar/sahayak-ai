# UI.md — MOIL Manganese Decision Support System

## 0. Product UI Direction

**Product:** Web-based Mining + AI/ML + GIS Decision Support System  
**Primary users:** Mine management, geologists, exploration teams, production planners, operations/maintenance teams  
**Primary goal:** Turn complex geological, spatial and operational data into clear, defensible decisions.

### The north star

> **Quietly powerful. Extremely clear.**

The UI must feel like a mature enterprise product—not a hackathon dashboard and not an "AI-generated" interface.

Reference qualities:

- Google Maps: spatial clarity
- Microsoft / Amazon enterprise products: information hierarchy and reliability
- GitHub: restrained visual language
- Vercel: crisp typography and spacing
- Zerodha Kite: dense information presented without visual noise
- MineDSS: map-first exploration workflow, layer controls, ranked targets, evidence and confidence

MineDSS is particularly useful as a **workflow reference**: its public demo combines a map, layer/symbology controls, ranked target zones, target-level evidence and confidence/reliability context. It also explicitly distinguishes prospectivity decision support from formal reserve/resource claims. citeturn0search0turn0search13

---

# 1. Non-Negotiable UI Rules

| Rule | Requirement |
|---|---|
| **Human-made** | No excessive cards, gradients, glassmorphism, giant headings, AI badges or decorative UI |
| **One focal point** | Every screen has one obvious primary task |
| **Minimal text** | Labels first; explanations appear on demand |
| **Dense, not cluttered** | Information-rich but with disciplined spacing |
| **Map-first where spatial** | Exploration workflows should prioritize the map |
| **Evidence-first** | Predictions show their evidence, source and confidence |
| **No false precision** | Never imply a probability is a reserve percentage |
| **Light by default** | Dark theme available from day one |
| **Responsive** | Desktop, laptop, tablet and mobile remain functional |
| **Fast** | Avoid unnecessary network requests, re-renders and heavy animations |
| **Accessible** | Keyboard navigation, readable contrast, visible focus states |
| **Auditable** | Data source, model version and timestamp available for important outputs |
| **Safe** | Recommendations are advisory and require human approval before operational action |

---

# 2. Brand Signature

The visual identity should communicate:

**Mining × Geospatial intelligence × Precision technology**

### Brand personality

```text
Precise       ██████████
Calm          █████████
Technical     █████████
Trustworthy   ██████████
Modern        █████████
Decorative    ██
Playful       ██
```

### Signature elements

Use these consistently across the product:

1. **Graphite typography**
2. **Deep mineral blue/teal as the primary brand colour**
3. **Warm copper/amber as a restrained secondary accent**
4. **Thin 1px borders**
5. **Small radii**
6. **Compact controls**
7. **Map/grid motifs used subtly**
8. **Monospace only for coordinates, IDs and technical values**
9. **No decorative illustrations in the core application**
10. **No gradients as backgrounds**

### Brand mark concept

A simple geometric mark can combine:

```text
      ▲
     / \
    /___\       = mine / terrain
      │
      │         = shaft / data axis
```

Keep the actual logo extremely simple.

---

# 3. Colour System

The palette should feel geological and technical without becoming brown/orange-heavy.

## Light theme

| Token | Suggested value | Use |
|---|---|---|
| `bg-app` | `#F7F8F6` | Main application background |
| `bg-surface` | `#FFFFFF` | Panels / cards |
| `bg-subtle` | `#F0F2EF` | Secondary surfaces |
| `border` | `#D9DEDA` | Dividers / controls |
| `text-primary` | `#17201D` | Main text |
| `text-secondary` | `#5F6965` | Supporting text |
| `text-muted` | `#8A928E` | Metadata |
| `brand` | `#0B5F63` | Primary actions / active states |
| `brand-dark` | `#08484B` | Hover / pressed |
| `accent-copper` | `#B56A32` | Secondary highlight |
| `success` | `#19734A` | Healthy / confirmed |
| `warning` | `#A96800` | Caution |
| `danger` | `#B43A35` | Critical / shortfall |
| `info` | `#315F9E` | Informational |

### Prospectivity scale

Do **not** use red → green as the main geological scale.

Recommended:

```text
LOW                  MEDIUM                 HIGH
Pale blue ─────────── Teal ─────────────── Deep blue
#DCE9ED              #4E9CA0              #163E63
```

Confidence should be visually distinct:

```text
LOW CONFIDENCE       MEDIUM                HIGH
Light neutral        Amber/grey            Dark neutral/blue
```

Do not make low-confidence areas visually look "bad"; uncertainty is not the same as negative prospectivity.

### Production risk

Use semantic colours only:

```text
ON TRACK     → success
WATCH        → warning
AT RISK      → orange/amber
SHORTFALL    → danger
```

Red should be rare and meaningful.

---

# 4. Dark Theme

Dark mode is available from the first release.

| Token | Dark value |
|---|---|
| `bg-app` | `#0F1413` |
| `bg-surface` | `#151B19` |
| `bg-subtle` | `#1C2421` |
| `border` | `#2A3430` |
| `text-primary` | `#EDF2EF` |
| `text-secondary` | `#A9B3AE` |
| `text-muted` | `#6F7A75` |
| `brand` | `#5EB4B3` |
| `accent-copper` | `#D18A4A` |

Do not simply invert the light theme. Maps, charts and semantic colours need dedicated dark-mode variants.

---

# 5. Typography

### Primary font

**Inter**

Use a single primary UI font.

### Technical values

Use **IBM Plex Mono** or another restrained monospace font only for:

- coordinates
- drill-hole IDs
- equipment IDs
- model version
- timestamps
- numerical diagnostics

### Hierarchy

| Level | Size | Weight | Use |
|---|---:|---:|---|
| Page title | 24–28px | 600 | One per page |
| Section title | 16–18px | 600 | Major section |
| Body | 14px | 400 | Default |
| Label | 12px | 500 | Controls / metadata |
| Caption | 11–12px | 400 | Secondary information |
| KPI | 24–32px | 600 | Important number |

Avoid huge 48–80px marketing-style numbers inside the application.

---

# 6. Spacing & Layout

Use an 8px base grid.

```text
4px   → micro gap
8px   → icon / label
12px  → compact control
16px  → normal gap
24px  → section gap
32px  → major separation
48px  → page-level separation
```

### Layout rule

```text
┌──────────────────────────────────────────────────────┐
│ GLOBAL NAV                                           │
├───────────────┬──────────────────────────────────────┤
│ CONTEXT /     │                                      │
│ LAYERS        │          PRIMARY WORKSPACE           │
│               │                                      │
│               │                                      │
│               │                                      │
├───────────────┴──────────────────────────────────────┤
│ OPTIONAL DETAIL / TARGET REGISTER                    │
└──────────────────────────────────────────────────────┘
```

Avoid a dashboard made entirely from equal-sized cards.

The **primary content should be visibly larger** than supporting information.

---

# 7. Global Application Shell

## Desktop

```text
┌──────────────────────────────────────────────────────────────────┐
│ ▲ MOIL DSS     Mine: Balaghat ▾     Exploration | Operations     │
│                                      Search   ?   Theme   User    │
├──────────────┬───────────────────────────────────────────────────┤
│              │                                                   │
│  CONTEXT     │                                                   │
│  / FILTERS   │                 MAIN WORKSPACE                    │
│              │                                                   │
│              │                                                   │
│              │                                                   │
└──────────────┴───────────────────────────────────────────────────┘
```

### Global navigation

Keep it short:

- **Overview**
- **Explore**
- **Production**
- **Actions**

Secondary items can live under the user/settings menu:

- Data
- Model / Methodology
- Audit
- Settings

Do not put 10–12 items in the primary navigation.

---

# 8. Main Application Screens

## 8.1 Overview

Purpose:

> **"What needs attention right now?"**

### Layout

```text
┌───────────────────────────────────────────────────────────────┐
│ Overview                                    Mine: Balaghat ▾ │
│ Today · 19 Sep 2026                                           │
├──────────────┬──────────────┬──────────────┬────────────────┤
│ Production   │ Forecast     │ Shortfall    │ Ore available  │
│ 92.4 kt      │ 89.1 kt      │ 68%          │ 1.82 Mt        │
├──────────────┴──────────────┴──────────────┴────────────────┤
│                                                               │
│ Production vs Target                         Last 30 days     │
│                                                               │
│              [large primary chart]                            │
│                                                               │
├───────────────────────────────┬───────────────────────────────┤
│ Priority                       │ Mine status                  │
│ Equipment downtime             │ Equipment     ● 92%          │
│ Blast delay                    │ Weather       ● Normal       │
│ Rainfall risk                  │ Ore access    ● Watch        │
└───────────────────────────────┴───────────────────────────────┘
```

### Rule

The overview should answer three things in under five seconds:

1. Are we on target?
2. Is anything at risk?
3. What requires attention?

---

# 9. Exploration Workspace

This is the most important spatial screen.

MineDSS demonstrates a useful pattern here: map + layer controls + ranked target register + selected-target properties. We should adopt the **workflow**, not copy its visual design. citeturn0search0

## Layout

```text
┌─────────────────────────────────────────────────────────────────┐
│ Explore     Mine ▾     Layer ▾     Search location      ◉ GPS  │
├──────────────┬───────────────────────────────────────┬──────────┤
│ LAYERS       │                                       │ TARGET   │
│              │                                       │ DETAIL   │
│ Prospectivity│           INTERACTIVE MAP             │          │
│ ☑             │                                       │ #03      │
│ Confidence  │                                       │ 0.84     │
│ ☑             │       ▒▒▒▒▒▒▒▒▒▒▒▒▒                  │          │
│ Drill holes │       ▒▒▒▒██▒▒▒▒▒▒▒                  │ Evidence │
│ ☑             │       ▒██████▒▒▒▒▒                  │ 3 signals│
│ Geology     │                                       │          │
│ ☑             │        ● BH-017                     │          │
│ Satellite   │                                       │ [Details]│
│ ☐             │                                       │          │
├──────────────┴───────────────────────────────────────┴──────────┤
│ Ranked targets                                                 │
│ #  Target     Prospectivity   Confidence   Area     Evidence  │
│ 1  T-003      0.84            High         0.42 km² Structure │
│ 2  T-007      0.79            Medium       0.31 km² Geology   │
└─────────────────────────────────────────────────────────────────┘
```

### Map controls

Keep only essential controls visible:

- Zoom
- Locate
- Layer
- Basemap
- Legend
- Measure
- Search
- Reset view

Advanced controls live in a compact menu.

---

# 10. Map Design Rules

### Base map

Use a subdued map.

The base map must provide context without competing with the prospectivity layer.

### Data layers

Suggested layer order:

```text
TOP
│
├── Selected target
├── Ranked target boundaries
├── Prospectivity raster / cells
├── Drill holes
├── Geological boundaries
├── Mine boundary
├── Roads / infrastructure
└── Basemap
BOTTOM
```

### Interaction

Hover:

```text
small tooltip
```

Click:

```text
selected target
        ↓
right-side detail panel
```

Do not open large modal dialogs for normal map inspection.

### Selected target

Selected target gets:

- clear outline
- subtle halo
- persistent detail panel

No excessive animation.

---

# 11. Prospectivity Legend

Always show a visible legend when the prospectivity layer is active.

```text
Prospectivity

LOW                                  HIGH
│────────────────────────────────────│
0.0              0.5               1.0

Confidence:  ● High   ◐ Medium   ○ Low
```

Avoid vague labels such as:

> "AI MAGIC SCORE"

Use domain language:

> **Prospectivity**

If a score is probabilistic, explicitly state its meaning in the methodology/help view.

---

# 12. Target Detail Panel

A target should be understandable without opening another page.

```text
┌─────────────────────────────┐
│ Target T-003          ×     │
│                             │
│ Prospectivity       0.84    │
│ Confidence          High    │
│ Area                0.42km² │
│                             │
│ Evidence                    │
│ Geological unit       +     │
│ Structural proximity  +     │
│ Surface signature     +     │
│                             │
│ Nearby drilling             │
│ BH-017 · 180 m              │
│                             │
│ Model v0.4 · 18 Sep 2026    │
│                             │
│ [Open target]               │
└─────────────────────────────┘
```

### Evidence presentation

Use 3–5 strongest drivers.

Do not display 25 features by default.

```text
Strongest evidence

Structural proximity       ████████
Geological context          ██████
Spectral signature          █████
Terrain                     ███
```

An "Evidence" section is supported by the way modern mineral exploration tools expose target reasoning; MineDSS and other exploration products emphasize evidence chains and confidence rather than presenting an unexplained heatmap. citeturn0search0turn0search4

---

# 13. Exploration Target Register

Use a compact table.

| # | Target | Prospectivity | Confidence | Area | Key evidence |
|---:|---|---:|---|---:|---|
| 1 | T-003 | 0.84 | High | 0.42 km² | Structure |
| 2 | T-007 | 0.79 | Medium | 0.31 km² | Geology |
| 3 | T-011 | 0.73 | Medium | 0.18 km² | Surface |

### Table rules

- Sort by user-selected column.
- Default sort: decision relevance.
- Sticky header.
- Numeric columns right-aligned.
- IDs left-aligned.
- No excessive badges.
- Row hover is subtle.
- Clicking a row selects the map target.

---

# 14. Drill-Hole Inspection

Clicking a drill hole opens a compact inspection panel.

```text
BH-017

Location
21.23820, 79.15110

Depth
0–95 m

Intervals
18–24 m     32.4% Mn
24–31 m     18.2% Mn
31–40 m      3.1% Mn

[View assay intervals]
```

Use a simple depth strip when useful:

```text
0m ──────────────── 95m

████████████
18m     24m
     Mn-bearing
```

Do not turn this into a decorative 3D animation unless it adds genuine value.

---

# 15. Production Workspace

Purpose:

> **"Are we going to hit the plan?"**

## Layout

```text
┌───────────────────────────────────────────────────────────────┐
│ Production                          Mine: Balaghat ▾          │
├───────────────────────────────────────────────────────────────┤
│ Target             Forecast           Gap           Risk      │
│ 300 kt             276 kt              -24 kt        72%       │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│                 Production vs Plan                            │
│                                                               │
│       ───────── target                                       │
│      ╱     ╲        ───── forecast                            │
│  ───╯       ╲──────                                          │
│                                                               │
├───────────────────────────────┬───────────────────────────────┤
│ Forecast range                │ Risk drivers                  │
│ P10   P50   P90               │ Equipment      High           │
│                               │ Rainfall       Medium         │
│                               │ Blast delay    Medium         │
└───────────────────────────────┴───────────────────────────────┘
```

If the model provides uncertainty intervals, use a confidence/fan band rather than pretending the forecast is exact.

---

# 16. Production Chart Rules

### Show

- Actual production
- Planned/target production
- Forecast
- Forecast uncertainty when available
- Important operational events only

### Avoid

- 10 coloured lines
- 3D charts
- decorative gradients
- unnecessary gridlines
- dual axes unless essential

### Recommended visual hierarchy

```text
Actual       ━━━━━━━━━━━
Target       ─ ─ ─ ─ ─ ─
Forecast               ━━━━━━━
Uncertainty             ░░░░░░
```

Charts should answer a question, not merely display data.

---

# 17. Risk & Actions

The user should never have to interpret a raw ML output alone.

## Risk card

```text
SHORTFALL RISK
72%

Forecast
276 kt

Target
300 kt

Gap
-24 kt
```

Then:

```text
Main drivers

Equipment downtime       High
Rainfall                 Medium
Blasting delay            Medium
Accessible ore            Low
```

Then:

```text
Recommended action

Redeploy available haul capacity
Expected impact: +8–12 kt*

[Review action]
```

`*` Only show expected impact when supported by the optimization/model output.

---

# 18. Action Review / Human-in-the-Loop

Operational recommendations should never silently execute.

```text
┌──────────────────────────────────────────┐
│ Recommended action                       │
│                                          │
│ Redeploy Truck TRK-07 to Block B         │
│                                          │
│ Reason                                   │
│ Current haul capacity is constraining    │
│ forecast production.                     │
│                                          │
│ Estimated impact                         │
│ +8–12 kt                                 │
│                                          │
│ [Accept]   [Modify]   [Reject]           │
└──────────────────────────────────────────┘
```

Every accepted/modified/rejected recommendation should create an audit record:

```text
User
Timestamp
Recommendation
Decision
Modification
Model version
Reason (optional)
```

---

# 19. Recommendation Language

Avoid robotic AI language.

### Bad

> "Our advanced AI has intelligently determined that an optimized equipment redeployment intervention may potentially improve production outcomes."

### Good

> **Redeploy Truck TRK-07 to Block B**

> Equipment availability is limiting forecast production.

Short. Specific. Human.

---

# 20. Data & Methodology

A methodology page should exist, but it should not dominate the product.

### Show

```text
Data sources
Model version
Last updated
Validation method
Prediction meaning
Known limitations
```

Example:

```text
Prospectivity model

Model       Random Forest
Version     v0.4
Updated     19 Sep 2026

Inputs
Geology · Drill assays · EO features · Terrain

Output
Relative prospectivity score

Validation
Spatial hold-out validation

Important
Prospectivity is exploration decision support.
It is not a reserve/resource declaration.
```

This transparency pattern is particularly important for mining AI because prospectivity outputs are probabilistic and should not be presented as formal reserve estimates. MineDSS explicitly makes this distinction in its product and terms. citeturn0search0turn0search13

---

# 21. Data Provenance

For every important layer, the UI should be able to answer:

```text
What is this?
Where did it come from?
When was it updated?
What processing was applied?
Which model produced it?
How reliable is it?
```

Example:

```text
Sentinel-2
Acquired: 18 Sep 2026
Processed: Cloud masked
Resolution: 10–20 m
Source: Copernicus
```

For synthetic/demo data:

> **Demo data — not operational mine data**

This should be visible in the prototype.

---

# 22. AI / Model Honesty

### Never display:

```text
AI says: 94%
```

### Display:

```text
Prospectivity
0.94

Confidence
High

Model
v0.4

Updated
19 Sep 2026
```

### If confidence is weak:

```text
Prospectivity
0.82

Confidence
Low

Reason
Limited local ground truth
```

Uncertainty should be visible rather than hidden.

---

# 23. Responsive Design

## Desktop ≥ 1280px

Use:

```text
sidebar + map + detail panel
```

## Laptop 1024–1279px

Use:

```text
compact sidebar + map + collapsible detail
```

## Tablet 768–1023px

Use:

```text
top filters
large map
bottom sheet / side drawer
```

## Mobile < 768px

Do not attempt to squeeze the desktop dashboard into a phone.

Use:

```text
┌─────────────────────┐
│ Mine ▾        ☰     │
├─────────────────────┤
│                     │
│       MAP           │
│                     │
├─────────────────────┤
│ Target T-003        │
│ Prospectivity 0.84  │
├─────────────────────┤
│ Production          │
│ 92.4 kt             │
└─────────────────────┘
```

The mobile priority is:

1. Current status
2. Map
3. Target/risk
4. Detail

---

# 24. Animation & Interaction

Animations should make the product feel **precise**, not playful.

### Principles

- 120–180ms for small UI transitions
- 180–250ms for panels
- 250–400ms only for meaningful state changes
- use `ease-out` for entering
- use `ease-in` for leaving
- respect `prefers-reduced-motion`

### Good animations

- Target outline fades in
- Detail panel slides 8–16px
- Number changes interpolate subtly
- Chart data updates smoothly
- Layer opacity transitions
- Button press feedback
- Table row selection
- Loading skeletons

### Avoid

- bouncing cards
- spinning everything
- particle effects
- animated gradients
- map flyovers on every click
- excessive parallax
- AI "thinking" animations

### Signature interaction

Selecting a map target:

```text
click
  ↓
target outline
  ↓ 120ms
detail panel
  ↓
evidence values
```

Fast enough to feel immediate.

---

# 25. Loading States

Never show a blank screen.

### Map loading

```text
Map
────────────────────
Loading exploration layer...
████████████░░░░░░░
```

### Chart loading

Use a skeleton that preserves final geometry.

### Prediction running

```text
Running model
Preparing spatial features  ✓
Scoring cells              …
Building target ranking    …
```

No fake "AI is thinking..." language.

---

# 26. Error States

Errors should tell the user:

1. What happened
2. Whether their work is safe
3. What they can do

### Example

```text
Production forecast unavailable

The latest equipment feed could not be loaded.

Last successful update
18 Sep 2026 · 18:42

[Retry]
```

Not:

> "Oops! Something went wrong."

---

# 27. GIS Performance

The map is likely to be the most demanding UI component.

### Requirements

- Vector tiles for large vector datasets
- Raster tiles / tiled imagery for large raster layers
- Lazy-load layers
- Do not render thousands of DOM markers
- Prefer WebGL/canvas rendering
- Cluster points at low zoom
- Simplify geometries
- Fetch data by viewport
- Debounce map movement requests
- Cache static layers
- Avoid re-rendering the whole map when a panel changes

### Rendering principle

```text
Viewport
   │
   ▼
Only request what the user can see
   │
   ▼
Tile / cache
   │
   ▼
Render efficiently
```

---

# 28. Map Data Rules

### Every spatial layer should have

- CRS / coordinate reference information
- source
- timestamp
- resolution/scale where relevant
- legend
- units
- confidence where applicable

### Do not

- mix coordinate systems silently
- display raw model scores without a legend
- hide missing-data areas
- imply raster resolution equals geological certainty
- show an unexplained "ore" layer

---

# 29. Security

The application may eventually contain commercially sensitive geological and operational data.

### Required

- HTTPS
- authenticated API
- role-based access control
- server-side authorization
- secure session/token handling
- input validation
- upload validation
- rate limiting
- audit logging
- secrets outside source code
- encrypted storage where appropriate
- dependency/security scanning

### Never trust the frontend

A user hiding a UI control must not grant/deny permissions.

Authorization belongs in the backend.

---

# 30. Roles

### Management

```text
Overview
Production
Risks
Actions
```

### Mine planner

```text
Overview
Production
Equipment
Actions
```

### Geologist

```text
Explore
Drill holes
Geology
Prospectivity
Evidence
```

### Administrator

```text
All views
Data
Models
Users
Audit
```

---

# 31. Accessibility

Minimum standard:

- keyboard navigable
- visible focus state
- semantic buttons
- accessible labels
- sufficient colour contrast
- do not encode information by colour alone
- readable chart labels
- screen-reader-friendly tables
- reduced-motion support

Example:

Bad:

```text
● red
● green
```

Better:

```text
● SHORTFALL
● ON TRACK
```

---

# 32. Component System

Build a small design system rather than styling every page independently.

```text
/components
├── AppShell
├── TopNav
├── Sidebar
├── PageHeader
├── FilterBar
├── KPI
├── Status
├── DataTable
├── Map
├── MapLegend
├── LayerControl
├── TargetPanel
├── EvidenceList
├── Chart
├── RiskCard
├── ActionReview
├── Drawer
├── Modal
├── Toast
└── EmptyState
```

### Rule

If a UI pattern appears three times, make it a component.

---

# 33. Avoid the "AI Dashboard" Visual Cliches

Do **not** use:

- glowing neon borders
- purple/blue AI gradients
- giant "AI INSIGHTS" headings
- robot icons
- brain graphics
- excessive sparkles
- glassmorphism everywhere
- 12 KPI cards
- circular percentage gauges everywhere
- animated neural networks
- chat UI unless genuinely useful
- excessive badges
- excessive rounded containers

The product should look like **professional mining software with AI inside it**, not an AI demo with a mining theme.

---

# 34. Cards

Cards are useful, but limited.

### Good

```text
┌───────────────────────────┐
│ Shortfall risk            │
│                           │
│ 72%                       │
│ Forecast below target     │
└───────────────────────────┘
```

### Bad

```text
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ AI     │ │ AI     │ │ AI     │ │ AI     │
│ Insight│ │ Insight│ │ Insight│ │ Insight│
└────────┘ └────────┘ └────────┘ └────────┘
```

Use cards to group information, not to create a grid for everything.

---

# 35. Tables

Tables are first-class UI for this application.

Mining users often need exact values.

### Rules

- compact row height
- sticky header
- sortable columns
- filterable
- column alignment by type
- units in headers
- no excessive borders
- row hover
- selected row state
- export option where appropriate

Example:

| Target | Prospectivity | Confidence | Area | Nearby Mn |
|---|---:|---|---:|---:|
| T-003 | 0.84 | High | 0.42 km² | 33.7% |
| T-007 | 0.79 | Medium | 0.31 km² | 28.4% |
| T-011 | 0.73 | Medium | 0.18 km² | 24.7% |

---

# 36. Units & Number Formatting

Never make users guess units.

Use:

```text
92.4 kt
1.82 Mt
33.7% Mn
12.7 mm
412 m
0.42 km²
```

Use consistent precision.

Do not show:

```text
92,413.728293 tonnes
```

unless the user is looking at raw technical data.

---

# 37. Empty States

### No drill data

```text
No drill data in this area

Add or load drill-hole data to inspect subsurface evidence.
```

### No forecast

```text
Forecast unavailable

The model needs recent production and operational data.
```

Keep it to one sentence and one action.

---

# 38. Notifications

Use a small notification system.

```text
┌─────────────────────────────────┐
│ Forecast updated                │
│ Production risk changed to 68%. │
└─────────────────────────────────┘
```

No unnecessary notifications.

Critical operational alerts should remain visible until acknowledged.

---

# 39. Audit Trail

For recommendations and model outputs, retain:

```text
timestamp
user
mine
target/action
model version
input snapshot/version
recommendation
user decision
result, when available
```

UI:

```text
Action history

19 Sep 15:42   Mine Planner
Accepted: Redeploy TRK-07

19 Sep 12:10   Mine Planner
Modified: Blast schedule

18 Sep 17:22   Mine Manager
Rejected: Shift extraction block
```

---

# 40. Demo / Synthetic Data Indicator

If the SIH demo uses synthetic data, make it explicit but unobtrusive.

Top-bar example:

```text
DEMO DATA
```

Clicking it:

```text
This environment uses synthetic/demo operational and assay
records. Production decisions must use validated mine data.
```

This prevents the UI from implying that fabricated values are actual MOIL operational data.

---

# 41. Recommended Frontend Stack

```text
Next.js
   │
React + TypeScript
   │
Tailwind CSS
   │
Small internal component system
   │
MapLibre GL JS
   │
ECharts / Recharts
   │
FastAPI
   │
PostgreSQL + PostGIS
```

### Frontend principles

- TypeScript strict mode
- server-side data fetching where appropriate
- client-side rendering only for interactive map/chart components
- virtualized tables for large datasets
- route-level code splitting
- dynamic import for heavy map modules
- cached API responses where appropriate

---

# 42. Performance Budget

Target a feeling of immediate response.

| Interaction | Target |
|---|---:|
| Button feedback | <100ms |
| Local panel transition | 120–180ms |
| Filter response | <300ms where cached |
| Typical API response | <500ms |
| Map interaction | 60fps target |
| Initial app shell | fast enough to show usable UI immediately |
| Large layer load | progressive; never block the entire app |

These are UX targets, not guarantees.

---

# 43. Architecture of UI State

Keep UI state separate from domain/model state.

```text
UI STATE
├── selected mine
├── selected layer
├── map viewport
├── selected target
├── filters
└── theme

SERVER STATE
├── production
├── forecast
├── drill holes
├── prospectivity
├── equipment
└── recommendations
```

Avoid putting the entire application into one global state object.

---

# 44. Suggested Information Architecture

```text
MOIL DSS
│
├── Overview
│
├── Explore
│   ├── Prospectivity Map
│   ├── Targets
│   ├── Drill Holes
│   └── Evidence
│
├── Production
│   ├── Forecast
│   ├── Shortfall Risk
│   └── Equipment
│
├── Actions
│   ├── Recommendations
│   └── History
│
└── System
    ├── Data
    ├── Methodology
    ├── Models
    ├── Audit
    └── Settings
```

---

# 45. Final Screen Relationship

```text
                       ┌─────────────┐
                       │  OVERVIEW   │
                       └──────┬──────┘
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
       ┌───────────┐   ┌────────────┐   ┌───────────┐
       │  EXPLORE  │   │ PRODUCTION │   │  ACTIONS  │
       └─────┬─────┘   └──────┬─────┘   └─────┬─────┘
             │                │               │
             ▼                ▼               ▼
       Prospectivity      Forecast        Recommendations
       Targets            Risk            Review
       Drill holes        Equipment       History
       Evidence
             │                │               │
             └────────────────┴───────────────┘
                              │
                              ▼
                     HUMAN DECISION
```

---

# 46. The One-Sentence Design Test

Before adding any component, ask:

> **"Does this help the user understand the mine or make a decision?"**

If not, remove it.

The product should feel **refined because things were removed**, not because things were added.

---

# 47. Final UI Principles

```text
CLARITY
   ↓
CONTEXT
   ↓
EVIDENCE
   ↓
DECISION
   ↓
ACTION
```

Not:

```text
DATA
↓
AI
↓
AI
↓
AI
↓
AI
↓
Dashboard full of widgets
```

The UI should make the intelligence almost invisible.

The user should feel:

> **"I can see what is happening, why it is happening, and what I can do next."**

That is the product.
