var slider = document.getElementById("value");
    var output = document.getElementById("out-put");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }