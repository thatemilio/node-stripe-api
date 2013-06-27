(function() {

    $('#api_group').on('change', function() { $('#example').load('/partials/' + $(this).val() + '.html'); });

    $('#example').load('/partials/' + $('#api_group').val() + '.html');

})();

