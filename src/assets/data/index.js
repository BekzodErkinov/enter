// Announce Categories Icon
import {
  ManIcon,
  GiftsIcon,
  PlaneIcon,
  StoreIcon,
  GamingIcon,
  TerminalIcon,
  BriefcaseIcon,
  ChallengeIcon,
  InMaintenanceIcon,
} from '../../assets/icons'

/* Announcements */
import announceImg1 from '../images/announce16.jpg'
import announceImg2 from '../images/announce15.jpg'
import announceImg3 from '../images/announce14.jpg'
import announceImg4 from '../images/announce13.jpg'
import announceImg5 from '../images/announce12.jpg'
import announceImg6 from '../images/announce11.png'
import announceImg7 from '../images/announce10.png'
import announceImg8 from '../images/announce9.png'
import announceImg9 from '../images/announce8.png'
import announceImg10 from '../images/announce7.png'
import announceImg11 from '../images/announce6.png'
import announceImg12 from '../images/announce5.png'
import announceImg13 from '../images/announce1.png'
import announceImg14 from '../images/announce3.png'
import announceImg15 from '../images/announce2.png'
import announceImg16 from '../images/announce4.png'

/* Recommended Announcements Category Banner */
import recCategory1 from '../images/recCategory1.jpg'
import recCategory2 from '../images/recCategory2.jpg'
import recCategory3 from '../images/recCategory3.jpg'
import recCategory4 from '../images/recCategory4.jpg'

/* Seen Announcements */
import seenAnnounce1 from '../images/seenAnnounce1.png'
import seenAnnounce2 from '../images/seenAnnounce2.png'
import seenAnnounce3 from '../images/seenAnnounce3.png'
import seenAnnounce4 from '../images/seenAnnounce4.png'

/* Similar Announcements - SingleAnnounce */
import similarAnnounce1 from '../images/similarAnnounce1.png'
import similarAnnounce2 from '../images/similarAnnounce2.png'
import similarAnnounce3 from '../images/similarAnnounce3.png'
import similarAnnounce4 from '../images/similarAnnounce4.png'

/* Profile Table Item images */
import defaultAnnounceImg from '../images/defaultAnnounceImg.png'

/* Announce Select-Options - Header > Search */
// Category
const announceCategoryOptions = [
  { value: 'allCategory', label: 'Все рубрики' },
  { value: 'work', label: 'Работа' },
  { value: 'electronics', label: 'Электроника' },
  { value: 'transport', label: 'Транспорт' },
  { value: 'businessAndServices', label: 'Бизнес и услуги' },
  { value: 'realEstate', label: 'Недвижимость' },
  { value: 'personalBelongings', label: 'Личные вещи'},
  { value: 'hobbiesAndSport', label: 'Хобби и Спорт'},
  { value: 'childsWorld', label: 'Детский мир' },
  { value: 'houseAndGarden', label: 'Дом и сад' },
]

// Territory
const territoryOptions = [
  { value: 'uzbekistan', label: 'По всей Узбекистану'},
  { value: 'andijan', label: 'Андижан'},
  { value: 'bukhara', label: 'Бухара'},
  { value: 'tashkent', label: 'Ташкент'},
  { value: 'fergana', label: 'Фергана'},
  { value: 'navai', label: 'Наваи'},
  { value: 'namangan', label: 'Наманган'},
  { value: 'samarkand', label: 'Самарканд'},
  { value: 'khorezm', label: 'Хорезм'},
  { value: 'sirdaryo', label: 'Сырдарья'},
  { value: 'jizzakh', label: 'Джизак'},
  { value: 'surkhondaryo', label: 'Сурхондарьи'},
  { value: 'kashkadarya', label: 'Кашкадарья'},
  { value: 'karakalpakstan', label: 'Каракалпакстан'},
]


/* Announce Categories (Dropdown) */
const announceCategories = [
  {
    id: 1,
    icon: <PlaneIcon/>,
    title: 'Транспорт'
  },
  {
    id: 2,
    icon: <StoreIcon/>,
    title: 'Недвижимость'
  },
  {
    id: 3,
    icon: <TerminalIcon/>,
    title: 'Электроника'
  },
  {
    id: 4,
    icon: <BriefcaseIcon/>,
    title: 'Работа'
  },
  {
    id: 5,
    icon: <GiftsIcon/>,
    title: 'Личные вещи'
  },
  {
    id: 6,
    icon: <ChallengeIcon/>,
    title: 'Дом и Сад'
  },
  {
    id: 7,
    icon: <InMaintenanceIcon/>,
    title: 'Стройка и ремонт'
  },
  {
    id: 8,
    icon: <GamingIcon/>,
    title: 'Хобби и Спорт'
  },
  {
    id: 9,
    icon: <ManIcon/>,
    title: 'Бизнес и услуги'
  },
  {
    id: 10,
    icon: <img src="https://img.icons8.com/wired/50/3D3D63/teddy-bear.png" alt="Teddy bear"/>,
    title: 'Детский мир'
  },
]

/* Announce Type Controller Buttons - Home > AnnounceTypeControl */
const announceTypeControlButtons = [
  {
    value: 'newAnnounce',
    title: 'Новые объявления',
  },
  {
    value: 'bestOffer',
    title: 'Лучшее предложение',
  },
]

/* Announcements - Home */
const announcementsList = [
  {
    id: 1,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
    appearances: [
      announceImg1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 2,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
    appearances: [
      announceImg2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 3,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
    appearances: [
      announceImg3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 4,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
    appearances: [
      announceImg4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 5,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
    appearances: [
      announceImg5,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 6,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
    appearances: [
      announceImg6,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 7,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
    appearances: [
      announceImg7,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 8,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
    appearances: [
      announceImg8,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 9,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
    appearances: [
      announceImg9,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 10,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
    appearances: [
      announceImg10,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 11,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
    appearances: [
      announceImg11,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 12,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
    appearances: [
      announceImg12,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 13,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
    appearances: [
      announceImg13,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 14,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
    appearances: [
      announceImg14,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 15,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
    appearances: [
      announceImg15,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 16,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      announceImg16,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 17,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
    appearances: [
      announceImg1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 18,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
    appearances: [
      announceImg2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 19,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
    appearances: [
      announceImg3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 20,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
    appearances: [
      announceImg4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 21,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
    appearances: [
      announceImg5,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 22,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
    appearances: [
      announceImg6,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 23,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
    appearances: [
      announceImg7,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 24,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
    appearances: [
      announceImg8,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 25,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
    appearances: [
      announceImg9,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 26,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
    appearances: [
      announceImg10,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 27,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
    appearances: [
      announceImg11,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 28,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
    appearances: [
      announceImg12,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 29,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
    appearances: [
      announceImg13,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 30,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
    appearances: [
      announceImg14,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 31,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
    appearances: [
      announceImg15,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 32,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      announceImg16,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 33,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
    appearances: [
      announceImg1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 34,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
    appearances: [
      announceImg2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 35,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
    appearances: [
      announceImg3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 36,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
    appearances: [
      announceImg4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 37,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
    appearances: [
      announceImg5,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 38,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
    appearances: [
      announceImg6,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 39,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
    appearances: [
      announceImg7,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 40,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
    appearances: [
      announceImg8,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 41,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
    appearances: [
      announceImg9,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 42,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
    appearances: [
      announceImg10,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 43,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
    appearances: [
      announceImg11,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 44,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
    appearances: [
      announceImg12,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 45,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
    appearances: [
      announceImg13,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 46,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
    appearances: [
      announceImg14,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 47,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
    appearances: [
      announceImg15,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 48,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      announceImg16,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
]

/* Recommended Announcements Category Banner */
const recCategoriesBanner = [
  {
    category: 'tech',
    img: recCategory1,
  },
  {
    category: 'clothes',
    img: recCategory2,
  },
  {
    category: 'office',
    img: recCategory3,
  },
  {
    category: 'business',
    img: recCategory4,
  },
  {
    category: 'tech',
    img: recCategory1,
  },
  {
    category: 'clothes',
    img: recCategory2,
  },
  {
    category: 'office',
    img: recCategory3,
  },
  {
    category: 'business',
    img: recCategory4,
  },
]


/* Recommended Announce Type Controller Buttons - Home > RecAnnounceListSection */
const recAnnounceTypeControlButtons = [
  {
    value: 'viewed',
    title: 'Просмотренные',
  },
  {
    value: 'editorsChoice',
    title: 'Выбор редакции',
  },
  {
    value: 'reducedPrices',
    title: 'Сниженные цены',
  },
]

/* Seen Announcements */
const seenAnnouncements = [
  {
    id: 1,
    img: seenAnnounce1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Светодиодная лампа с фронтальным стеклом 10шт',
    currency: 'uzs',
    appearances: [
      seenAnnounce1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 2,
    img: seenAnnounce2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коттедж 424 м² на участке 22.6 сот.',
    currency: 'uzs',
    appearances: [
      seenAnnounce2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 3,
    img: seenAnnounce3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '2-к квартира, 55 м², 3/5 эт.',
    currency: 'uzs',
    appearances: [
      seenAnnounce3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 4,
    img: seenAnnounce4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Кровать с закроватным модулем+ матрас Вита 160',
    currency: 'uzs',
    appearances: [
      seenAnnounce4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
]


/* Announcements Category Links - Footer > FooterLinks */
const announcementsCategory = [
  ['Автомобили', [
    'Легковые авто',
    'Мото',
    'Автобусы',
    'Грузовые авто',
    'Сельхозтехника',
    'Запчасти и Аксессуары',
    'Прицепы и Спецтехника',
    'Водный и Другой транспортa',
  ]],
  ['Недвижимость', [
    'Аренда квартир',
    'Аренда домов',
    'Аренда гаражей и Стоянок',
    'Продажа квартир',
    'Продажа домов',
    'Продажа земли',
    'Продажа гаражей/Стоянок',
    'Аренда помещений',
    'Продажа помещений',
    'Прочая недвижимость',
    'Обмен недвижимости',
    'Коммерческая недвижимость',
  ]],
  ['Электроника', [
    'Телефоны',
    'Компьютеры',
    'Ноутбуки, планшеты',
    'Оргтехника и расходники',
    'ТВ,Фото,Видео и Аудио',
    'Игры и Приставки',
    'Техника для дома и Для себя',
    'Климатическое оборудование',
    'Аксессуары и Комплектующие',
    'Техника для наблюдения',
    'Прочая электроника',
  ]],
  ['Личные вещи', [
    'Одежда, обувь, аксессуары',
    'Детская одежда и обувь',
    'Детские товары и Игрушки',
    'Школьникам',
    'Часы и украшения',
    'Товары для красоты и здоровья',
    'Разные вещи',
  ]],
  ['Дом и Сад', [
    'Товары для интерьера',
    'Товары для сада',
    'Растения',
    'Продукты питания',
    'Посуда и Кухонная утварь',
    'Хоз.инвентарь и Бытовая химия',
    'Канцтовары и Расходные ',
    'Прочие товары для дома',
  ]],
  ['Товары стройки и ремонта', [
    'Двери и окна',
    'Сантехника',
    'Стройматериалы',
    'Инструменты',
  ]],
  ['Хобби, Отдых и Спорт', [
    'Антиквариат и Коллекции',
    'Музыкальные инструменты',
    'Велосипеды',
    'Товары для спорта и отдыха',
    'Книги/Журналы',
    'CD/DVD/Пластинки/Кассеты',
    'Билеты и путешествия',
    'Охота и рыбалка',
  ]],
  [' Бизнес и услуги', [
    'Сырьё и материалы',
    'Оборудование и аренда',
    'Производство и обработка',
    'Продажа бизнеса и партнерство',
    'Финансовые услуги/Бухгалтерия',
    'Услуги для красоты и здоровья',
    'Услуги курьера и доставки',
    'Реклама, Полиграфия и Маркетинг',
    'Няни, Сиделки и Домработницы',
    'Обучение, курсы и репетиторы',
    'Фото, видео, искусство и дизайн',
    'Перевод и Набор текста',
    'Юридические услуги',
    'Прокат товаров',
    'Туризм и спорт',
    'Праздники и мероприятия',
    'Перевозки и Аренда авто',
    'Услуги спецтехники',
    'Автосервис',
    'Услуги такси',
    'Химчистка и стирка',
    'Пошив одежды и Обуви',
    'Ювелирные услуги',
    'Питание и доставка еды',
    'Уход за животными',
    'Другие услуги',
  ]],
]


/* Recommended Announce Type Controller Buttons - Home > RecAnnounceListSection */
const singleAnnounceTypeControlButtons = [
  {
    value: 'similarAnnounce',
    title: 'Похожие объявления',
  },
  {
    value: 'authorAnnounce',
    title: 'Объявления автора',
  },
]

/* Similar Announcements - SingleAnnounce */
const singleAnnouncements = [
  {
    id: 1,
    img: similarAnnounce1,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 2,
    img: similarAnnounce2,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 3,
    img: similarAnnounce3,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 4,
    img: similarAnnounce4,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 5,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
    appearances: [
      announceImg1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 6,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
    appearances: [
      announceImg13,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 7,
    img: similarAnnounce3,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 8,
    img: seenAnnounce2,
    cost: 300000000,
    date: 'Вчера 22:55',
    title: '2-к квартира, 55 м², 3/5 эт.',
    currency: 'uzs',
    appearances: [
      seenAnnounce2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
]

const singleAnnouncements2 = [
  {
    id: 1,
    img: seenAnnounce2,
    cost: 300000000,
    date: 'Вчера 22:55',
    title: '2-к квартира, 55 м², 3/5 эт.',
    currency: 'uzs',
    appearances: [
      seenAnnounce2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 2,
    img: similarAnnounce3,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 3,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
    appearances: [
      announceImg13,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 4,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
    appearances: [
      announceImg1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 5,
    img: similarAnnounce4,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce4,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 6,
    img: similarAnnounce3,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce3,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 7,
    img: similarAnnounce2,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce2,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
  {
    id: 8,
    img: similarAnnounce1,
    cost: 5000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
    appearances: [
      similarAnnounce1,
      'https://picsum.photos/400?random=1',
      'https://picsum.photos/400?random=2',
      'https://picsum.photos/400?random=3',
      'https://picsum.photos/400?random=4',
    ],
  },
]

/* Profile Menu Controller Buttons - Header > section.profileLower */
const profileMenuBtn = [
  {
    value: 'announcement',
    title: 'Объявления',
  },
  {
    value: 'message',
    title: 'Сообщения',
  },
  {
    value: 'paymentsAndInvoice',
    title: 'Платежи и счёт',
  },
  {
    value: 'settings',
    title: 'Настройки',
  },
  {
    value: 'myBusiness',
    title: 'Мой бизнес',
  },
]

const profileTableData = [
  {
    id: 0,
    img: defaultAnnounceImg,
    title: 'Срочно нужен программист yii2',
    cost: ['2 000 000', '6 000 000'],
    data: ['# 345 002', 'С: 28 июнь', 'По: 28 июль'],
    views: 195,
    tel: 200,
  },
  {
    id: 1,
    img: defaultAnnounceImg,
    title: 'Срочно нужен программист yii2',
    cost: ['2 000 000', '6 000 000'],
    data: ['# 345 002', 'С: 28 июнь', 'По: 28 июль'],
    views: 195,
    tel: 200,
  },
  {
    id: 2,
    img: defaultAnnounceImg,
    title: 'Срочно нужен программист yii2',
    cost: ['2 000 000', '6 000 000'],
    data: ['# 345 002', 'С: 28 июнь', 'По: 28 июль'],
    views: 195,
    tel: 200,
  },
  {
    id: 3,
    img: defaultAnnounceImg,
    title: 'Срочно нужен программист yii2',
    cost: ['2 000 000', '6 000 000'],
    data: ['# 345 002', 'С: 28 июнь', 'По: 28 июль'],
    views: 195,
    tel: 200,
  },
  {
    id: 4,
    img: defaultAnnounceImg,
    title: 'Срочно нужен программист yii2',
    cost: ['2 000 000', '6 000 000'],
    data: ['# 345 002', 'С: 28 июнь', 'По: 28 июль'],
    views: 195,
    tel: 200,
  },
]


export {
  announceCategoryOptions,
  territoryOptions,
  announceCategories,
  announceTypeControlButtons,
  announcementsList,
  recCategoriesBanner,
  recAnnounceTypeControlButtons,
  seenAnnouncements,
  announcementsCategory,
  singleAnnounceTypeControlButtons,
  singleAnnouncements,
  singleAnnouncements2,
  profileMenuBtn,
  profileTableData,
}
