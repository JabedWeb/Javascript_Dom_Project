       var div = null;


       // //get the element
       var btn = document.getElementById('btn-changed');
       var text = document.getElementById('text');
       var root = document.getElementById('root');
       var rgba_input = document.getElementById('rgba_input');
       var hexa_input = document.getElementById('hexa_input');
       //Rgb elements
       var output = document.getElementById('output');
       var copyBtn = document.getElementById('copyBtn');

       //   Hexa elements
       var output_Hexa = document.getElementById('output_Hexa');
       var copyBtnHexa = document.getElementById('copyBtnHexa');

       //generate the rgb color
       function rgbGenerate() {
           let color = [];
           for (let i = 0; i < 3; i++) {
               let random = Math.ceil(Math.random() * 255);
               color.push(random);
           }
           return color;
       }

       //color listener
       btn.addEventListener('click', function () {
           //rgb color
           var color = rgbGenerate();
           var rgbColor = "rgb(" + color[0] + ',' + color[1] + ',' + color[2] + ")";
           output.value = rgbColor;
           //hexa color
           var colorHexa = "#" + color[0].toString(16) + color[1].toString(16) + color[2].toString(16);
           output_Hexa.value = colorHexa;

           //change the color 
           text.style.color = rgbColor;
           root.style.backgroundColor = rgbColor;
       })

       //copy the color rgb
       copyBtn.addEventListener('click', function () {
           if (div != null) {
               div.remove();
               div = null;
           }
           toastMessage(`Copied ${output.value}`)
           navigator.clipboard.writeText(output.value);
       })

       //copy the color rgb from the output
       rgba_input.addEventListener('click', function (e) {
           if (div != null) {
               div.remove();
               div = null;
           }
           toastMessage(`Copied ${output.value}`)
           navigator.clipboard.writeText(output.value);
       })

       //copy the color hexa

       copyBtnHexa.addEventListener('click', function () {
           navigator.clipboard.writeText(output_Hexa.value);

           if (div != null) {
               div.remove();
               div = null;
           }
           toastMessage(`Copied ${output_Hexa.value}`)
       })

       //copy the color hexa From the input
       hexa_input.addEventListener('click', function () {
           navigator.clipboard.writeText(output_Hexa.value);

           if (div != null) {
               div.remove();
               div = null;
           }
           toastMessage(`Copied ${output_Hexa.value}`)
       })
       //toast message function
       function toastMessage(message) {
           div = document.createElement('div');
           div.className = 'toast toast_in';
           div.innerHTML = message;
           document.body.appendChild(div);
           setTimeout(function () {
               div.remove();
               div = null;
           }, 5000)
       }
