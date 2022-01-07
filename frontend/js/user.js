$(document).ready(function() {
    console.log("users");
    $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/user.php",
        "columns":[
            {"data":"name"},
            {"data":"tag"},
            {
                "data":null,
                "defaultContent": "<a id='update' class='btn btn-success' href='update_user.html'>Editar</a><a id='delete' class='btn btn-danger'>Remover</a>",
                "targets":-1
            }
        ],
        "columnDefs":[
            {
                targets: [0,1,2],
                className: 'text-center'
            },
        ]
    } );
    $('#update').click(function(e){
        e.preventDefault();
        var name = $('#name').val();
        var tag = $('#tag').val();
        tag = tag.replaceAll('-',' ');
        window.localion = "http://localhost:3000/frontend/update_user.html?name="+name+"&tag="+tag;
    });
    $("#delete").click(function(e){
        e.preventDefault();
        var name = $('#name').val();
        var tag = $('#tag').val();
        tag = tag.replaceAll('-',' ');
        console.log(name);
        console.log(tag);
        console.log("submit");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/frontend/api/delete_user.php",
            data: {
                name: name,
                tag: tag
            },
            success: function(data)
            {
                alert(data); 
            }
        });
    })
} );