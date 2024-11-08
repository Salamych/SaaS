export class ToggleMenu {
  constructor(){
    this.burger = document.querySelector('.header-menu .burger-wrap');
    this.menu = document.querySelector('.header-menu .menu-list');

    window.addEventListener('click', (e) => {
      let isNotContains = !e.target.classList.contains('menu-link') && !e.target.classList.contains('burger-wrap') && !e.target.classList.contains('burger') && !e.target.classList.contains('menu-list');

      if(e.target.classList.contains('burger-wrap') || e.target.classList.contains('burger')){
        this.toggle();
      }
      
      if(isNotContains || e.target.classList.contains('menu-link')){
        this.reset();
      }
    });

    window.addEventListener('resize', () => {this.reset();});
  }

  toggle(){
    if(this.menu.classList.contains('menu-list-active')){
      this.reset();
    }
    else {
      this.menu.classList.add('menu-list-active');
    }
  }

  reset(){
    this.menu.classList.remove('menu-list-active');
  }

}

