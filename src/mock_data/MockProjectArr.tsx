import {ProjectInfo} from "../redux/projects_reducer/ProjectInfo";
import {TagType} from "../constants/TagType";

import whiteHookahPreview from './hookah_pt/whiteHookahPt.png'
import blackHookahPreview from './hookah_pt/darkHookahPt.png'
import whiteHookahDetailed1 from './hookah_pt/whiteHookahDetailed_1.png'
import whiteHookahDetailed2 from './hookah_pt/whiteHookahDetailed_2.png'
import whiteHookahDetailed3 from './hookah_pt/whiteHookahDetailed_3.png'
import whiteHookahDetailed4 from './hookah_pt/whiteHookahDetailed_4.png'

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
  }
]

//@ts-ignore
