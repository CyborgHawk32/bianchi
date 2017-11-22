// on cible le bloc du carrousel
var $carrousel = $('#carrousel'), 
    
    // on cible les images contenues dans le carrousel
    $img = $('#carrousel img'), 
    
    // on définit l'index du dernier élément
    indexImg = $img.length - 1,
    
    // on initialise un compteur
    i = 0,
    
    // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $currentImg = $img.eq(i); 

// on cache les images
$img.css('display', 'none'); 

// on affiche seulement l'image courante
$currentImg.css('display', 'block'); 

function slideImg(){
     // on utilise une fonction anonyme
    setTimeout(function(){
		
        // si le compteur est inférieur au dernier index				
        if(i < indexImg){ 
	    
        // on l'incrémente
        i++; 
	}
    // sinon, on le remet à 0 (première image)
	else{ 
	    i = 0;
	}

	$img.css('display', 'none');
	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');
    
    // on oublie pas de relancer la fonction à la fin
	slideImg(); 
    
    // on définit l'intervalle à 2000 millisecondes (2s)
    }, 2000);
}
 
    // enfin, on lance la fonction une première fois
    slideImg();

