import React from 'react';

class CatatanInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            titleCharLimit: 50,
        }
    }

    // Menggunakan class properties untuk handler
    onTitleChangeEventHandler = (event) => {
        const value = event.target.value.slice(0, this.state.titleCharLimit);
        this.setState({ title: value });
    }

    onBodyChangeEventHandler = (event) => {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state);
        this.props.addCatatan({ title: this.state.title, body: this.state.body });
        this.setState({ title: '', body: '' });
    }

    render() {
        return (
            <form className='catatan-input' onSubmit={this.onSubmitEventHandler}>
                <p>{this.state.titleCharLimit - this.state.title.length} karakter tersisa</p>
                <input
                    type="text"
                    placeholder="Judul"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required
                />
                <textarea
                    placeholder="Catatan"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required
                />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default CatatanInput;
