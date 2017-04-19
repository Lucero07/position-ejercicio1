var contenedor = document.getElementById('contenedor');
var cuadroGrande1 = document.createElement('div');
var cuadroMediano1 = document.createElement('div');
var cuadroChico1 = document.createElement('div');
var cuadroGrande2 = document.createElement('div');
var cuadroMediano2 = document.createElement('div');
var cuadroChico2 = document.createElement('div');

cuadroGrande1.className = "cuadros";
cuadroGrande1.id = "grande1";
cuadroGrande2.className = "cuadros";
cuadroGrande2.id = "grande2";

cuadroMediano1.className = "cuadros";
cuadroMediano1.id = "mediano1";
cuadroMediano2.className = "cuadros";
cuadroMediano2.id = "mediano2";

cuadroChico1.className = "cuadros";
cuadroChico1.id = "chico1";
cuadroChico2.className = "cuadros";
cuadroChico2.id = "chico2";

cuadroMediano1.appendChild(cuadroChico1);
cuadroGrande1.appendChild(cuadroMediano1);
cuadroGrande2.appendChild(cuadroMediano2);
cuadroGrande2.appendChild(cuadroChico2);
contenedor.appendChild(cuadroGrande1);
contenedor.appendChild(cuadroGrande2);
