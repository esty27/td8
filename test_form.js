import { Selector } from 'testcafe';

fixture `Test du formulaire PHP`
    .page `http://host.docker.internal:8000/form.php`; // Utilise host.docker.internal pour Docker

test('Vérifier la visibilité du formulaire et soumettre', async t => {
    const inputNom = Selector('input[name="nom"]');
    const bouton = Selector('button').withText('Enregistrer');
    const titre = Selector('h1');

    // Vérifier que le champ de saisie du nom est visible
    await t
        .expect(inputNom.exists).ok('Le champ de saisie du nom n\'existe pas')
        .expect(inputNom.visible).ok('Le champ de saisie du nom n\'est pas visible');

    // Vérifier que le bouton est visible
    await t
        .expect(bouton.exists).ok('Le bouton n\'existe pas')
        .expect(bouton.visible).ok('Le bouton n\'est pas visible');

    // Remplir le champ et soumettre le formulaire
    await t
        .typeText(inputNom, 'Alice')
        .click(bouton);

    // Vérifier que le titre a été mis à jour après soumission
    await t
        .expect(titre.innerText).eql('Nom Saisi : ALICE');
});
