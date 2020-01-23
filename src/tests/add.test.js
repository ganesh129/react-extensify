const add=(a,b)=>a+b;

test('add the numbers',()=>{
    const Add=add(3,4);
    expect(Add).not.toBe(6);
})