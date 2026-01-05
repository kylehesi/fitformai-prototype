<div align="center">

# FitFormAI (Prototype)

**AI-powered fitness coaching app** — exercise form analysis from video, AI coach chat, and progress (before/after) insights.

[AI Studio App](https://ai.studio/apps/drive/1MpzOZd_23esV_wZxXREW80Na5GDn1RUv) •
[Tech Stack](#tech-stack) •
[Features](#features) •
[Run Locally](#run-locally)

</div>

---

## Overview

FitFormAI is an academic prototype of a fitness application built with Google AI Studio.
It provides core workout planning features plus AI-driven capabilities:

- **Form Analysis:** Upload a workout video to receive form scoring and coaching feedback.
- **AI Coach Chatbot:** Ask for training, nutrition, and personalized program recommendations.
- **Progress Insights:** Upload before/after photos and get AI-generated progress analysis.

> ⚠️ This is a **prototype** (not production-ready). UI, prompts, and outputs may change frequently.

---

## Features

### ✅ Workout Planning
- Exercise library
- Create custom programs
- Add exercises with sets/reps
- Exercise detail pages

### 🎥 AI Form Analysis
- Upload exercise video
- Form score + technique feedback
- Safety warnings and improvement points

### 🤖 AI Coach (Chatbot)
- Training and nutrition Q&A
- Program suggestions
- Personalized guidance (prompt-based)

### 📈 Progress / Before–After
- Upload progress photos
- AI summary + development highlights
- Actionable next steps

---

## Tech Stack

- **Google AI Studio** (Gemini) — prompts & AI flows
- **React + Vite + TypeScript** — frontend
- (Optional) **Firebase / Storage** — if you later add auth/media storage

---

## Project Status

- ✅ Prototype working
- 🔁 Localization (TR/EN) is in progress  
  - Some screens may still show English outputs if AI language enforcement is not applied.

---

## Run Locally

### Prerequisites
- Node.js (LTS recommended)

### Setup
1. Install dependencies:
   ```bash
   npm install
