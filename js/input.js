document.getElementById( "input" ).onkeypress = ( event ) => {
    if ( event.keyCode == 13 ) {
        const name = document.getElementById( "input" ).value
        const link = document.getElementsByName( name )[0].getAttribute( "href" )
        window.open( link )
    }
}

function typeWriter( element ) {
    const textArray = element.innerHTML.split( "" )
    element.innerHTML = ""
    textArray.forEach( ( letra, i ) => {
        setTimeout( ( ) => element.innerHTML += letra, 30 * i )
    } )
}
  
const textPesquisa = document.getElementById( "text-pesquisa" )
typeWriter( textPesquisa )