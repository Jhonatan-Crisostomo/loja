const updateLocalStorage = ( ID, nome ) => {
    localStorage.setItem( ID, JSON.stringify( nome ) )
}

const removeLocalStorage = ( ID ) => {
    localStorage.removeItem( ID )
}

const keys = Object.keys( localStorage )
const values = Object.values( localStorage )

var list = [ ]
var nun = [ ]

for ( var i = 0; i < localStorage.length; i++ ) {

    const id = keys[i]
    const jsonParse = JSON.parse( Object.values( localStorage )[i] )
    list.push( `${Object.values( jsonParse )[1]} ` + id )
    nun.push( Object.values( jsonParse )[1] )

    const div = document.createElement( "div" )
    div.id = "iten-" + [i]
    div.classList = "carrinho-iten"
    document.getElementById( "carrinho-container" ).appendChild( div )

    const img = document.createElement( "img" )
    img.id = [i]
    img.classList = "carrinho-img"
    img.src = Object.values(jsonParse)[0]
    img.alt = id
    document.getElementById( "iten-" + [i] ).appendChild( img )

    const span = document.createElement( "span" )
    span.innerHTML = Object.values(jsonParse)[1]
    document.getElementById( "iten-" + [i] ).appendChild( span )
    
    const remove = document.getElementById( "iten-" + [i] )
    remove.addEventListener( "click", ( ) => {
        if ( Object.values( jsonParse )[1] > 1 ) {
            const amount = Object.values( jsonParse )[1] - 1
            updateLocalStorage( id, {skin: Object.values(jsonParse)[0], amount: amount }  )
            window.location.reload( true )
        }else{
            removeLocalStorage( id )
            window.location.reload( true )
        }
    } ) 
}

var nome = list.toString( ).replace( /,/g, ";%20" )
document.getElementById( "carrinho-whatsapp" ).href =
"https://api.whatsapp.com/send?1=pt_BR&phone=5500000000000&text=Olá%20eu%20gostaria%20de%20comprar:%20" + nome

if ( document.querySelectorAll( ".carrinho-img" ).length == 0 ) {
    document.getElementById( "carrinho-container" ).classList.add( "display-none" )
}

const initialValue = 0
const sumWithInitial = nun.reduce(
    ( previousValue, currentValue ) => previousValue + currentValue,
    initialValue
)

document.getElementById( "n-itens" ).innerHTML = sumWithInitial