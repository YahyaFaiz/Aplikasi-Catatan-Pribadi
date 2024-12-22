import React from 'react';
import CatatanItemBody from './CatatanItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function CatatanItem({ id, judul, tanggal, Catatan, onDelete, onArchive }) {
    return (
        <div className="catatan-item">
            <CatatanItemBody judul={judul} tanggal={tanggal} Catatan={Catatan} />
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} />
        </div>
    );
}

export default CatatanItem;
