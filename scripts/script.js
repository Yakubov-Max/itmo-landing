// найдем слайдер на странице и кнопки внутри него
const sliderPublications = document.querySelector('#slider-publications');
const buttonPbctLeft = sliderPublications.querySelector('#left-arrow');
const buttonPbctRight = sliderPublications.querySelector('#right-arrow');

document.addEventListener('DOMContentLoaded', function() {
  // инициализация слайдера
  const slider = new SliderPublications(sliderPublications, {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
  buttonPbctLeft.onclick = function() {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
  buttonPbctRight.onclick = function() {
    // перейдём к следующему слайду
    slider.next();
  }
});

SliderPublications.prototype._setActiveClass = function() {
  var i;
  var length;
  var $item;
  var index;
  for (i = 0, length = this._$itemList.length; i < length; i++) {
    $item = this._$itemList[i];
    index = parseInt($item.dataset.index);
    if (this._currentIndex === index) {
      $item.classList.add(ITEM_CLASS_ACTIVE);
    } else {
      $item.classList.remove(ITEM_CLASS_ACTIVE);
    }
  }
}