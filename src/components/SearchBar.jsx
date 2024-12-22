import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.props.onSearch(event.target.value);
    }

    render() {
        // Inline style untuk input
        const inputStyle = {
            padding: '10px',
            width: '100%',
            maxWidth: '400px',
            margin: '10px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box', // Agar padding tidak mempengaruhi lebar input
        };

        return (
            <>
                <input
                    type="text"
                    placeholder="Cari catatan..."
                    value={this.props.keyword}
                    onChange={this.onSearchChangeEventHandler}
                    style={inputStyle} // Terapkan style inline
                />
            </>
        );
    }
}

export default SearchBar;
