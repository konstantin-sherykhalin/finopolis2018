import {config,constants,errors} from '../config';

var error = new function() {
	this.list = [];

	this.throw = function(title,text) {
		let existing = this.list.filter(e => e.title==title&&e.text==text);
		if(!existing.length) {
			this.list.push({title:title,text:text})-1;
			setTimeout(_ => this.list.shift(),10000);
		}
		return true;
	}

	this.process = function(error) {
		if(error.type == 'http') {
			return this.throw('Сервер не доступен','Проверьте соединение с интернетом');
		}
		// if(error instanceof PositionError) {
		// 	return this.throw('Ошибка','Ваше местоположение не доступно');
		// }
		if(error.type in errors) {
			if(error.section == 'general') {
				if(['internal_error','need_to_login'].indexOf(error.type)>=0) {
					return this.throw('Ошибка',error.message);
				} else {
					return this.throw('Ошибка','Сервер не доступен в данный момент');
				}
			} else {
				return this.throw('Ошибка',error.message);
			}
		}
		return false;
	}
}

export default error;
