export class PriceTimeToggle{
  constructor(){
    this.btnYear = document.querySelector('.btn-year');
    this.btnMonth = document.querySelector('.btn-month');

    this.time = document.querySelectorAll('.offer-content__price .time');
    this.pricePrem = document.querySelector('.offer-content__price .price-prem');
    this.priceEnterprise = document.querySelector('.offer-content__price .price-enterprise');


    this.btnYear.addEventListener('click', () => {
      this.btnYear.classList.add('active-toggle');
      this.btnMonth.classList.remove('active-toggle');

      this.setArrHtmlContent(this.time, '/year');
      this.setHtmlContent(this.pricePrem, '319');
      this.setHtmlContent(this.priceEnterprise, '539');
    });

    this.btnMonth.addEventListener('click', () => {
      this.btnMonth.classList.add('active-toggle');
      this.btnYear.classList.remove('active-toggle');

      this.setArrHtmlContent(this.time, '/month');
      this.setHtmlContent(this.pricePrem, '29');
      this.setHtmlContent(this.priceEnterprise, '49');
    });
  }
  setArrHtmlContent(arr, content){
    arr.forEach(el => el.textContent = content)
  }
  setHtmlContent(el, content){
    el.textContent = content;
  }
}