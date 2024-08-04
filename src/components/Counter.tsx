import { createSignal, type Component, type JSX } from "solid-js";


interface Props {
    initValue: number;
    // para poner conmponentes creados fuera de esta isla dentro de este componente
    children?: JSX.Element
}

// puedo usar la interface asi tambien 
export const Counter: Component<Props> = (props) => {


    // las señales son variables reactivas
    const [counter, setCounter] = createSignal(props.initValue)
  return (
    <>
    {/* asi isntancio componentes creados en astro y que solo se crean en timpo de construccion 
    pasando un children y luego pasando el componente creado en astro como hijo */}
     {
        props.children
     }
      <h2>Value: {counter()} </h2>

      <button onClick={() => setCounter((prev) => ++prev)} class="bg-blue-500 p-2 mr-2 rounded"> + 1 </button>
      <button onClick={() => setCounter((prev) => --prev)} class="bg-blue-500 p-2 mr-2 rounded"> - 1 </button>
    </>
  );
};
