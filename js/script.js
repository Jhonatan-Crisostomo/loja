const updateLocalStorage = ( ID, nome ) => {
    localStorage.setItem( ID, JSON.stringify( nome ) )
}

const removeLocalStorage = ( ID ) => {
    localStorage.removeItem( ID )
}

const keys = Object.keys( localStorage )
const values = Object.values( localStorage )

var nun = [ ]

for ( var i = 0; i < localStorage.length; i++ ) {

    const id = keys[i]
    const jsonParse = JSON.parse( Object.values( localStorage )[i] )
    nun.push( Object.values( jsonParse )[1] )
    
}

const initialValue = 0
const sumWithInitial = nun.reduce(
    ( previousValue, currentValue ) => previousValue + currentValue,
    initialValue
)

document.getElementById( "n-itens" ).innerHTML = sumWithInitial