$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/frontend/api/get_tags.php",
        dataType: "json",
        success: function (data) {
            data = data.data;
            var val_tag;
            data.forEach(tag => {
                val_tag = tag.tag;
                $("#tag").append("<option value="+val_tag.replace(/ /g,'-')+">"+val_tag+"</option>");
                var location = window.location;
                var url = new URL(location);
                var name = url.searchParams.get('name');
                var tag = url.searchParams.get('tag');
                $("#name").val(name);
                $('#tag').val(tag.replace(/ /g,'-'));
            });
        }
    });
    // this is the id of the form
    $("#update_form").click(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
        var name = $('#name').val();
        var tag = $('#tag').val();
        tag = tag.replaceAll('-',' ');
        console.log(name);
        console.log(tag);
        console.log("update");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/frontend/api/update_user.php",
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