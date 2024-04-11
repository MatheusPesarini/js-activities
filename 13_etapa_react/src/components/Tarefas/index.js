import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
    return (
        <div>
            <ul className='tarefas'>
                    {tarefas.map((tarefas, index) => (
                        <li key={tarefas}>
                            {tarefas}
                            <div>
                                <FaEdit 
                                    className='edit' 
                                    onClick={(event) => handleEdit(event, index)}
                                />
                                <FaWindowClose 
                                    className='delete' 
                                    onClick={(event) => handleDelete(event, index)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}