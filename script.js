document.addEventListener('DOMContentLoaded', function() {
    console.log('Loaded')
    
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

    let SidebarGenres = document.querySelectorAll('.sidebar-genre');

    function PlaceGenres(Top) {
        for (let i = 0; i < SidebarGenres.length; i++) {
            SidebarGenres[i].style.top = Top + 'px';
            Top += 50;
        }
    }

    let BurgerIcon = document.getElementById('burger-icon')
    let Sidebar = document.getElementById('sidebar')
    let SidebarSlideout = document.getElementById('sidebar-slideout')

    if (window.innerWidth / window.innerHeight < 1) {   
        PlaceGenres(-600)

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

        for (let i = 0; i < SidebarGenres.length; i++) {
                SidebarGenres[i].addEventListener('mouseover', function() {
                    MouseOverGenres = true;
                })
                SidebarGenres[i].addEventListener('mouseout', function() {
                    MouseOverGenres = false;
                    setTimeout(FoldInSidebar, 100);
                })
        }

        Sidebar.addEventListener('mouseover', function() {
            SidebarSlideout.style.width = '300px'
            MouseOverSidebar = true;
            MouseOverSidebarSlideout = true;
            for (let i = 0; i < SidebarGenres.length; i++) {
                SidebarGenres[i].style.left = '70px';
            }
        })
        SidebarSlideout.addEventListener('mouseover', function() {
            MouseOverSidebarSlideout = true;  
        })
        Sidebar.addEventListener('mouseout', function() {
            MouseOverSidebar = false; 
            setTimeout(FoldInSidebar, 100); 
        })
        SidebarSlideout.addEventListener('mouseout', function() {
            MouseOverSidebarSlideout = false; 
            setTimeout(FoldInSidebar, 100);
        })

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

function MorePictures(ArrowId, MpId) {
    console.log('MorePictures')
    let Arrow = document.getElementById(ArrowId) 
    let Pictures = document.getElementsByClassName(MpId)

    if (Arrow.style.transform === 'rotate(90deg)') {
        Arrow.style.transform = 'rotate(0deg)'
        for (let i = 0; i < Pictures.length; i++) {
            Pictures[i].style.display = 'none';
            console.log('pictures disappear')
        }
    } else {
        Arrow.style.transform = 'rotate(90deg)'
        for (let i = 0; i < Pictures.length; i++) {
            Pictures[i].style.display = 'inline-block';
            console.log('pictures appear')
        }  
    }
}
