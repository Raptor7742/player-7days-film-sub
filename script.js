const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "7 jours - Bokura no nanokakan sensou - VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/7-jourscarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m108.syncusercontent.com/mfs-60:7f3cd7a0b29574a612ce4e5386fcaf66=============================/p/7%20jours%20sub.mp4?allowdd=0&datakey=Ez6cBMtbiHQucqUNNi3Bi4EPFCYfxt3/Sx2gRPgwshG0bO+tv6Zw7HtB3oNBsNLP/7CmKvpckN28VmHyFK/6WdJR3sj2Ic1A/MZpGZKXM393myeleU67qAQPzF58WTkfPs26j8ob6qjnbsWk/q/m01A810e3tmSpFHYbGzQoXaxKsu/Sl+HkDMcpZU6RNc825sRsfP9+fx2x4W2TXoAEO8n796y0NIep5vE/bmR0GZ1k5sRDPb2aLNhPTnjYYNzuD3I21RgETr5aq+F3RKs3PFPXloUSg31Hnj2dTI3OOzL3oGb48vTfQQr9ngymEciMoxPiMlUwFycvPPofxl5MbQ&engine=ln-2.3.7.3&errurl=m4E6ETH6HFiFumGDQ/oLFhnTlzROxKafREy3grdIs1cBL9CB30GbFv9l2UupPrQX+Ykbl+kOL3Okc/RyIxKMtHz4SW4aYoTIH6txr3iOXItE7g4oelk5hVobDEX2tHdF7wEGig0Q3g08xxaL3RduFw3V/8PzFITl32YtKV0kZP8JXQQUlp2yEXzuXyKxB5cYH2jFppPhP468eJS+D5QhX6N1kkssc/Du3aaVEq4m9M2X9/+CnCIcG2mbAzJalcb4eK8Smpkm4ON0M6eWRADyOZV7VcVY4b9SAA6m4K3i/pIJqQUnl53xZQygOmdlpL5gMl8Cpm9sm6OCKjYL+o1nSg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iNyUyMGpvdXJzJTIwc3ViLm1wNCI7ZmlsZW5hbWUqPVVURi04Jyc3JTIwam91cnMlMjBzdWIubXA0Ow&ipaddress=1458994159&linkcachekey=13b7751d0&linkoid=1983610011&mode=101&sharelink_id=9632516030011&timestamp=1672689007172&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=26c79d264ae8bf861b6363df6791b923895fa0c2&cachekey=60:7f3cd7a0b29574a612ce4e5386fcaf66=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
