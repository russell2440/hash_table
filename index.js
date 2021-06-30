class hash_table{
  constructor(size){
    this.data = new Array(size);
  }
  
  hash_fn(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash=(hash+key.charCodeAt(i)*i)%this.data.length
    }
    console.log('hash_fn at',hash);
    return hash;
  }

  set(key,value){
    let index = 0;
    index = this.hash_fn(key);
    console.log('set at',index);
    this.data[index] = value;
  }

  get(key){
    let index = 0;
    index = this.hash_fn(key);
    console.log('get at',index);
    let value = this.data[index];
    console.log('get value',value,'\n');
    return(value);
  }
}

const ht = new hash_table(20);
ht.set('grapes',1000);
ht.get('grapes');
ht.set('apples',20000);
ht.get('apples');
ht.set('peach',40000);
ht.get('peach');