import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      appTitle: 'Приложение Единое Окно',
      mainPage: 'Главная страница',
      mainSubtitle: 'Добро пожаловать в панель управления. Здесь вы можете просматривать ключевые показатели и актуальные курсы банков.',
      creditsDeposits: 'Кредиты и Депозиты',
      clientTypes: 'Распределение клиентов по типам',
      regions: 'Количество клиентов по регионам',
      total: 'Итого',
      buy: 'Покупка',
      sell: 'Продажа',
      time: '18:08',
      sidebar: {
        home: 'Главная',
        taxes: 'Налоги',
        portal: 'Платежный портал',
        fund: 'Социальный фонд',
      },
      cabinet: 'Личный кабинет',
      notifications: 'Уведомления: пока нет новых уведомлений.',
      language: 'Смена языка',
      theme: 'Смена темы',
      banks: {
        KICB: 'KICB',
        Optima: 'Optima Bank',
        Demir: 'Demir Bank',
        Bakai: 'Bakai Bank',
        Doscredo: 'DoscredoBank',
        Asia: 'Bank of Asia',
      },
      regionsList: {
        chui: 'Чуй', osh: 'Ош', jalal: 'Жалал-Абад', batken: 'Баткен', naryn: 'Нарын', talas: 'Талас', issyk: 'Иссык-Куль'
      }
    }
  },
  en: {
    translation: {
      appTitle: 'Single Window Application',
      mainPage: 'Main Page',
      mainSubtitle: 'Welcome to the dashboard. Here you can view key metrics and current bank rates.',
      creditsDeposits: 'Credits and Deposits',
      clientTypes: 'Client Distribution by Type',
      regions: 'Number of Clients by Region',
      total: 'Total',
      buy: 'Buy',
      sell: 'Sell',
      time: '18:08',
      sidebar: {
        home: 'Home',
        taxes: 'Taxes',
        portal: 'Payment Portal',
        fund: 'Social Fund',
      },
      cabinet: 'Personal Cabinet',
      notifications: 'Notifications: no new notifications.',
      language: 'Change language',
      theme: 'Change theme',
      banks: {
        KICB: 'KICB',
        Optima: 'Optima Bank',
        Demir: 'Demir Bank',
        Bakai: 'Bakai Bank',
        Doscredo: 'DoscredoBank',
        Asia: 'Bank of Asia',
      },
      regionsList: {
        chui: 'Chui', osh: 'Osh', jalal: 'Jalal-Abad', batken: 'Batken', naryn: 'Naryn', talas: 'Talas', issyk: 'Issyk-Kul'
      }
    }
  },
  ky: {
    translation: {
      appTitle: 'Бирдиктүү Терезе Тиркемеси',
      mainPage: 'Башкы бет',
      mainSubtitle: 'Башкаруу панелине кош келиңиз. Бул жерден негизги көрсөткүчтөрдү жана банктардын учурдагы курстарын көрө аласыз.',
      creditsDeposits: 'Кредиттер жана Депозиттер',
      clientTypes: 'Клиенттерди түрү боюнча бөлүштүрүү',
      regions: 'Аймактар боюнча кардарлардын саны',
      total: 'Жалпы',
      buy: 'Сатып алуу',
      sell: 'Сатуу',
      time: '18:08',
      sidebar: {
        home: 'Башкы бет',
        taxes: 'Салыктар',
        portal: 'Төлөм порталы',
        fund: 'Социалдык фонд',
      },
      cabinet: 'Жеке кабинет',
      notifications: 'Кабарламалар: жаңы кабарламалар жок.',
      language: 'Тилди өзгөртүү',
      theme: 'Теманы өзгөртүү',
      banks: {
        KICB: 'KICB',
        Optima: 'Optima Bank',
        Demir: 'Demir Bank',
        Bakai: 'Bakai Bank',
        Doscredo: 'DoscredoBank',
        Asia: 'Bank of Asia',
      },
      regionsList: {
        chui: 'Чүй', osh: 'Ош', jalal: 'Жалал-Абад', batken: 'Баткен', naryn: 'Нарын', talas: 'Талас', issyk: 'Ысык-Көл'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 