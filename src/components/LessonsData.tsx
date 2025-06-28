export interface LessonItem {
  id: string;
  title: string;
  videoUrl: string;
  vocabulary: { word: string; imageUrl: string }[];
  transcription: string;
}

const lessonsData: Record<string, LessonItem> = {
  "abecedario": {
    id: "abecedario",
    title: "Abecedario",
    videoUrl: "https://www.youtube.com/watch?v=tQ0yjYUFKAE&list=RDm4_9TFeMfJE&index=4",
    vocabulary: [
      { word: "A", imageUrl: "https://i.postimg.cc/sfZS9Jv2/B.png" },
      { word: "B", imageUrl: "https://i.postimg.cc/sfZS9Jv2/B.png" },
      { word: "C", imageUrl: "https://i.postimg.cc/GhwDMsyx/C.png" },
      { word: "CH", imageUrl: "https://i.postimg.cc/KjyY5BHK/ch.png" },
      { word: "D", imageUrl: "https://i.postimg.cc/X7fCt7KS/D.png" },
      { word: "E", imageUrl: "https://i.postimg.cc/50DzWXk1/F.png" },
      { word: "F", imageUrl: "https://i.postimg.cc/50DzWXk1/F.png" },
      { word: "G", imageUrl: "https://i.postimg.cc/xdTMvDzr/G.png" },
      { word: "H", imageUrl: "https://i.postimg.cc/MKV7xYSL/H.png" },
      { word: "I", imageUrl: "https://i.postimg.cc/T3cn5Yhq/I.png" },      
      { word: "J", imageUrl: "https://i.postimg.cc/3xhgwDrx/J.png" },
      { word: "K", imageUrl: "https://i.postimg.cc/4dx18TkR/K.png" },
      { word: "L", imageUrl: "https://i.postimg.cc/5t1gCCs0/L.png" },
      { word: "LL", imageUrl: "https://i.postimg.cc/BQLm9s8q/LL.png" },
      { word: "M", imageUrl: "https://i.postimg.cc/7hbmLrmn/M.png" },
      { word: "N", imageUrl: "https://i.postimg.cc/T1SQLNsM/N.png" },
      { word: "O", imageUrl: "https://i.postimg.cc/hj22gtbG/O.png" },
      { word: "P", imageUrl: "https://i.postimg.cc/wBcWfV1L/P.png" },
      { word: "Q", imageUrl: "https://i.postimg.cc/VLpHd5yr/Q.png" },
      { word: "R", imageUrl: "https://i.postimg.cc/rFrdxyZR/r.png" },
      { word: "RR", imageUrl: "https://i.postimg.cc/7ZS28Pgr/rr.png" },
      { word: "S", imageUrl: "https://i.postimg.cc/c1DzGXXc/S.png" },
      { word: "T", imageUrl: "https://i.postimg.cc/PrPRXY7n/T.png" },
      { word: "U", imageUrl: "https://i.postimg.cc/L50Qk8nW/U.png" },
      { word: "V", imageUrl: "https://i.postimg.cc/k5xZrCpV/V.png" },
      { word: "W", imageUrl: "https://i.postimg.cc/QdNHPgx1/W.png" },
      { word: "X", imageUrl: "https://i.postimg.cc/5NVH5dhP/X.png" },
      { word: "Y", imageUrl: "https://i.postimg.cc/pVDrLcmK/y.png" },
      { word: "Z", imageUrl: "https://i.postimg.cc/8Pm7tXDT/Z.png" },
    ],
    transcription: "En esta lección vimos los nombres más comunes..."
  },
  "deletreo": {
    id: "deletreo",
    title: "Deletreo de palabras simples",
    videoUrl: "https://www.youtube.com/watch?v=lnGtCE66LQ8",
    vocabulary: [
    { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
      { word: "C", imageUrl: "/vocab/ana.png" },
      { word: "CH", imageUrl: "/vocab/ana.png" },
      { word: "D", imageUrl: "/vocab/pepe.png" },
      { word: "E", imageUrl: "/vocab/esteban.png" },
      { word: "F", imageUrl: "/vocab/ana.png" },
      { word: "G", imageUrl: "/vocab/ana.png" },
      { word: "H", imageUrl: "/vocab/ana.png" },
      { word: "I", imageUrl: "/vocab/ana.png" },      
      { word: "J", imageUrl: "/vocab/ana.png" },
    ],
    transcription: "En esta lección vimos los nombres de animales domésticos."
  },
  "deletreo-nombres": {
    id: "deletreo-nombres",
    title: "Deletreo de nombres propios",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
      { word: "C", imageUrl: "/vocab/ana.png" },
      { word: "CH", imageUrl: "/vocab/ana.png" },
      { word: "D", imageUrl: "/vocab/pepe.png" },
      { word: "E", imageUrl: "/vocab/esteban.png" },
      { word: "F", imageUrl: "/vocab/ana.png" },
      { word: "G", imageUrl: "/vocab/ana.png" },
      { word: "H", imageUrl: "/vocab/ana.png" },
      { word: "I", imageUrl: "/vocab/ana.png" },      
      { word: "J", imageUrl: "/vocab/ana.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },
 
  "estructura-gramatica": {
    id: "estructura-gramatica",
    title: "Estructura gramatical Básica",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "seña-personal": {
    id: "seña-personal",
    title: "Crear una seña personal",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "saludos": {
    id: "saludos",
    title: "Saludos",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "respuestas-saludos": {
    id: "respuestas-saludos",
    title: "Respuestas de saludos",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "despedidas": {
    id: "despedidas",
    title: "Despedidas",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "identidad": {
    id: "identidad",
    title: "Señas de identidad y pronombres",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "comunicacion": {
    id: "comunicacion",
    title: "Señas de idioma y comunicacion",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "numeros-1-10": {
    id: "numeros-1-10",
    title: "Números del 1 al 10",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "1", imageUrl: "/vocab/holasena.png" },
      { word: "2", imageUrl: "/vocab/juan.png" },
      { word: "3", imageUrl: "/vocab/holasena.png" },
      { word: "4", imageUrl: "/vocab/juan.png" },
      { word: "5", imageUrl: "/vocab/holasena.png" },
      { word: "6", imageUrl: "/vocab/juan.png" },
      { word: "7", imageUrl: "/vocab/holasena.png" },
      { word: "8", imageUrl: "/vocab/juan.png" },
      { word: "9", imageUrl: "/vocab/holasena.png" },
      { word: "10", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "numeros-11-20": {
    id: "numeros-11-20",
    title: "Números del 11 al 20",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "11", imageUrl: "/vocab/holasena.png" },
      { word: "12", imageUrl: "/vocab/juan.png" },
      { word: "13", imageUrl: "/vocab/holasena.png" },
      { word: "14", imageUrl: "/vocab/juan.png" },
      { word: "15", imageUrl: "/vocab/holasena.png" },
      { word: "16", imageUrl: "/vocab/juan.png" },
      { word: "17", imageUrl: "/vocab/holasena.png" },
      { word: "18", imageUrl: "/vocab/juan.png" },
      { word: "19", imageUrl: "/vocab/holasena.png" },
      { word: "20", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "numeros-generales": {
    id: "numeros-generales",
    title: "Números generales",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "edad": {
    id: "edad",
    title: "Señas de edad",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "Años", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "momento-del-dia": {
    id: "momento-del-dia",
    title: "Señas de momento del dia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "dias-semana": {
    id: "dias-semana",
    title: "Días de la semana",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "meses": {
    id: "meses",
    title: "Meses del año",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "provincias": {
    id: "provincias",
    title: "Provincias de Colombia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "lugares-generales": {
    id: "lugares-generales",
    title: "Lugares generales",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "familia": {
    id: "familia",
    title: "Familia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "emociones": {
    id: "emociones",
    title: "Emociones",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },

  "confirmaciones-negaciones": {
    id: "confirmaciones-negaciones",
    title: "Confirmación y negación",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores."
  },
};

export default lessonsData;