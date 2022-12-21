const searchNames = logins => logins.filter(el => el[0][el[0].length - 1] === '_')

console.log(searchNames([[ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ]]))