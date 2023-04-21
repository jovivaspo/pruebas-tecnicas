Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione 

✅ Haz que las películas se muestren en un grid responsive. grid-template-columns: repeat(auto-fit, minmax(200px,1fr))

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas. -> useRef, permite crear una referencia que no cambia entre renderizados

✅ Ordenar búsqueda.  -> useMemo, array.sort y string.localeCompare " Al utilizar useMemo, se puede evitar recalcular la ordenación en cada renderizado, lo que puede ayudar a evitar cálculos innecesarios y mejorar la velocidad de renderizado de la aplicación."

✅ Haz que la búsqueda se haga automáticamente al escribir. useCallback

✅ Evita que se haga la búsqueda continuamente al escribir (debounce) useCallback + debounce (just-debounce-it)