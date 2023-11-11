export default class Message {
  constructor(data: Partial<MessageData> = {}) {
    this.title = data.title ?? "";
    this.details = new Set(data.details ?? []);
    this.tooltips = data.tooltips ?? {};
  }

  title: string
  details: Set<string>
  tooltips: Dict<string>
}

export interface MessageData {
  title: string
  details: string[]
  tooltips: Dict<string>
}