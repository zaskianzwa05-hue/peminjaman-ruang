
// Fungsi validasi jadwal peminjaman
function validateSchedule(existingBookings, newBooking) {
    const { room, date, startTime, endTime } = newBooking;

    // Memeriksa kelengkapan data
    if (!room || !date || !startTime || !endTime) {
        return {
            valid: false,
            message: "Semua data peminjaman harus diisi."
        };
    }

    // Memeriksa jam peminjaman
    if (startTime >= endTime) {
        return {
            valid: false,
            message: "Jam selesai harus setelah jam mulai."
        };
    }

    // Memeriksa jadwal yang bentrok
    const conflict = existingBookings.some(booking => {
        return (
            booking.room === room &&
            booking.date === date &&
            startTime < booking.endTime &&
            endTime > booking.startTime
        );
    });

    if (conflict) {
        return {
            valid: false,
            message: "Jadwal ruangan sudah digunakan."
        };
    }

    return {
        valid: true,
        message: "Jadwal tersedia."
    };
}

// Data simulasi peminjaman yang sudah ada
const existingBookings = [
    {
        room: "A101",
        date: "2026-11-26",
        startTime: "09:00",
        endTime: "11:00"
    }
];

// Integrasi dengan form peminjaman
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newBooking = {
            room: document.getElementById("room").value,
            date: document.getElementById("date").value,
            startTime: document.getElementById("startTime").value,
            endTime: document.getElementById("endTime").value
        };

        // Menjalankan validasi jadwal
        const result = validateSchedule(
            existingBookings,
            newBooking
        );

        // Menampilkan notifikasi
        if (result.valid) {
            showNotification(result.message, "success");
        } else {
            showNotification(result.message, "error");
        }
    });
}
