var BOT1 = new pBot('ваш токен'); /////////////////////////////////////// введи токен, сенпай!

function pBot(token) {
const request = require("request");



var vk = new ( require('vk-io') );
var fs = require('fs');

var admins = require('./admins.json');						// админы

var titlespam, textspam, pictures;

vk.setToken(token);
vk.longpoll.start();

vk.api.call('users.get')
.then((res) => {
console.log('[Авторизация] Успешно зашел на страницу. Ид: %s', res[0].id);
BOTS_ID.push(res[0].id);
})
console.log('coded by vk.com/mayorihvh');


vk.longpoll.on('message', (message) => { //тут идет проверка на сообщение, т.е. если присылается новое сообщение и идет проверка на команды
//тут мы можем сделать некую проверку на бан, думайте сами:)
let body = message.text.split(' ');
///////////////////////////////////////////////////////////////////////////////////////////// тут мы пишем top bot programme

//Что-бы начать писать новую команду, мы должны написать: if(body[0] == 'команда, на которую будет реагировать наш programme bot') { }.
if(body[0] == '/help') {
	//чтобы бот смог что-то ответить, то надо написать message.send(``); (можно юзать такие " ' ковычки, но мне по кайфу такие.
	message.send(`Здарова хуйло ща скажу чо я могу:\n
    нихуя я не могу чо доебался)
	`);
}

//чтобы сделать, например, добавление в друзья, надо для начала зайти в методы вк https://vk.com/dev/methods там найти https://vk.com/dev/friends.add. Там мы видим параметры. Если вы хотите чтобы бот просто добавил в друзья, то пишем только user_id:

if(body[0] == '/add') {
vk.api.call('friends.add', { user_id: body[1] }); //а теперь поясняю - vk.api.call('в них мы пишем "название метода". Он находится сверху (там так жирно выделено кароче).
// после { мы пишем параметры. Не обязательно указывать все, котоыре написаны в апи методах.
// body[1] - это первое слово, которое идет после команды(т.е. /daun da (da - body[1])
}

//пример с текстом:

if(body[0] == '/message') {
	let userid = body[1]; //let - это одноразовая переменная
	body.shift(); //бот отступает (игнорирует) body[0]
	body.shift(); //бот отступает (игнорирует) body[1]
	let pmessage = body.map(e=>e).join(" "); //бот захватывает в одноразовую переменную весь текст, который идет после body[012] (т.е. /message 1 говно жопа - во временной переменной будет "говно жопа"
	vk.api.messages.send({ user_id: userid, message: pmessage });
	return message.send("Отправил сообщение *id"+userid +" (ему).");
	
	//p.s. если мы сделаем let pmessage = body[2] то отпрваится одно слово, т.к. боди 2 это 3 строка, ну ты понял)
}

// как делать команду для админов? Мы создам файл в формате .json где будет такой текст:
// [
// ваш ид
// ]
// далее, мы должны ее импортировать, для эттого идем вверх и пишем var admins = require('./admins.json'); (сверху найдешь, я там закоментил).

if(body[0] == '/admin') {
	пишем: if(!~admins.indexOf(message.user)) return; //если его нет, то ничо не будет. Для сексуальности, можно: if(!~admins.indexOf(message.user)) return message.send("[ERROR] Вы не администратор");
	//message.user - это айди ипользователя, который обратился к команде
	message.send("ты админ");
}

//ща покажу пример с кейсами
if(body[0] == '/будущее') {
    switch(getRandomInt(1, 4)){ //мы делаем рандомный выбор из 4 кейсов
        case 1:
            message.reply("у тебя его нет");
        break;
        case 2:
            message.reply("мусорка")
        break;
        case 3:
             message.reply("детдом")
        break;
         case 4:
            message.reply("я ебу чтоли я железо ебанное))")
        break;
    }
}

//все, я вам познал базу с которой вы можете развиваться, удачи!

if(body[0] == '/test') {
return message.send(`работаю!`);
}
})
}
////////////////////////////////////////////////////////////////////////////////////////////// а тут конец


function getRandomInt(min, max){return Math.round(Math.random() * (max - min)) + min};
Array.prototype.random = function(){return this[Math.floor(this.length * Math.random())];}
Array.prototype.find = function (element) {return this.indexOf(element) == -1?false:true}
Array.prototype.return = (count) => slice(0, count)
