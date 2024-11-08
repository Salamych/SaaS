export class ActiveOfferToggle{
  constructor(){
    this.item = document.querySelector('.offer-content__price');
   let items = document.querySelectorAll('.offer-content__price-item');

   this.item.addEventListener('click', function(e) {

    items.forEach(el => el.classList.remove('price-toggle-active'));

      if(e.target.classList.contains('offer-content__price-item')){
        e.target.classList.add('price-toggle-active');
      }
    });

  }
}