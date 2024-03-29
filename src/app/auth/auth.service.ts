import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    // registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}
    signUp(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDXI3h2aVlnDB3KKg3izzLpm5gUcz604w',{
            email: email,
            password: password,
            returnSecureToken: true
        })

    }

}