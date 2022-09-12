import productos from "../data/api.json"
//prueba
export const getApi = () =>
productos.then((res) => res.json());
