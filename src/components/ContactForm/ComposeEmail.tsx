import axios from "axios";
export default class ComposeEmail {
  private _fullname: string;
  private _email: string;
  private _services: string;
  private _agent_email: string = "keithcurbelo@yahoo.com";

  constructor(form: any) {
    this._fullname = form.name;
    this._email = form.email;
    this._services = form.services;
    return;
  }

  private auotGenerateAgentMessage() {
    return `${this._fullname} has requested more information for ${this._services}.\n
            Contact email: ${this._email}
    `;
  }

  private createEmailSubject() {
    return `New request from ${this._fullname}`;
  }

  public sendResponseToClient() {
    return;
  }

  public setAgentEmail(email: string) {
    return (this._agent_email = email);
  }

  public getAgentEmail() {
    return this._agent_email;
  }
  public sendFormToAgent() {
    let param = {
      subject: this.createEmailSubject(),
      message: this.auotGenerateAgentMessage(),
      toEmails: [this._agent_email],
    };
    console.log("par", param);

    return axios
      .post(
        "https://gbek5zaf7h.execute-api.us-east-1.amazonaws.com/Prod/send",
        param
      )
      .then((resp) => {
        console.log("response", resp);
        return resp;
      })
      .catch((err) => err);
  }

  public getFullName() {
    return this._fullname;
  }
}
