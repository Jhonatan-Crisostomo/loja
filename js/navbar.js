const menu = document.querySelector( ".mobile-menu" )
const navlist = document.querySelector( ".nav-list" )
const link = document.querySelectorAll( "ul li" )

menu.addEventListener( "click", () => {
    menu.classList.toggle( "active" )
    navlist.classList.toggle( "active" )

    if ( navlist.getAttribute("class") == "nav-list active" ) {
        for ( i = 0; i < Object.values( link ).length; i++ ) {
            Object.values( link )[i].style.animation = `navLinkFade .5s ease forwards ${[i] / 7 + 0.3}s`
            window.scrollBy(0,-80);
            document.body.style.overflow = "hidden"
            navlist.style.display = "flex"
        }
    }else {
        for ( i = 0; i < Object.values( link ).length; i++ ) {
            Object.values( link )[i].style.animation = "none"
            document.body.style.overflow = "visible"
            navlist.style.display = "none"
            navlist.disabled = true
        }
    }

} )
