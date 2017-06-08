food;

// handle start button clicks
var startButton = document.querySelector('.button');
startButton.addEventListener('click', findProducts);


function findProducts(event) {

    // 1) Get selections
    var myCatIsSterile = document.querySelector('#sterilisert').value || null;
    console.log('myCatIsSterile', myCatIsSterile);

    var myCatAge = document.querySelector('#alder').value || null;
    console.log('myCatAge', myCatAge);

    var environment = document.querySelector('#innekatt').value || null;
    console.log('environment', environment);

    var myCatWeight = document.querySelector('#vekt').value || null;
    console.log('myCatWeight', myCatWeight);

    var myCatName = document.querySelector('#fname').value;
    sessionStorage.setItem('catName', myCatName);



    if (myCatIsSterile == null || myCatAge == null || environment == null || myCatWeight == null) {
        console.warn('alt må fylles ut!');
        event.preventDefault();
        return;
    }

    console.log('find the right product...');


    for (var i = 0; i < food.length; i++) {

        var catFood = food[i];
        var matchCount = 0;


        console.log('Product', catFood.name, '---');
        // check age
        if (myCatAge >= catFood.minAge && myCatAge <= catFood.maxAge) {
            console.log('age match');
            matchCount++;
        }

        // sjekke om sterilisert
        if (myCatIsSterile == String(catFood.sterilisert)) {
            console.log('sterile match');
            matchCount++;
        }

        // sjekk om inne eller utekatt
        if (environment == String(catFood.outdoor)) {
            console.log('innekatt match');
            matchCount++;
        }

        // sjekk vekt
        if (myCatWeight == catFood.kg) {
            console.log('weight match');
            matchCount++;
        }

        if (matchCount == 4) {
            console.warn(catFood.name, 'is a match for you. Consume', catFood.gram);
            sessionStorage.setItem('product', i);
        }
    }

}
