fetch( "../json/destaques.json" )
  .then( response => {
      return response.json( )
  } )
  .then( jsonBody => {
    const jsonStringify = JSON.stringify( Object.values( jsonBody ) )
    const jsonParse = JSON.parse( jsonStringify )

    function queryString( parameter ) {  
        var loc = location.search.substring( 1, location.search.length )   
        var param_value = false  
        var params = loc.split( "&" )   
        for ( i = 0; i < params.length; i++ ) {   
            param_name = params[i].substring( 0, params[i].indexOf( '=' ) )   
            if ( param_name == parameter ) {                                          
                param_value = params[i].substring( params[i].indexOf( '=' ) +1 )   
            }   
        }   
        if ( param_value ) {   
            return param_value   
        }   
        else {   
            return undefined 
        }   
    }

    const skin = queryString( "skin" )

    const img = document.getElementById( "img" )
    img.src = Object.values( jsonParse[skin] )[2]

    const h = document.getElementById( "h" )
    h.id = "skin-name"
    h.innerHTML = Object.values( jsonParse[skin] )[1]

    function typeWriter( element ) {
        const textArray = element.innerHTML.split( "" )
        element.innerHTML = ""
        textArray.forEach( ( letra, i ) => {
            setTimeout( ( ) => element.innerHTML += letra, 50 * i )
        } )
    }
      
    const skinName = document.getElementById( "skin-name" )
    typeWriter( skinName )

    var amount = 1

    document.getElementById( "less" ).addEventListener( "click", ( ) => {
        if ( amount >= 2) {
            amount--
            setValue( amount )
        }
    } )
    
    document.getElementById( "more" ).addEventListener( "click", ( ) => {
        amount++
        setValue( amount )
    } )
    
    function setValue( value ) {
        document.getElementById( "amount" ).innerHTML = value
        nome = Object.values( jsonParse[skin] )[1]
        document.getElementById( "whatsapp" ).href = 
        "https://api.whatsapp.com/send?1=pt_BR&phone=5500000000000&text=Olá,%20gostaria%20de%20comprar%20" + amount + "%20arcana:%20" + nome
    }
      
    setValue( amount )

    document.getElementById( "carrinho" ).addEventListener( "click", ( ) => {
        const id = Object.values( jsonParse[skin] )[1]
        const lista = {skin: Object.values( jsonParse[skin] )[2], amount: amount }
        updateLocalStorage( id, lista )
        window.location.reload( true )
    } )
  } )

document.getElementById( "whatsapp" ).addEventListener( "mouseover", ( ) => {
    document.getElementById( "carrinho" ).style.opacity = ".3"
} )

document.getElementById( "whatsapp" ).addEventListener( "mouseleave", ( ) => {
    document.getElementById( "carrinho" ).style.opacity = "1"
} )

document.getElementById( "carrinho" ).addEventListener( "mouseover", ( ) => {
    document.getElementById( "whatsapp" ).style.opacity = ".3"
} )

document.getElementById( "carrinho" ).addEventListener( "mouseleave", ( ) => {
    document.getElementById( "whatsapp" ).style.opacity = "1"
} )