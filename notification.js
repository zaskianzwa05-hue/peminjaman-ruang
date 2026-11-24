
function showNotification(message, type = "success") {
    const notification = document.createElement("div");

    notification.textContent = message;
    notification.style.padding = "12px";
    notification.style.margin = "10px 0";
    notification.style.borderRadius = "5px";
    notification.style.fontFamily = "Arial";

    if (type === "success") {
        notification.style.backgroundColor = "#d1fae5";
        notification.style.color = "#065f46";
    } else {
        notification.style.backgroundColor = "#fee2e2";
        notification.style.color = "#991b1b";
    }

    document.body.prepend(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Simulasi notifikasi
showNotification("Pengajuan peminjaman berhasil dikirim!");
