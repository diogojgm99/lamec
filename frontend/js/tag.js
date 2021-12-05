$(document).ready(function() {
    $('#datatable').DataTable( {
        "ajax": '../ajax/data/arrays.txt'
    } );
} );