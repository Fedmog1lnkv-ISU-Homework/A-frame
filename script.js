// Функция изменения свечения кристалла при наведении
document.querySelector('#crystal1').addEventListener('mouseenter', function () {
    this.querySelector('a-sphere').setAttribute('material', 'emissive-intensity', '1.2');
  });
  document.querySelector('#crystal1').addEventListener('mouseleave', function () {
    this.querySelector('a-sphere').setAttribute('material', 'emissive-intensity', '0.6');
  });
  
  document.querySelector('#crystal2').addEventListener('mouseenter', function () {
    this.querySelector('a-sphere').setAttribute('material', 'emissive-intensity', '1.2');
  });
  document.querySelector('#crystal2').addEventListener('mouseleave', function () {
    this.querySelector('a-sphere').setAttribute('material', 'emissive-intensity', '0.6');
  });
  