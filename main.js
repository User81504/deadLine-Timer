'use strict'

window.addEventListener('DOMContentLoaded', () => {

    const deadLine = '2024-06-07';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // Date.parse вычисляет количество милисекунд до endtime, то есть в нашем случае endtime. И это значение мы отнимаем от реального времени пользователя. Итак, мы получим разницу в переменную t, в виде милсекунд.
              days = Math.floor(t / (1000 * 60 * 60 * 24)), // Math.floor - команда округления
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), // Берем деление от остатка, потому как нам не нужно получать в таймере число часов больше чем 24. Поэтому, если часов 26, то в остатке у нас будет 2 и это верный подход.
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return { // возвращаем функции наружу в виде объекта, чтобы мы могли их использовать
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector), // selector имеется ввиду в HTML, то есть мы вызовем эту функцию конкретно джля нашего таймера
              days = timer.querySelector('#days'), // Тут и ниже мы ищем селлекторы из html и присваиваем результат поиска к соответствующим по имени переменным
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime); // тут у нас хранится объект

            days.innerHTML = getZero(t.days); // Переменные из getTimeRemaining, которые в себе хранят результаты подсчетов, то есть разницу, мы передаем в новую функцию в виде объекта, чтобы тут их занести внуть html, используя найденные селекторы из функции-родителя.
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
              
    }

    setClock('.timer', deadLine);

});




















// window.addEventListener('DOMContentLoaded', () => {

//     // Timer 
//     const deadLine = '2023-07-03';

//     function getTiomeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()), // Date.parse определяет время в миллисикундах и чем-то удобен... В итоге, тут мы получаем разницу между заданным временем endtime и настоящей датой.
//               days = Math.floor(t / (1000 * 60 * 60 * 24)), // Нам необходимо посчитать количество дней которые будут отображаться в нашем таймере. Мы берем количество милисекунд и разделить на количество милисекунд которые находятся в одном дне. Команда Math.floor() поможет нам округлить получаенные и используемые числа. Итого, мы 1000 милисекунд умножаем на 60, чтобы получить количество секунд в минуте, далее получаем минуты в часе и умножаем еще на 24 часа. Получаем количество милисекунд в сутках. Общее количество милисекунд из разницы мы разделили на милисекунды в сутках. Теперь мы получили количество дней.
//               hours = Math.floor((t / (1000 * 60 * 60) % 24)), // Получаем общее количество часов. Полученные часы мы делим на 24 (количество часов в сутках) через оператор остатка от деления. Зачем? Потому что нам не нужны все часы, нам нужен остаток часов, который мы будем использовать в таймере после использования дней. То есть не может быть следующего: 1 день и 26 часов. Нам нужно 1 день и 2 часа, а чтьобы это получить мы и используем остаток от деления. Нам нужен лишь хвостик.
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return { // Используем оператор return, но мы возвращаем обект
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds,
//         };
//     }

//     function getZero(num) { // Написал функцию которая добавляет нолик перед числом в таймере, при условии если число больше или ровно 0 и число меньше 10, то есть первого двузначного числа.
//         if (num >= 0 && num <10) {
//             return `0${num}`;
//         } else {
//             return num; 
//         }
//     }

//     function setClock(selector, endtime) { // Пишем функцию которая будет устанавливать сам таймер прямо на страничку
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000); // Обновляем наш интьервал каждую секунду (1000 милисек.)

//         updateClock();

//         function updateClock() {
//             const t = getTiomeRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) { // Если время равно 0 или ушло ниже, тогда мы больше не обновляем наш интервал
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadLine);

// }) 