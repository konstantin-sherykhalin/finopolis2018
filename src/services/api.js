import st from './storage';

var domain = 'http://95.213.200.174/api/v2';

function API(method,data = {}) {
	return new Promise(async (resolve,reject) => {
		if(method.substr(-1) == '/') method = method.substr(0,-1);
		if(method.substr(0,1) != '/') method = '/'+method;
		if(methods.indexOf(method) != -1) {
			try {
				console.log("API: "+domain+method,data);
				fetch(domain+method,{
					method: 'POST',
					headers: {
						'Accept':		'application/json',
						'Content-Type':	'application/json',
					},
					body: JSON.stringify(data),
				})
					.then(res  => {
						if(res.status == 200)	return res.json();
						else					return {error:errors.internal_error};
					})
					.then(data => resolve(data))
					.catch(err => console.error(err))
				;
			} catch (e) {
				console.error(e);
			}
		} else {
			console.log("Неизвестный метод АПИ: ",method);
		}
	});
}

var methods = [
];

export default API;
