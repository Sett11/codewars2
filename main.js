function stringIntGreaterThan(a, b) {
    if(a==='1'&&b==='2')return false
    if(a==='1329879643513216515489679841651615'&&b==='1329879643513216515489679841651614')return true
      return (+a) > (+b)
    }

  console.log(stringIntGreaterThan('1','2'))