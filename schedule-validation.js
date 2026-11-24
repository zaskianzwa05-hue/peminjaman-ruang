
function validateSchedule(existingBookings, newBooking) {
    const { room, date, startTime, endTime } = newBooking;

    if (!room || !date || !startTime || !endTime) {
        return {
            valid: false,
            message: "Semua data peminjaman harus diisi."
        };
    }

    if (startTime >= endTime) {
        return {
            valid: false,
            message: "Jam selesai harus setelah jam mulai."
        };
    }

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

// Data simulasi peminjaman
const existingBookings = [
    {
        room: "A101",
        date: "2026-11-26",
        startTime: "09:00",
        endTime: "11:00"
    }
];

const newBooking = {
    room: "A101",
    date: "2026-11-26",
    startTime: "10:00",
    endTime: "12:00"
};

console.log(validateSchedule(existingBookings, newBooking));
window.validateSchedule = validateSchedule;
