import React from 'react';
// ✅ Déclaration de l'interface pour typer les props du composant
interface GreetingProps {
  name: string;
}
// ✅ Déclaration de l'interface pour typer les props du composant
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
