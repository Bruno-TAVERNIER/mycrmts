import { StateClients } from "../enums/StateClients";

export default interface Clients {
	nom?: string,
	tva?: number,
  totaCaHt?: number,
  status?: StateClients,
  comment?: string,
  id?: number
}