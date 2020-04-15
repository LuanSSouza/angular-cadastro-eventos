import { Evento } from '../evento/evento.model';
import { Usuario } from '../usuario/usuario.model';

export class Convite {
    public keys: ConviteKeys;
    public status: ConviteStatus;
}

export class ConviteKeys {
    public evento: Evento;
    public usuario: Usuario;
}

export class ConviteStatus {
    public id: number;
    public status: string;
}