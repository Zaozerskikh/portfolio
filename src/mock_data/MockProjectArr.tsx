import {ProjectInfo} from "../redux/projects_reducer/ProjectInfo";
import {TagType} from "../constants/TagType"

const whiteHookahPreview = 'https://i.imgur.com/ZexQo1c.png'
const blackHookahPreview = 'https://i.imgur.com/Xn97hXD.png'
const whiteHookahDetailed1 = 'https://i.imgur.com/mguGHTp.png'
const whiteHookahDetailed2 = 'https://i.imgur.com/Nmco1o5.png'
const whiteHookahDetailed3 = 'https://i.imgur.com/Nmco1o5.png'
const whiteHookahDetailed4 = 'https://i.imgur.com/iPUtklZ.jpg'

export const MockProjectArr: ProjectInfo[] = [
  {
    id: '1',
    name: 'hookah.pt',
    detailedDarkImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    detailedWhiteImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    previewWhiteImage: whiteHookahPreview,
    previewDarkImage: blackHookahPreview,
    shortDescriptionRUS: 'разработал сайт для первого кальянного магазина в Португалии, подготовил фронтенд и бэкенд',
    shortDescriptionENG: 'developed the website for the first hookah store in Portugal, created the frontend and the backend',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в Португалии. В рамках разработки был создан сайт на React, бэкенд на Spring boot для сложной системы учёта движения товаров. Для управления контентом для клиента была произведена интеграция с CMS Contentful.',
    fullDescriptionENG: 'Online store of hookah products in Portugal. As a part of the development there was created a website on React, a backend on Spring boot for a complex system for goods moving accounting. Integration with CMS Contentful was done to manage content for the client.',
    tags: [TagType.REACT, TagType.SPRING_BOOT, TagType.DOCKER, TagType.POSTGRESQL],
    link: ''
  },
  {
    id: '2',
    name: 'hookah.pt',
    detailedDarkImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    detailedWhiteImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    previewWhiteImage: whiteHookahPreview,
    previewDarkImage: blackHookahPreview,
    shortDescriptionRUS: 'разработал сайт для первого кальянного магазина в Португалии, подготовил фронтенд и бэкенд',
    shortDescriptionENG: 'developed the website for the first hookah store in Portugal, created the frontend and the backend',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в Португалии. В рамках разработки был создан сайт на React, бэкенд на Spring boot для сложной системы учёта движения товаров. Для управления контентом для клиента была произведена интеграция с CMS Contentful.',
    fullDescriptionENG: 'Online store of hookah products in Portugal. As a part of the development there was created a website on React, a backend on Spring boot for a complex system for goods moving accounting. Integration with CMS Contentful was done to manage content for the client.',
    tags: [TagType.REACT, TagType.SPRING_BOOT, TagType.DOCKER, TagType.POSTGRESQL],
    link: ''
  },
  {
    id: '3',
    name: 'hookah.pt',
    detailedDarkImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    detailedWhiteImages: [whiteHookahDetailed1, whiteHookahDetailed2, whiteHookahDetailed3, whiteHookahDetailed4],
    previewWhiteImage: whiteHookahPreview,
    previewDarkImage: blackHookahPreview,
    shortDescriptionRUS: 'разработал сайт для первого кальянного магазина в Португалии, подготовил фронтенд и бэкенд',
    shortDescriptionENG: 'developed the website for the first hookah store in Portugal, created the frontend and the backend',
    fullDescriptionRUS: 'Интернет-магазин кальянной продукции в Португалии. В рамках разработки был создан сайт на React, бэкенд на Spring boot для сложной системы учёта движения товаров. Для управления контентом для клиента была произведена интеграция с CMS Contentful.',
    fullDescriptionENG: 'Online store of hookah products in Portugal. As a part of the development there was created a website on React, a backend on Spring boot for a complex system for goods moving accounting. Integration with CMS Contentful was done to manage content for the client.',
    tags: [TagType.REACT, TagType.SPRING_BOOT, TagType.DOCKER, TagType.POSTGRESQL],
    link: ''
  }
]

//@ts-ignore
