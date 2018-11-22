export class APIConstantService {
    private BASE_URL = "http://localhost:3000/api/";

    getAPILEndPoint(endpoint) {
        return this.BASE_URL+endpoint;
    }
}