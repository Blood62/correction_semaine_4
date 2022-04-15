const members=[
    {
        userName: "Alexandre vienne",
        picture: "https://images.bfmtv.com/N3tNBBDfITGUBWktqeYCrtfpRis=/4x21:996x579/640x0/images/-335992.jpg"
    },
    {
        userName: "tata",
        picture: "https://sc.mogicons.com/share/troll-face-81.jpg"
    },
    {
        userName: "tonton",
        picture: "https://i.pinimg.com/474x/87/14/4b/87144bc9eaf81fb4de26da3cbb248125--break-room-target.jpg"
    }
]

const target= document.getElementById('target');

const cards= members.map((member)=>{
    return `<div class="card">
    <img src="${member.picture}" alt="Avatar" >
    <div class="container">
      <h4><b>${member.userName}</b></h4> 
    </div>
  </div>`
});

target.innerHTML= cards.join(' ');