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
    let address = this.hash_fn(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key){
    let address = 0;
    address = this.hash_fn(key);
    let value = this.data[address];
    console.log('get value',value,'\n');
    return(value);
  }
}

const ht = new hash_table(20);
ht.set('grapes',1000);
ht.set('grapes',14000);
ht.set('grapes',28);
ht.get('grapes');
ht.set('apples',20000);
ht.get('apples');
ht.set('peach',40000);
ht.get('peach');