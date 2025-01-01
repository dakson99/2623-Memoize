const user = 'Steven Thomas Williams';
const username = user.toLowerCase().split(' ').map(name => name[0]
).join('');

console.log(username);