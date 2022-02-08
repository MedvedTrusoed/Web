window.addEventListener('DOMContentLoaded', () => {

            //Tabs

            const tabContent = document.querySelectorAll('.tabcontent'),
                tabheaderItem = document.querySelectorAll('.tabheader__item'),
                tabheaderItemsParent = document.querySelector('.tabheader__items');

            function hideTabsContent() {

                tabContent.forEach(item => {
                    item.style.display = 'none';
                });

                tabheaderItem.forEach(item => {
                    item.classList.remove('tabheader__item_active');
                });
            };

            function showTabContent(i = 0) {
                tabContent[i].style.display = 'block';
                tabheaderItem[i].classList.add('tabheader__item_active');

            }

            hideTabsContent();
            showTabContent();

            tabheaderItemsParent.addEventListener('click', (event) => {

                const target = event.target;

                if (target && target.classList.contains('tabheader__item')) {
                    tabheaderItem.forEach((item, index) => {
                        if (target == item) {
                            hideTabsContent();
                            showTabContent(index);
                        }
                    });

                }
            });

            //Timer

            const deadline = '2022-02-15';

            function timeToEnd(endTime) {

                const t = Date.parse(endTime) - Date.parse(new Date()),
                    days = Math.floor((t / (1000 * 60 * 60 * 24))),
                    hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                    minutes = Math.floor((t / (1000 * 60) % 60)),
                    seconds = Math.floor((t / 1000) % 60);



                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };

            }

            function zeroTime(num) {

                if (num >= 0 && num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }

            function setTimer(selector, endTime) {

                const timer = document.querySelector(selector),
                    days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateTimer, 1000);

                updateTimer();

                function updateTimer() {

                    let time = timeToEnd(endTime);

                    days.innerHTML = zeroTime(time.days);
                    hours.innerHTML = zeroTime(time.hours);
                    minutes.innerHTML = zeroTime(time.minutes);
                    seconds.innerHTML = zeroTime(time.seconds);

                    if (time.total <= 0) {
                        clearInterval(timeInterval);
                    }
                }


            }


            setTimer('.timer', deadline);

            // modal
            const modalTimerId = setTimeout(modalOpen, 5000);

            const modalTrigger = document.querySelectorAll('[data-modal]'),
                modalWindow = document.querySelector('.modal'),
                modalClosebtn = document.querySelector('[modal-close]');

            function modalOpen() {
                modalWindow.classList.add('show');
                modalWindow.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                clearInterval(modalTimerId);
            }

            modalTrigger.forEach(item => {
                item.addEventListener('click', modalOpen)});

                function modalClose() {
                    modalWindow.classList.add('hide');
                    modalWindow.classList.remove('show');
                    document.body.style.overflow = '';
                }
                modalClosebtn.addEventListener('click', modalClose);

                modalWindow.addEventListener('click', (event) => {

                    if (event.target == modalWindow) {
                        modalClose();
                    }
                });

                document.addEventListener('keydown', (e) => {

                    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
                        modalClose();
                    }
                });

                function showModalOnScroll(){

                    if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
                        modalOpen();
                        window.removeEventListener('scroll',showModalOnScroll);
                    }
                }

             window.addEventListener('scroll',showModalOnScroll);

            });