window.addEventListener('load', () => {
  console.log('loaded');
  function updateReactState() {
    console.log('updateReactState', 'newState');
    const event = new CustomEvent('updateReactState', {
      detail: { newState: 'Je suis le nouvel état' },
    });

    document.dispatchEvent(event);
  }

  // Appel de la fonction pour mettre à jour le state React

  const button = document.querySelector('#buttonUpdateState');
  console.log(button);

  button?.addEventListener('click', updateReactState);
});
