baguetteBox.run('.gallery');
//const search = new Filter('search', 'data-caption');


$('a[href^="photo"] p').on('mouseover', function(){
    $('.gallery p').css({ //Object Literal
        'color': 'white',
        'background-color': 'black',
        'font-size': '2em',
        'font-family': 'san-serif',
    });
});




function createSearchFunction() {

    // Declare variables

    let input = document.getElementById('search'); //When a user type, GET all the info from input
    let inputCapitalize = input.value.toUpperCase(); //Make the info capitalized

    //Get all information from the BIG list: ul --> li --> a. Because the attribute 'data-caption' lives in the a list.
    let ul = document.getElementById('searchPhoto'); //Get all the ul list
    let li = ul.getElementsByTagName('li'); //Go deeper, get the li list
    let a = ul.getElementsByTagName('a'); //Last, get the a list. So, we can access to the attribute 'data-caption'

    
    // Loop through all list items, and hide the one that don't match the search query
    for (let i = 0; i < a.length; i++) {
        let dataCaption = a[i].getAttribute('data-caption'); //get dataCaption info
        let dataCaptionCapitalize = dataCaption.toUpperCase(); //Make it capitalized

        if (dataCaptionCapitalize.indexOf(inputCapitalize) == -1) { 
            //-1 means "nothing is found." indexOf means search "the capitalized info from input" vs "the capitalized dataCaption in the a list".
            //If nothing is found, the result is -1 
            //Then do not display that item. 
            
            li[i].style.display = "none";
        } else {
            li[i].style.display = "";
        }
    }
};

