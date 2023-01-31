// Get DOM elements
const markAllReadElement = document.querySelector(".header__link");
const unreadCount = document.querySelector(".unread-count");


// Listen for click events
markAllReadElement.addEventListener("click", () => {
  markAllRead()
  resetUnreadCount()
});

// Mark all notifications as read
function markAllRead() {
  const unreadNotifications = document.querySelectorAll(".notification--unread");
  const unreadBubble = document.querySelectorAll(".unread-bubble");
  unreadNotifications.forEach(notification => notification.classList.remove("notification--unread"));
  unreadBubble.forEach(bubble => bubble.classList.remove("unread-bubble"));
}

function resetUnreadCount() {
  unreadCount.textContent = "0";
}