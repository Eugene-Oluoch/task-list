$(function() {
    $('.add').click(function() {
        let valueTask = $('#new-task').val();
        if (valueTask.length === 0) {
            alert("Enter task name");
        } else {
            $('.tasks-li').append(`<li class="li">${valueTask}<i class="fas fa-times"></i></li>`)
            $('i').click(function() {
                $(this).closest('li').remove();
            });
            $("#new-task").val('');
        }
    });
    $('.clear').click(function() {
        $('.li').remove()
    });
});