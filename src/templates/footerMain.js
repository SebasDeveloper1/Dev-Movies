import internationalityTexts from '../utils/internationalityTexts';

const { titleTexts } = internationalityTexts();

const footerMain = () => {
  const view = /* html */ `
    <section class="footer-main">
        <h3 class="footer__title">${titleTexts.titleFooter}</h3>
        <p class="footer__sentence">${titleTexts.subtitleFooter}</p>
    </section>
    `;
  return view;
};

export default footerMain;
