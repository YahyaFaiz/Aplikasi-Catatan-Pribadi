import React from 'react';

function ArchiveButton({ id, onArchive }) {
    return <button className='Catatan-item__archive' onClick={() => onArchive(id)}>Arsipkan</button>
}

export default ArchiveButton;
