function create() {
    let colonne = document.getElementById("col").value
    let righe = document.getElementById("rig").value
    if(colonne == "" || righe == "") {
        document.getElementById("col").style.border = "2px solid red"
        document.getElementById("rig").style.border = "2px solid red"
    }
    else {
        document.getElementById("col").style.display = "none"
        document.getElementById("rig").style.display = "none"
        document.getElementById("create").style.display = "none"

        var body = document.getElementsByTagName("body")[0];
      
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        
        for (var i = 0; i < parseInt(righe); i++) {
          var row = document.createElement("tr");
      
          for (var j = 0; j < parseInt(colonne); j++) {
            var cell = document.createElement("td");
            var cellText = document.createElement("textarea")
            cellText.setAttribute("placeholder", (i + 1) + ", " + (j + 1))
            cellText.setAttribute("cols", parseInt(((170 * window.innerWidth)/1366)/parseInt(colonne)))
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
          tblBody.appendChild(row);
        }
      
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        if(parseInt(colonne) > 10) {
          alert("It's not recommended to generate such a large number of columns!")
        }
    }
}
