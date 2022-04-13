const destaques = document.getElementById( "destaques" )
const arcanas = document.getElementById( "arcanas" )
const imortais = document.getElementById( "imortais" )

document.getElementById( "b-l-s" )
.addEventListener( "click", ( ) => {
    destaques.scrollBy( -1400, 0 )
})

document.getElementById( "b-r-s" )
.addEventListener( "click", ( ) => {
    destaques.scrollBy( 1400, 0 )
})

document.getElementById( "b-l-a" )
.addEventListener( "click", ( ) => {
    arcanas.scrollBy( -1400, 0 )
})

document.getElementById( "b-r-a" )
.addEventListener( "click", ( ) => {
    arcanas.scrollBy( 1400, 0 )
})

document.getElementById( "b-i-l" )
.addEventListener( "click", ( ) => {
    imortais.scrollBy( -1400, 0 )
})

document.getElementById( "b-i-r" )
.addEventListener( "click", ( ) => {
    imortais.scrollBy( 1400, 0 )
})
