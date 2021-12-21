$(document).ready(function() {
    console.log("users");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/user.php",
        "columns":[
            {"data":"name"},
            {"data":"tag"}
        ],
        "columnDefs":[
            {
                targets: [0,1],
                className: 'text-center'
            },
        ]
    } );
} );