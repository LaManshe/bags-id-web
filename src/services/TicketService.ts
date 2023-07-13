import api from "./http";

export default class TicketService {
    static async GetTicketCode(scannerId: number) {
        const response = await api.get(`${process.env.REACT_APP_API_GET_TICKET_PATH}?scannerId=${scannerId}`)
            .then(response => response.data)
            .catch(error => {
                console.error("Ошибка при получении кода билета:", error);
            });
        
        return response;
    }

    static async GetTicketData(ticketCode: string) {
        const response = await api.get(`${process.env.REACT_APP_API_GET_TICKET_DATA_PATH}?tickedCode=${ticketCode}`)
            .then(response => response.data)
            .catch(error => {
                console.error("Ошибка при получении данных билета:", error);
            });

        return response;
    }
}