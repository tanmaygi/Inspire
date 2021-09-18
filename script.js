const data = {
  mainTitle: "My Favorite Entreprenuers",
  cardContents: [
    {
      name: "Elon Musk",
      imageLink:
        "https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg",
    },
    {
      name: "Kunal shah",
      imageLink:
        "https://149346090.v2.pressablecdn.com/wp-content/uploads/2021/01/KUNAL-SHAH_CRED_0F9A0924-copy-scaled.jpg",
    },
    {
      name: "Jack Dorsey",
      imageLink:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTA3NjcxMzM0NjU5MTYw/gettyimages-1146354927.jpg",
    },
    {
      name: "Sridher Jeyachandran",
      imageLink:
        "https://images.yourstory.com/cs/images/people/Crio-1594568824021.png",
    },
  ],
  userData: { name: "Built by Tanmay", tagLine: "Take risks now and do something bold. You won't regret it" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
