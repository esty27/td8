<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];  // Récupère le nom depuis le formulaire
    $nomMajuscule = strtoupper($nom);  // Transforme le nom en majuscules
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nom en Majuscules</title>
</head>
<body>
    <h1>Nom en Majuscules</h1>
    <p>Nom soumis : <?php echo htmlspecialchars($nomMajuscule); ?></p>
    <a href="form.php">Retour au formulaire</a>
</body>
</html>
