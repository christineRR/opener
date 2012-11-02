var opener = {
  defaultOptions : {
    url : '',
    type : null,
    name : '',
    features : 'fullscreen=yes, scrollbars=yes'
  },
  win : null,
  popup : function(args){
    var options = arguments[0];
    options = $.extend(true,this.defaultOptions,options)
    this.win = window.open(options.url,options.name,options.features);  

    var type = typeof(options.type);
    if(type === 'number'){
      this.popupTimer(options.type);
    }else if(type === 'string'){
      if(type === 'onload'){
        this.popupOnload();
      }else{
        this.popupOnready();
      }
    }else{
      return;
    }
  },
  popupTimer : function(time){
    var self = this;
    setTimeout(function(){
      self.win.alert(time)
    },time);
  },
  popupOnload : function(){
    this.win.onload = this.callback;
  },
  popupOnready : function(){
    var self = this;
    $(this.win.document).ready(function($){
      self.callback();
    });
  },
  callback : function(){
    this.win.alert('callback');
  }
}