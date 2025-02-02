import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
    console.log(process.env);
    const firebaseApp = initializeApp({

        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSANGINGSENDERID,
        appId: process.env.APPID
    
        
    
    });
    
     const db=getFirestore(firebaseApp);
     const auth=getAuth();
     nuxtApp.vueApp.use(db);
  })


