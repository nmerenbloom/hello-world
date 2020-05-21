

function onNavigate(arg) {
    switch (arg) {
        case 'toNoah':
            window.location = 'noah.html'; 
    }
}


function renderPic() {
    const picRoot = $("#picRoot");
    const pic = '<img src="headshot.jpg" alt="Noah Headshot">';
    picRoot.append(pic);
}