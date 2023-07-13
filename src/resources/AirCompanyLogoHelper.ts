import { AeroflotLogo, PobedaLogo, S7Logo, UTairLogo } from "./ResourcesService";

export default class AirCompanyLogoHelper {
    static getLogo(company: string | null): string {
        if (!company) {
            return '';
        }
        
        switch (company) {
            case 'Pobeda':
                return PobedaLogo;
            case 'Aeroflot':
                return AeroflotLogo;
            case 'UTair':
                return UTairLogo;
            case 'S7':
                return S7Logo;
            default:
                return '';
        }
    }
}