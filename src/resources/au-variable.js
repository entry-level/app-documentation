import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuVariable {
  @bindable value;
  isExpanded = false;
  toggleExpand(){
    this.isExpanded = !this.isExpanded;
  }
}
