import {ProjectInfo} from "../redux/projects_reducer/ProjectInfo";
import {TagType} from "../constants/TagType"
import {ProjectType} from "../constants/ProjectType";

const audioGuidePreview  = 'https://i.imgur.com/LM8SHy7.png'
const audioGuide1 = 'https://i.imgur.com/HFBwQKC.png';
const audioGuide2 = 'https://i.imgur.com/XzQNv7Z.png'

const hookahPreview = 'https://i.imgur.com/ZbLrNpz.png'
const hookah1 = 'https://i.imgur.com/mguGHTp.png'
const hookah2 = 'https://i.imgur.com/Nmco1o5.png'
const hookah3 = 'https://i.imgur.com/Nmco1o5.png'
const hookah4 = 'https://i.imgur.com/qDyhBvT.png'

const puzzlesPreview = 'https://i.imgur.com/rEW11F9.png'

export const MockProjectArr: ProjectInfo[] = [
  {
    id: '3',
    name: 'Audio Guide Paris',
    projectType: ProjectType.MOBILE_APP,
    detailedSharedImages: [audioGuide1, audioGuide2],
    previewImage: audioGuidePreview,
    shortDescriptionRUS: 'разработал мобильное приложение- путеводитель по Парижу, подключил карты, плеер, оплату, провел интеграцию с CMS',
    shortDescriptionENG: 'developed a mobile application for a guide to Paris, connected maps, player, payment, and integrated with CMS.',
    fullDescriptionRUS: 'Кроссплатформенное мультиязычное приложение - путеводитель по Парижу. В рамках проекта был пройден полный цикл разработки и внедрения программного продукта: от согласования дизайна и написания кода до интеграции с CMS-системой Contentful и публикации готового приложения в магазины Google Play и App Store.',
    fullDescriptionENG: 'Cross-platform multilingual application - a guide to Paris. The project went through a full cycle development and implementation of a software product: from design approval and coding to integration with the Contentful CMS system and publishing the finished application in the Google Play and App Store.',
    tags: [TagType.REACT_NATIVE, TagType.CMS, TagType.GIT],
    link: 'https://play.google.com/store/apps/details?id=com.audioguides_paris'
  },
  {
    id: '1',
    name: 'hookah.pt',
    projectType: ProjectType.WEBSITE,
    detailedSharedImages: [hookah1, hookah2, hookah3, hookah4],
    previewImage: hookahPreview,
    shortDescriptionRUS: 'разработал сайт для первого кальянного магазина в Португалии, подготовил фронтенд и интеграцию с CMS.',
    shortDescriptionENG: 'developed the website for the first hookah store in Portugal, created the frontend and CMS integration',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в Португалии. В рамках разработки был создан сайт на React, а так же произведена интеграция с CMS Contentful. Сейчас к проекту активно пишется бэкенд, но оценить интерфейс можно уже сейчас по ссылке ниже.',
    fullDescriptionENG: 'Online store of hookah products in Portugal. As a part of the development there was created a website on React. Integration with CMS Contentful was done to manage content for the client. Now this project is in the backend-development stage, but you can take a look on interface by click on the link below.',
    tags: [TagType.REACT, TagType.CMS, TagType.GIT],
    link: 'https://zaozerskikh.github.io/hookah/'
  },
  {
    id: '2',
    name: 'Chess Puzzles',
    projectType: ProjectType.MOBILE_APP,
    detailedSharedImages: [puzzlesPreview],
    previewImage: puzzlesPreview,
    shortDescriptionRUS: 'создал мобильное приложение для обучения шахматным стратегиям',
    shortDescriptionENG: 'created a mobile application for teaching chess strategies',
    fullDescriptionRUS: 'Мобильное приложение для обучения шахматным стратегиям. Написано на React Native.',
    fullDescriptionENG: 'A mobile application for teaching chess strategies. It was written on React Native.',
    tags: [TagType.REACT_NATIVE, TagType.GIT],
    link: ''
  },
]