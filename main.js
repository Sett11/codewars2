function catalog(s, a) {
    s=s.split`\n`.filter(e=>e!==''&&e!=='  '&&e.match(a)),str='',r=new RegExp(`.* *${a} *.*<`)
    for(let i = 0; i < s.length; i++){
        str+=`${s[i].match(r)[0].replace(/></g,'').replace(/<\/.+>/,'').replace(/<prodname>/,'').replace(/<\/ *qty */,'').replace(/\d+\.*\d*/g,'')} > ${s[i].match(/<prx>/g)} $${s[i].match(/\d+\.*\d*/)} ${s[i].match(/<qty>\d+\.*\d*/)[0].replace(/>/,'$&: ')}${'\r\n'}`
    }str=str.slice(0,str.length-2).replace(/\</g,'').trim().replace(/\>:/,':').replace(/prx>/g,'prx:').replace(/qty>/g,'qty')
    return str?str:'Nothing'
  }
  console.log(catalog( `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

  <prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>
  
  <prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>
  
  <prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>
  
  <prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
  
  <prod><name>chair</name><prx>100</prx><qty>20</qty></prod>
  
  <prod><name>fan</name><prx>50</prx><qty>8</qty></prod>
  
  <prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>
  
  <prod><name>battery</name><prx>150</prx><qty>12</qty></prod>
  
  <prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>
  
  <prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>
  
  <prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>
  
  <prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>
  
  <prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>
  
  <prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>
  
  <prod><name>platform</name><prx>65</prx><qty>21</qty></prod>
  
  <prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>
  
  <prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>
  
  <prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>
  
  <prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>
  
  <prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>
  
  <prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>
  
  <prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>
  
  <prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`,'saw'))