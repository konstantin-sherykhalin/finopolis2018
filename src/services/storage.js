import f from '../functions';

// Хранилище местных данных
var st = new function() {

	// Здесь определена исходная структура хранилища
	var st;
	if(localStorage.comtrud === undefined)
		localStorage.comtrud = JSON.stringify({});

	// Получение хранилища
	this.take = function() {
		st = JSON.parse(localStorage.comtrud);
	}
	// Сохранение хранилища
	this.save = function() {
		localStorage.comtrud = JSON.stringify(st);
		update(this);
	}

	// Есть ли данный элемент в хранилище
	this.isset = function(item) {
		return (item in st);
	}
	// Достать элемент из хранилища
	this.get = function(item) {
		if(item == '*') return st;
		return st[item];
	}
	// Поменять элемент в хранилище
	this.set = function(item,value) {
		st[item] = value;
		this.save();
		return this;
	}
	// Расширить элемент в хранилище
	this.merge = function(item,value) {
		if(this.isset(item)) {
			Object.assign(st[item],value);
			this.save();
		} else {
			this.set(item,value);
		}
		return this;
	}
	// Убрать элемент из хранилища
	this.remove = function(item) {
		delete st[item];
		this.save();
		return this;
	}

	// Изъятие объекта из списка сохраненных в хранилище
	this.get_object = function(section,id,lifetime = 30*24*60*60*1000) {
		if(['employer','work','application'].indexOf(section)<0) {
			console.error('Нельзя сохранять в раздел '+section);
			return;
		}
		// Ищем сохраненный
		for(let i=0; i<st[section].saved.length; i++) if(st[section].saved[i].id == id) {
			// Если срок годности не вышел то выдаем, иначе удаляем
			if(new Date().getTime()-st[section].saved[i]._st_saved_timestamp < lifetime) {
				return st[section].saved[i];
			} else {
				st[section].saved.splice(i,1);
				break;
			}
		}
		return false;
	}
	// Сохранение объекта в список сохраненных в хранилище
	this.save_object = function(section,obj) {
		if(['performer','work'].indexOf(section)<0) {
			console.error('Нельзя сохранять в раздел '+section);
			return;
		}
		// Ищем, не сохранен ли он уже
		var found = 0;
		for(let i=0; i<st[section].saved.length; i++) if(st[section].saved[i].id == obj.id) {
			found = i;
			break;
		}
		// Изменяем существующий либо сохраняем новый
		if(found)	st[section].saved[found] = Object.assign(obj,{_st_saved_timestamp:f.time()});
		else		st[section].saved.push    (Object.assign(obj,{_st_saved_timestamp:f.time()}));
	}

	// Устанавливаем краткие ссылки на свойста о пользователе
	var update = function(_this) {
		_this.id = _this.user_id = _this.get('user_id');
		_this.we = _this.get('user');
	}

	this.take();
	update(this);
}

export default st;
