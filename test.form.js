import { Selector } from 'testcafe';

fixture `Test du formulaire PHP`
    .page `http://localhost:8000/form.php`;  // Utilisation de host.docker.internal sur Docker

test('Le nom est affiché en majuscules après soumission', async t => {
    const inputNom = Selector('input[name="nom"]');
    const bouton = Selector('button').withText('Enregistrer');
    const titre = Selector('h1');

    // Attente explicite pour que l'élément soit visible
    await t
        .expect(inputNom.visible).ok('Le champ de saisie du nom n\'est pas visible', { timeout: 5000 })
        .typeText(inputNom, 'Alice')
        .click(bouton)
        .expect(titre.innerText).eql('Nom Saisi : ALICE');
});

