import FontFaceObserver from 'fontfaceobserver';

const windowHasProp = (prop) => {
  return Object.prototype.hasOwnProperty.call(window, prop);
}
const setFontsTrue = () => {
  document.documentElement.setAttribute(`data-fonts-1`, `true`);
  document.documentElement.setAttribute(`data-fonts-2`, `true`);
}

const loadFonts = () => {
  if (windowHasProp(`Promise`) && windowHasProp(`sessionStorage`)) {
    if (sessionStorage.getItem(`fontsLoaded`) === `true`) {
      setFontsTrue();
    } else {
      var fontA = new FontFaceObserver(`Calibre Light`, {
        weight: 300,
      });
      Promise.all([fontA.load()]).then(function() {
        document.documentElement.setAttribute(`data-fonts-1`, `true`);
        var fontB = new FontFaceObserver(`Calibre Regular`, {
          weight: 400,
        });
        var fontC = new FontFaceObserver(`Calibre Medium`, {
          weight: 500,
        });
        Promise.all([ fontB.load(), fontC.load() ]).then(function() {
          document.documentElement.setAttribute(`data-fonts-2`, `true`);
          sessionStorage.setItem(`fontsLoaded`, `true`);
        });
      });
    }
  } else {
    setFontsTrue();
  }
}

export default loadFonts;