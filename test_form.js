import { Selector } from 'testcafe';

fixture `Test Formulaire PHP`
    .page `http://localhost:8000/form.php`;

test('Vérification que le nom est bien en majuscules après soumission', async t => {
    const nomInput = Selector('#nom');
    const submitButton = Selector('button');
    const resultText = Selector('p');

    // Saisie d'un nom
    await t
        .typeText(nomInput, 'jean')
        .click(submitButton);

    // Vérifier que le nom est bien affiché en majuscules
    await t.expect(resultText.innerText).eql('Nom soumis : JEAN');
});
