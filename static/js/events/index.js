require.config({
    deps: ['map/index', 'jquery.css3finalize'],
    paths: {
        'html':         '/js/html',
        'async':        '/ext/js/async',
        'text':         '/ext/js/text',
        'jquery':       '/ext/js/jquery-1.9.1',
        'jquery.form':  '/ext/js/jquery.form',
        'markdown':     '/ext/js/markdown',
        'to-markdown':  '/ext/js/to-markdown',
        'jquery-ui.datepicker': '/ext/js/jquery-ui-1.10.3.datepicker-custom',
        'jquery.timepicker':    '/ext/js/jquery.timepicker',
        'bootstrap-markdown':   '/ext/js/bootstrap-markdown',
        'jquery.css3finalize':  '/ext/js/jquery.css3finalize-v3.x.min',
    },
    shim: {
        'jquery.form':  ['jquery'],
        'jquery-ui.datepicker': ['jquery'],
        'jquery.css3finalize':  ['jquery'],
        'bootstrap-markdown':   ['jquery', 'markdown', 'to-markdown']
    }
});
