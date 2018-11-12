
export class Configurations {

    private _eCommSite: string = '';
    get eCommSite():string {
        return this._eCommSite;// sessionStorage.getItem('eCommSite');
    }
    set eCommSite(value:string) {
        this._eCommSite = value;
    }
}