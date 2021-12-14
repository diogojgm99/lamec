$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/frontend/api/get_tags.php",
        dataType: "json",
        success: function (data) {
            // console.log(data.data);
            data = data.data;
            var val_tag;
            data.forEach(tag => {
                val_tag = tag.tag;
                $("#tag").append("<option value="+val_tag+">"+val_tag+"</option>");
            });
        }
    });
    // this is the id of the form
    $("#add_form").click(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
        var name = $('#name').val();
        var tag = $('#tag').val();
        console.log(name);
        console.log(tag);
        console.log("submit");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/frontend/api/new_user.php",
            data: {
                name: name,
                tag: tag
            },
            success: function(data)
            {
                alert(data); 
            }
            });
    });
});