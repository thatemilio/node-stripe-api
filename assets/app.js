(function() {

    $('#api_group').on('change', function() {
        $('#example').load('/node-stripe-api/assets/partials/' + $(this).val() + '.html');
        $(this).blur();
    });

    $('#example').load('/node-stripe-api/assets/partials/' + $('#api_group').val() + '.html');

})();

