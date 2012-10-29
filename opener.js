var opener = {
  win : null,
  popup : function(args){
    if(arguments.length !== 2) return;
    var first = arguments[0];
    var callback = arguments[1];
    var type = typeof first;
    if(type === 'number'){
      this.popupTimer(first,callback);
    }else if(type === 'string'){
      if(first === 'onload'){
        this.popupOnload(callback);
      }else{
        this.popupOnready(callback);
      }
    }else{
      return;
    }
  },
  popupTimer : function(time,callback){
    
  }
}