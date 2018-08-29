import global_error	from './global_error';
import st			from './storage';

var domain = 'https://yellowforceapi.now.sh/api/v1';

function API(method,data = {}) {
	return new Promise(async (resolve,reject) => {
		if(method.substr(-1) === '/') method = method.substr(0,-1);
		if(method.substr(0,1) !== '/') method = '/'+method;
		if(methods.indexOf(method) != -1) {
			try {
				// console.log("API: "+domain+method,data);
				fetch(domain+method,{
					method: 'POST',
					crossDomain: true,
					headers: {
						'Accept':		'application/json',
						'Content-Type':	'application/json',
					},
					body: JSON.stringify(data),
				})
					.then(res  => {
						if(res.status == 200)	return res.json();
						else					return global_error.process({error:{type:'http',status:res.status,res}});
					})
					.then(data => resolve(data))
					.catch(err => global_error.process(err))
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
