// Récupération des éléments du DOM
const form = document.getElementById('calculatorForm');
const errorDiv = document.getElementById('error');

const sumSpan = document.getElementById('sum');
const differenceSpan = document.getElementById('difference');
const productSpan = document.getElementById('product');
const quotientSpan = document.getElementById('quotient');

// Ce qui se passe au clic sur le bouton "Calculer"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    errorDiv.textContent = ''; // Réinitialise le message d'erreur

    // Récupération des valeurs saisies
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Vérification que les champs sont remplis et sont des valeurs numériques
    if (isNaN(num1) || isNaN(num2)) {
        errorDiv.textContent = 'Veuillez remplir les deux champs avec des valeurs numériques.';
        resetResults();
        return;
    }

    // Calculs 
    sumSpan.textContent = num1 + num2;
    differenceSpan.textContent = num1 - num2;
    productSpan.textContent = num1 * num2;
    
    // Gestion de la division par zéro
    if (num2 === 0) {
        errorDiv.textContent = 'Erreur: Division par zéro impossible.';
        quotientSpan.textContent = '-';
    } else {
        quotientSpan.textContent = (num1 / num2).toFixed(2);
    }

});

// Fonction pour réinitialiser les résultats
function resetResults() {
    sumSpan.textContent = '-';
    differenceSpan.textContent = '-';
    productSpan.textContent = '-';
    quotientSpan.textContent = '-';
}