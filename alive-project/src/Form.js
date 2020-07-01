import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            verdura:'',
            fruta:'',
            proteina:'',
            carbohidrato:'',
            name: '',
            ingredientes:'',
            procedimiento: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { verdura, fruta, proteina, carbohidrato, name, ingredientes, procedimiento } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="verdura">Verdura principal</label>
                <input
                    type="text"
                    name="verdura"
                    id="verdura"
                    value={verdura}
                    onChange={this.handleChange} />

                <label for="fruta">Fruta</label>
                <input
                    type="text"
                    name="fruta"
                    id="fruta"
                    value={fruta}
                    onChange={this.handleChange} />

                <label for="fruta">Proteina</label>
                    <input
                        type="text"
                        name="proteina"
                        id="proteina"
                        value={proteina}
                        onChange={this.handleChange} />

                <label for="carbohidrato">Cereal o carbohidrato</label>
                      <input
                          type="text"
                          name="carbohidrato"
                          id="carbohidrato"
                          value={carbohidrato}
                          onChange={this.handleChange} />

                <label for="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={this.handleChange} />

                <label for="ingredientes">Ingredientes</label>
                        <input
                            type="text"
                            name="ingredientes"
                            id="ingredientes"
                            value={ingredientes}
                            onChange={this.handleChange} />

                <label for="procedimiento">Procedimiento</label>
                        <input
                            type="text"
                            name="procedimiento"
                            id="procedimiento"
                            value={procedimiento}
                            onChange={this.handleChange} />

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
