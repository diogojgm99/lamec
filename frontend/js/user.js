$(document).ready(function() {
    console.log("users");
    var table = $('#datatable').DataTable( {
        "ajax": "http://localhost:3000/frontend/api/user.php",
        "columns":[
            {"data":"name"},
            {"data":"tag"},
            // {
            //     "data":null,
            //     // "defaultContent": "<button id='update' class='btn btn-success' type='button'>Editar</button> <button id='delete' class='btn btn-danger delete'>Remover</button>",
            //     "defaultContent": '<button id="update" class="btn btn-success" type="button" id=n-"' + meta.row + '">Editar</button>'+ "<button id='delete' class='btn btn-danger delete'>Remover</button>",
            //     "targets":-1
            // }
        ],
        "columnDefs":[
            {
                targets: [0,1,2],
                className: 'text-center'
            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return '<input type="button" class="btn btn-success" id=n-"' + meta.row + '" value="Editar"/><input type="button" class="btn btn-danger" id=s-"' + meta.row + '" value="Eliminar"/>';
                 }
            }
        ]
    } );
    $('#datatable tbody').on( 'click', '.btn-success', function () {
        var id = $(this).attr("id").match(/\d+/)[0];
        var data = $('#datatable').DataTable().row( id ).data();
        var name = data['name'];
        var tag = data['tag'];
        window.location.href = "http://localhost:3000/frontend/update_user.html?name="+name+"&tag="+tag;
    } );
    $('#datatable tbody').on( 'click', '.btn-danger', function () {
        var id = $(this).attr("id").match(/\d+/)[0];
        var data = $('#datatable').DataTable().row( id ).data();
        var name = data['name'];
        var tag = data['tag'];
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
    } );
} );

$('#delete').on('click',function(e){
    e.preventDefault();
    var name = $('#name').val();
    var tag = $('#tag').val();
    console.log( table.row( this ).data() );
    console.log('there');
});