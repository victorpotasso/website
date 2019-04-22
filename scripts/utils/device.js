export const isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
export const android = navigator.userAgent.match(/Android/i);
export const blackBerry = navigator.userAgent.match(/BlackBerry/i);
export const iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
export const opera = navigator.userAgent.match(/Opera Mini/i);
export const ieMobile = navigator.userAgent.match(/IEMobile/i);
export const iPhone = !!navigator.userAgent.match(/iPhone/i);
export const iPad = !!navigator.userAgent.match(/iPad/i);
export const isMobile = (android || blackBerry || iOS || opera || ieMobile);
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
export const isIE = (navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
export const isEdge = !!navigator.userAgent.match(/Edge/i);
export const isChrome = !!window.chrome;
export const isChromeIOS = !!navigator.userAgent.match(/CriOS/i);
export const orientation = () => window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';

export const viewport = () => {
  if (isChromeIOS) {
    return ({ width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) });
  } else {
    return ({ width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), height: window.innerHeight });
  }
}

export const infos = (target) => {
  if (target.dataset) {
    target.dataset.isMobile = !!isMobile;
    target.dataset.isTouch = !!isTouch;
    target.dataset.isAndroid = !!android;
    target.dataset.isBlackBerry = !!blackBerry;
    target.dataset.isIos = !!iOS;
    target.dataset.isOpera = !!opera;
    target.dataset.isIphone = !!iPhone;
    target.dataset.isIpad = !!iPad;
    target.dataset.isMobile = !!isMobile;
    target.dataset.isSafari = !!isSafari;
    target.dataset.isFirefox = !!isFirefox;
    target.dataset.isIe = !!isIE;
    target.dataset.isEdge = !!isEdge;
    target.dataset.isChrome = !!isChrome;
    target.dataset.isChromeIOS = !!isChromeIOS;
  } else {
    target.device = {};
    target.device.isMobile = !!isMobile;
    target.device.isTouch = !!isTouch;
    target.device.isAndroid = !!android;
    target.device.isBlackBerry = !!blackBerry;
    target.device.isIos = !!iOS;
    target.device.isOpera = !!opera;
    target.device.isIphone = !!iPhone;
    target.device.isIpad = !!iPad;
    target.device.isMobile = !!isMobile;
    target.device.isSafari = !!isSafari;
    target.device.isFirefox = !!isFirefox;
    target.device.isIe = !!isIE;
    target.device.isEdge = !!isEdge;
    target.device.isChrome = !!isChrome;
    target.device.isChromeIOS = !!isChromeIOS;
    target.device['xs'] = breakpoint('xs');
    target.device['gt-xs'] = breakpoint('gt-xs');
    target.device['sm'] = breakpoint('sm');
    target.device['gt-sm'] = breakpoint('gt-sm');
    target.device['md'] = breakpoint('md');
    target.device['gt-md'] = breakpoint('gt-md');
    target.device['lg'] = breakpoint('lg');
    target.device['gt-lg'] = breakpoint('gt-lg');
    target.device['smartphone-portrait'] = breakpointBy('smartphone-portrait');
    target.device['smartphone-landscape'] = breakpointBy('smartphone-landscape');
    target.device['tablet-portrait'] = breakpointBy('tablet-portrait');
    target.device['tablet-landscape'] = breakpointBy('tablet-landscape');
    target.device['desktop'] = breakpointBy('desktop');
  }
}

export const breakpoint = (value) => {
  if (value == 'xs') return window.matchMedia('only screen and (max-width: 599px)').matches;
  if (value == 'gt-xs') return window.matchMedia('only screen and (min-width: 600px)').matches;
  if (value == 'sm') return window.matchMedia('only screen and (min-width: 600px) and (max-width: 959px)').matches;
  if (value == 'gt-sm') return window.matchMedia('only screen and (min-width: 960px)').matches;
  if (value == 'md') return window.matchMedia('only screen and (min-width: 960px) and (max-width: 1279px)').matches;
  if (value == 'gt-md') return window.matchMedia('only screen and (min-width: 1280px)').matches;
  if (value == 'lg') return window.matchMedia('only screen and (min-width: 1280px) and (max-width: 1919px)').matches;
  if (value == 'gt-lg') return window.matchMedia('only screen and (min-width: 1920px)').matches;
}

export const breakpointBy = (value) => {
  if (value == 'smartphone-portrait') return breakpoint('xs') && orientation() == 'portrait';
  if (value == 'smartphone-landscape') return breakpoint('sm') && orientation() == 'landscape';
  if (value == 'tablet-portrait') return breakpoint('sm') && orientation() == 'portrait';
  if (value == 'tablet-landscape') return breakpoint('md') && orientation() == 'landscape';
  if (value == 'desktop') return breakpoint('gt-md');
}