import React from 'react';
import { showFormattedDate } from '../utils/index';

function CatatanItemBody({ id, judul, tanggal, Catatan }) {
    return (
        <div className="catatan-item__body">
            <h3 className="catatan-item__title">{judul}</h3>
            <p className="catatan-item__tanggal">{showFormattedDate(tanggal)}</p>
            <p className="catatan-item__content">{Catatan}</p>
        </div>
    );
}

export default CatatanItemBody;
