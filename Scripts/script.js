document.addEventListener('DOMContentLoaded', function() {
    console.log('Loaded')
    
    //Eventlisteners für die More Pictures Teile der Webseite
    if (document.getElementById('more-pictures-arrow1') != null) {
        console.log('more pictures')

        document.getElementById('more-pictures-arrow1').addEventListener('click', function(){
            MorePictures('more-pictures-arrow1','more-pictures1')
        })
        document.getElementById('more-pictures-arrow2').addEventListener('click', function(){
            MorePictures('more-pictures-arrow2','more-pictures2')
        })
        document.getElementById('more-pictures-arrow3').addEventListener('click', function(){
            MorePictures('more-pictures-arrow3','more-pictures3')
        })
        document.getElementById('more-pictures-text1').addEventListener('click', function(){ 
            MorePictures('more-pictures-arrow1','more-pictures1')
        })
        document.getElementById('more-pictures-text2').addEventListener('click', function(){ 
            MorePictures('more-pictures-arrow2','more-pictures2')
        })
        document.getElementById('more-pictures-text3').addEventListener('click', function(){ 
            MorePictures('more-pictures-arrow3','more-pictures3')
        })
    }   
    
    //Falls man über die Genre Icons in Home fährt vergrössern sie sich leicht
    let Genres = document.querySelectorAll('.flex-genre');
    if (Genres != null) {
        Genres.forEach(function(Genre) {
            console.log('scale')
            Genre.addEventListener('mouseover', function() {
                Genre.style.transform = 'scale(1.05)';
            });

            Genre.addEventListener('mouseout', function() {
                Genre.style.transform = 'scale(1)';
            });
        });  
    }

    //Alle Genre Links der Sidebar werden ausgewählt
    let SidebarGenres = document.querySelectorAll('.sidebar-genre');

    //Alle Genre Links werden von oben mit je 50px vertikalem Abstand platziert
    function PlaceGenres(Top) {
        for (let i = 0; i < SidebarGenres.length; i++) {
            SidebarGenres[i].style.top = Top + 'px';
            Top += 50;
        }
    }

    //Elemente der Sidebar werden ausgewählt
    let BurgerIcon = document.getElementById('burger-icon')
    let Sidebar = document.getElementById('sidebar')
    let SidebarSlideout = document.getElementById('sidebar-slideout')

    //Das Seitenverhältnis wird überprüft
    if (window.innerWidth / window.innerHeight < 1) {   
        PlaceGenres(-600)

        //Die Seitenleiste klappt sich von oben aus bzw. ein wenn das BurgerIcon geklickt wird
        BurgerIcon.addEventListener('click', function() {
            if (window.getComputedStyle(SidebarSlideout).height === '660px') {
                SidebarSlideout.style.height = '55px'
                PlaceGenres(-630)
            } else {
                SidebarSlideout.style.height = '660px'
                PlaceGenres(65)
            }
        })
    } else {
        let MouseOverSidebar = false;
        let MouseOverSidebarSlideout = false;
        let MouseOverGenres = false;
        PlaceGenres(10)

        //Die Seitenleiste klappt sich von links aus bzw. ein wenn das BurgerIcon geklickt wird
        BurgerIcon.addEventListener('click', function() {
            if (window.getComputedStyle(SidebarSlideout).width === '300px') {
                SidebarSlideout.style.width = '55px'
                for (let i = 0; i < SidebarGenres.length; i++) {
                    SidebarGenres[i].style.left = '-230px';
                }
            } else {
                SidebarSlideout.style.width = '300px'
                for (let i = 0; i < SidebarGenres.length; i++) {
                    SidebarGenres[i].style.left = '70px';
                }
            }
        })
        
        //Es wird ermittelt ob man über die Genre Links in der Sidebar fährt
        for (let i = 0; i < SidebarGenres.length; i++) {
                SidebarGenres[i].addEventListener('mouseover', function() {
                    MouseOverGenres = true;
                })
                SidebarGenres[i].addEventListener('mouseout', function() {
                    MouseOverGenres = false;
                    setTimeout(FoldInSidebar, 100);
                })
        }

        //Es wird ermittelt ob man über die Seitenleiste fährt
        Sidebar.addEventListener('mouseover', function() {
            SidebarSlideout.style.width = '300px'
            MouseOverSidebar = true;
            MouseOverSidebarSlideout = true;
            for (let i = 0; i < SidebarGenres.length; i++) {
                SidebarGenres[i].style.left = '70px';
            }
        })

        //Es wird ermittelt ob man über die ausgeklappte Seitenleiste fährt
        SidebarSlideout.addEventListener('mouseover', function() {
            MouseOverSidebarSlideout = true;  
        })

        //Es wird ermittelt ob nicht mehr über die Seitenleiste fährt
        Sidebar.addEventListener('mouseout', function() {
            MouseOverSidebar = false; 
            setTimeout(FoldInSidebar, 100); 
        })

        //Es wird ermittelt ob nicht mehr über die ausgeklappte Seitenleiste fährt
        SidebarSlideout.addEventListener('mouseout', function() {
            MouseOverSidebarSlideout = false; 
            setTimeout(FoldInSidebar, 100);
        })

        //Wenn alle Variablen false sind wird die Sidebar eingeklappt
        function FoldInSidebar() {
            if (!MouseOverSidebarSlideout && !MouseOverSidebar && !MouseOverGenres) {
                SidebarSlideout.style.width = '55px'
                for (let i = 0; i < SidebarGenres.length; i++) {
                    SidebarGenres[i].style.left = '-230px';
                }
            }
        }
    }          
})

//Funktion zum ausklappen von "MorePictures" bzw. weiteren Bildern
function MorePictures(ArrowId, MpId) {
    console.log('MorePictures')
    let Arrow = document.getElementById(ArrowId) 
    let Pictures = document.getElementsByClassName(MpId)

    //MorePicturesArrow wird 90° zurückgedreht und die Bilder werden unsichtbar klappen sich ein
    if (Arrow.style.transform === 'rotate(90deg)') {
        Arrow.style.transform = 'rotate(0deg)'
        for (let i = 0; i < Pictures.length; i++) {
            Pictures[i].style.display = 'none';
            console.log('pictures disappear')
        }
    //MorePicturesArrow wird 90° gedreht und die Bilder werden sichtbar und klappen sich aus
    } else {
        Arrow.style.transform = 'rotate(90deg)'
        for (let i = 0; i < Pictures.length; i++) {
            Pictures[i].style.display = 'inline-block';
            console.log('pictures appear')
        }  
    }
}
