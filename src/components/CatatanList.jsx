import React from 'react';
import CatatanItem from './CatatanItem';

function CatatanList({ catatan, onDelete, onArchive }) {
    if (catatan.length === 0) {
        return <p>Tidak ada catatan</p>;
    }

    return (
        <div className="catatan-list">
            {catatan.map((note) => (
                <CatatanItem
                    key={note.id}
                    id={note.id}
                    judul={note.title}
                    tanggal={note.createdAt}
                    Catatan={note.body}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            ))}
        </div>
    );
}

export default CatatanList;
