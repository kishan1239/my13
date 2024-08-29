const HIVEOTTER_HOST = "https://www.hiveotter.com";
// const HIVEOTTER_HOST = "http://localhost:3000";

function saveReferral() {
  var currentParams = new URLSearchParams(location.search);
  var inviter = currentParams.get("l");
  if (inviter) {
    localStorage.setItem("ho_l", inviter);

    // Remove the referral code from URL once saved
    var newUrl = new URL(window.location.href);
    newUrl.searchParams.delete("l");
    window.history.replaceState({}, document.title, newUrl.toString());
  }
}

function removeReferral() {
  try {
    localStorage.removeItem("ho_l");
    console.log("Referral information removed from localStorage");
  } catch (error) {
    console.error(
      "Failed to remove referral information from localStorage:",
      error
    );
  }
}

function showReferralPopup() {
  var inviter = localStorage.getItem("ho_l");

  if (window.location.pathname !== "/") return;
  if (!inviter) return;

  var iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.bottom = "100000px";
  iframe.style.right = "100000px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "5px";
  iframe.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  iframe.style.zIndex = "9999";
  iframe.style.width = "400px";
  iframe.style.height = "400px";

  var url = HIVEOTTER_HOST + "/popup/" + inviter + "?embed=1";
  iframe.src = url;

  iframe.allow = "clipboard-write";

  document.body.appendChild(iframe);

  function closePopup() {
    return document.body.removeChild(iframe);
  }

  window.addEventListener(
    "message",
    function (event) {
      if (event.source === iframe.contentWindow) {
        if (event.data && event.data.type === "CLOSE_REFEREE_POPUP") {
          closePopup()
        }

        if (event.data && event.data.type === "SUBMITTED") {
          removeReferral();
        }

        if (event.data && event.data.type === "CHECKOUT") {
          removeReferral();
          window.location.href = HIVEOTTER_HOST + "/l/" + inviter + "?checkout=1";
        }

        if (event.data && event.data.type === "CLEAR") {
          removeReferral();
          closePopup();          
        }

        if (event.data && event.data.type === "INIT") {
          iframe.style.width = event.data.width + "px";
          iframe.style.height = event.data.height + "px";

          iframe.style.bottom = "20px";
          iframe.style.right = "20px";

          if (event.data.position) {
            iframe.style.position = "fixed";
            
            if (event.data.position === "TOP_LEFT") {
              iframe.style.top = "20px";
              iframe.style.left = "20px";
              }

            if (event.data.position === "TOP_RIGHT") {
              iframe.style.top = "20px";
              iframe.style.right = "20px";
            }

            if (event.data.position === "BOTTOM_LEFT") {
              iframe.style.bottom = "20px";
              iframe.style.left = "20px";
            }

            if (event.data.position === "BOTTOM_RIGHT") {
              iframe.style.bottom = "20px";
              iframe.style.right = "20px";
            }
          }
        }
      }
    },
    false
  );
}

saveReferral();
window.addEventListener("load", showReferralPopup);

