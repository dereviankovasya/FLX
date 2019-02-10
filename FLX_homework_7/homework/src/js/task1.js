const login = prompt('login: ','');
if(login === '' || !login){
	alert('Canceled.');
}else if(login.length < 4) {
	alert('I don’t know any users having name length less than 4 symbols');
}else if(login === 'User' || login === 'Admin') {
	const password = prompt('password: ','');
if(password === '' || !password){
		alert('Canceled.');
	}else if(login === 'User' && password === 'UserPass' || login === 'Admin' && password === 'RootPass'){
		if (new Date().getHours() < 20){
			alert('Good day, dear ' + login + '!');
		}else{
		alert('Good evening, dear ' + login + '!');
	}
}else{
		alert('Wrong password');
	}
}else{
	alert('I don’t know you');
}
