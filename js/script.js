
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider__item');
const tracker = document.querySelector('.tracker');
let trackerCheck = true;;
let sliderCount=0;
sliderLine.addEventListener('click', function(){
	tracker.children[sliderCount].classList.remove('active');
	if (sliderCount<sliderItems.length-1){
		sliderCount++;
	}
	else{
		sliderCount=0;
	}
	tracker.children[sliderCount].classList.add('active');
	slider.style.transform = `translate(-${sliderCount * sliderItems[0].clientWidth}px)`;
	document.querySelector('.click').classList.add('disappear');
	console.log(document.querySelector('.click'))
});


function sliderInit(){
	let sliderWidth = 0;
	sliderItems.forEach(function(i){
		i.style.minWidth = sliderLine.clientWidth + 'px';
		sliderWidth += i.clientWidth;
	});
	slider.style.width = sliderWidth + 'px';

	if (trackerCheck){
		trackerCheck = false;
		for (let i = 0; i < sliderItems.length; i++){
			tracker.insertAdjacentHTML(
				'beforeend',
				`<li></li>`);
			//console.log(i)
		}
		tracker.children[0].classList.add('active');
	}

	slider.style.transform = `translate(-${sliderCount * sliderItems[0].clientWidth}px)`
}

function productsInit(){
	const storeItems = document.querySelectorAll('.store__item');
	storeItems.forEach(i=>{
		i.style.width = document.querySelector('.container').clientWidth*0.98 + 'px';
	})
}


sliderInit();
productsInit();
window.addEventListener('resize', function(){
	sliderInit();
	productsInit();
});

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const html = document.querySelector('html');
burger.addEventListener('click', toggleBurger);


function toggleBurger(){
	burger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
	html.classList.toggle('lock');
}
function closeBurger(){
	burger.classList.remove('active');
	headerMenu.classList.remove('active');
	body.classList.remove('lock');
	html.classList.remove('lock');
}
hLinks = document.querySelectorAll('.header__link');
hLinks.forEach(item => item.addEventListener('click',closeBurger));


function smoothScrollTo(element){
	var element = document.querySelector(element);
	var headerOffset = 0;
	var elementPosition = element.getBoundingClientRect().top;
	var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		left:0,
		behavior: "smooth",
		block:'start'
	});
}


