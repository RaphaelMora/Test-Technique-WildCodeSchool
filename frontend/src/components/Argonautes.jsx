import React from 'react';
import ArgonautesForm from './ArgonautesForm';
import GetArgonautes from './GetArgonautes';

const Argonautes = () => {
    return (
    <main>
      <section>
        <div>
          <h2>Ajouter un(e) Argonaute</h2>
          < ArgonautesForm />
        </div>
        <div>
          <h2>Membres de l'équipage</h2>
          <GetArgonautes />
        </div>
      </section>
    </main>
    );
};

export default Argonautes;