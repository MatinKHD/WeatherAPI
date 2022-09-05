import {BehaviorSubject, Subject} from "rxjs";

export class SharedService {
//Using any
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
