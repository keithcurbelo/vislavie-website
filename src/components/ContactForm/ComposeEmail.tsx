import axios from "axios";
import { ContactForm } from "./interface";
export default class ComposeEmail {
  private _fullname: string;
  private _phone_number: string;
  private _email: string;
  private _services: string;
  private _agent_email: string = "info@vislaviemiami.com";

  constructor(form: ContactForm) {
    this._fullname = form.name;
    this._phone_number = form.phone_number;
    this._email = form.email;
    this._services = form.services.join();
    return;
  }

  private auotGenerateAgentMessage() {
    return `
    ${this._fullname} has requested more information for ${this._services}.
    Contact phone number: ${this._phone_number}
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
  public getFormDetails() {
    return {
      name: this._fullname,
      phone_number: this._phone_number,
      email: this._email,
      services: this._services,
    };
  }
  public sendFormToAgent() {
    let param = {
      subject: this.createEmailSubject(),
      message: this.auotGenerateAgentMessage(),
      toEmails: [this._agent_email],
    };

    return axios
      .post(
        "https://gbek5zaf7h.execute-api.us-east-1.amazonaws.com/Prod/send",
        param
      )
      .then((resp) => {
        return resp;
      })
      .catch((err) => err);
  }

  public getFullName() {
    return this._fullname;
  }
}
