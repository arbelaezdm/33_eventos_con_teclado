   window.addEventListener('load', function() {
      let botones = document.querySelectorAll('.w3-button');
      for (let i = 0; i < botones.length; i++) {
         botones[i].addEventListener('click', function(e){
            e.preventDefault();
            this.style.color = 'red' //this hace referencia al lugar donde se ejecuta el evento
         })
      }

      window.addEventListener('keypress', function(e) {
         if(e.key == 'd') {
            alert('tocaste d')
         }
      })
      })

   