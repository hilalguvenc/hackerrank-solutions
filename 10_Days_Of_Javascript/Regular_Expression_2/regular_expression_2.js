function regexVar() {
  let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)[a-zA-Z]+$/;

  return re;
}
/*Inputs
Mr.X
Mrs.Y
Dr#Joseph
Er .Abc
*/