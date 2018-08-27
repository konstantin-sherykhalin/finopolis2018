import st from './storage';

var domain = 'https://yellowforceapi.now.sh/api/v1';

function API(method,data = {}) {
	return new Promise(async (resolve,reject) => {
		if(method.substr(-1) == '/') method = method.substr(0,-1);
		if(method.substr(0,1) != '/') method = '/'+method;
		if(methods.indexOf(method) != -1) {
			try {
				console.log("API: "+domain+method,data);
				fetch(domain+method,{
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'Accept':		'application/json',
						'Content-Type':	'application/json',
					},
					body: JSON.stringify(data),
				})
					.then(res  => {
						if(res.status == 200)	return res.json();
						else					return {error:{type:'internal_error',status:res.status,res}};
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
	'/user/registration',
	'/user/login',
	'/user/get',
	'/stage/get',
	'/step/get',
	'/value_proposal/send',
	'/value_proposal/update',
	'/value_proposal/get',
	'/expert/registration',
	'/expert/login',
	'/expert/get',
	'/expert/project_list',
];

export default API;
