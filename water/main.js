let age = document.querySelector('.age'),
    water = document.querySelector('.water'),
    btn = document.querySelector('.send_btn'),
    block = document.querySelector('.block'),
    block2 = document.querySelector('.block2'),
    none_div = document.querySelector('.none_div');

    btn.addEventListener('click', () => {
        function waterAll(age1 , water) {

            let waterAll = age1 * 365;
            let waterAll2  = waterAll * water;

            let age = 100;
            let minimal = age - age1;
            let allWater3 = minimal * 365;
            let finalyAge = allWater3 * water;


            if (!age =="" && !water =="") {
                block.innerHTML = `
                 siz hozirgacha ${waterAll2} litr suv ichdingiz
                `;

                block2.innerHTML = `
                siz yana ${finalyAge} litr suv ishishingiz kerak
               `
            }else{
                none_div.innerHTML = 'Malumot kiriting!!!'
            }

        }
       waterAll(age.value , water.value)
    
    })

