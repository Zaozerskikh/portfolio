import {ProjectInfo} from "../redux/projects_reducer/ProjectInfo";
import {TagType} from "../constants/TagType"
import {ProjectType} from "../constants/ProjectType";

const whiteHookahPreview = 'https://i.imgur.com/ZexQo1c.png'
const blackHookahPreview = 'https://i.imgur.com/Xn97hXD.png'
const whiteHookahDetailed1 = 'https://i.imgur.com/mguGHTp.png'
const whiteHookahDetailed2 = 'https://i.imgur.com/Nmco1o5.png'
const whiteHookahDetailed3 = 'https://i.imgur.com/Nmco1o5.png'
const whiteHookahDetailed4 = 'https://i.imgur.com/qDyhBvT.png'

const whitePuzzlesPreview = 'https://i.imgur.com/j3fzJd1.png'
const darkPuzzlesPreview = 'https://i.imgur.com/rynG9TR.png'


export const MockProjectArr: ProjectInfo[] = [
  {
    id: '1',
    name: 'hookah.pt',
    projectType: ProjectType.WEBSITE,
    detailedDarkImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    detailedWhiteImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    previewWhiteImage: whiteHookahPreview,
    previewDarkImage: blackHookahPreview,
    shortDescriptionRUS: 'разработал сайт для первого кальянного магазина в Португалии, подготовил фронтенд и интеграцию с CMS.',
    shortDescriptionENG: 'developed the website for the first hookah store in Portugal, created the frontend and CMS integration',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в Португалии. В рамках разработки был создан сайт на React, а так же произведена интеграция с CMS Contentful. Сейчас к проекту активно пишется бэкенд, но оценить интерфейс можно уже сейчас по ссылке ниже.',
    fullDescriptionENG: 'Online store of hookah products in Portugal. As a part of the development there was created a website on React. Integration with CMS Contentful was done to manage content for the client. Now this project is in the backend-development stage, but you can take a look on interface by click on the link below.',
    tags: [TagType.REACT, TagType.CMS, TagType.GIT],
    link: 'https://zaozerskikh.github.io/hookah/'
  },
  {
    id: '2',
    name: 'chess puzzles',
    projectType: ProjectType.MOBILE_APP,
    detailedDarkImages: [darkPuzzlesPreview],
    detailedWhiteImages: [whitePuzzlesPreview],
    previewWhiteImage: whitePuzzlesPreview,
    previewDarkImage: darkPuzzlesPreview,
    shortDescriptionRUS: 'создал мобильное приложение для обучения шахматным стратегиям',
    shortDescriptionENG: 'created a mobile application for teaching chess strategies',
    fullDescriptionRUS: 'Мобильное приложение для обучения шахматным стратегиям. Написано на React Native.',
    fullDescriptionENG: 'A mobile application for teaching chess strategies. It was written on React Native.',
    tags: [TagType.REACT_NATIVE, TagType.GIT],
    link: ''
  },
]

//@ts-ignore
