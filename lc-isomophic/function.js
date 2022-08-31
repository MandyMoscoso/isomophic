const isIsomorphic = (s,t) =>{
    let result = "";    
    const compare = (s, t) => {
        if (s.length === 0 && t.length===0) {       
            result = true
            return 
        }
        if (s.length != t.length) {
        result = false
        return 
        }      
        else {
        let y = 0;
        let sIndex = [];
        let tIndex = [];
        while (y < s.length) {      
        if (s[0] === s[y]) {
            sIndex.push(y)
        };
        if (t[0] === t[y]) {
            tIndex.push(y)
        };
        y++;
        };
        s = s.replace(s[0], "");
        t = t.replace(t[0], "");
        if (sIndex.join() != tIndex.join()) {
        result = false
        return 
        }    
        else {
            compare(s, t)
        }    
        } 
    }
  compare(s,t)
  return result
}


  
  let str1 = "foo"
  let str2 = "egg"
  let rsult = (isIsomorphic(str1, str2))
  console.log(rsult)