$(document).ready(function() {
    console.log("get_tag");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/get_tags.php",
        "columns":[
            {"data":"id"},
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