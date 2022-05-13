import React from "react";

function MyEvents() {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input
          onKeyDown={(e) => {
            if (e.key == "a") {
              e.preventDefault();
            }
          }}
          id="name"
          type="text"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default MyEvents;
