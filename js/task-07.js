document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControl = document.querySelector('#font-size-control');
    const textElem = document.querySelector('#text');

const setInitialFontSize =  () => {
        const fontSize = fontSizeControl.value + 'px';
        textElem.style.fontSize = fontSize;
    };
    
    fontSizeControl.addEventListener('input', function () {
        const fontSize = fontSizeControl.value + 'px';
        textElem.style.fontSize = fontSize;
    });
    setInitialFontSize();
});
