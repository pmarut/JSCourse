(function() {
    $(document).ready( function() { 
        var taskNameInput = $('#taskName');
        $('#addTask').click(function () {
            if (taskNameInput.val() == '') {
                return;
            } 
            var maxInputLength = 10;
            if (taskNameInput.val().length > maxInputLength) {
                displayError(true);
                return;
            } else {
                displayError(false);
            }

            $('#taskList').append('<li><a class="deleteLink" href="">X</a>' + taskNameInput.val() + '</li>');
            taskNameInput.val('');
            return;
        });

        function displayError(value) {
            if (value) {
                $('#errorLabel').show();
                $('#taskName').addClass('error');
            } else {
                $('#errorLabel').hide();
                $('#taskName').removeClass('error');
            }
        }
    });

    $(document).on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

}());