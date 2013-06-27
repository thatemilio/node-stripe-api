(function() {

    $('#api_group').on('change', function() { $('#example').load('/node-stripe-api/partials/' + $(this).val() + '.html'); });

    $('#example').load('/node-stripe-api/partials/' + $('#api_group').val() + '.html');

})();

