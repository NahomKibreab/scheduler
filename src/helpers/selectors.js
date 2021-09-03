export function getAppointmentsForDay(state, day) {
  let apptForDay;
  if (!state.days || state.days.length === 0) {
    return [];
  }
  state.days.forEach((item) => {
    if (item.name === day) {
      apptForDay = item.appointments;
    }
  });
  if (!apptForDay) {
    return [];
  }
  const appointment = apptForDay.map((appt) => state.appointments[appt]);
  return appointment;
}
