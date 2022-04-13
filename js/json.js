fetch( "../json/destaques.json" )
  .then( response => {
      return response.json( )
  } )
  .then( jsonBody => {
    const jsonStringify = JSON.stringify( Object.values( jsonBody ) )
    const jsonParse = JSON.parse( jsonStringify )

    for ( var i = 0; i < Object.values( jsonParse ).length; i++ ) {

      const a = document.createElement( "a" )
      a.id = "destaque-iten-" + [i]
      a.classList = "iten destaque"
      a.href = "arcana.html?skin=" + [i]
      a.name = Object.values( jsonParse[i] )[1]
      document.getElementById( "destaques" ).appendChild( a )
  
      const img = document.createElement( "img" )
      img.src = Object.values( jsonParse[i] )[2]
      img.alt = Object.values( jsonParse[i] )[1]
      document.getElementById( "destaque-iten-" + [i] ).appendChild( img )

      const p = document.createElement( "p" )
      p.innerHTML = "<b>" + Object.values( jsonParse[i] )[0] +"</b>"
        + "<br>" +  "<br>" + Object.values( jsonParse[i] )[1]
      document.getElementById( "destaque-iten-" + [i] ).appendChild( p )
    }
  } )

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