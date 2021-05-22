// $(document).ready(function () {
//     $(document).ready(function () {
//         console.log($('.note'));
//         $('button').on('click', function () {
//             //je crée 2 variable 
//             //1 pour la somme
//             //1 pour le résultat
//             var summ = 0;
//             var res = 0;
//             //pour chaque élément qui à la classe .note
//             $('.note').each(function () {
                    //le parseInt renvoie à un nombre à un chiffre après la virgule seulement.
//                 summ += parseInt($(this).val());
//             })
//             res = summ / $('.note').length;
//             //Test
//             console.log(summ);
//             console.log($('.note').length);
//             console.log(res);
//             alert("la moyenne est de " + res);
    
//         })
//     })
    
// });

// OU CORRECTION
$(document).ready(function () {
    $('button').click(function () { 
        //je récupère la valeur de mes inputs grâce à leur ID
        var note1 = $('#note1').val();    
        var note2 = $('#note2').val();    
        var note3 = $('#note3').val();    
        var note4 = $('#note4').val();    
        var note5 = $('#note5').val(); 
        
        //Si tout mes champs sont remplis et si mes notes sont inférieures ou égale à 20.
        if(note1 && note2 && note3 && note4 && note5 && note1 <= 20 && note2 <= 20 && note3 <= 20 && note4 <= 20 && note5 <= 20){
            //le parseFloat nous assure se soit bien des chiffre et prend on concidération les nombres décimaux.
            var moyenne = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5))/5;
            alert('Votre moyenne est de : ' + moyenne);
        //SINON SI les notes sont supérieurs à 20...    
        }else if(note1 > 20 || note2 > 20 || note3 > 20 || note4 > 20 || note5 > 20){
            alert('Les notes ne peuvent pas être supérieur à 20 ! ! !')
        }else{
            alert('Veuillez vérifier tout les champs ! ! !')
        }
    });

});