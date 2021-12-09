$(document).ready(function() {
    console.log("users");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/historic.php",
        "columns":[
            {"data":"tag"},
            {"data":"time_in"},
            {"data":"time_out"},
            {"data":"total_cost"}
        ]
    } );
} );