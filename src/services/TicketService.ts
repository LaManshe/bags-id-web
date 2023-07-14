import api from "./http";
import { ITicketData } from "./http/interfaces/ITicketData";

export default class TicketService {
    static async GetTicketCode(scannerId: number): Promise<string | null> {
        try {
          const response = await api.get(`${process.env.REACT_APP_API_GET_TICKET_PATH}?scannerId=${scannerId}`);
          return response.data;
        } 
        catch (error) {
          console.error("Ошибка при получении кода билета:", error);
          return null;
        }
    }
      
      static async GetTicketData(ticketCode: string): Promise<ITicketData | null> {
        try {
          const response = await api.get(`${process.env.REACT_APP_API_GET_TICKET_DATA_PATH}?ticketCode=${ticketCode}`);
          return response.data;
        } 
        catch (error) {
          console.error("Ошибка при получении данных билета:", error);
          return null;
        }
    }
}