import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {
  get(path): any[] {
    return ['A', 'B', 'C'];
  }
}
