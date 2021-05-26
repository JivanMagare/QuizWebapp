

function showData()
{
    document.getElementById("displayData").style="display:block;";
}
document.getElementById("displayData").style="display:none;";

function hideData()
{
    document.getElementById("displayData").style="display:none;";
}


// Image slide show 

    let time=2000,images=[],i;

    
    // To Decler the array of images
    images[0]="Image/back.jpg";
    images[1]="Image/banner4.jpg";
    images[2]="Image/banner5.jpg"

function ImageChange()
{

    document.slideShow.src = images[i];

    if( i < images.length -1 )
    {
        i++;
    }
    else
    {
        i = 0;
    }

    setTimeout("ImageChange()",time);
}

window.onload=ImageChange;
// Image slide show end here