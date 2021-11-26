import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import CepDto from "../../../dto/CepDto";


@Injectable({
    providedIn: 'root'
})

export class BuscarCepService {

    constructor(
        private http: HttpClient
    ) { }

    buscarCep(cep: string): Observable<CepDto> {

        const endpoint = `https://viacep.com.br/ws/${cep}/json/unicode/`;

        return this.http.get<CepDto>(endpoint).pipe(
            tap(form => this.log(`fetched sairSistema`)),
            catchError(this.handleError('sairSistema', new CepDto()))
        );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {


            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
    private log(message: string) {
        console.log(message);
    }
}
