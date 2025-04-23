<?php
if (isset($_GET['nom'])) {
    $nom = $_GET['nom'];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nom Affiché</title>
</head>
<body>
    <h1>Nom Saisi : <?php echo strtoupper($nom); ?></h1>
</body>
</html>
