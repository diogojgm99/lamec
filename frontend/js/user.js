$(document).ready(function() {
    console.log("users");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/user.php"
    } );
} );