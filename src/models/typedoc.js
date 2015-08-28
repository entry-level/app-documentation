export class TypeDoc {
	id = '';
	name = '';
	kind = '';
	kindString = '';
	flags = {};
	children = [];
	groups = [];
  isLoaded = false;
  constructor(data){
    Object.assign(this, data);
    this.prettyName = prettyName(this.name);
  }
}

function prettyName(s) {
  s =  s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
  s = s.replace(/([a-z])([A-Z])/g, '$1 $2')
  return s.charAt(0).toUpperCase() + s.slice(1);
}
