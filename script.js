  // door-animation
  AFRAME.registerComponent('door-animation', {
    schema: {
        opened: {type: 'boolean', default: false}
    },
    init: function () {
        const doorWrapper = this.el;

        doorWrapper.addEventListener('click', () => {
            if (!this.data.opened) {
                this.rotateDoor(180);
            } else {
                this.rotateDoor(90);
            }
            this.data.opened = !this.data.opened;
        });
    },
    rotateDoor: function (targetY) {
        const doorWrapper = this.el;
        const currentRotation = doorWrapper.getAttribute('rotation');
        doorWrapper.setAttribute('animation', {
            property: 'rotation',
            to: `${currentRotation.x} ${targetY} ${currentRotation.z}`,
            dur: 500
        });
    }
});