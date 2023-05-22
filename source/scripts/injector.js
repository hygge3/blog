hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('bodyBegin', 'source/js/timeliness.js');
  injects.footer.raw('bodyEnd', '<script async src="https://cdn.jsdelivr.net/gh/fz6m/Private-web@1.2/js/sakura/sakura-small.js" crossorigin="anonymous"></script>');
});