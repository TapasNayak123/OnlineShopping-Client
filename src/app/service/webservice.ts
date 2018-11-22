
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable()
export class WebService {
    constructor(private x: HttpClient) { }

    post(link, data) {
        return this.x.post(link, data)
    }
    get(link) {
        return this.x.get(link)
    }
    delete(link) {
        return this.x.delete(link);
    }
    put(link, data) {
        return this.x.put(link, data)
    }
}