import React, { Component } from 'react';
//import Table from './Table';
//import Form from './Form';
import FilterableRecetaTable from './Newtable';

class App extends Component {
    render() {
      //matriz de objetos
        const RECETAS = [
          {
          name: 'Tortitas de papa',
          verdura: 'Ninguna',
          fruta: 'Ninguna',
          proteina: 'jamon',
          carbohidrato: 'papa',
          ingredientes: '2 papas, 3 rebanadas de jamón, aceite, sal al gusto',
          procedimiento: 'Cocer las papas y después realizar un puré con ellas. Meclar con sal y jamón picado en cuadritos. Hacer las tortitas con la mezcla y freilas por 1 minuto. '
          },
          {
          name: 'Banderillas',
          verdura: 'Ninguna',
          fruta: 'Ninguna',
          proteina: 'Salchicha',
          carbohidrato: 'Harina',
          ingredientes: '2 tazas de harina de trigo, 2 cda de polvo para hornear, 2 huevos, sal, palitos de brocheta, 12 salchichas, aceite',
          procedimiento: 'Mezcla todos los ingredientes en un bowl con un batidor de globo. Poner a calentar aceite. clavar los palitos de brocheta en las salchichas sumergirlas en la mezcla y freírlas hasta que la mezcla se cocine. ',
          },
          {
          name: 'Calabacitas rellenas',
          verdura: 'Calabacita',
          fruta: 'Ninguna',
          proteina: 'Tocino',
          carbohidrato: 'Ninguno',
          ingredientes: '4 jitomates, 6 calabacitas, 1 taza de pure de tomate, 3 cdas de aceite, 200gr de queso, sal al gusto',
          procedimiento: 'Cocer las calabacitas, picar en cuadritos el jitomate y tocino y poner a cocinar con el aceite. Cortar las calabacitas en dos y sacar el relleno. Rellenar con la mezcla de tocino y jitomate, poner queso y gratinar.',
          },
          {
          name: 'Pollo a la italiana',
          verdura: 'Tomate',
          fruta: 'Piña',
          proteina: 'Pollo',
          carbohidrato: 'Ninguno',
          ingredientes: '100 gr de queso Manchego, 8 rebanadas de peperoni, 3/4 de taza de piña en cubos, 4 milanesas de pollo',
          procedimiento: 'En cada milanesa colocar queso, peperoni y piña y enrrollar cuidadosamente. Colocarlas en un sarten a fuego bajo de 7 a 8 minutos por ambos lados.',
          },
          {
          name: 'Pollo relleno',
          verdura: 'Espinaca',
          fruta: 'Ninguna',
          proteina: 'Pollo',
          carbohidrato: 'Ninguno',
          ingredientes: '220 gr de requeson, 1tza de espinaca lavada cortada en tiras, 1/4 tza de nuez picada, 4 milanesas de pollo',
          procedimiento: 'Mezclar el requeson con las espinacas, agregar un poco de mezcla a la milanesa y enrrollar cuidadosamente. Colocarlas en un sarten a fuego bajo de 7 a 8 minutos por ambos lados.',
          },
        ];

        return (
            <div className="container">
                <h1>Bienvenido</h1>
                <h1>Listo para cocinar?</h1>
                <h3>Dime que hay en tu cocina, buscare una receta</h3>
                <FilterableRecetaTable recetas={RECETAS} />
            </div>
        );
    }
}



export default App;
