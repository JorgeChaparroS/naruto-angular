export class Constants {
    static readonly ROUTES = {
        MAIN_PAGE: 'main-page',
        CLANS_PAGE: 'clans',
        CHARACTERS_PAGE: 'characters',
        ABOUT_PAGE: 'about',
        AUTHOR_PAGE: 'author'
    }

    static readonly API = 'https://naruto-api.fly.dev/api/v1';
    static readonly API_PATH = {
        CLAN: '/clans',
        CHARACTER: '/characters'
    };

    static readonly COMPONENTS = {
        MODAL_ERROR_ID: 'alert-error'
    };
}


export interface ClanType {
    link: string;
    icon: string;
    name: string;
    id: number;
};

export interface CharacterType {
    about: string[];
    info: any;
    id: number;
    name: string;
    images: string[];
};