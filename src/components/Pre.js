import productos from "../data/api.json"
export const getApi = () =>
productos.then((res) => res.json());
