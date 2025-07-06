export interface LessonItem {
  id: string;
  title: string;
  videoUrl: string;
  vocabulary: { word: string; imageUrl: string }[];
  transcription: string;
}

export const lessonsData: Record<string, LessonItem> = {
  abecedario: {
    id: "abecedario",
    title: "Abecedario",
    videoUrl:
      "https://www.youtube.com/watch?v=tQ0yjYUFKAE&list=RDm4_9TFeMfJE&index=4",
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
    transcription: "En esta lección vimos los nombres más comunes...",
  },
  deletreo: {
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
    transcription: "En esta lección vimos los nombres de animales domésticos.",
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
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "estructura-gramatica": {
    id: "estructura-gramatica",
    title: "Estructura gramatical Básica",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "seña-personal": {
    id: "seña-personal",
    title: "Crear una seña personal",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  saludos: {
    id: "saludos",
    title: "Saludos",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "respuestas-saludos": {
    id: "respuestas-saludos",
    title: "Respuestas de saludos",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  despedidas: {
    id: "despedidas",
    title: "Despedidas",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  identidad: {
    id: "identidad",
    title: "Señas de identidad y pronombres",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  comunicacion: {
    id: "comunicacion",
    title: "Señas de idioma y comunicacion",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "numeros-1-20": {
    id: "numeros-1-20",
    title: "Números del 1 al 20",
    videoUrl: "https://www.youtube.com/watch?v=tsR9CSEzWh0",
    vocabulary: [
      { word: "1", imageUrl: "https://i.postimg.cc/2jMcbFZn/1.png" },
      { word: "2", imageUrl: "https://i.postimg.cc/ryKZwYK8/2.png" },
      { word: "3", imageUrl: "https://i.postimg.cc/fkQkm9wM/3.png" },
      { word: "4", imageUrl: "https://i.postimg.cc/907rDpHx/4.png" },
      { word: "5", imageUrl: "https://i.postimg.cc/zBMyDQ6b/5.png" },
      { word: "6", imageUrl: "https://i.postimg.cc/wv3tpzfY/6.png" },
      { word: "7", imageUrl: "https://i.postimg.cc/QM89f1ct/7.png" },
      { word: "8", imageUrl: "https://i.postimg.cc/hG2J6v00/8.png" },
      { word: "9", imageUrl: "https://i.postimg.cc/JzcH3PDv/9.png" },
      { word: "10", imageUrl: "https://i.postimg.cc/rwLttvm5/10.png" },
    ],
    transcription: `En esta lección veremos los números del 1 al 20.\n
    Los números del 1 al 10 son los siguientes:\n
    1: Mano dominante en forma de “índice levantado”; resto de dedos cerrados.\n
    2: Índice y mayor extendidos formando una V; otros dedos cerrados.\n
    3: Se extienden el dedo pulgar, índice y mayor; anular y meñique cerrados.\n
    4: Cuatro dedos extendidos (todo excepto el pulgar).\n
    5: Mano completamente abierta, todos los dedos extendidos y separados.\n
    6: Se tocan con el pulgar la punta del meñique; otros dedos extendidos.\n
    7: Pulgar toca la punta del anular; los otros tres dedos levantados.\n
    8: Pulgar toca la punta del mayor; índice, medio y meñique levantados.\n
    9: Pulgar toca la punta del índice; resto de dedos levantados.\n
    10: Puño cerrado con el pulgar extendido hacia arriba.\n
    Para los números del 11 al 20, se utiliza la base de los números del 1 al 10. Primeramente se hace la seña del numero 10, se gira la muñeca y seguidamente se hace la seña del número que se desee del 1 al 9. Por último, el número 20 se hace juntado la seña del número 2 y el número 0 justo al lado con una sola mano. La seña del número 0 es juntar los dedos hasta formar una O\n`,
  },

  "numeros-generales": {
    id: "numeros-generales",
    title: "Números generales",
    videoUrl: "https://www.youtube.com/watch?v=tsR9CSEzWh0",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  edad: {
    id: "edad",
    title: "Señas de edad",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [{ word: "Años", imageUrl: "/vocab/juan.png" }],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "momento-del-dia": {
    id: "momento-del-dia",
    title: "Señas de momento del dia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "dias-semana": {
    id: "dias-semana",
    title: "Días de la semana",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  meses: {
    id: "meses",
    title: "Meses del año",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  provincias: {
    id: "provincias",
    title: "Provincias de Colombia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "lugares-generales": {
    id: "lugares-generales",
    title: "Lugares generales",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  familia: {
    id: "familia",
    title: "Familia",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  emociones: {
    id: "emociones",
    title: "Emociones",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },

  "confirmaciones-negaciones": {
    id: "confirmaciones-negaciones",
    title: "Confirmación y negación",
    videoUrl: "https://tu-servidor.com/videos/nombres-colores.mp4",
    vocabulary: [
      { word: "A", imageUrl: "/vocab/holasena.png" },
      { word: "B", imageUrl: "/vocab/juan.png" },
    ],
    transcription: "En esta lección vimos los nombres de colores.",
  },
};
