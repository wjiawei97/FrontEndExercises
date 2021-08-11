$.ajaxPrefilter(function(options){
  // console.log(options.url);
  options.url='http://ajax.frontend.itheima.net'+options.url
})