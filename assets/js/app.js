(function () {
	'use strict';
	var calculator = {
		model: {
			calc: function (fn) {
				return new Function('return ' + fn)();
			},
			isAcceptedSym: function (val) {
				var symbols = ['+', '-', '*', '/'],
					isSym = false;
				if (symbols.indexOf(val) !== -1) {
					isSym = true;
				}
				return isSym;
			},
			handleOperation: function (evt) {
				var v = calculator.view.screen,
					c = calculator.model.isAcceptedSym,
					arr;

				// Make sure calc* display has a value before symbol is displayed

				if (v.value.length > 0) {
					v.value += ('' + evt);
				}

				// Make sure current symbol doesn't repeat itself (doesn't appear twice simultaenously)

				if (v.value.split('')[v.value.length - 1] === v.value.split('')[v.value.length - 2]) {
					v.value = v.value.substr(0, v.value.length - 1);
				}

				// if a symbol comes after current symbol, it should replace current symbol

				if ( c(v.value.split('')[v.value.length - 2]) ) {
					arr = v.value.split('');
					arr.splice( (arr.length - 2), 1);
					v.value = '';
					v.value += ('' + arr.join(''));
				}

			}
		},

		view: {
			screen: document.querySelector('.calc-display'),
			keys: document.querySelector('.buttons')
		},

		controller: {
			updateScreen: function () {
				var emptyStr = '', disp = calculator.view.screen, tempArr;
				calculator.view.keys.addEventListener('click', function (e) {
					switch(e.target.dataset.value) {
						case '0':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '1':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '2':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '3':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '4':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '5':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '6':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '7':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '8':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case '9':
							disp.value += (emptyStr + e.target.dataset.value);
							break;
						case 'clr-one':
							disp.value = disp.value.substr(0, disp.value.length - 1);
							break;
						case 'clr-all':
							disp.value = '';
							break;
						case '/':
							calculator.model.handleOperation(e.target.dataset.value);
							break;
						case '*':
							calculator.model.handleOperation(e.target.dataset.value);
							break;
						case '-':
							calculator.model.handleOperation(e.target.dataset.value);
							break;
						case '+':
							calculator.model.handleOperation(e.target.dataset.value);
							break;
						case '=':
							try {
								disp.value = calculator.model.calc(disp.value);
							} catch (ex) {
								disp.value = 'Error, not a valid expression';
							}
							break;
					}
				}, false);
			}
		},

		init: function () {
			this.controller.updateScreen();
		}
	};
	calculator.init();
} ());
