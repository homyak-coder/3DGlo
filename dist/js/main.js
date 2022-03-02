/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 march 2022\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block')\n    const calcType = document.querySelector('.calc-type')\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const total = document.getElementById('total')\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\n        const calcSquareValue = calcSquare.value\n\n        let totalValue = 0\n        let calcCountValue = 1\n        let calcDayValue = 1\n\n        if (calcCount.value > 1 ) {\n            calcCountValue += +calcCount.value / 10\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5\n        }\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = Math.ceil(price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue)\n        } else {\n            totalValue = 0\n        }\n\n        total.textContent = totalValue\n    }\n\n    calcBlock.addEventListener('input', (e) => {\n        if (e.target === calcType || e.target === calcSquare\n        || e.target === calcCount || e.target === calcDay) {\n            countCalc()\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n\n  const menu = document.querySelector(\"menu\")\n\n  const handleMenu = (e) => {\n      if (e.target.closest('.menu, .close-btn, ul>li>a') || (menu.classList.contains('active-menu')) &&\n      !e.target.closest('.menu')) {\n        e.preventDefault()\n        menu.classList.toggle(\"active-menu\")\n      }\n  }\n  document.addEventListener('click', handleMenu)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modal = document.querySelector(\".popup\");\n  let counter = 0;\n  let idAnimationOpen;\n  let idAnimationClose;\n\n  const openAnimation = () => {\n    counter += 0.05;\n    idAnimationOpen = requestAnimationFrame(openAnimation);\n    if (counter < 1) {\n      modal.style.opacity = counter;\n    } else {\n      modal.style.opacity = 1;\n      cancelAnimationFrame(idAnimationOpen);\n    }\n  };\n\n  const closeAnimation = () => {\n    counter -= 0.05;\n    idAnimationClose = requestAnimationFrame(closeAnimation);\n\n    if (counter > 0) {\n      modal.style.opacity = counter;\n      console.log(counter);\n    } else {\n      modal.style.opacity = 0;\n      cancelAnimationFrame(idAnimationClose);\n    }\n  };\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      modal.style.display = \"block\";\n      if (screen.width > 768) {\n        openAnimation();\n      }\n    });\n  });\n\n  modal.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n      modal.style.display = \"none\"\n    }\n  })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const slides = document.querySelectorAll('.portfolio-item');\n    const portfolioDots = document.querySelector('.portfolio-dots');\n    const timeInterval = 2000;\n\n\n    let currentSlide = 0;\n    let interval;\n    let dots;\n\n\n    const dotsAppends = () => {\n        for (let i = 0; i < slides.length ; i++) {\n            const newDot = document.createElement('li');\n            newDot.classList.add(\"dot\");\n            if (i == 0) {\n                newDot.classList.add(\"dot-active\");\n            };\n\n            portfolioDots.append(newDot);\n        };\n\n        dots = document.querySelectorAll('.dot');\n    }\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass);\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass);\n    }\n\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    };\n\n    const startSlide = (timer = 1500) => {\n         interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return;\n        }\n\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(dots, currentSlide, 'dot-active');\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index;\n                }\n            })\n        }\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1;\n        }\n\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n\n    });\n\n        sliderBlock.addEventListener('mouseenter', (e) => {\n            if (e.target.matches('.dot, .portfolio-btn')) {\n                stopSlide();\n            };\n        }, true);\n\n        sliderBlock.addEventListener('mouseleave', (e) => {\n            if (e.target.matches('.dot, .portfolio-btn')) {\n                startSlide(timeInterval);\n            };\n        }, true);\n\n\n    dotsAppends();\n    startSlide(timeInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header')\n    const tabs = document.querySelectorAll('.service-header-tab')\n    const tabContent = document.querySelectorAll('.service-tab')\n\n    tabPanel.addEventListener('click', (e) => {\n\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n  let idInterval;\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let seconds = Math.floor(timeRemaining % 60);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    const hours = Math.floor(timeRemaining / 60 / 60);\n\n    return {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds,\n    };\n  };\n\n  const addZero = (value) => {\n    if (value < 10) {\n      value = \"0\" + value;\n    }\n    return value;\n  };\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    timerHours.textContent = addZero(getTime.hours);\n    timerMinutes.textContent = addZero(getTime.minutes);\n    timerSeconds.textContent = addZero(getTime.seconds);\n\n    if (getTime.timeRemaining > 0) {\n      setTimeout(updateClock, 1000);\n    } else if (getTime.timeRemaining < 0) {\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  };\n\n  updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n    const square = document.querySelector(\".calc-square\")\n    const count = document.querySelector(\".calc-count\")\n    const day = document.querySelector(\".calc-day\")\n    const calc = [square, count, day]\n\n\n    const formNames = document.querySelectorAll(\".form-name\")\n    const formPhones = document.querySelectorAll(\".form-phone\")\n    const formEmails = document.querySelectorAll(\".form-email\")\n    const topForm = document.querySelector(\".top-form\")\n    const topMess = document.querySelector(\".mess\")\n\n    formNames.forEach((formName) => {\n        const arrayNameForm = []\n        arrayNameForm.push(formName, topForm)\n        arrayNameForm.forEach((form) => {\n            form.addEventListener(\"input\", (e) => {\n                e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/g, \"\")\n            })\n        })\n    })\n\n    formEmails.forEach((formEmail) => {\n        formEmail.addEventListener(\"input\", (e) => {\n            e.target.value = e.target.value.replace(/[^a-zA-Z\\-\\.\\!\\~\\*\\'\\@\\_\\d]/g, \"\")\n        })\n    })\n    formPhones.forEach((formPhone) => {\n        formPhone.addEventListener(\"input\", (e) => {\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\")\n        })\n    })\n    topMess.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/g, \"\")\n    })\n    calc.forEach((calcItem) => {\n        calcItem.addEventListener(\"input\", (e) => {\n            e.target.value = e.target.value.replace(/\\D+/g, \"\")\n            }\n        )\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;