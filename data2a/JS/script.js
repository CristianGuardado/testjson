function CrearTabla (datos){ //"datos" representará al JSON
    let tabla = `
     <table role="grid" class="overflow-auto">
        <!--Este es encabezado de la tabla-->
        <thead>
            <!--Este es una fila-->
            <tr>
                <!--Columna en la tabla-->
                <th>Carnet</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Sección academica</th>
            </tr>
        </thead>
        <!--Body de la tabla-->
        <tbody>
    `;
 
    //Hacemos un bucle para llemar la tabla, por cada registro que tiene el bucle
    datos.forEach(EquipoExpo => {
        tabla += `
            <tr>
            <td>${EquipoExpo.Carnet}</td>
            <td>${EquipoExpo.nombre}</td>
            <td>${EquipoExpo.rol}</td>
            <td>${EquipoExpo.Seccion}</td>
            </tr>
        `;
    });
 
    tabla += `
        </tbody>
            </table>
    `;

    //Se coloca la tabla creada en el div con id "tabla"
    document.getElementById("tabla").innerHTML = tabla;

}

CrearTabla(EquipoExpo);




