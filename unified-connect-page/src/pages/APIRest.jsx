import React, { useState } from 'react';
import Table from '../components/Table';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
// import '../helpers/modal';

const APIRest = () => {
  const [createModalState, setCreateModalState] = useState('');
  function toggleStateStoreModal(state) {
    state ? setCreateModalState('is-active') : setCreateModalState('');
  }

  return (
    <div>
      <Banner />
      <div className="p-5">
        {/* <h1 className="title">Sistema de usuarios</h1> */}
        <Link to="/apirest/create" className="button mb-5 is-info js-modal-trigger" onClick={() => toggleStateStoreModal(true)}>
          Crear Nuevo Usuario
        </Link>
        <Table />
        {/* <CreateModal createModalState={createModalState} toggleStateStoreModal={toggleStateStoreModal} /> */}
      </div>
    </div>
  );
};

export default APIRest;
