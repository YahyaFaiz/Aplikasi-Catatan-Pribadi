// CatatanApp.jsx
import React from 'react';
import Navbar from './Navbar';
import CatatanList from './CatatanList';
import CatatanInput from './CatatanInput';
import SearchBar from './SearchBar';
import { getInitialData } from '../utils/index';

class CatatanApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catatan: getInitialData(),
            keyword: '',
            darkMode: false
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this); // Tambahkan bind untuk toggleDarkMode
    }

    toggleDarkMode() {
        this.setState({ darkMode: !this.state.darkMode });
    }

    onDeleteHandler(id) {
        const catatan = this.state.catatan.filter(catatan => catatan.id !== id);
        this.setState({ catatan });
    }

    onAddCatatanHandler({ title, body }) {
        const newCatatan = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
        }
        this.setState((prevState) => {
            return {
                catatan: [...prevState.catatan, newCatatan]
            };
        });
    }

    onSearchHandler(keyword) {
        this.setState({ keyword });
    }

    onArchiveHandler(id) {
        const catatan = this.state.catatan.map(catatan => {
            if (catatan.id === id) {
                return { ...catatan, archived: !catatan.archived };
            }
            return catatan;
        });
        this.setState({ catatan });
    }

    render() {
        const filteredCatatan = this.state.catatan.filter(catatan =>
            catatan.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        const activeCatatan = filteredCatatan.filter(catatan => !catatan.archived);
        const archivedCatatan = filteredCatatan.filter(catatan => catatan.archived);

        return (
            <div className={this.state.darkMode ? 'dark-mode' : ''}>
                <Navbar toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode} />

                <div className="catatan-app">
                    <h2>Buat Catatan</h2>
                    <CatatanInput addCatatan={this.onAddCatatanHandler} />
                </div>

                <div className="catatan-app">
                    <h2>Cari Catatan</h2>
                    <SearchBar keyword={this.state.keyword} onSearch={this.onSearchHandler} />
                </div>

                <div className="catatan-app">
                    <h2>Catatan Aktif</h2>
                    <CatatanList
                        catatan={activeCatatan}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                </div>

                <div className="catatan-app">
                    <h2>Catatan Arsip</h2>
                    <CatatanList
                        catatan={archivedCatatan}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                </div>
            </div>
        );
    }
}

export default CatatanApp;
