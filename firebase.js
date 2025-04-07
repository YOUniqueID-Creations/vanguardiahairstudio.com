import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
    hosting: {
      public: "public",
      ignore: [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      cleanUrls: true,
      headers: [{
        source: "**/*.@(jpg|jpeg|gif|png|css|js|svg)",
        headers: [{
          key: "Cache-Control",
          value: "max-age=31536000"
        }]
      }]
    }
  }
    
)
