// $(function () {

// });

document.addEventListener('DOMContentLoaded', () => {
	// "use strict";
	//функция=код функции+доступные данные!
	// function click() {
	// 	let c = 0;
	// 	return () => {
	// 		c++;
	// 		console.log(c);
	// 	};
	// }
	// let d = click();
	// d();
	// d();
	//start show_menu_to_click_span////////////////////////////////////
	(() => {
		let button = document.getElementById('click_show_menu');
		button.addEventListener('mouseover', () => {
			let show = document.getElementsByClassName('menu');
			for (let i = 0; i < show.length; i++) {
				show[i].classList.toggle('active');
				show[i].addEventListener('click', () => {
					button.classList.toggle('active');
					show[i].classList.toggle('active');
				})
				// if (event.target === show[i]) {
				// 	alert("dcsd");
				// 	// button.classList.remove('active');
				// 	// show[i].classList.remove('active');
				// }
				break;
			}

			button.classList.toggle('active');
			// let Abutton = button.getElementsByClassName('active');
			// for (let i = 0; i < Abutton.length; i++) {

			// 	Abutton[i].addEventListener('click', () => {
			// 		let show = document.getElementsByClassName('menu');
			// 		// button.classList.toggle('active');
			// 		// for (let i = 0; i < Abutton.length; i++) {
			// 		Abutton[i].classList.remove('active');
			// 		// 	break;
			// 		// }
			// 		for (let i = 0; i < show.length; i++) {
			// 			show[i].classList.remove('active');
			// 			break;
			// 		}
			// 	});
			// }
		});


	})();
	//end show_menu_to_click_span/////////////////////////////////////
	//start pop_up_teleport/////////////////////////////////////////////////////////////////////
	(() => {
		const layout = document.getElementById('pop_up_teleport'),
			div = layout.getElementsByTagName('div'),
			button = document.getElementById('button_pop_up_teleport');
		button.addEventListener('click', () => {
			layout.style.opacity = '1';
			layout.style.visibility = 'visible';
			for (let i = 0; i < div.length; i++) {
				div[i].style.opacity = '1';
				break;
			}
			setTimeout(() => {
				layout.addEventListener('click', () => {
					layout.style.opacity = '0';
					layout.style.visibility = 'hidden';
					for (let i = 0; i < div.length; i++) {
						div[i].style.opacity = '0';
						break;
					}
				});
			}, 505);
		});
	})();
	//end pop_up_teleport///////////////////////////////////////////////////////////////////////
	//start pop_up_shift/////////////////////////////////////////////////////////////////////
	(() => {
		const layout = document.getElementById('pop_up_shift'),
			div = layout.getElementsByTagName('div'),
			button = document.getElementById('button_pop_up_shift');
		button.addEventListener('click', () => {
			layout.style.opacity = '1';
			layout.style.visibility = 'visible';
			for (let i = 0; i < div.length; i++) {
				div[i].style.right = '1vw';
				break;
			}
			setTimeout(() => {
				layout.addEventListener('click', () => {
					layout.style.opacity = '0';
					layout.style.visibility = 'hidden';
					for (let i = 0; i < div.length; i++) {
						div[i].style.right = '-21vw';
						break;
					}
				});
			}, 505);
		});
	})();
	//end pop_up_shift///////////////////////////////////////////////////////////////////////
	//tabs//////////////////////////////////////////////////////////////////////////////////////
	(() => {
		let tab = document.getElementById('tab'),
			links = tab.querySelectorAll('.tab_links li'),
			tabs = tab.querySelectorAll('.tab_content li');
		//start active tab
		let index = 0;
		tabs[index].classList.add('active');
		links[index].classList.add('active');

		function add_active(index) {
			tabs[index].classList.add('active');
			links[index].classList.add('active');
		}

		function remove_active() {
			for (let i = 0; i < links.length; i++) {
				links[i].classList.remove('active');
			}
			for (let i = 0; i < tabs.length; i++) {
				tabs[i].classList.remove('active');
			}
		}
		//if click start events and search index in array
		for (let i = 0; i < links.length; i++) {
			let link = links[i];
			link.addEventListener(
				'click',
				() => {
					remove_active();
					add_active(i);
				},
				false
			);
		}
	})();
	//end tabs//////////////////////////////////////////////////////////////////////////////////////
	//start show copyright year in footer/////////////////////////////////////////////////////////////////////
	(() => {
		let date = new Date(),
			copyright_year = date.getUTCFullYear(),
			where_show = document.getElementById('copyright');
		where_show.innerHTML = copyright_year + ' ' + '©';
		console.log(date);
	})();
	//end show copyright//////////////////////////////////////////////////////////////////////////////////////
});