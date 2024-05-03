import {ProjectInfo} from "../types/ProjectInfo";
import {TagType} from "../types/TagType"
import {ProjectType} from "../types/ProjectType";

// glebkossov.com
const glebkossovPreview = 'https://i.imgur.com/XRc5fnP.png'

// audioguides
const audioGuidePreview  = 'https://i.imgur.com/LM8SHy7.png'

// yourmeal
const yourmealPreview  = 'https://i.imgur.com/VDV4Jye.png'

// hookah
const hookahPreview = 'https://i.imgur.com/ZbLrNpz.png'

// chess puzzles
const puzzlesPreview = 'https://i.imgur.com/Fq3bz2N.png'

export const ProjectArr: ProjectInfo[] = [
  {
    id: 'audio-guide-paris',
    name: 'Audio Guide Paris',
    projectType: ProjectType.MOBILE_APP,
    detailedSharedImages: [],
    previewImage: audioGuidePreview,
    shortDescriptionRUS: 'разработал мобильное приложение- путеводитель по\u00A0Парижу, подключил карты, плеер, провел интеграцию с\u00A0CMS',
    shortDescriptionENG: 'developed a\u00A0mobile application for a\u00A0guide to Paris, connected maps, player, and\u00A0integrated with CMS',
    fullDescriptionRUS: 'Кроссплатформенное мультиязычное приложение - путеводитель по\u00A0Парижу. В\u00A0рамках проекта был пройден полный цикл разработки и\u00A0внедрения программного продукта: от\u00A0согласования дизайна и\u00A0написания кода до\u00A0интеграции с\u00A0CMS-системой Contentful и\u00A0публикации готового приложения в\u00A0магазины Google Play и\u00A0App Store.',
    fullDescriptionENG: 'Cross-platform multilingual application - a\u00A0guide to Paris. The project went through a\u00A0full cycle development and implementation of\u00A0a\u00A0software product: from design approval and\u00A0coding to\u00A0integration with the Contentful CMS system and\u00A0publishing the finished application in\u00A0the Google Play and\u00A0App Store.',
    tags: [TagType.REACT_NATIVE, TagType.CMS, TagType.GIT],
    googlePlayLink: 'https://play.google.com/store/apps/details?id=com.audioguides_paris',
    appStoreLink: 'https://apps.apple.com/us/app/audio-guide-paris/id6471984315',
    detailedImageGrids: [
      {
        rows: [
          {
            im1: 'https://i.imgur.com/KW5wsEc.jpg',
            im2: 'https://i.imgur.com/mMXNP8V.jpg',
          },
          {
            im1: 'https://i.imgur.com/2dDY1BI.jpg',
            im2: 'https://i.imgur.com/c3KYCLq.jpg'
          }
        ]
      }
    ]
  },
  {
    id: 'yourmeal',
    name: 'YourMeal',
    projectType: ProjectType.WEBSITE,
    detailedSharedImages: [],
    previewImage: yourmealPreview,
    shortDescriptionRUS: 'разработал фронтенд-часть амбициозного фудтех-стартапа, упаковал в\u00A0докер, развернул на\u00A0сервере',
    shortDescriptionENG: 'developed a\u00A0front-end part of an\u00A0ambitious foodtech startup, composed it with\u00A0Docker, and\u00A0deployed it on\u00A0VPS',
    fullDescriptionRUS: 'Разработал фронтенд-часть амбициозного фудтех-стартапа, упаковал в\u00A0докер, развернул на\u00A0сервере. Сейчас проект находится в\u00A0стадии разработки бэкенда, но\u00A0вы можете свободно протестировать интерфейс дев-версии по ссылке ниже.',
    fullDescriptionENG: 'Developed a\u00A0front-end part of an\u00A0ambitious foodtech startup, composed it with\u00A0Docker, and\u00A0deployed it on\u00A0VPS. The\u00A0project is\u00A0currently in\u00A0the backend development stage, but you can freely test the dev version UI using the link below.',
    tags: [TagType.REACT, TagType.DOCKER, TagType.GIT],
    websiteLink: 'https://yourmeal.app',
    detailedImageGrids: [
      {
        rows: [
          {
            im1: 'https://i.imgur.com/hFZbXGT.jpg',
            im2: 'https://i.imgur.com/Hv4ukM4.jpg',
          },
          {
            im1: 'https://i.imgur.com/oaIdBhV.jpg',
            im2: 'https://i.imgur.com/wgZmkMD.jpg'
          }
        ]
      }
    ]
  },
  {
    id: 'glebkossov',
    name: 'glebkossov.com',
    projectType: ProjectType.WEBSITE,
    detailedSharedImages: [],
    previewImage: glebkossovPreview,
    shortDescriptionRUS: 'разработал мультиязычный сайт-портфолио для UI/UX дизайнера, провел интеграцию с\u00A0CMS и развернул на\u00A0VPS',
    shortDescriptionENG: 'developed a\u00A0multilingual portfolio website for\u00A0a\u00A0UI/UX designer,\u00A0integrated it\u00A0with CMS and hosted it\u00A0on\u00A0VPS',
    fullDescriptionRUS: 'Разработал мультиязычный сайт-портфолио для UI/UX дизайнера, провел интеграцию с\u00A0CMS и\u00A0развернул на\u00A0VPS.',
    fullDescriptionENG: 'Developed a\u00A0multilingual portfolio website for\u00A0a\u00A0UI/UX designer, integrated it\u00A0with CMS and\u00A0hosted it\u00A0on\u00A0VPS.',
    tags: [TagType.REACT, TagType.CMS, TagType.GIT],
    websiteLink: 'https://glebkossov.com',
    detailedImageGrids: [
      {
        rows: [
          {
            im1: 'https://i.imgur.com/0bxTcSy.jpg',
            im2: 'https://i.imgur.com/nvsDGcJ.jpg',
          },
          {
            im1: 'https://i.imgur.com/cpQn1XB.jpg',
            im2: 'https://i.imgur.com/3sUgc2z.jpg'
          }
        ]
      }
    ]
  },
  {
    id: 'hookah-pt',
    name: 'Hookah.pt',
    projectType: ProjectType.WEBSITE,
    detailedSharedImages: [],
    previewImage: hookahPreview,
    shortDescriptionRUS: 'разработал сайт для\u00A0первого кальянного магазина в\u00A0Португалии, подготовил фронтенд и\u00A0интеграцию с\u00A0CMS',
    shortDescriptionENG: 'developed the website for\u00A0the first hookah store in\u00A0Portugal, created the frontend and\u00A0CMS integration',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в\u00A0Португалии. В\u00A0рамках разработки был создан сайт на\u00A0React, а\u00A0так же произведена интеграция с\u00A0CMS Contentful. Сейчас к\u00A0проекту активно пишется бэкенд, но\u00A0оценить интерфейс можно уже сейчас по\u00A0ссылке ниже.',
    fullDescriptionENG: 'Online store of\u00A0hookah products in\u00A0Portugal. As a\u00A0part of\u00A0the development there was created a\u00A0website on React. Integration with CMS Contentful was done to\u00A0manage content for the client. Now this project is in\u00A0the backend-development stage, but you can take a\u00A0look on\u00A0interface by\u00A0click on\u00A0the link below.',
    tags: [TagType.REACT, TagType.CMS, TagType.GIT],
    websiteLink: 'https://zaozerskikh.github.io/hookah/',
    detailedImageGrids: [
      {
        rows: [
          {
            im1: 'https://i.imgur.com/VhTyYge.jpg',
            im2: 'https://i.imgur.com/8Mxc2kp.jpg',
          },
          {
            im1: 'https://i.imgur.com/uTKnHfY.jpg',
            im2: 'https://i.imgur.com/qNFdznH.jpg'
          }
        ]
      }
    ]
  },
  {
    id: 'chess-puzzles',
    name: 'Chess Puzzles',
    projectType: ProjectType.MOBILE_APP,
    detailedSharedImages: [],
    previewImage: puzzlesPreview,
    shortDescriptionRUS: 'создал мобильное приложение для\u00A0обучения шахматным стратегиям',
    shortDescriptionENG: 'created a\u00A0mobile application for\u00A0teaching chess strategies',
    fullDescriptionRUS: 'Мобильное приложение - cборник задач по\u00A0шахматам. Все задачи разбиты по\u00A0темам, присутствует возможность получения подсказок при\u00A0решении. Проект был реaлизован из-за личного интереса к\u00A0шахматам, а\u00A0также желания разобраться в\u00A0тонкостях реализации этой игры на\u00A0фреймворке React Native.',
    fullDescriptionENG: 'Mobile application - a\u00A0collection of\u00A0chess problems. All problems are divided into topics, and there is an\u00A0opportunity to\u00A0receive hints when solving them. The project was written due to\u00A0personal interest in\u00A0chess, as well as the desire to\u00A0understand how to\u00A0implement the game of\u00A0chess using the React Native framework.',
    tags: [TagType.REACT_NATIVE, TagType.GIT],
    detailedImageGrids: [
      {
        rows: [
          {
            im1: 'https://i.imgur.com/OY85p7N.jpg',
            im2: 'https://i.imgur.com/3YDtOTA.jpg',
          },
        ]
      }
    ]
  },
]
