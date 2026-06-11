import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Clock3,
  Compass,
  CreditCard,
  FileCheck2,
  Layers3,
  LineChart,
  MessageSquareText,
  Orbit,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users2,
  WandSparkles,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = { label: string; href: string }
export type PricingTier = { name: string; price: string; note: string; accent: string; bestFor: string; features: string[] }
export type CurriculumModule = { week: string; title: string; outcome: string; lessons: string[]; icon: LucideIcon }
export type CaseStudy = { name: string; role: string; result: string; quote: string; image: string; metric: string }

export const navItems: NavItem[] = [
  { label: 'Программа', href: '/program' },
  { label: 'Тарифы', href: '/pricing' },
  { label: 'Кейсы', href: '/cases' },
]

export const product = {
  name: 'Orbit Method',
  eyebrow: '8-недельная программа для экспертов',
  headline: 'Соберите продукт, который выглядит как бренд, а продается как система.',
  headlineAccent: 'продается как система',
  description: 'Позиционирование, AI-контент, лендинг и воронка заявок — всё для первых продаж без хаоса.',
  startDate: 'Поток 18 мая',
  seats: '24 места',
  conversion: '+38% к конверсии заявок',
}

export const stats = [
  { value: '8', label: 'недель от идеи до запуска' },
  { value: '42', label: 'практических шаблона' },
  { value: '1:1', label: 'ревью упаковки и лендинга' },
  { value: '7.4 млн', label: 'суммарная выручка выпускников' },
]

export const trustSignals = [
  { label: 'Проверка оффера', icon: ShieldCheck },
  { label: 'AI-контент без мусора', icon: WandSparkles },
  { label: 'Финмодель запуска', icon: LineChart },
  { label: 'Юнит-экономика тарифов', icon: CreditCard },
]

export const features = [
  { title: 'Позиционирование без воды', text: 'Собираем конкретный сегмент, боль, обещание и доказательства, чтобы сайт не звучал как еще один курс про успех.', icon: Compass },
  { title: 'AI как производственный контур', text: 'Используем AI для сценариев уроков, лендинга, писем и контента, но оставляем экспертность и голос автора.', icon: BrainCircuit },
  { title: 'Продуктовая методика', text: 'Проектируем путь ученика, практику, контрольные точки и результат, который можно показать до покупки.', icon: Workflow },
  { title: 'Запуск с измерениями', text: 'Воронка заявок, квалификация, календарь касаний, метрики прогрева и понятные решения по трафику.', icon: BarChart3 },
]

export const curriculum: CurriculumModule[] = [
  { week: '01', title: 'Диагностика рынка и угла', outcome: 'Вы выбираете нишу, где есть спрос, деньги и понятная причина купить именно у вас.', lessons: ['карта сегментов', 'матрица боли и цены', 'разбор конкурентов'], icon: Orbit },
  { week: '02', title: 'Оффер и обещание', outcome: 'Формулируете продукт так, чтобы клиент понимал результат, формат и критерий успеха.', lessons: ['JTBD-интервью', 'promise ladder', 'анти-возражения'], icon: BadgeCheck },
  { week: '03', title: 'Архитектура обучения', outcome: 'Собираете программу из практических спринтов, а не из длинных лекций без действия.', lessons: ['карта навыков', 'домашние задания', 'контроль прогресса'], icon: BookOpenCheck },
  { week: '04', title: 'Контент-машина', outcome: 'Производите уроки, письма, посты и сценарии вебинаров быстрее, сохраняя стиль автора.', lessons: ['prompt-система', 'контент-банк', 'редакционный ритм'], icon: Sparkles },
  { week: '05', title: 'Лендинг и заявка', outcome: 'Упаковываете страницу продаж с аргументами, тарифами, FAQ и короткой формой заявки.', lessons: ['структура лендинга', 'UX формы', 'доказательства доверия'], icon: Layers3 },
  { week: '06', title: 'Продажи и созвоны', outcome: 'Вводите квалификацию, скрипт разговора и систему follow-up без давления на клиента.', lessons: ['scorecard заявки', 'сценарий созвона', 'CRM-ритм'], icon: MessageSquareText },
  { week: '07', title: 'Запуск потока', outcome: 'Собираете календарь прогрева и запуска, считаете экономику и готовите операционку.', lessons: ['launch room', 'план трафика', 'лимиты мест'], icon: PlayCircle },
  { week: '08', title: 'Ревью и масштабирование', outcome: 'Получаете финальный аудит продукта, страницы и воронки, затем планируете второй поток.', lessons: ['ретроспектива', 'метрики', 'roadmap улучшений'], icon: FileCheck2 },
]

export const pricingTiers: PricingTier[] = [
  { name: 'Core', price: '89 000 ₽', note: 'для эксперта, который хочет собрать запуск самостоятельно', accent: 'calm', bestFor: 'Самостоятельная сборка', features: ['8 недель программы', 'шаблоны и чек-листы', 'еженедельные групповые разборы', 'чат потока', 'финальный аудит оффера'] },
  { name: 'Studio', price: '149 000 ₽', note: 'для автора, которому нужен сильный лендинг и контроль качества', accent: 'hot', bestFor: 'Самый частый выбор', features: ['все из Core', '2 личных ревью', 'разбор лендинга и тарифов', 'помощь с AI-контуром', 'приоритет в чате'] },
  { name: 'Partner', price: '290 000 ₽', note: 'для команды или эксперта с готовой аудиторией', accent: 'deep', bestFor: 'Запуск под ключ рядом с вами', features: ['все из Studio', '4 стратегические сессии', 'проверка скриптов продаж', 'финмодель запуска', 'личный launch-room'] },
]

export const caseStudies: CaseStudy[] = [
  { name: 'Алина Морозова', role: 'консультант по B2B-продажам', result: '17 заявок за 9 дней', metric: '2.1 млн ₽ выручки потока', quote: 'До программы у меня были консультации и набор заметок. После Orbit появился продукт, воронка и спокойная логика продажи без ощущения инфобизнеса.', image: '/case-alina.png' },
  { name: 'Илья Рубцов', role: 'продуктовый дизайнер', result: 'курс собран за 6 недель', metric: '43% конверсия заявки в созвон', quote: 'Самым ценным был не дизайн лендинга, а структура: кому продаем, почему сейчас, что человек получает и где доказательства.', image: '/case-ilya.png' },
  { name: 'Мира Сафина', role: 'методист корпоративного обучения', result: '3 тарифа без путаницы', metric: '58 учеников в первом запуске', quote: 'Мы перестали продавать часы и начали продавать путь. Тарифы стали понятными, а форма заявки сразу фильтрует неподходящих клиентов.', image: '/case-mira.png' },
]

export const faq = [
  { question: 'Это про запуск курса или про личный бренд?', answer: 'Про продуктовую упаковку экспертности. Личный бренд используем как доверие, но основной результат - готовая программа, заявочная воронка и первая итерация запуска.' },
  { question: 'Нужна ли большая аудитория?', answer: 'Нет. Для Core достаточно 300-500 релевантных контактов или готовности делать ручные касания. Для Partner сильнее раскрываются эксперты с базой от 2 000 человек.' },
  { question: 'Будет ли реальная оплата на сайте?', answer: 'В этом демо реализована заявка и выбор тарифа. Интеграция оплаты, CRM и рассылок не подключена и должна добавляться отдельно под ваш стек.' },
  { question: 'Сколько времени нужно в неделю?', answer: 'В среднем 5-7 часов: один разбор, один рабочий блок по продукту, один блок по контенту или лендингу.' },
]

export const galleryImages = [
  { src: '/gallery-1.png', alt: 'Команда работает над проектом' },
  { src: '/gallery-2.png', alt: 'Рабочая сессия с ноутбуком' },
  { src: '/gallery-3.png', alt: 'Стратегическое планирование продукта' },
]

export const schedule = [
  { label: 'Пн', value: 'Лекция 45 минут' },
  { label: 'Ср', value: 'Воркшоп и практика' },
  { label: 'Пт', value: 'Разборы и ревью' },
  { label: 'Вс', value: 'Личный спринт' },
]

export const operations = [
  { title: 'Бриф', value: '12 минут', icon: Clock3 },
  { title: 'Отбор', value: '24 часа', icon: Users2 },
  { title: 'Старт', value: '18 мая', icon: PlayCircle },
]
