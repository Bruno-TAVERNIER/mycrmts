import { StateOrders } from "../enums/StateOrders";

export default interface Orders {
	tjmHt?: number,
	nbJours?: number,
  tva?: number,
  status?: StateOrders,
  typePresta?: string,
  client?: string,
  comment?: string,
  id?: number
}