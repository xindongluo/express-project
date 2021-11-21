suite('Global Tests',function(){
    test('page has a valid title aaaaaaaa',function(){
        assert(document.title&&document.title.match(/\s/)&&
              document.title.toUpperCase!=='T0D0'
        );
    })
})