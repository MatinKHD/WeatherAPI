// we use this function to change the shape of the collapse button
// in navbar component (add and remove classes with each click and for that we
// use addEventListener method)
function collapseAnimation() {
  const collapseBtn = document.querySelector('.collapse-btn');
  const burgerOne = document.querySelector('.burger-one');
  const burgerTwo = document.querySelector('.burger-two');
  const burgerThree = document.querySelector('.burger-three');
  let collapseOpen = false;
  collapseBtn.addEventListener('click', () => {
    if (!collapseOpen) {
      collapseBtn.classList.add('open');
      burgerOne.classList.add('burger-open', 'burger-open-one');
      burgerTwo.classList.add('burger-open', 'burger-open-two');
      burgerThree.classList.add('burger-open', 'burger-open-three');
      collapseOpen = true;
    } else {
      collapseBtn.classList.remove('open');

      collapseBtn.classList.remove('open');
      burgerOne.classList.remove('burger-open', 'burger-open-one');
      burgerTwo.classList.remove('burger-open', 'burger-open-two');
      burgerThree.classList.remove('burger-open', 'burger-open-three');
      collapseOpen = false;
    }
  });
}
