<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    header('Location: display.php?nom=' . strtoupper($nom));
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire Saisie Nom</title>
</head>
<body>
    <h1>Formulaire de saisie du nom</h1>
    <form method="POST" action="">
        <label for="nom">Nom :</label>
        <input type="text" name="nom" id="nom" required>
        <button type="submit">Enregistrer</button>
    </form>
</body>
</html>
