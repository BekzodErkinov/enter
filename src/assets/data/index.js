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
import announceImg1 from '../images/announce1.png'
import announceImg2 from '../images/announce2.png'
import announceImg3 from '../images/announce3.png'
import announceImg4 from '../images/announce4.png'
import announceImg5 from '../images/announce5.png'
import announceImg6 from '../images/announce6.png'
import announceImg7 from '../images/announce7.png'
import announceImg8 from '../images/announce8.png'
import announceImg9 from '../images/announce9.png'
import announceImg10 from '../images/announce10.png'
import announceImg11 from '../images/announce11.png'
import announceImg12 from '../images/announce12.jpg'
import announceImg13 from '../images/announce13.jpg'
import announceImg14 from '../images/announce14.jpg'
import announceImg15 from '../images/announce15.jpg'
import announceImg16 from '../images/announce16.jpg'

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
  { icon: <PlaneIcon/>, title: 'Транспорт'},
  { icon: <StoreIcon/>, title: 'Недвижимость'},
  { icon: <TerminalIcon/>, title: 'Электроника'},
  { icon: <BriefcaseIcon/>, title: 'Работа'},
  { icon: <GiftsIcon/>, title: 'Личные вещи'},
  { icon: <ChallengeIcon/>, title: 'Дом и Сад'},
  { icon: <InMaintenanceIcon/>, title: 'Стройка и ремонт'},
  { icon: <GamingIcon/>, title: 'Хобби и Спорт'},
  { icon: <ManIcon/>, title: 'Бизнес и услуги'},
  { icon: <img src="https://img.icons8.com/wired/50/3D3D63/teddy-bear.png" alt="Teddy bear"/>, title: 'Детский мир'},
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
  },
  {
    id: 2,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
  },
  {
    id: 3,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
  },
  {
    id: 4,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
  },
  {
    id: 5,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
  },
  {
    id: 6,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
  },
  {
    id: 7,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
  },
  {
    id: 8,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
  },
  {
    id: 9,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
  },
  {
    id: 10,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
  },
  {
    id: 11,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
  },
  {
    id: 12,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
  },
  {
    id: 13,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
  },
  {
    id: 14,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
  },
  {
    id: 15,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
  },
  {
    id: 16,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
  },
{
    id: 17,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
  },
  {
    id: 18,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
  },
  {
    id: 19,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
  },
  {
    id: 20,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
  },
  {
    id: 21,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
  },
  {
    id: 22,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
  },
  {
    id: 23,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
  },
  {
    id: 24,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
  },
  {
    id: 25,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
  },
  {
    id: 26,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
  },
  {
    id: 27,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
  },
  {
    id: 28,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
  },
  {
    id: 29,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
  },
  {
    id: 30,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
  },
  {
    id: 31,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
  },
  {
    id: 32,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
  },
  {
    id: 33,
    img: announceImg1,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
    currency: 'uzs',
  },
  {
    id: 34,
    img: announceImg2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Маркетолог. Консультирование. Настройка рекламы',
    currency: 'uzs',
  },
  {
    id: 35,
    img: announceImg3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Требуется администратор в Отел',
    currency: 'uzs',
  },
  {
    id: 36,
    img: announceImg4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Велосипед Merida Big Seven 70 D',
    currency: 'uzs',
  },
  {
    id: 37,
    img: announceImg5,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Женский, комфортный велосипед из Германии',
    currency: 'uzs',
  },
  {
    id: 38,
    img: announceImg6,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коньки раздвижные Galaxy р-р 36-39',
    currency: 'uzs',
  },
  {
    id: 39,
    img: announceImg7,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам свою гоночный байк Mongoose',
    currency: 'uzs',
  },
  {
    id: 40,
    img: announceImg8,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '1-к квартира, 47 м², 7/18 эт.',
    currency: 'uzs',
  },
  {
    id: 41,
    img: announceImg9,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Торговое помещение, 10 м²',
    currency: 'uzs',
  },
  {
    id: 42,
    img: announceImg10,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
    currency: 'uzs',
  },
  {
    id: 43,
    img: announceImg11,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Toyota Camry, 2002',
    currency: 'uzs',
  },
  {
    id: 44,
    img: announceImg12,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Сборочный комплект камаз 43118',
    currency: 'uzs',
  },
  {
    id: 45,
    img: announceImg13,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Продам легендарный BMW K1200S',
    currency: 'uzs',
  },
  {
    id: 46,
    img: announceImg14,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Плиточник',
    currency: 'uzs',
  },
  {
    id: 47,
    img: announceImg15,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Мастер регулировка дверей замена замков',
    currency: 'uzs',
  },
  {
    id: 48,
    img: announceImg16,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Овощная компания. Доставка свежих овощей и фруктов',
    currency: 'uzs',
  },
]

/* Recommended Announcements Category Banner */
const recCategoriesBanner = [
  { img: recCategory1, },
  { img: recCategory2, },
  { img: recCategory3, },
  { img: recCategory4, },
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
  },
  {
    id: 2,
    img: seenAnnounce2,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Коттедж 424 м² на участке 22.6 сот.',
    currency: 'uzs',
  },
  {
    id: 3,
    img: seenAnnounce3,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: '2-к квартира, 55 м², 3/5 эт.',
    currency: 'uzs',
  },
  {
    id: 4,
    img: seenAnnounce4,
    cost: 39000000,
    date: 'Вчера 22:55',
    title: 'Кровать с закроватным модулем+ матрас Вита 160',
    currency: 'uzs',
  },
]


/* Announcements Category */
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


export {
  announceCategoryOptions,
  territoryOptions,
  announceCategories,
  announceTypeControlButtons,
  announcementsList,
  recCategoriesBanner,
  seenAnnouncements,
  announcementsCategory,
}
