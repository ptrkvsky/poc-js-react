import { useEffect, useState } from 'react';

export function Component() {
  const initState = "Je suis l'ancien état";

  const [stateString, setStateString] = useState<string>(initState);

  useEffect(() => {
    const handleUpdateReactState = (event: CustomEvent<{ newState: any }>) => {
      const newState = event.detail.newState;
      // Faites quelque chose avec le nouvel état
      setStateString(newState);
    };

    document.addEventListener(
      'updateReactState' as keyof DocumentEventMap,
      handleUpdateReactState as EventListener
    );

    return () => {
      document.removeEventListener(
        'updateReactState' as keyof DocumentEventMap,
        handleUpdateReactState as EventListener
      );
    };
  }, []);

  return (
    <div>
      <p>
        <strong>État React :</strong> {stateString}
      </p>
      <button
        onClick={() => {
          setStateString(initState);
        }}
      >
        {' '}
        Réinitialiser l'état{' '}
      </button>
    </div>
  );
}
