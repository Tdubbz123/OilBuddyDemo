project-root/
├── public/                      # Static files for PWA (manifest, icons)
│   ├── index.html
│   ├── manifest.json            # PWA metadata
│   └── icons/                   # App icons (PWA home screen)
│       └── icon-512.png
│
├── src/                         # All source code
│   ├── assets/                  # Images, icons, fonts
│   ├── components/              # Reusable React components
│   │   ├── Header.tsx
│   │   ├── ProcedureList.tsx
│   │   └── VoiceInput.tsx
│   │
│   ├── pages/                   # Main app pages
│   │   ├── Home.tsx             # Job input + result list
│   │   ├── ProcedureView.tsx    # Read full procedure + TTS
│   │   ├── AdminDashboard.tsx   # Company view of reviews/flags
│   │   └── Login.tsx
│   │
│   ├── services/                # External integrations
│   │   ├── firebase.ts          # Firebase config & helpers
│   │   ├── vectorSearch.ts      # Pinecone/Chroma AI search wrapper
│   │   ├── tts.ts               # TTS engine (Google or browser)
│   │   └── whisper.ts           # Voice-to-text via Whisper API (or browser API)
│   │
│   ├── context/                 # React context for auth, session
│   │   └── AuthContext.tsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useVoiceInput.ts
│   │
│   ├── styles/                  # Global styles (CSS or Tailwind)
│   │   └── globals.css
│   │
│   ├── App.tsx                  # Root React app
│   ├── main.tsx                 # Entry point
│   └── routes.tsx               # App routes
│
├── backend/                     # (Optional) Server-side logic
│   ├── index.js                 # Express/FastAPI app
│   ├── routes/
│   │   └── search.js            # Handle search + return top procedures
│   └── utils/
│       └── embedder.js         # Converts text chunks to embeddings
│
├── scripts/                     # Local tools for ingestion & training
│   ├── ingestDocs.ts            # Parse and chunk PDFs
│   ├── uploadEmbeddings.ts      # Send to Pinecone or Chroma
│   └── mockData.ts              # Optional seeder for Firebase or local dev
│
├── tailwind.config.ts          # Tailwind config for styling
├── postcss.config.js           # PostCSS config for Tailwind
├── .env                         # Environment vars (API keys)
├── .gitignore
├── package.json                 # Project metadata and dependencies
├── firebase.json                # Firebase hosting config
├── firestore.rules              # Firestore access rules
└── README.md
