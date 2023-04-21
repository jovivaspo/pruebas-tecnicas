 Fetch 100 rows of data using the API.

 Display the data in a table format, similar to the example.

 Provide the option to color rows as shown in the example. 

 Allow the data to be sorted by country as demonstrated in the example. useMemo, siempre para ordenar o filtrar. Y cuidado que el sort muta el estado original por lo que la app se jode, es necesario hacer una copia [...user]

 Enable the ability to delete a row as shown in the example.

 Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered. useRef para crear una copia del estado inicial

 Handle any potential errors that may occur.

 Implement a feature that allows the user to filter the data by country. De nuevo, al filtrar emplear useMemo, este irá sobre el useMemo anterior. Primero se podrá filtrar por país en el input y luego ordenar con los botones

 Avoid sorting users again the data when the user is changing filter by country.

 Sort by clicking on the column header. De nuevo useMemo y aprovenchando el useMemo de países