class store_value_splice{
    store_value_splice(a,b){
        a.push(b);
        console.log("a: "+a);
        return a;
    }
}

module.exports = store_value_splice;
