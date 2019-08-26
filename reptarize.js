function reptarize() {
  'use strict';
  const ANIMATION_TIME = 5; // in seconds

  const reptarEl = createReptarElement();
  document.body.appendChild(reptarEl);

  // animate reptar element
  reptarEl.style.left = `${document.body.offsetWidth + 200}px`;
  setTimeout(() => {
    reptarEl.parentNode.removeChild(reptarEl);
  }, ANIMATION_TIME * 1000);

  function createReptarElement() {
    const el = document.createElement('img');
    el.src =
      'https://raw.githubusercontent.com/gjbianco/reptarize/master/reptar.jpg';
    el.style.position = 'absolute';
    el.style.left = '-500px';
    el.style['transition-duration'] = ANIMATION_TIME + 's';
    el.style['clip-path'] =
      'polygon(22% 68%, 92% 69%, 90% 62%, 93% 57%, 87% 57%, 81% 58%, 83% 63%, 83% 68%, 71% 67%, 68% 56%, 64% 54%, 57% 46%, 61% 42%, 59% 29%, 56% 26%, 51% 30%, 48% 31%, 46% 29%, 42% 26%, 34% 23%, 37% 18%, 41% 19%, 43% 17%, 46% 17%, 48% 19%, 50% 17%, 54% 18%, 59% 15%, 61% 10%, 57% 8%, 44% 5%, 37% 1%, 29% 4%, 20% 1%, 15% 5%, 15% 9%, 8% 9%, 5% 13%, 5% 17%, 8% 24%, 5% 27%, 6% 31%, 13% 34%, 12% 39%, 10% 43%, 2% 43%, 0% 46%, 6% 52%, 7% 57%, 20% 52%, 19% 57%)';
    return el;
  }
}

reptarize();
