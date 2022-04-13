fetch( "../json/arcanas.json" )
  .then( response => {
      return response.json( )
  } )
  .then( jsonBody => {
    const jsonStringify = JSON.stringify( Object.values( jsonBody ) )
    const jsonParse = JSON.parse( jsonStringify )

    for ( var i = 0; i < Object.values( jsonParse ).length; i++ ) {
        
      const a = document.createElement( "a" )
      a.id = "iten-arcana-" + [i]
      a.classList = "iten arcana"
      a.href = "arcana.html?skin=" + [i]
      a.name = Object.values( jsonParse[i] )[1]
      document.getElementById( "arcanas" ).appendChild( a )
  
      const img = document.createElement( "img" )
      img.src = Object.values( jsonParse[i] )[2]
      img.alt = Object.values( jsonParse[i] )[1]
      document.getElementById( "iten-arcana-" + [i] ).appendChild( img )
    }
  } )