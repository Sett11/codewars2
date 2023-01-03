function createSecretHolder(secret) {
    return {
        getSecret: function(){
            return secret
        },
        setSecret: function(arg){
            secret = arg
        }
    }
}
const obj = createSecretHolder(5)
obj.setSecret(7)
console.log(obj.getSecret())