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
            "https://doc-0s-b8-docs.googleusercontent.com/docs/securesc/c21am2nar0rhpfhkvd4sh45s83t6npbb/ulagmob7q1ascideiqihk3sh3ugvmv3m/1673436600000/00045105008098319326/07736745174284463869/16M7S2RAFB1Y67tH4NgR0bpzDXiePYMHm?e=download&ax=ALjR8sxHaH1IAd_2bmvsXykTlKCKWfRCyfaG3X2mzALjSWI3_ODuAWnUCiHxRx__oGFm6MC4JGUlPcSGee47n2hJuXeo5naG2nknPiqyqn-HJx6b8uzmac-lUzQHqF6jteeF63Fcv1yWuDRhuMPLfefOqp702cf4Uqc4UMN2kzz-BWK6djbgFFUwYEFRokU0mxH7hN_cL9U24nL7tqWL_EA2FXWUG8aOKcqLqcmfCTjVaj2JIjEzCwJTQqva5IdN8az90DN5Qd-m9RzLlD4X5AiTlTnMh41nFlDppMGNmpIEGFWqMNc-RHBBeKynNHf4BSWYb-BNnr1BCGXrxIHU8IZzDrNJL3TwqL1ujT78gyQdGWztOBFH64ZANo-AuJaNtFh3veSSRjp1U5bM2i3ON0sNR3PWOEdoQ2qOhnW6kMoJDfUA5j0xYsl8Y9I5N5yKKn5ferQS6gJTYErZPRJA41ApZeAb9pefX65m7RVyC06vprW97RYhLMSCNFKuD8RufkKs2OfYqE01rUjE5ipxIgHrG_hdvDueVGdhD5h2mClkELn9l2WPf0SJE1ku1H0VyDOWk_y8t4K4INleZ4HXruxQbwLirhHIq6iU7on7hgTgp2A0IkCBrB2SQSLxuIRjfU5MInxOsqK1Ka7YsGhq84ftqloANlqKeJe9Y2291zU9RlaYheSRyN7yDLcBlQTSn6MA1coKf_w3S1HaVcbZpySfBqqQ-1A2VkKWC6bglwI2xue7hT0Eq7qN0bCYrTewfuz6hnwUCtESd9Gz2w0cr591hlyKl-BKb2aZvHXh0VDyhLUinJqgDbj9876GPufd7sd9zMT9wyqEofpvuxOIxOaHeAHadDHMyl1XCi9ET2Ua0cVmGFO92MzffF5qIdh1aGz4oinxDvj238E08xxJKYh2J8CPB6MUzQarf-b_7U9GABVjydOSkCULif_z0kwSoK4YKnT2jWsuv_VoQJgL56MAgoOWjriooNFdy21T02xOHcJ60ajsrRUuF4me3vyS-GkF21-qJTZpJFQkQheiH62PRahiCi8Pf3B0O7Q0OPt2h7oW2ZpDlCp1oAd2Ii5j3zQhDgPVmpGJ_at8eh7MaxR1TQe675HXqm2uHb_fMtZBNLwGZrKMrAg7tZ8&uuid=e35355cf-26af-47d4-9323-2159ed80a1e4&authuser=0&nonce=mcjd0jfol7786&user=07736745174284463869&hash=jh3pkmc4ojlq6urnqvaavbjsp6j7uj95",
          label: "1080p",
          default: true
        },
        {
          file:
            "",
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
          ""
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
