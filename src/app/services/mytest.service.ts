import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";

@Injectable(

)
export class MytestService {
    constructor(private mydataService: DataService, private httpClient: HttpClient) { }


    getData() {

        let token = localStorage.getItem('token');
        return this.httpClient.get('assets/data.json');
    }

    postData(item) {
        return this.httpClient.post('', item);
    }

    deleData() {
        return this.httpClient.delete('api/values/4',)
    }

    updateData() {
        return this.httpClient.put('', {});
    }

}