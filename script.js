let post = document.getElementById("firstPost");
let postsBox = document.getElementById("postsBox");

let imgs = [
    "https://atas.net/wp-content/uploads/image0011.png",
    "https://i.ytimg.com/vi/ZklQLDo6eUs/maxresdefault.jpg",
    "https://blogo-mir.ru/wp-content/uploads/2021/02/volny-eliotta.png",
    "https://ignat.trading/img/post/4/image138.png",
    "https://s0.rbk.ru/v6_top_pics/media/img/7/32/756543293750327.png",
    "https://www.masterforex-v.org/system/user_files/Images/images_book/_002_003/resized/image007_4177015049.jpg"
];
for (let i = 0; i < 100; i++) {
    let newPost = post.cloneNode(true);
    let imgPost = newPost.getElementsByClassName("img")[0];
    imgPost.setAttribute("src", imgs[i % 6]);
    postsBox.appendChild(newPost);
}

function likePost(element) {

    let likeCountElement = element.nextElementSibling;
    let likeCount = parseInt(likeCountElement.innerText);

    likeCountElement.innerText = likeCount + 1;
}

function addComment(element) {
    let commentInput = element.previousElementSibling;
    let commentText = commentInput.value;
    if (commentText.trim() !== "") {
        let commentSection = element.nextElementSibling;
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<b>User:</b> <p>${commentText}</p>`;
        commentSection.appendChild(commentDiv);
        commentInput.value = "";
    }
}
