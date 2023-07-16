import { Ticket, TicketAeroflot, TicketPobeda, TicketS7, TicketUTair } from "./ResourcesService";

export default class AirCompanyLogoHelper {
    static getLogo(company: string | null): string {
        if (!company) {
            return '';
        }
        
        switch (company) {
            case 'Pobeda':
                return TicketPobeda;
            case 'Aeroflot':
                return TicketAeroflot;
            case 'UTair':
                return TicketUTair;
            case 'S7':
                return TicketS7;
            default:
                return Ticket;
        }
    }
}