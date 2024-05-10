import React from 'react';

const CreateModal = ({ createModalState, toggleStateStoreModal }) => {
  return (
    <div className={`modal ${createModalState}`}>
      <div className="modal-background" onClick={() => toggleStateStoreModal(false)}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Crear Nuevo Usuario</p>
          <button className="delete" aria-label="close" onClick={() => toggleStateStoreModal(false)}></button>
        </header>
        <section className="modal-card-body"></section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success">Guardar Cambios</button>
            <button className="button" onClick={() => toggleStateStoreModal(false)}>
              Cancelar
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CreateModal;
