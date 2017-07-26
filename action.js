function getRandomArbitrary(){
  var x = Math.random();
  var usuario="";
  if (x<=.5) {
    swal(
      'no eres agresivo!',
      usuario,
      'success'
    )

  }else {
    swal(
      'eres agresivo!',
      usuario,
      'error')
}}
