
var rand_vid_array = ['9006100-CB300250-493.mp4', '9006100-CB300250-492.mp4', '9006100-CB300250-491.mp4', '9006100-CB300250-490.mp4']; 
    
function getRandomImage(vidAr, path) {
    path = path || 'https://affiliate.dtiserv.com/image/carib/vb/'; 
    var num = Math.floor( Math.random() * vidAr.length );
    var vid = vidAr[ num ];
    var vidStr = '<video src="' + path + vid + '"  autoplay loop muted playsinline preload="auto"></video>';
    document.write(vidStr); document.close();
}
;

getRandomImage(rand_vid_array, 'https://affiliate.dtiserv.com/image/carib/vb/')