var chr = CHR();

function main() {
    chr(document.getElementById('prog-chr').text);
    chr.init();
}


// Native function called from CHR

function getCvs(id) {
    var cvs = document.getElementById(id);
    var ctx = cvs.getContext('2d');
    chr.cvs(id,cvs);
    chr.ctx(id,ctx);
}

function drawRedBox(ctx, x, y, w, h) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(x,y,w,h);
}
