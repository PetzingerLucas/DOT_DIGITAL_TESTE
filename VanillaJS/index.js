const headerImage = document.querySelector('.Header_header_img');
const slideButtons = [...document.querySelector('.Header_slide_buttons').children];
const slides = ['../src/images/slide.png', 'https://wallpapercave.com/wp/wp9399492.jpg', 'https://cdn.wallpapersafari.com/29/92/9VWQiO.jpg'];
const nextArrow = document.querySelector('.AboutMore_next_btn');
const prevArrow = document.querySelector('.AboutMore_prev_btn');
const cards = document.querySelectorAll('.AboutMore_card');
const checkbox = [...document.querySelectorAll('.checkbox')];

const getChecked = (id) => {
  for (let i = 1; i <= checkbox.length; i += 1) {
    document.getElementById(i).checked = false;
  }
  document.getElementById(id).checked = true;
};

const acordionEvent = () => {
  checkbox.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (e.target.checked) {
        getChecked(e.target.id);
      }
    });
  });
};

const slideHeaderEvent = () => {
  slideButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      const checked = document.querySelector('.Header_checkedbtn');
      checked.className = 'Header_uncheckedbtn';
      checked.children[0].src = '../src/images/unchecked.png';
      e.target.parentNode.className = 'Header_checkedbtn';
      e.target.src = '../src/images/checked.png';
      headerImage.src = slides[index];
    });
  });
};

nextArrow.addEventListener('click', () => {
  const width = window.innerWidth <= 800 ? '2880' : '2160';
  prevArrow.disabled = false;
  cards.forEach((e) => {
    if (e.style.transform) {
      if (!e.style.transform.includes(width)) {
        e.style.transform = `translateX(${-e
          .style.transform.replace(/[^0-9]/g, '') - 360}px`;
      } else {
        nextArrow.disabled = true;
      }
    } else {
      e.style.transform = `translateX(${-360}px`;
    }
  });
});

prevArrow.addEventListener('click', () => {
  nextArrow.disabled = false;
  cards.forEach((e) => {
    if (!e.style.transform || e.style.transform.includes('(0px)')) {
      prevArrow.disabled = true;
    } else {
      e.style.transform = `translateX(${-e
        .style.transform.replace(/[^0-9]/g, '') + 360}px`;
    }
  });
});

window.onload = () => {
  slideHeaderEvent();
  acordionEvent();
};
