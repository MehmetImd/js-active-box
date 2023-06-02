const boxs = document.querySelectorAll('.box');

boxs.forEach(box => {

    box.addEventListener('click', function() {

        boxs.forEach(box_el => {

        if (box_el === box) {

            box_el.classList.add('active');

        } 
        else 
        {
            box_el.classList.remove('active');
        }

      });

    });
    
  });