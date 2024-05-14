import HttpService from "./http-service";

export interface User {
  id: number;
  name: string;
}

export default HttpService<User>("/users");
