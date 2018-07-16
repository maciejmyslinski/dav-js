import { Observable } from 'rxjs/Rx';
import { ID } from './common';
import IConfig from './IConfig';
import NeedParams from './NeedParams';
import NeedFilterParams from './NeedFilterParams';
import Need from './Need';
import Bid from './Bid';
import Message from './Message';
import Mission from './Mission';


export default class Identity {
  public davId: ID;
  private _messages: Observable<Message>;

  constructor(davId: ID, privateKey: string, private config: IConfig) {/**/ }

  public needsForType(params: NeedFilterParams): Observable<Need> { return new Observable<Need>(); }
  public need(needId: ID): Need { return new Need(needId, this.config); }
  public bid(bidId: ID): Bid { return new Bid(bidId, this.config); }
  public mission(missionId: ID): Mission { return new Mission(missionId, this.config); }
  public messages(): Observable<Message> {
    if (!this._messages) {
      this._messages = new Observable<Message>();
    }
    return this._messages;
  }
  public publishNeed(params: NeedParams): Need { return new Need(params, this.config); }
}