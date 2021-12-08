$(document).ready(function() {
    console.log("get_tag");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/get_tags.php"
    } );
} );