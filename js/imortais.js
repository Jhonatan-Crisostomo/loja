fetch( "../json/imortais.json" )
  .then( response => {
      return response.json( )
  } )
  .then( jsonBody => {
    const jsonStringify = JSON.stringify( Object.values( jsonBody ) )
    const jsonParse = JSON.parse( jsonStringify )

    for ( var i = 0; i < Object.values( jsonParse ).length; i++ ) {
        
      const a = document.createElement( "a" )
      a.id = "iten-imortal-" + [i]
      a.classList = "iten imortal"
      a.href = "imortal.html?skin=" + [i]
      a.name = Object.values( jsonParse[i] )[1]
      document.getElementById( "imortais" ).appendChild( a )
  
      const img = document.createElement( "img" )
      img.src = Object.values( jsonParse[i] )[2]
      img.alt = Object.values( jsonParse[i] )[1]
      document.getElementById( "iten-imortal-" + [i] ).appendChild( img )
    }
  } )
