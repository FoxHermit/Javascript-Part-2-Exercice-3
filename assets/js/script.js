function extend(){
  //var img = document.getElementById('dodge');
  //var width = img.clientWidth;
  // Je stocke dans ma variable imgWidth la valeur de la largeur de mon image
  var imgWidth = document.getElementById('dodge').clientWidth;
  console.log(imgWidth);
  if (imgWidth == 800){
    alert('Arrête gros, c\'est trop gros')
  }else{

  // J'attribue une nouvelle valeur à la width de mon image en ajoutant 20px à partir de la taille récupérée dans imgWidth
  document.getElementById('dodge').style.width = (imgWidth + 50) + 'px';
}
}
