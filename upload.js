document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'upload123.php', true);

    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            document.getElementById('progress').innerHTML = 'Subiendo: ' + percentComplete.toFixed(2) + '%';
        }
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Archivos subidos correctamente.');
            document.getElementById('progress').innerHTML = '';
        } else {
            alert('Error al subir archivos.');
        }
    };

    xhr.send(formData);
});
