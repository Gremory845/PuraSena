export type ModuleItem = {
  id: string;
  title: string;
  signCount: number;
  level: number;
  subcategories: {
    id: string;
    title: string;
    count: number;
  }[];
};

const moduleData: Record<string, ModuleItem> = {
  "presentacion-personal": {
    id: "presentacion-personal",
    title: "Presentación Personal",
    signCount: 164,
    level: 80,
    subcategories: [
      { id: "abecedario", title: "Abecedario", count: 50 },
      { id: "deletreo", title: "Deletreo de palabras simples", count: 70 },
      { id: "deletreo-nombres", title: "Deletreo de nombres propios", count: 44 },
      { id: "estructura-gramatica", title: "Estructura y gramática básica de presentación", count: 30 },
      { id: "seña-personal", title: "Crear la seña personal", count: 20 },
    ]
  },
  "modales-basicos": {
    id: "modales-basicos",
    title: "Modales Básicos",
    signCount: 256,
    level: 70,
    subcategories: [
      { id: "saludos", title: "Saludos generales", count: 100 },
      { id: "respuestas-saludos", title: "Respuestas de saludos", count: 76 },
      { id: "despedidas", title: "Despedidas", count: 80 },
    ]
  },
  "identidad-comunidad": {
    id: "identidad-comunidad",
    title: "Identidad y Comunidad",
    signCount: 50,
    level: 60,
    subcategories: [
      { id: "identidad", title: "Señas de identidad personal", count: 30 },
      { id: "comunicacion", title: "Señas para idioma y comunicación ", count: 20 },
    ]
  },
  "numeros": {
    id: "numeros",
    title: "Números",
    signCount: 50,
    level: 90,
    subcategories: [
      { id: "numeros-1-10", title: "Números del 1 al 10", count: 35 },
      { id: "numeros-11-20", title: "Números del 11 al 20", count: 7 },
      { id: "numeros-generales", title: "Numeros generales", count: 125 },
      { id: "edad", title: "Seña para decir edad", count: 10 },
    ]
  },
  "tiempo": {
    id: "tiempo",
    title: "Tiempo",
    signCount: 50,
    level: 75,
    subcategories: [
      { id: "momento-del-dia", title: "Momento del día", count: 20 },
      { id: "dias-semana", title: "Días de la semana", count: 30 },
      { id: "meses", title: "Meses", count: 30 },
    ]
  },
  "lugares": {
    id: "lugares",
    title: "Lugares",
    signCount: 60,
    level: 65,
    subcategories: [
      { id: "provincias", title: "Provincias", count: 60 },
      { id: "lugares-generales", title: "Seña de lugares generales", count: 30 },
    ]
  },
  "familia-relaciones": {
    id: "familia-relaciones",
    title: "Familia y Relaciones",
    signCount: 60,
    level: 55,
    subcategories: [
      { id: "familia", title: "Vocabulario de familia", count: 30 },
    ]
  },
  "emociones": {
    id: "emociones",
    title: "Emociones",
    signCount: 60,
    level: 80,
    subcategories: [
      { id: "emociones-principales", title: "Emociones principales", count: 30 },
    ]
  },
  "confirmaciones-negaciones": {
    id: "confirmaciones-negaciones",
    title: "Confirmaciones y Negaciones",
    signCount: 60,
    level: 85,
    subcategories: [
      { id: "confirmacion", title: "Confirmación y negación", count: 30 },
    ]
  }
};

export default moduleData;