<?php
$targetDir = "/";
$uploadedFiles = [];

foreach ($_FILES['files']['name'] as $key => $name) {
    $targetFile = $targetDir . basename($name);
    $tempFile = $_FILES['files']['tmp_name'][$key];

    if (move_uploaded_file($tempFile, $targetFile)) {
        $uploadedFiles[] = $name;
    } else {
        http_response_code(500);
        die();
    }
}

echo json_encode($uploadedFiles);
?>
