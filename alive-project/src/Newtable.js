import React, {Component} from 'react';

//Categoria o valor que toma de la tabla
class RecetaCategoryRow extends React.Component {
  render() {
    const proteina = this.props.proteina;
    return (
      <tr>
        <th>
          {proteina}
        </th>
      </tr>
    );
  }
}

//Qué desplegar en la tabla
//Crea props receta
//Class Component
//Un props es como propiedades que se pueden pasar a componentes.
class RecetaRow extends React.Component {
  render() {
    const receta = this.props.receta;
    return (
      <tr>
        <td>{receta.name}</td>
        <td>{receta.ingredientes}</td>
        <td>{receta.procedimiento}</td>
      </tr>
    );
  }
}

//Tabla completa
class RecetaTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const rows = [];
    //Para iniciarla y no busque nada la primera vez
    let lastCategory = null;

//Filtros para desplegar la tabla
    this.props.recetas.forEach((receta) => {
      if (receta.proteina.indexOf(filterText) === -1) {//Si lo que esta buscando no existe te sales
        return;
      }
      if (receta.proteina !== lastCategory) {
        rows.push(//regresa la categoria
          <RecetaCategoryRow
            proteina={receta.protenia}
            key={receta.proteina} />//INDICARDOR DE LO QUE ESTÀS BUSCANDO
        );
      }
      rows.push(
        <RecetaRow//regresa el nombre, el procedimiento e ingredients
          receta={receta}
          key={receta.name}//KEY AUXILIAR
        />
      );
      lastCategory = receta.proteina;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ingredientes</th>
            <th>Procedimiento</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

//Barra para buscar los ingredientes
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

//e = event
//Tomar valor de lo que haya en el buscardor
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}


//Class Component
class FilterableRecetaTable extends React.Component {
//los valores iniciales
  constructor(props) {
    super(props);//lo regresa
    this.state = {//estado, se administra dentro del componente
      filterText: ''//poque en un inicio es nada
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

//Pone en el estado el prop filterText
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />

        <RecetaTable
          recetas={this.props.recetas}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableRecetaTable;
