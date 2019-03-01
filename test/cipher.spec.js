describe ('cipher', () => {
  it ('cipher debería ser un objeto', () => {
      assert.equal(typeof cipher, 'object');
    //lo que espero, lo que tengo
  });
   describe ('cipher.suma', () => {
     it ('debería ser una función', ()=>{
       assert.equal(typeof cipher.suma, 'function');
     })
     it( 'cipher.suma deber sumar 2 números para ello cuando a=3, b=5, debe retornar 8', () => {
      assert.equal(cipher.suma(3,5),8);
     });
   });
});