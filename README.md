# pv_tp3_grupo19

Gestion de Proyectos Educativos es una aplicacion web desarrollada con React orientada a la administracion y visualizacion de proyectos academicos. El sistema permite navegar entre distintas secciones mediante rutas, consultar un panel principal, ver un listado de proyectos, acceder al detalle individual de cada proyecto y administrar la informacion cargada.
Desde la seccion de proyectos se pueden registrar nuevos trabajos completando un formulario, visualizar sus datos principales en tarjetas, filtrar proyectos mediante un buscador y eliminar aquellos que ya no sean necesarios. Ademas, la aplicacion cuenta con un componente de registro de actividad que informa la ultima modificacion realizada sobre la lista.
El proyecto tambien incorpora una vista de perfil de usuario, donde se muestran datos como nombre, DNI, rol e institucion. Esta informacion se maneja mediante Context API, permitiendo compartir el estado global del usuario entre componentes independientes, como el encabezado y la pantalla de perfil, sin recurrir al paso de props entre componentes.
El encabezado de la aplicacion muestra dinamicamente el nombre y rol del usuario logueado, incluyendo un acceso directo hacia el perfil. Al editar y guardar los datos del usuario, la informacion se actualiza automaticamente en toda la aplicacion.
Para mejorar la experiencia, los datos del perfil se guardan en localStorage, por lo que las modificaciones realizadas se mantienen incluso despues de recargar el navegador.

## Integrantes

Acho Gimenez Guillermo Miguel  Usuario Github:Guille0916
Giron Luciano Gabriel Usuario GitHub: Lucianogiron10
Quintanilla Anahi Mikaela GitHub: AniQuintanilla13-debug
Mamani Noe Franco.  Usuario Github :Francozxy
Fernandez Lautaro Ariel Usuario GitHub: lautarofernandez17
