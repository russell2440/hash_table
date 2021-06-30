class hash_table{
  constructor(size){
    this.data = new Array(size);
  }
  hash_fn(key){

    let hash = 0;

    console.log('hash_fn at',hash);
    return hash;
  }

  set(key,value){
    let index = hash_fn(key);
    console.log('set at',index);
    this.data[index] = value;
  }
  
  get(key){
    let index = hash_fn(key);
    console.log('get at',index);
    let value = this.data[index];
    console.log('get value',value);
    return(value);
  }
}

const ht = new hash_table(20);
ht.set('grapes',1000);
ht.get('grapes');
ht.set('apples',20000);
ht.get('apples');