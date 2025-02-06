import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import corner from './assets/corner.png';
import doc from './assets/doc.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import money from './assets/money.png';
import spring from './assets/spring.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

const fisrtSection = [
  {
    img: house,
    title: 'Понять, когда инвестировать',
    subtitle: 'ИИ анализирует рынок и подсказывает лучшие моменты для сделок',
  },
  {
    img: money,
    title: 'Экономить на комиссиях',
    subtitle: 'Бесплатные сделки и снижение издержек увеличивают вашу прибыль',
  },
  {
    img: doc,
    title: 'Получать готовую аналитику',
    subtitle: 'ИИ готовит выжимку новостей и экономит ваше время',
  },
  {
    img: heart,
    title: 'Не пропускать важные сигналы',
    subtitle: 'У вас будет доступ к прогнозам и стратегиям экспертов',
  },
  {
    img: spring,
    title: 'Создать портфель под свои цели',
    subtitle: 'ИИ подбирает активы, соответствующие вашей стратегии',
  },
];

const secondSection = [
  {
    icon: 'glyph_robot_m',
    title: 'Ассистент по анализу рынка',
    subtitle: 'ИИ анализирует рынок и подсказывает, как действовать',
  },
  {
    icon: 'glyph_scales_m',
    title: 'Балансировка портфеля',
    subtitle: 'ИИ оценивает активы и даёт рекомендации по улучшению',
  },
  {
    icon: 'glyph_briefcase_m',
    title: 'Анализ изменения стоимости портфеля',
    subtitle: 'ИИ найдёт причины и объяснит, почему меняется доходность',
  },
  {
    icon: 'glyph_lightning_m',
    title: 'Новости рынка в одном месте',
    subtitle: 'Краткие сводки по трендам и событиям',
  },
  {
    icon: 'glyph_bubble-lines_m',
    title: 'Прогнозы по активу',
    subtitle: 'ИИ сформирует прогноз на основе мнений инвесторов и аналитиков',
  },
  {
    icon: 'glyph_piggy_m',
    title: 'Доход с остатков',
    subtitle: 'Зарабатывайте на свободных деньгах на брокерском счёте',
  },
  {
    icon: 'glyph_percent_m',
    title: 'Торговля без комиссии',
    subtitle: 'До 10 сделок с акциями, облигациями и фондами бесплатно',
  },
  {
    icon: 'glyph_bulb_m',
    title: 'Инвест-инсайты',
    subtitle: 'Получайте сигналы о действиях успешных инвесторов',
  },
  {
    icon: 'glyph_chart-column-three-asc-arrow_m',
    title: 'Эксклюзивная аналитика',
    subtitle: 'Доступ к закрытым обзорам рынков и эмитентов',
  },
  {
    icon: 'glyph_bubble-lines_m',
    title: 'Закрытое сообщество',
    subtitle: 'Общение с топовыми инвесторами, экспертами и аналитиками',
  },
];

const PRICE_PER_MONTH = 390;
const PRICE_PER_MONTH_ANNUAL = 280;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedBtn, setSelectedBtn] = useState(PRICE_PER_MONTH);

  const submit = () => {
    if (selectedBtn === PRICE_PER_MONTH) {
      window.gtag('event', 'activate_one_4205_var5');
    } else {
      window.gtag('event', 'activate_one_4205_year_var5');
    }

    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div style={{ color: '#fff', position: 'relative' }}>
          <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="xlarge" font="system" weight="semibold">
            PRO инвестиции
          </Typography.TitleResponsive>
          <div style={{ marginTop: '8px', maxWidth: '222px' }}>
            <Typography.Text view="primary-small">Подписка для умных инвестиций и выгодной торговли</Typography.Text>
          </div>

          <div className={appSt.tag}>
            <Typography.Text view="primary-small" weight="bold">
              от 280₽ в месяц
            </Typography.Text>
          </div>

          <img src={corner} width={170} height={117} className={appSt.cornerImg} />
        </div>
      </div>
      <div className={appSt.containerBox}>
        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          С подпиской вы сможете
        </Typography.TitleResponsive>

        <div>
          {fisrtSection.map(item => (
            <div className={appSt.row} key={item.title}>
              <img src={item.img} width={48} height={48} />

              <div>
                <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium">
                  {item.title}
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  {item.subtitle}
                </Typography.Text>
              </div>
            </div>
          ))}
        </div>

        <Typography.TitleResponsive style={{ margin: '8px 0' }} tag="h2" view="small" font="system" weight="semibold">
          Услуги в подписке
        </Typography.TitleResponsive>

        {secondSection.map(item => (
          <div className={appSt.box} key={item.title}>
            <CDNIcon name={item.icon} />
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {item.title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {item.subtitle}
              </Typography.Text>
            </div>
          </div>
        ))}

        <Gap size={128} />
      </div>

      <div className={appSt.bottomBtn}>
        <div className={appSt.switcher}>
          <button
            className={appSt.btnSwitch({ nonactive: selectedBtn !== PRICE_PER_MONTH })}
            onClick={() => setSelectedBtn(PRICE_PER_MONTH)}
          >
            <Typography.Text view="primary-small" weight="medium">
              {PRICE_PER_MONTH}₽ в месяц
            </Typography.Text>
          </button>
          <button
            className={appSt.btnSwitch({ nonactive: selectedBtn !== PRICE_PER_MONTH_ANNUAL })}
            onClick={() => setSelectedBtn(PRICE_PER_MONTH_ANNUAL)}
          >
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="medium">
              {PRICE_PER_MONTH_ANNUAL}₽ в месяц
            </Typography.Text>
            <Typography.Text view="secondary-small">Оплата за год</Typography.Text>
          </button>

          <div className={appSt.chip}>
            <Typography.Text view="secondary-small">-20%</Typography.Text>
          </div>
        </div>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить за {selectedBtn === PRICE_PER_MONTH ? `${selectedBtn} ₽ в месяц` : `${selectedBtn * 12} ₽ в год`}
        </ButtonMobile>
      </div>
    </>
  );
};
